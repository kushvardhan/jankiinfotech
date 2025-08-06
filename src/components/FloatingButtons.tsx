'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function FloatingButtons() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)
  const pathname = usePathname()
  
  // Don't show floating buttons on student certificate pages
  const isStudentPage = pathname?.startsWith('/student/')
  
  if (isStudentPage) {
    return null
  }
  
  // WhatsApp number (replace with actual JankiInfotech WhatsApp number)
  const whatsappNumber = '+918228800345'
  const phoneNumber = '+918228800345'
  
  const predefinedMessages = [
    {
      title: 'General Inquiry',
      message: 'Hi! I would like to know more about your services.'
    },
    {
      title: 'Web Development',
      message: 'Hi! I&apos;m interested in web development services. Can you provide more details?'
    },
    {
      title: 'Mobile App Development',
      message: 'Hi! I need help with mobile app development. Can we discuss?'
    },
    {
      title: 'Training Programs',
      message: 'Hi! I&apos;m interested in your training programs. Can you share more information?'
    },
    {
      title: 'Schedule Consultation',
      message: 'Hi! I would like to schedule a free consultation. When are you available?'
    }
  ]

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsWhatsAppOpen(false)
  }

  const makePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        
        {/* WhatsApp Chat Options Popup */}
        {isWhatsAppOpen && (
          <div className="w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 animate-in slide-in-from-bottom-2 duration-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">JankiInfotech</h3>
                  <p className="text-sm text-gray-600">How can we help you?</p>
                </div>
              </div>
              <button
                onClick={() => setIsWhatsAppOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-2">
              {predefinedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendWhatsAppMessage(msg.message)}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-green-200"
                >
                  <div className="font-medium text-gray-900 text-sm">{msg.title}</div>
                  <div className="text-xs text-gray-600 mt-1 line-clamp-2">{msg.message}</div>
                </button>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Click on any option to start chatting on WhatsApp
              </p>
            </div>
          </div>
        )}

        {/* Phone Button */}
        <button
          onClick={makePhoneCall}
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-7 h-7 text-white" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Call us now
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          {isWhatsAppOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
          
          {/* Pulse animation when closed */}
          {!isWhatsAppOpen && (
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          )}
          
          {/* Tooltip */}
          {!isWhatsAppOpen && (
            <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Chat with us on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </button>
      </div>

      {/* Backdrop */}
      {isWhatsAppOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsWhatsAppOpen(false)}
        />
      )}
    </>
  )
}
