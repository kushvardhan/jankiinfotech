import InternshipProgramsSection from "@/components/InternshipProgramsSection";
import { Navbar } from "@/components/Navbar";
import SmallFooter from "@/components/SmallFooter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  BookOpen,
  Download,
  GraduationCap,
  MapPin,
  Rocket,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

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

export default function InternshipPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white md:bg-gray-50 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/30 md:from-green-50 md:via-white md:to-green-100 text-gray-800 overflow-hidden">
          {/* Animated Background Elements - Subtle on mobile */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-green-200/10 to-emerald-200/10 md:from-green-200/30 md:to-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-teal-300/10 to-cyan-300/10 md:from-teal-300/30 md:to-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-blue-300/8 to-green-300/8 md:from-blue-300/30 md:to-green-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-screen">
            <div className="text-center w-full">
              {/* Badge */}
              <div className="inline-flex items-center bg-green-100 border border-green-200 rounded-full px-6 py-3 mb-8">
                <Sparkles className="h-5 w-5 mr-2 text-green-600" />
                <span className="text-sm font-medium text-green-800">
                  Transform Your Future
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-800 via-green-700 to-green-600 bg-clip-text text-transparent">
                Launch Your
                <br />
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Tech Career
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
                Join our elite internship programs and transform from a student
                to a
                <span className="text-green-600 font-semibold">
                  {" "}
                  professional developer
                </span>
                . Get hands-on experience, industry mentorship, and guaranteed
                job placement assistance.{" "}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    6
                  </div>
                  <div className="text-sm text-gray-600">Months Training</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                  <Rocket className="h-5 w-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Target className="h-5 w-5 mr-2" />
                  View Programs
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <InternshipProgramsSection />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  Expert Mentors
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
                  Job Guarantee
                </h3>
                <p className="text-gray-600">
                  Get assistance with career development and professional
                  guidance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brochure Download Section - Internship Themed */}
        <section className="py-16 bg-gradient-to-br from-white via-green-50/20 to-blue-50/20 md:from-green-50 md:via-blue-50 md:to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-green-300/8 to-blue-300/8 md:from-green-300/15 md:to-blue-300/15 rounded-full filter blur-3xl animate-blob"></div>
          </div>
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-green-100">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-200 to-blue-200 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-200 to-green-200 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>

              <div className="relative z-10 p-8 md:p-12">
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  {/* Left - Visual element */}
                  <div className="md:col-span-2 flex justify-center">
                    <div className="relative">
                      {/* Main icon */}
                      <div className="w-40 h-40 bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <GraduationCap className="h-20 w-20 text-white" />
                      </div>
                      {/* Floating badges */}
                      <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-bounce">
                        FREE
                      </div>
                      <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        3+ MB
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="md:col-span-3">
                    <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-4">
                      <Sparkles className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm font-semibold text-green-800">
                        Complete Program Guide
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Get Your{" "}
                      <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        Free
                      </span>{" "}
                      Internship Brochure
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                      Discover detailed curriculum, success stories, placement
                      records, and everything you need to know about our
                      transformative internship programs.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Award className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            Program Details
                          </div>
                          <div className="text-xs text-gray-500">
                            Full curriculum
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            Success Stories
                          </div>
                          <div className="text-xs text-gray-500">
                            Alumni testimonials
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="/brochure.pdf"
                      download="JankiInfotech-Brochure.pdf"
                      className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Download className="h-5 w-5 group-hover:animate-bounce" />
                      Download Free Brochure
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`,
              }}
            ></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 rounded-full px-6 py-3 mb-8">
                <TrendingUp className="h-5 w-5 mr-2" />
                <span className="text-sm font-semibold">
                  Your Success Story Starts Here
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-green-300 via-green-200 to-white bg-clip-text text-transparent">
                  Ready to Dominate
                </span>
                <br />
                <span className="text-white">the Tech World?</span>
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
                Join the elite circle of
                <span className="text-green-300 font-bold">
                  {" "}
                  500+ successful developers
                </span>{" "}
                who transformed their careers through our revolutionary
                internship programs.
                <span className="text-green-200 font-bold">
                  {" "}
                  Your dream job is just 6 months away!
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-12 py-5 text-xl font-bold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 transform">
                  <Rocket className="h-6 w-6 mr-3" />
                  Secure Your Spot Now
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-white border-opacity-50 text-white hover:bg-white hover:text-green-800 px-12 py-5 text-xl font-bold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 transform"
                  >
                    <Star className="h-6 w-6 mr-3" />
                    Get Free Consultation
                  </Button>
                </Link>
              </div>

              {/* Urgency Message */}
              <div className="mt-8 inline-flex items-center bg-red-500 bg-opacity-20 border border-red-400 border-opacity-30 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-red-200">
                  Limited Seats Available - Only 25 spots left for this batch!
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SmallFooter />
    </>
  );
}
