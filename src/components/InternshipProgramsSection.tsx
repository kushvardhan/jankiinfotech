"use client";

import { Button } from "@/components/ui/button";
import {
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const internshipPrograms = [
  {
    id: 1,
    title: "Full Stack Web Development",
    duration: "6 Months",
    type: "Hybrid",
    description:
      "Master modern web technologies including React, Node.js, MongoDB, and cloud deployment.",
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TypeScript",
      "AWS",
    ],
    level: "Beginner to Advanced",
    seats: 20,
    startDate: "March 2025",
    fee: "₹25,000",
    icon: "💻",
    gradient: "from-blue-500 to-purple-600",
    popular: true,
    features: [
      "Live Projects",
      "Industry Mentorship",
      "Placement Assistance",
      "Certificate of Completion",
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    duration: "4 Months",
    type: "Online",
    description:
      "Build cross-platform mobile applications using React Native and Flutter.",
    skills: ["React Native", "Flutter", "Dart", "Firebase", "API Integration"],
    level: "Intermediate",
    seats: 15,
    startDate: "April 2025",
    fee: "₹20,000",
    icon: "📱",
    gradient: "from-green-500 to-teal-600",
    popular: false,
    features: [
      "Real App Development",
      "Play Store Publishing",
      "UI/UX Design Training",
      "Portfolio Building",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    duration: "3 Months",
    type: "Online",
    description:
      "Create stunning user interfaces and experiences using Figma, Adobe XD, and design principles.",
    skills: [
      "Figma",
      "Adobe XD",
      "Prototyping",
      "User Research",
      "Wireframing",
      "Design Systems",
    ],
    level: "Beginner to Intermediate",
    seats: 18,
    startDate: "March 2025",
    fee: "₹15,000",
    icon: "🎨",
    gradient: "from-pink-500 to-rose-600",
    popular: false,
    features: [
      "Design Portfolio",
      "Client Projects",
      "Industry Tools",
      "Creative Mentorship",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing",
    duration: "3 Months",
    type: "Hybrid",
    description:
      "Master digital marketing strategies, SEO, social media marketing, and analytics.",
    skills: [
      "SEO",
      "Google Ads",
      "Social Media",
      "Analytics",
      "Content Marketing",
      "Email Marketing",
    ],
    level: "Beginner to Advanced",
    seats: 25,
    startDate: "April 2025",
    fee: "₹18,000",
    icon: "📈",
    gradient: "from-orange-500 to-red-600",
    popular: false,
    features: [
      "Campaign Management",
      "Analytics & Reporting",
      "Brand Strategy",
      "Performance Marketing",
    ],
  },
];

export default function InternshipProgramsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % internshipPrograms.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) =>
        (prev - 1 + internshipPrograms.length) % internshipPrograms.length
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev + 1) % internshipPrograms.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const getCardPosition = (index: number) => {
    const diff =
      (index - currentIndex + internshipPrograms.length) %
      internshipPrograms.length;

    if (diff === 0) return "center";
    if (diff === 1 || diff === internshipPrograms.length - 1)
      return diff === 1 ? "right" : "left";
    return "hidden";
  };

  // Touch handling functions
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && !isAnimating) {
      nextSlide();
    }
    if (isRightSwipe && !isAnimating) {
      prevSlide();
    }
  };

   return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Transform Your Career
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Internship Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embark on a transformative journey with our industry-leading programs designed to shape the next generation of tech professionals.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Mobile View */}
          <div className="block lg:hidden">
            <div className="relative h-[500px] sm:h-[550px] md:h-[600px] flex items-center justify-center px-4">
              <div
                ref={carouselRef}
                className="relative w-full max-w-md sm:max-w-lg h-full overflow-visible"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="flex items-center justify-center h-full">
                  {internshipPrograms.map((program, index) => {
                    const position = getCardPosition(index);
                    const isCenter = position === "center";
                    const isHidden = position === "hidden";

                    return (
                      <div
                        key={program.id}
                        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
                          isHidden ? "opacity-0 pointer-events-none scale-75" : "opacity-100"
                        } ${isCenter ? "z-30 scale-100" : "z-10 scale-90 opacity-50"}`}
                      >
                        <div className="w-72 sm:w-80 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                          <div className="relative h-48 bg-gradient-to-br from-green-400 to-green-600">
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            <div className="relative z-10 p-6 text-white">
                              <div className="text-4xl mb-2">{program.icon}</div>
                              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                              <p className="text-sm opacity-90">{program.duration}</p>
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                {program.level}
                              </span>
                              <span className="text-2xl font-bold text-green-600">{program.price}</span>
                            </div>

                            <p className="text-gray-600 mb-4 text-sm line-clamp-3">{program.description}</p>

                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-sm text-gray-600">
                                <Users className="h-4 w-4 mr-2 text-green-600" />
                                <span>{program.students} students</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Star className="h-4 w-4 mr-2 text-green-600" />
                                <span>{program.rating} rating</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-4">
                              {program.skills.slice(0, 3).map((skill, i) => (
                                <span
                                  key={i}
                                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center gap-3 mt-6 px-4">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="bg-white shadow-lg rounded-full p-2.5 hover:bg-gray-50 transition-all duration-300 hover:scale-110 disabled:opacity-50 border border-gray-200"
              >
                <ChevronLeft className="h-4 w-4 text-gray-700" />
              </button>
              <div className="bg-white px-3 py-1.5 rounded-full shadow-md border border-gray-200">
                <span className="text-xs sm:text-sm text-gray-600 font-medium">
                  {currentIndex + 1} of {internshipPrograms.length}
                </span>
              </div>
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="bg-white shadow-lg rounded-full p-2.5 hover:bg-gray-50 transition-all duration-300 hover:scale-110 disabled:opacity-50 border border-gray-200"
              >
                <ChevronRight className="h-4 w-4 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="relative h-[700px] flex items-center justify-center">
              <div
                className="relative w-full max-w-7xl h-full overflow-visible"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="flex items-center justify-center h-full perspective-1000">
                  {internshipPrograms.map((program, index) => {
                    const position = getCardPosition(index);
                    const isCenter = position === "center";
                    const isLeft = position === "left";
                    const isRight = position === "right";
                    const isHidden = position === "hidden";

                    return (
                      <div
                        key={program.id}
                        className={`absolute left-1/2 top-1/2 transform -translate-y-1/2 transition-all duration-700 ease-out ${
                          isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
                        } ${
                          isCenter
                            ? "z-30 scale-100 -translate-x-1/2"
                            : isLeft
                            ? "z-20 scale-75 -translate-x-full"
                            : isRight
                            ? "z-20 scale-75 translate-x-0"
                            : "z-10 scale-50 -translate-x-1/2"
                        }`}
                      >
                        <div className="w-96 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                          <div className="relative h-64 bg-gradient-to-br from-green-400 to-green-600">
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            <div className="relative z-10 p-8 text-white">
                              <div className="text-6xl mb-4">{program.icon}</div>
                              <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                              <p className="opacity-90">{program.duration}</p>
                            </div>
                          </div>

                          <div className="p-8">
                            <div className="flex justify-between items-center mb-6">
                              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                {program.level}
                              </span>
                              <span className="text-3xl font-bold text-green-600">{program.price}</span>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="flex items-center text-gray-600">
                                <Users className="h-5 w-5 mr-3 text-green-600" />
                                <span>{program.students} students</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Star className="h-5 w-5 mr-3 text-green-600" />
                                <span>{program.rating} rating</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {program.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-colors text-lg">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-110 disabled:opacity-50 border border-gray-200"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200">
                <span className="text-sm text-gray-600 font-medium">
                  {currentIndex + 1} of {internshipPrograms.length}
                </span>
              </div>
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-110 disabled:opacity-50 border border-gray-200"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Expert Mentors</h3>
            <p className="text-gray-600">Learn from professionals with years of industry experience</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certification</h3>
            <p className="text-gray-600">Get industry-recognized certificates upon completion</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Placement Support</h3>
            <p className="text-gray-600">Get assistance with job placements and career guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
