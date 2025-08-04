'use client'

import { Button } from '@/components/ui/button'
import { Calendar, Clock, Users, Award, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

const featuredPrograms = [
  {
    title: 'Full Stack Web Development',
    duration: '6 Months',
    type: 'Hybrid',
    description: 'Master modern web technologies including React, Node.js, MongoDB, and cloud deployment.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'TypeScript'],
    startDate: 'March 2025',
    fee: '₹25,000',
    popular: true
  },
  {
    title: 'Mobile App Development',
    duration: '4 Months',
    type: 'Online',
    description: 'Build cross-platform mobile applications using React Native and Flutter.',
    skills: ['React Native', 'Flutter', 'Firebase', 'API Integration'],
    startDate: 'April 2025',
    fee: '₹20,000',
    popular: false
  },
  {
    title: 'DevOps & Cloud Engineering',
    duration: '5 Months',
    type: 'Hybrid',
    description: 'Learn modern DevOps practices, cloud platforms, and automation tools.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
    startDate: 'May 2025',
    fee: '₹30,000',
    popular: false
  }
]

export default function InternshipSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4 mr-2" />
            Internship Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Launch Your Tech Career
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our comprehensive internship programs designed to give you hands-on experience, 
            industry mentorship, and the skills needed to excel in the tech industry.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPrograms.map((program, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-103 overflow-hidden group"
            >
              {program.popular && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {program.type}
                  </span>
                  <span className="text-2xl font-bold text-green-600">{program.fee}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{program.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-green-600" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-green-600" />
                    <span>Starts {program.startDate}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-green-100 hover:text-green-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold group-hover:shadow-lg transition-all">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">85%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">4.8/5</div>
            <div className="text-gray-600">Student Rating</div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Mentorship</h3>
            <p className="text-gray-600 text-sm">Learn from industry professionals with years of experience</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Hands-on Projects</h3>
            <p className="text-gray-600 text-sm">Work on real-world projects that build your portfolio</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Certification</h3>
            <p className="text-gray-600 text-sm">Receive industry-recognized certificates upon completion</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Job Placement</h3>
            <p className="text-gray-600 text-sm">Get assistance with job placements and career guidance</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of students who have launched their careers through our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/internship">
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  View All Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold">
                  Get More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
