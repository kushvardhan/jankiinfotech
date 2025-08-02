'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { submitContactForm } from '@/lib/actions/contact'
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare } from 'lucide-react'

export default function ScheduleConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })

  const consultationTypes = [
    'Web Development',
    'Mobile App Development',
    'Cloud & DevOps',
    'Training Programs',
    'General Consultation'
  ]

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const consultationMessage = `
Consultation Request:
- Type: ${formData.consultationType}
- Preferred Date: ${formData.preferredDate}
- Preferred Time: ${formData.preferredTime}
- Company: ${formData.company || 'Not specified'}

Message: ${formData.message}
      `.trim()

      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: consultationMessage,
        service: 'consulting'
      })

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Consultation request submitted successfully! We\'ll contact you within 24 hours to confirm your appointment.'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          consultationType: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Get tomorrow's date as minimum date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your company name"
            />
          </div>
        </div>

        {/* Consultation Details */}
        <div>
          <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
            Consultation Type *
          </label>
          <select
            id="consultationType"
            name="consultationType"
            value={formData.consultationType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
          >
            <option value="">Select consultation type</option>
            {consultationTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Preferred Date *
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={minDate}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Preferred Time *
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select preferred time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Please describe your project requirements, goals, and any specific questions you have..."
          />
        </div>

        {/* Status Message */}
        {submitStatus.type && (
          <div className={`p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
        </Button>

        <p className="text-sm text-gray-600 text-center">
          By submitting this form, you agree to our terms of service and privacy policy. 
          We'll contact you within 24 hours to confirm your consultation appointment.
        </p>
      </form>
    </div>
  )
}
