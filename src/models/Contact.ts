import mongoose, { Document, Schema } from 'mongoose'

export interface IContact extends Document {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service?: string
  status: 'new' | 'contacted' | 'converted' | 'closed'
  source: 'website' | 'referral' | 'social' | 'other'
  createdAt: Date
  updatedAt: Date
}

const ContactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  service: {
    type: String,
    enum: ['web-development', 'mobile-development', 'cloud-services', 'devops', 'consulting', 'training', 'other'],
    default: 'other'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'closed'],
    default: 'new'
  },
  source: {
    type: String,
    enum: ['website', 'referral', 'social', 'other'],
    default: 'website'
  }
}, {
  timestamps: true
})

// Index for better query performance
ContactSchema.index({ email: 1 })
ContactSchema.index({ status: 1 })
ContactSchema.index({ createdAt: -1 })

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema)
