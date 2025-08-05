import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

export default mongoose.models.Student || mongoose.model('Student', StudentSchema)
