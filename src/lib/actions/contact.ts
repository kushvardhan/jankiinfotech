'use server'

import { revalidatePath } from 'next/cache'
import connectDB from '@/lib/mongodb'
import Contact from '@/models/Contact'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().refine((val) => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val), {
    message: 'Please enter a valid phone number'
  }),
  company: z.string().max(100, 'Company name cannot exceed 100 characters').optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message cannot exceed 1000 characters'),
  service: z.enum(['web-development', 'mobile-development', 'cloud-services', 'devops', 'consulting', 'training', 'other']).optional()
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    console.log('📝 Contact form submission received:', {
      name: formData.name,
      email: formData.email,
      service: formData.service || 'other'
    })

    // Validate the form data
    const validatedData = contactSchema.parse(formData)
    
    // Connect to database
    await connectDB()
    
    // Create new contact
    const contact = new Contact({
      ...validatedData,
      service: validatedData.service || 'other',
      source: 'website'
    })
    
    await contact.save()
    
    console.log('✅ Contact saved successfully:', contact._id)
    
    // Revalidate the contacts page if it exists
    revalidatePath('/admin/contacts')
    
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      contactId: contact._id.toString()
    }
    
  } catch (error) {
    console.error('❌ Error submitting contact form:', error)
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please check your form data and try again.',
        errors: error.errors
      }
    }
    
    return {
      success: false,
      message: 'Something went wrong. Please try again later.'
    }
  }
}

export async function getContacts(page = 1, limit = 10, status?: string) {
  try {
    console.log('📋 Fetching contacts:', { page, limit, status })
    
    await connectDB()
    
    const query = status ? { status } : {}
    const skip = (page - 1) * limit
    
    const [contacts, total] = await Promise.all([
      Contact.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Contact.countDocuments(query)
    ])
    
    console.log(`✅ Found ${contacts.length} contacts (${total} total)`)
    
    return {
      success: true,
      contacts: contacts.map(contact => ({
        ...contact,
        _id: contact._id.toString(),
        createdAt: contact.createdAt.toISOString(),
        updatedAt: contact.updatedAt.toISOString()
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    }
    
  } catch (error) {
    console.error('❌ Error fetching contacts:', error)
    return {
      success: false,
      message: 'Failed to fetch contacts'
    }
  }
}

export async function updateContactStatus(contactId: string, status: 'new' | 'contacted' | 'converted' | 'closed') {
  try {
    console.log('🔄 Updating contact status:', { contactId, status })
    
    await connectDB()
    
    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { status },
      { new: true }
    )
    
    if (!contact) {
      return {
        success: false,
        message: 'Contact not found'
      }
    }
    
    console.log('✅ Contact status updated successfully')
    
    revalidatePath('/admin/contacts')
    
    return {
      success: true,
      message: 'Contact status updated successfully'
    }
    
  } catch (error) {
    console.error('❌ Error updating contact status:', error)
    return {
      success: false,
      message: 'Failed to update contact status'
    }
  }
}
