import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Users, Award, BookOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Internship Programs | JankiInfotech',
  description: 'Join our comprehensive internship programs in web development, mobile app development, and software engineering. Gain hands-on experience with industry experts.',
  keywords: ['internship', 'training', 'web development', 'mobile development', 'software engineering', 'career'],
};

const internshipPrograms = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    duration: '6 Months',
    type: 'Hybrid',
    description: 'Master modern web technologies including React, Node.js, MongoDB, and cloud deployment.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'AWS'],
    level: 'Beginner to Advanced',
    seats: 20,
    startDate: 'March 2025',
    fee: '₹25,000',
    features: [
      'Live Projects',
      'Industry Mentorship',
      'Placement Assistance',
      'Certificate of Completion'
    ]
  },
  {
    id: 2,
    title: 'Mobile App Development',
    duration: '4 Months',
    type: 'Online',
    description: 'Build cross-platform mobile applications using React Native and Flutter.',
    skills: ['React Native', 'Flutter', 'Dart', 'Firebase', 'API Integration'],
    level: 'Intermediate',
    seats: 15,
    startDate: 'April 2025',
    fee: '₹20,000',
    features: [
      'Real App Development',
      'Play Store Publishing',
      'UI/UX Design Training',
      'Portfolio Building'
    ]
  },
  {
    id: 3,
    title: 'DevOps & Cloud Engineering',
    duration: '5 Months',
    type: 'Hybrid',
    description: 'Learn modern DevOps practices, cloud platforms, and automation tools.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Linux'],
    level: 'Intermediate to Advanced',
    seats: 12,
    startDate: 'May 2025',
    fee: '₹30,000',
    features: [
      'Hands-on Labs',
      'Cloud Certifications',
      'Industry Projects',
      'Job Placement Support'
    ]
  }
]

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Internship Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Launch your tech career with our comprehensive internship programs. 
              Get hands-on experience, industry mentorship, and job placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Internship Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully designed programs that combine theoretical knowledge 
              with practical experience in cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipPrograms.map((program, index) => (
              <div 
                key={program.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {program.type}
                    </span>
                    <span className="text-2xl font-bold text-green-600">{program.fee}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3 text-green-600" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-3 text-green-600" />
                      <span>{program.seats} seats available</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-green-600" />
                      <span>Starts {program.startDate}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="h-5 w-5 mr-3 text-green-600" />
                      <span>{program.level}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold">
                    Apply for this Program
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Internship Programs?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Mentorship</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-on Projects</h3>
              <p className="text-gray-600">Work on real-world projects that build your portfolio</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certification</h3>
              <p className="text-gray-600">Receive industry-recognized certificates upon completion</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Placement</h3>
              <p className="text-gray-600">Get assistance with job placements and career guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have launched their careers through our internship programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Apply Now
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
