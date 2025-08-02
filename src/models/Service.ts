import mongoose, { Document, Schema } from 'mongoose'

export interface IService extends Document {
  title: string
  description: string
  shortDescription: string
  category: 'development' | 'cloud' | 'devops' | 'consulting' | 'training'
  features: string[]
  technologies: string[]
  pricing: {
    type: 'fixed' | 'hourly' | 'project' | 'contact'
    amount?: number
    currency?: string
    description?: string
  }
  isActive: boolean
  order: number
  icon?: string
  image?: string
  createdAt: Date
  updatedAt: Date
}

const ServiceSchema = new Schema<IService>({
  title: {
    type: String,
    required: [true, 'Service title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    trim: true,
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  category: {
    type: String,
    required: [true, 'Service category is required'],
    enum: ['development', 'cloud', 'devops', 'consulting', 'training']
  },
  features: [{
    type: String,
    trim: true,
    maxlength: [100, 'Feature cannot exceed 100 characters']
  }],
  technologies: [{
    type: String,
    trim: true,
    maxlength: [50, 'Technology name cannot exceed 50 characters']
  }],
  pricing: {
    type: {
      type: String,
      enum: ['fixed', 'hourly', 'project', 'contact'],
      default: 'contact'
    },
    amount: {
      type: Number,
      min: [0, 'Amount cannot be negative']
    },
    currency: {
      type: String,
      default: 'INR',
      maxlength: [3, 'Currency code cannot exceed 3 characters']
    },
    description: {
      type: String,
      trim: true,
      maxlength: [200, 'Pricing description cannot exceed 200 characters']
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

// Indexes for better query performance
ServiceSchema.index({ category: 1, isActive: 1 })
ServiceSchema.index({ order: 1 })
ServiceSchema.index({ isActive: 1, order: 1 })

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema)
