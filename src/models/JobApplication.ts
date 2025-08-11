import mongoose from 'mongoose';
import validator from 'validator';
import DOMPurify from 'isomorphic-dompurify';

// Security: Input sanitization function
const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  
  // Remove any HTML/script tags and dangerous characters
  let sanitized = DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [], 
    ALLOWED_ATTR: [] 
  });
  
  // Additional security: Remove potential injection patterns
  sanitized = sanitized
    .replace(/[<>'"]/g, '') // Remove dangerous characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
    
  return sanitized;
};

// Security: Phone number validation with strict patterns
const validatePhone = (phone: string): boolean => {
  if (!phone) return false;
  
  // Remove all non-digit characters except + at the beginning
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  
  // Check for valid international phone patterns
  const phonePatterns = [
    /^\+91[6-9]\d{9}$/, // Indian mobile
    /^\+1[2-9]\d{9}$/, // US/Canada
    /^\+44[1-9]\d{8,9}$/, // UK
    /^\+[1-9]\d{1,14}$/ // General international format
  ];
  
  return phonePatterns.some(pattern => pattern.test(cleanPhone));
};

// Security: File validation schema
const FileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
    validate: {
      validator: function(filename: string) {
        // Security: Strict filename validation
        const sanitizedName = sanitizeInput(filename);
        const allowedExtensions = /\.(pdf|doc|docx)$/i;
        const dangerousPatterns = /\.(exe|bat|cmd|scr|vbs|js|jar|com|pif)$/i;
        
        return allowedExtensions.test(sanitizedName) && 
               !dangerousPatterns.test(sanitizedName) &&
               sanitizedName.length <= 255 &&
               !/[<>:"/\\|?*]/.test(sanitizedName);
      },
      message: 'Invalid file format. Only PDF, DOC, DOCX files are allowed.'
    }
  },
  mimetype: {
    type: String,
    required: true,
    enum: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
  },
  size: {
    type: Number,
    required: true,
    max: [5 * 1024 * 1024, 'File size cannot exceed 5MB'] // 5MB limit
  },
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

const JobApplicationSchema = new mongoose.Schema({
  // Personal Information with strict validation
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters'],
    validate: {
      validator: function(name: string) {
        const sanitized = sanitizeInput(name);
        // Only allow letters, spaces, hyphens, and apostrophes
        return /^[a-zA-Z\s\-']+$/.test(sanitized) && sanitized.length >= 2;
      },
      message: 'Name can only contain letters, spaces, hyphens, and apostrophes'
    },
    set: sanitizeInput
  },
  
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    validate: {
      validator: function(email: string) {
        const sanitized = sanitizeInput(email);
        return validator.isEmail(sanitized) && 
               sanitized.length <= 254 && // RFC 5321 limit
               !sanitized.includes('..') && // Prevent consecutive dots
               !/[<>'"]/g.test(sanitized); // Additional security
      },
      message: 'Please provide a valid email address'
    },
    set: sanitizeInput
  },
  
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    validate: {
      validator: validatePhone,
      message: 'Please provide a valid phone number'
    },
    set: function(phone: string) {
      // Sanitize and normalize phone number
      const sanitized = sanitizeInput(phone);
      return sanitized.replace(/[^\d+]/g, '');
    }
  },
  
  experience: {
    type: String,
    required: [true, 'Experience level is required'],
    enum: {
      values: ['0-1', '1-3', '3-5', '5-10', '10+'],
      message: 'Invalid experience level'
    }
  },
  
  // Position Information
  position: {
    type: String,
    required: [true, 'Position is required'],
    maxlength: [200, 'Position name cannot exceed 200 characters'],
    set: sanitizeInput
  },
  
  department: {
    type: String,
    required: [true, 'Department is required'],
    enum: {
      values: ['Engineering', 'Design', 'Marketing', 'Education', 'Sales'],
      message: 'Invalid department'
    }
  },
  
  // Cover Letter with strict validation
  coverLetter: {
    type: String,
    required: [true, 'Cover letter is required'],
    minlength: [50, 'Cover letter must be at least 50 characters'],
    maxlength: [2000, 'Cover letter cannot exceed 2000 characters'],
    validate: {
      validator: function(letter: string) {
        const sanitized = sanitizeInput(letter);
        // Check for suspicious patterns
        const suspiciousPatterns = [
          /<script/i, /javascript:/i, /vbscript:/i, /onload=/i, /onerror=/i,
          /eval\(/i, /exec\(/i, /system\(/i, /cmd\(/i, /shell/i
        ];
        return !suspiciousPatterns.some(pattern => pattern.test(sanitized));
      },
      message: 'Cover letter contains invalid content'
    },
    set: sanitizeInput
  },
  
  // Optional fields with validation
  portfolio: {
    type: String,
    validate: {
      validator: function(url: string) {
        if (!url) return true; // Optional field
        const sanitized = sanitizeInput(url);
        return validator.isURL(sanitized, {
          protocols: ['http', 'https'],
          require_protocol: true,
          require_valid_protocol: true,
          allow_underscores: false
        }) && sanitized.length <= 500;
      },
      message: 'Please provide a valid portfolio URL'
    },
    set: function(url: string) {
      return url ? sanitizeInput(url) : undefined;
    }
  },
  
  linkedIn: {
    type: String,
    validate: {
      validator: function(url: string) {
        if (!url) return true; // Optional field
        const sanitized = sanitizeInput(url);
        return validator.isURL(sanitized, {
          protocols: ['http', 'https'],
          require_protocol: true
        }) && sanitized.includes('linkedin.com') && sanitized.length <= 500;
      },
      message: 'Please provide a valid LinkedIn URL'
    },
    set: function(url: string) {
      return url ? sanitizeInput(url) : undefined;
    }
  },
  
  // Resume file information
  resume: {
    type: FileSchema,
    required: [true, 'Resume is required']
  },
  
  // Security and tracking fields
  applicationStatus: {
    type: String,
    enum: ['pending', 'reviewing', 'shortlisted', 'rejected', 'hired'],
    default: 'pending'
  },
  
  submissionIP: {
    type: String,
    validate: {
      validator: function(ip: string) {
        return validator.isIP(ip) || validator.isIP(ip, 6);
      },
      message: 'Invalid IP address'
    }
  },
  
  userAgent: {
    type: String,
    maxlength: [500, 'User agent too long'],
    set: sanitizeInput
  },
  
  // Security: Rate limiting tracking
  submissionCount: {
    type: Number,
    default: 1,
    max: [5, 'Too many submissions from this source']
  },
  
  // GDPR Compliance
  dataProcessingConsent: {
    type: Boolean,
    required: [true, 'Data processing consent is required'],
    validate: {
      validator: function(consent: boolean) {
        return consent === true;
      },
      message: 'You must consent to data processing'
    }
  },
  
  // Security flags
  isVerified: {
    type: Boolean,
    default: false
  },
  
  securityFlags: {
    suspiciousActivity: { type: Boolean, default: false },
    ipBlacklisted: { type: Boolean, default: false },
    contentFiltered: { type: Boolean, default: false }
  }
  
}, {
  timestamps: true,
  // Security: Prevent version key exposure
  versionKey: false,
  // Add indexes for security and performance
  indexes: [
    { email: 1 },
    { submissionIP: 1 },
    { createdAt: 1 },
    { applicationStatus: 1 }
  ]
});

// Security: Pre-save middleware for additional validation
JobApplicationSchema.pre('save', function(next) {
  // Rate limiting check
  if (this.submissionCount > 5) {
    return next(new Error('Too many submissions detected'));
  }
  
  // Additional security checks
  const suspiciousPatterns = [
    this.fullName?.toLowerCase().includes('admin'),
    this.email?.includes('..'),
    this.coverLetter?.length > 2000,
    this.phone?.length > 20
  ];
  
  if (suspiciousPatterns.some(Boolean)) {
    this.securityFlags.suspiciousActivity = true;
  }
  
  next();
});

// Security: Limit what fields are returned in queries
JobApplicationSchema.methods.toJSON = function() {
  const obj = this.toObject();
  
  // Remove sensitive fields from client responses
  delete obj.submissionIP;
  delete obj.userAgent;
  delete obj.securityFlags;
  delete obj.__v;
  
  return obj;
};

export default mongoose.models.JobApplication || 
  mongoose.model('JobApplication', JobApplicationSchema);
