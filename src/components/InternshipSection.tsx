"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const featuredPrograms = [
  {
    title: "Full Stack Web Development",
    duration: "6 Months",
    type: "Hybrid",
    description:
      "Master modern web technologies including React, Node.js, MongoDB, and cloud deployment.",
    skills: ["React.js", "Node.js", "MongoDB", "TypeScript"],
    startDate: "March 2025",
    fee: "₹25,000",
    popular: true,
    icon: "💻",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Mobile App Development",
    duration: "4 Months",
    type: "Online",
    description:
      "Build cross-platform mobile applications using React Native and Flutter.",
    skills: ["React Native", "Flutter", "Firebase", "API Integration"],
    startDate: "April 2025",
    fee: "₹20,000",
    popular: false,
    icon: "📱",
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "UI/UX Design",
    duration: "3 Months",
    type: "Online",
    description:
      "Create stunning user interfaces and experiences using Figma, Adobe XD, and design principles.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    startDate: "March 2025",
    fee: "₹15,000",
    popular: false,
    icon: "🎨",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Digital Marketing",
    duration: "3 Months",
    type: "Hybrid",
    description:
      "Master digital marketing strategies, SEO, social media marketing, and analytics.",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    startDate: "April 2025",
    fee: "₹18,000",
    popular: false,
    icon: "📈",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "DevOps & Cloud Engineering",
    duration: "5 Months",
    type: "Hybrid",
    description:
      "Learn modern DevOps practices, cloud platforms, and automation tools.",
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    startDate: "May 2025",
    fee: "₹30,000",
    popular: false,
    icon: "☁️",
    gradient: "from-indigo-500 to-blue-600",
  },
];

export default function InternshipSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPrograms.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredPrograms.length) % featuredPrograms.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
            Join our comprehensive internship programs designed to give you
            hands-on experience, industry mentorship, and the skills needed to
            excel in the tech industry.
          </p>
        </div>

        {/* Desktop Programs Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPrograms.map((program, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              style={{
                background: `linear-gradient(135deg, ${program.gradient.split(' ')[0].replace('from-', '')} 0%, ${program.gradient.split(' ')[2].replace('to-', '')} 100%)`,
                backgroundSize: '200% 200%',
                backgroundPosition: '100% 100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = '0% 0%'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = '100% 100%'
              }}
            >
              <div className="absolute inset-0 bg-white bg-opacity-95 group-hover:bg-opacity-90 transition-all duration-300"></div>
              <div className="relative z-10">
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
                  <span className="text-2xl font-bold text-green-600">
                    {program.fee}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {program.description}
                </p>

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
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Skills:
                  </h4>
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

        {/* Mobile Slider */}
        <div className="md:hidden mb-12">
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPrograms.map((program, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div
                    className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${program.gradient.split(' ')[0].replace('from-', '')} 0%, ${program.gradient.split(' ')[2].replace('to-', '')} 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white bg-opacity-95"></div>
                    <div className="relative z-10 p-6">
                      {program.popular && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                          Most Popular
                        </div>
                      )}

                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{program.icon}</div>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                          {program.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-center text-sm">{program.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-center text-gray-600 text-sm">
                          <Clock className="h-4 w-4 mr-2 text-green-600" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center justify-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-green-600" />
                          <span>Starts {program.startDate}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {program.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-green-600">{program.fee}</span>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredPrograms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              500+
            </div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              85%
            </div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              50+
            </div>
            <div className="text-gray-600">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              4.8/5
            </div>
            <div className="text-gray-600">Student Rating</div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Expert Mentorship
            </h3>
            <p className="text-gray-600 text-sm">
              Learn from industry professionals with years of experience
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Hands-on Projects
            </h3>
            <p className="text-gray-600 text-sm">
              Work on real-world projects that build your portfolio
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Certification
            </h3>
            <p className="text-gray-600 text-sm">
              Receive industry-recognized certificates upon completion
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Job Placement
            </h3>
            <p className="text-gray-600 text-sm">
              Get assistance with job placements and career guidance
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of students who have launched their careers through
              our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/internship">
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  View All Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold"
                >
                  Get More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
