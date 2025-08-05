'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import QRCodeGenerator from '@/components/QRCodeGenerator'
import { User, Mail, Calendar, Building, QrCode, Plus, Search } from 'lucide-react'

interface Student {
  _id: string
  name: string
  email: string
  domain: string
  duration: string
  company: string
}

export default function StudentsAdminPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  // Mock data for demonstration - replace with actual API call
  useEffect(() => {
    // Simulate API call
    const mockStudents: Student[] = [
      {
        _id: '6891f5bf7e098522238cdcf1',
        name: 'Puneet Agrawal',
        email: 'apuneet596@gmail.com',
        domain: 'Python Development',
        duration: '2 months',
        company: 'Janki'
      },
      {
        _id: '6891f5bf7e098522238cdcf2',
        name: 'Rahul Sharma',
        email: 'rahul.sharma@gmail.com',
        domain: 'Web Development',
        duration: '3 months',
        company: 'Janki'
      },
      {
        _id: '6891f5bf7e098522238cdcf3',
        name: 'Priya Singh',
        email: 'priya.singh@gmail.com',
        domain: 'UI/UX Design',
        duration: '2 months',
        company: 'Janki'
      }
    ]
    
    setTimeout(() => {
      setStudents(mockStudents)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.domain.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getDomainIcon = (domain: string) => {
    if (domain.toLowerCase().includes('python')) return '🐍'
    if (domain.toLowerCase().includes('web')) return '🌐'
    if (domain.toLowerCase().includes('mobile')) return '📱'
    if (domain.toLowerCase().includes('ui') || domain.toLowerCase().includes('ux')) return '🎨'
    if (domain.toLowerCase().includes('data')) return '📊'
    return '💻'
  }

  const getDomainColor = (domain: string) => {
    if (domain.toLowerCase().includes('python')) return 'bg-yellow-100 text-yellow-800'
    if (domain.toLowerCase().includes('web')) return 'bg-blue-100 text-blue-800'
    if (domain.toLowerCase().includes('mobile')) return 'bg-green-100 text-green-800'
    if (domain.toLowerCase().includes('ui') || domain.toLowerCase().includes('ux')) return 'bg-pink-100 text-pink-800'
    if (domain.toLowerCase().includes('data')) return 'bg-purple-100 text-purple-800'
    return 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading students...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Management</h1>
          <p className="text-gray-600">Manage student certificates and generate QR codes</p>
        </div>

        {/* Search and Add */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <Button
              onClick={() => setShowAddForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Students List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">
                  Students ({filteredStudents.length})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <div
                    key={student._id}
                    className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedStudent?._id === student._id ? 'bg-green-50 border-l-4 border-green-500' : ''
                    }`}
                    onClick={() => setSelectedStudent(student)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="text-2xl mr-3">{getDomainIcon(student.domain)}</div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                            <p className="text-sm text-gray-600 flex items-center">
                              <Mail className="h-4 w-4 mr-1" />
                              {student.email}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDomainColor(student.domain)}`}>
                            {student.domain}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {student.duration}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 flex items-center">
                            <Building className="h-3 w-3 mr-1" />
                            {student.company}Infotech
                          </span>
                        </div>
                      </div>
                      
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedStudent(student)
                        }}
                        size="sm"
                        variant="outline"
                        className="ml-4"
                      >
                        <QrCode className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredStudents.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No students found</p>
                </div>
              )}
            </div>
          </div>

          {/* QR Code Generator */}
          <div className="lg:col-span-1">
            {selectedStudent ? (
              <QRCodeGenerator
                studentId={selectedStudent._id}
                studentName={selectedStudent.name}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <QrCode className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Generate QR Code</h3>
                <p className="text-gray-500">Select a student to generate their certificate QR code</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
