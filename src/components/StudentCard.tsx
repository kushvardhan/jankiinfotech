'use client'

import { Award, Calendar, Mail, User, Building, GraduationCap, CheckCircle, Star } from 'lucide-react'
import { useState, useEffect } from 'react'
import Logo from './Logo'

interface Student {
  _id: string
  name: string
  email: string
  domain: string
  duration: string
  company: string
}

interface StudentCardProps {
  student: Student
}

export default function StudentCard({ student }: StudentCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getDomainIcon = (domain: string) => {
    if (domain.toLowerCase().includes('python')) return '🐍'
    if (domain.toLowerCase().includes('web')) return '🌐'
    if (domain.toLowerCase().includes('mobile')) return '📱'
    if (domain.toLowerCase().includes('ui') || domain.toLowerCase().includes('ux')) return '🎨'
    if (domain.toLowerCase().includes('data')) return '📊'
    if (domain.toLowerCase().includes('ai') || domain.toLowerCase().includes('ml')) return '🤖'
    return '💻'
  }

  const getDomainColor = (domain: string) => {
    if (domain.toLowerCase().includes('python')) return 'from-yellow-400 to-green-500'
    if (domain.toLowerCase().includes('web')) return 'from-blue-400 to-purple-500'
    if (domain.toLowerCase().includes('mobile')) return 'from-green-400 to-blue-500'
    if (domain.toLowerCase().includes('ui') || domain.toLowerCase().includes('ux')) return 'from-pink-400 to-red-500'
    if (domain.toLowerCase().includes('data')) return 'from-indigo-400 to-purple-500'
    if (domain.toLowerCase().includes('ai') || domain.toLowerCase().includes('ml')) return 'from-gray-400 to-blue-500'
    return 'from-green-400 to-blue-500'
  }

  return (
    <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Logo size="lg" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Internship Certificate
        </h1>
        <p className="text-gray-600">Professional Development Program</p>
      </div>

      {/* Main Certificate Card */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl opacity-50"></div>
        
        {/* Certificate Border */}
        <div className="relative bg-white rounded-3xl shadow-2xl border-8 border-gradient-to-r from-green-400 to-blue-500 p-8 md:p-12">
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 text-green-500 opacity-20">
            <Star className="h-8 w-8" />
          </div>
          <div className="absolute top-4 right-4 text-blue-500 opacity-20">
            <Award className="h-8 w-8" />
          </div>
          <div className="absolute bottom-4 left-4 text-purple-500 opacity-20">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div className="absolute bottom-4 right-4 text-green-500 opacity-20">
            <CheckCircle className="h-8 w-8" />
          </div>

          {/* Certificate Content */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{getDomainIcon(student.domain)}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Certificate of Completion
            </h2>
            <p className="text-gray-600">This is to certify that</p>
          </div>

          {/* Student Name */}
          <div className="text-center mb-8">
            <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${getDomainColor(student.domain)} bg-clip-text text-transparent mb-2`}>
              {student.name}
            </h3>
            <p className="text-lg text-gray-600">has successfully completed the internship program</p>
          </div>

          {/* Program Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="flex items-center mb-3">
                <GraduationCap className="h-6 w-6 text-green-600 mr-3" />
                <h4 className="font-semibold text-gray-800">Program</h4>
              </div>
              <p className="text-lg font-medium text-gray-700">{student.domain}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="flex items-center mb-3">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="font-semibold text-gray-800">Duration</h4>
              </div>
              <p className="text-lg font-medium text-gray-700">{student.duration}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-8">
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 text-gray-600 mr-3" />
              <h4 className="font-semibold text-gray-800">Contact Information</h4>
            </div>
            <div className="flex items-center text-gray-700">
              <Mail className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-lg">{student.email}</span>
            </div>
          </div>

          {/* Company Information */}
          <div className="text-center border-t border-gray-200 pt-8">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-green-600 mr-3" />
              <h4 className="font-semibold text-gray-800">Authorized by</h4>
            </div>
            <p className="text-2xl font-bold text-green-600 mb-2">{student.company}Infotech</p>
            <p className="text-gray-600">Professional Development & Training</p>
            
            {/* Verification Badge */}
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mt-4">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="font-medium">Verified Certificate</span>
            </div>
          </div>

          {/* Certificate ID */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Certificate ID: <span className="font-mono font-medium">{student._id}</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Issued on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-500">
        <p className="text-sm">
          This certificate can be verified at jankiinfotech.com
        </p>
      </div>
    </div>
  )
}
