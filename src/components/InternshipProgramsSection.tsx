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
import { useEffect, useState } from "react";

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
            Embark on a transformative journey with our industry-leading
            programs designed to shape the next generation of tech
            professionals.
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          <div className="relative w-full max-w-7xl h-full overflow-visible">
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
                    className={`absolute transition-all duration-700 ease-out ${
                      isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
                    } ${
                      isCenter
                        ? "z-30 scale-100 translate-x-0"
                        : isLeft
                        ? "z-20 scale-75 -translate-x-64 md:-translate-x-80"
                        : isRight
                        ? "z-20 scale-75 translate-x-64 md:translate-x-80"
                        : "z-10 scale-50"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      filter: isCenter ? "none" : "brightness(0.8) blur(1px)",
                    }}
                  >
                    <div
                      className={`w-80 md:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ${
                        isCenter ? "hover:scale-105 h-auto" : "h-80 md:h-96"
                      } ${isCenter ? "max-h-none" : "max-h-80 md:max-h-96"}`}
                    >
                      {/* Card Header */}
                      <div className="relative h-32 bg-gradient-to-br from-green-400 to-blue-500 p-6">
                        <div className="absolute top-4 right-4">
                          <div className="text-3xl">{program.icon}</div>
                        </div>
                        <div className="absolute bottom-4 left-6">
                          <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                            {program.type}
                          </span>
                        </div>
                        {program.popular && (
                          <div className="absolute -top-2 -right-2">
                            <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                              <Star className="h-3 w-3 mr-1" />
                              Popular
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {program.title}
                        </h3>
                        <p
                          className={`text-gray-600 text-sm mb-4 ${
                            isCenter ? "" : "line-clamp-2"
                          }`}
                        >
                          {program.description}
                        </p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center text-gray-600 text-xs">
                            <Clock className="h-3 w-3 mr-1 text-green-600" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-xs">
                            <Users className="h-3 w-3 mr-1 text-green-600" />
                            <span>{program.seats} seats</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-xs">
                            <Calendar className="h-3 w-3 mr-1 text-green-600" />
                            <span>{program.startDate}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-xs">
                            <Award className="h-3 w-3 mr-1 text-green-600" />
                            <span>{program.level}</span>
                          </div>
                        </div>

                        {/* Full Details for Center Card */}
                        {isCenter && (
                          <div className="mb-4 space-y-4">
                            {/* Skills Section */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                Skills You&apos;ll Master:
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {program.skills.map((skill, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Features Section */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                Program Highlights:
                              </h4>
                              <ul className="space-y-1">
                                {program.features.map(
                                  (feature, featureIndex) => (
                                    <li
                                      key={featureIndex}
                                      className="flex items-center text-gray-600 text-xs"
                                    >
                                      <div className="w-1 h-1 bg-green-600 rounded-full mr-2"></div>
                                      {feature}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* Skills for non-center cards */}
                        {!isCenter && (
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                              {program.skills
                                .slice(0, 3)
                                .map((skill, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              {program.skills.length > 3 && (
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                  +{program.skills.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Price and Button */}
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-green-600">
                            {program.fee}
                          </div>
                          <Button
                            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                              isCenter
                                ? "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                            disabled={!isCenter}
                            onClick={() =>
                              isCenter &&
                              console.log("Apply for", program.title)
                            }
                          >
                            {isCenter ? "Apply Now" : "Select"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-40"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-40"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-md">
              {currentIndex + 1} of {internshipPrograms.length}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Industry Expert Mentors
            </h3>
            <p className="text-gray-600">
              Learn from professionals with years of industry experience
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Certification
            </h3>
            <p className="text-gray-600">
              Get industry-recognized certificates upon completion
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Placement Support
            </h3>
            <p className="text-gray-600">
              Get assistance with job placements and career guidance
            </p>
          </div>
        </div>

        {/* Hidden developer signature */}
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
    </section>
  );
}
