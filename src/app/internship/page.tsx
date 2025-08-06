import { Button } from "@/components/ui/button";
import { Award, BookOpen, Calendar, Clock, MapPin, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import InternshipProgramsSection from "@/components/InternshipProgramsSection";

export const metadata: Metadata = {
  title: "Internship Programs | JankiInfotech",
  description:
    "Join our comprehensive internship programs in web development, mobile app development, and software engineering. Gain hands-on experience with industry experts.",
  keywords: [
    "internship",
    "training",
    "web development",
    "mobile development",
    "software engineering",
    "career",
  ],
};

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

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Internship Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Launch your tech career with our comprehensive internship
              programs. Get hands-on experience, industry mentorship, and job
              placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold"
              >
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
              Choose from our carefully designed programs that combine
              theoretical knowledge with practical experience in cutting-edge
              technologies.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {internshipPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden max-h-[600px] hover:max-h-none"
                style={{
                  background: `linear-gradient(135deg, ${program.gradient
                    .split(" ")[0]
                    .replace("from-", "")} 0%, ${program.gradient
                    .split(" ")[2]
                    .replace("to-", "")} 100%)`,
                  backgroundSize: "200% 200%",
                  backgroundPosition: "100% 100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "0% 0%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "100% 100%";
                }}
              >
                <div className="absolute inset-0 bg-white bg-opacity-95 hover:bg-opacity-90 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {program.type}
                      </span>
                      <span className="text-2xl font-bold text-green-600">
                        {program.fee}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {program.title}
                    </h3>
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
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Skills You&apos;ll Learn:
                      </h4>
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
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Program Features:
                      </h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-gray-600"
                          >
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
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden mb-8">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {internshipPrograms.map((program) => (
                  <div key={program.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="p-6">
                        <div className="text-center mb-4">
                          <div className="text-4xl mb-2">{program.icon}</div>
                          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                            {program.type}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-center text-sm">
                          {program.description}
                        </p>

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
                            {program.skills
                              .slice(0, 3)
                              .map((skill, skillIndex) => (
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
                          <span className="text-2xl font-bold text-green-600">
                            {program.fee}
                          </span>
                        </div>

                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold">
                          Apply for this Program
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
                {internshipPrograms.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-green-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Mentorship
              </h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hands-on Projects
              </h3>
              <p className="text-gray-600">
                Work on real-world projects that build your portfolio
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Certification
              </h3>
              <p className="text-gray-600">
                Receive industry-recognized certificates upon completion
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Job Placement
              </h3>
              <p className="text-gray-600">
                Get assistance with job placements and career guidance
              </p>
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
            Join thousands of students who have launched their careers through
            our internship programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Apply Now
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
