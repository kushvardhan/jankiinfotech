import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import JobApplication from '@/models/JobApplication';
import { headers } from 'next/headers';

// Security: Rate limiting map (in production, use Redis)
const rateLimitMap = new Map();

// Security: IP blacklist (in production, use database)
const blacklistedIPs = new Set();

// Security: Suspicious patterns detection
const detectSuspiciousPatterns = (data: any): boolean => {
  const suspiciousPatterns = [
    // SQL Injection patterns
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION)\b)/i,
    // XSS patterns
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    // Command injection patterns
    /(\||&|;|\$\(|\`)/,
    // Path traversal
    /\.\.\//,
    // NoSQL injection
    /\$where|\$ne|\$gt|\$lt/,
  ];

  const dataString = JSON.stringify(data).toLowerCase();
  return suspiciousPatterns.some(pattern => pattern.test(dataString));
};

// Security: Rate limiting function
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 applications per 15 minutes

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const limit = rateLimitMap.get(ip);
  if (now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (limit.count >= maxRequests) {
    return false;
  }

  limit.count++;
  return true;
};

// Security: Input sanitization
const sanitizeInput = (input: any): any => {
  if (typeof input === 'string') {
    return input
      .trim()
      .replace(/[<>'"]/g, '') // Remove dangerous characters
      .replace(/javascript:/gi, '') // Remove javascript protocol
      .replace(/data:/gi, '') // Remove data protocol
      .replace(/vbscript:/gi, '') // Remove vbscript protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .substring(0, 2000); // Limit length
  }
  
  if (typeof input === 'object' && input !== null) {
    const sanitized: any = {};
    for (const [key, value] of Object.entries(input)) {
      sanitized[key] = sanitizeInput(value);
    }
    return sanitized;
  }
  
  return input;
};

// Security: Validate file upload
const validateFile = (file: any): { isValid: boolean; error?: string } => {
  if (!file) {
    return { isValid: false, error: 'No file provided' };
  }

  // Check file size (5MB limit)
  if (file.size > 5 * 1024 * 1024) {
    return { isValid: false, error: 'File size exceeds 5MB limit' };
  }

  // Check file type
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  if (!allowedTypes.includes(file.type)) {
    return { isValid: false, error: 'Invalid file type. Only PDF, DOC, DOCX allowed' };
  }

  // Check filename for dangerous patterns
  const dangerousExtensions = /\.(exe|bat|cmd|scr|vbs|js|jar|com|pif|sh|php|asp|jsp)$/i;
  if (dangerousExtensions.test(file.name)) {
    return { isValid: false, error: 'Dangerous file type detected' };
  }

  // Check for suspicious filename patterns
  const suspiciousPatterns = /[<>:"/\\|?*]/;
  if (suspiciousPatterns.test(file.name)) {
    return { isValid: false, error: 'Invalid filename characters' };
  }

  return { isValid: true };
};

export async function POST(request: NextRequest) {
  try {
    // Security: Get client IP
    const headersList = await headers();
    const forwarded = headersList.get('x-forwarded-for');
    const clientIP = forwarded ? forwarded.split(',')[0] : 
                    headersList.get('x-real-ip') || 
                    request.ip || 
                    'unknown';

    // Security: Check if IP is blacklisted
    if (blacklistedIPs.has(clientIP)) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    // Security: Rate limiting
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Security: Validate Content-Type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('multipart/form-data')) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    
    // Extract and validate form fields
    const applicationData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      experience: formData.get('experience') as string,
      position: formData.get('position') as string,
      department: formData.get('department') as string,
      coverLetter: formData.get('coverLetter') as string,
      portfolio: formData.get('portfolio') as string,
      linkedIn: formData.get('linkedIn') as string,
      dataProcessingConsent: formData.get('dataProcessingConsent') === 'true'
    };

    // Security: Sanitize all inputs
    const sanitizedData = sanitizeInput(applicationData);

    // Security: Check for suspicious patterns
    if (detectSuspiciousPatterns(sanitizedData)) {
      // Log suspicious activity
      console.warn(`Suspicious activity detected from IP: ${clientIP}`, sanitizedData);
      
      return NextResponse.json(
        { error: 'Invalid data detected' },
        { status: 400 }
      );
    }

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'experience', 'position', 'coverLetter'];
    const missingFields = requiredFields.filter(field => !sanitizedData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(sanitizedData.phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Validate data processing consent
    if (!sanitizedData.dataProcessingConsent) {
      return NextResponse.json(
        { error: 'Data processing consent is required' },
        { status: 400 }
      );
    }

    // Handle file upload
    const resumeFile = formData.get('resume') as File;
    const fileValidation = validateFile(resumeFile);
    
    if (!fileValidation.isValid) {
      return NextResponse.json(
        { error: fileValidation.error },
        { status: 400 }
      );
    }

    // Security: Additional file content validation would go here
    // In production, scan file with antivirus API

    // Connect to database
    await connectDB();

    // Check for duplicate applications (same email + position)
    const existingApplication = await JobApplication.findOne({
      email: sanitizedData.email,
      position: sanitizedData.position,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } // Within 24 hours
    });

    if (existingApplication) {
      return NextResponse.json(
        { error: 'You have already applied for this position recently' },
        { status: 409 }
      );
    }

    // Prepare application data for database
    const applicationToSave = {
      ...sanitizedData,
      resume: {
        filename: resumeFile.name,
        mimetype: resumeFile.type,
        size: resumeFile.size,
        uploadDate: new Date()
      },
      submissionIP: clientIP,
      userAgent: headersList.get('user-agent') || 'unknown',
      submissionCount: 1
    };

    // Save to database
    const newApplication = new JobApplication(applicationToSave);
    await newApplication.save();

    // Security: Log successful submission (without sensitive data)
    console.log(`Job application submitted successfully from IP: ${clientIP}, Email: ${sanitizedData.email}`);

    // Return success response (without sensitive data)
    return NextResponse.json(
      { 
        message: 'Application submitted successfully!',
        applicationId: newApplication._id,
        status: 'pending'
      },
      { status: 201 }
    );

  } catch (error) {
    // Security: Log error without exposing sensitive information
    console.error('Job application submission error:', error);
    
    // Generic error response to prevent information leakage
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
