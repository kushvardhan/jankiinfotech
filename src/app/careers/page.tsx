"use client";

import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Coffee,
  DollarSign,
  Globe,
  GraduationCap,
  Heart,
  Home,
  Lightbulb,
  MapPin,
  Rocket,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses",
      color: "text-green-600"
    },
    {
      icon: Home,
      title: "Flexible Work",
      description: "Hybrid work model with flexible hours and remote options",
      color: "text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and skill development programs",
      color: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      color: "text-red-600"
    },
    {
      icon: Coffee,
      title: "Great Culture",
      description: "Collaborative environment with team events and celebrations",
      color: "text-orange-600"
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Clear career progression paths and leadership opportunities",
      color: "text-indigo-600"
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Patna / Remote",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-15 LPA",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description: "Lead development of scalable web applications and mentor junior developers.",
      urgent: true
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Patna / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-12 LPA",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      description: "Create beautiful and intuitive user experiences for our digital products.",
      urgent: false
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Patna",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹4-8 LPA",
      skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      description: "Drive digital marketing campaigns and grow our online presence.",
      urgent: false
    },
    {
      id: 4,
      title: "Training Coordinator",
      department: "Education",
      location: "Patna",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹5-10 LPA",
      skills: ["Training", "Curriculum Design", "Communication", "Project Management"],
      description: "Coordinate and deliver training programs for our internship initiatives.",
      urgent: true
    },
    {
      id: 5,
      title: "Business Development Executive",
      department: "Sales",
      location: "Patna / Field",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹3-6 LPA + Incentives",
      skills: ["Sales", "Communication", "Relationship Building", "CRM"],
      description: "Identify new business opportunities and build client relationships.",
      urgent: false
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹7-14 LPA",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Manage infrastructure and deployment pipelines for our applications.",
      urgent: false
    }
  ];

  const departments = ["all", "Engineering", "Design", "Marketing", "Education", "Sales"];

  const filteredPositions = selectedDepartment === "all" 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

  const stats = [
    { icon: Users, value: "50+", label: "Team Members", color: "text-blue-600" },
    { icon: TrendingUp, value: "95%", label: "Employee Satisfaction", color: "text-green-600" },
    { icon: Globe, value: "15+", label: "Countries", color: "text-purple-600" },
    { icon: Star, value: "4.8/5", label: "Glassdoor Rating", color: "text-yellow-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4 mr-2" />
              Join Our Team
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Your Career
              <span className="block text-blue-600">With Purpose</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join a team of passionate innovators who are transforming the tech landscape in Bihar and beyond. 
              Grow your skills, make an impact, and build something meaningful.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where talent thrives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your perfect role and start your journey with us
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:text-gray-900 hover:shadow-md"
                }`}
              >
                {dept === "all" ? "All Departments" : dept}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPositions.map((position) => (
              <div 
                key={position.id} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                      {position.urgent && (
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Briefcase className="w-4 h-4 mr-1" />
                      <span>{position.department}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{position.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{position.salary}</div>
                    <div className="text-sm text-gray-500">{position.type}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{position.experience} experience</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {position.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">No positions found</h3>
              <p className="text-gray-500">Try selecting a different department or check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple and transparent hiring process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply Online", description: "Submit your application through our portal", icon: Rocket },
              { step: "2", title: "Initial Review", description: "Our team reviews your application", icon: CheckCircle },
              { step: "3", title: "Interview", description: "Technical and cultural fit assessment", icon: Users },
              { step: "4", title: "Welcome Aboard", description: "Join our amazing team!", icon: Star }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Lightbulb className="w-5 h-5 mr-2" />
              Send Resume
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Users className="w-5 h-5 mr-2" />
              Contact HR
            </Button>
          </div>
        </div>
      </section>

      {/* Hidden Developer Signature */}
      <div 
        className="absolute bottom-0 right-0 opacity-0 text-xs"
        style={{
          fontSize: "1px",
          color: "transparent",
          userSelect: "none",
          pointerEvents: "none",
        }}
        title="Crafted with passion by Kush Vardhan"
      >
        {/* Developed by Kush Vardhan (kushvardhan39797@gmail.com) */}
        <span>KV</span>
      </div>
    </div>
  );
}
