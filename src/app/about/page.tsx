"use client";

import { Navbar } from "@/components/Navbar";
import SmallFooter from "@/components/SmallFooter";
import {
  Award,
  Building,
  Download,
  FileText,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: Users,
      value: "10+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      value: "50+",
      label: "Projects Completed",
      color: "text-green-600",
    },
  ];

  const team = [
    {
      name: "Harshjeet Pandey",
      role: "Co-founder",
      image: "/members/Harshjeet.jpg",
      description:
        "Visionary co-founder driving innovation and strategic growth",
      linkedin: "https://www.linkedin.com/in/harshjeet-pandey-506592298/",
    },
    {
      name: "Chandar Prakash",
      role: "Designer",
      image: "/members/Chandar.jpg",
      description: "Creative designer crafting exceptional visual experiences",
      linkedin: "https://www.instagram.com/cp_xgraphics?igsh=eWR5amxuaWNvN2ph",
    },
    {
      name: "Sunidhi Singh",
      role: "Social Media Manager",
      image: "/members/Sunidhi.jpg",
      description: "Digital marketing expert managing our online presence",
      linkedin: "https://www.linkedin.com/in/sunidhi-singh-b3624a243",
    },
    {
      name: "Abhishek Narayan",
      role: "General Manager",
      icon: "🧑",
      description:
        "Strategic leader and sales expert driving business growth through effective client pitching and management",
      linkedin: "https://www.linkedin.com/in/abhishek#",
    },
    {
      name: "Kush",
      role: "Full Stack Developer & Web Designer",
      icon: "👨‍💻",
      description:
        "Full-Stack Developer & Web Designer building fast, modern, and engaging websites.",
      linkedin: "https://kush-personal-portfolio-my-portfolio.vercel.app/",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to transform Bihar's tech landscape",
    },
    {
      year: "2020",
      title: "First 100 Clients",
      description: "Reached our first major milestone during challenging times",
    },
    {
      year: "2021",
      title: "Training Programs Launch",
      description: "Launched comprehensive internship and training programs",
    },
    {
      year: "2022",
      title: "National Recognition",
      description: "Received awards for innovation and social impact",
    },
    {
      year: "2023",
      title: "500+ Success Stories",
      description:
        "Helped over 500 students and businesses achieve their goals",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Extended services to international markets",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building className="h-4 w-4 mr-2" />
                About JankiInfotech
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transforming Ideas Into
                <span className="block text-green-600">Digital Reality</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                We are a passionate team of innovators, developers, and dreamers
                committed to empowering businesses and individuals through
                cutting-edge technology solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center transition-all duration-700 delay-${
                      index * 100
                    } ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Users className="h-4 w-4 mr-2" />
                  Who We Are
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Pioneers of Digital Transformation in Bihar
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  JankiInfotech is more than a technology company—we&apos;re a
                  movement. Founded with the vision to bridge the digital
                  divide, we&apos;ve grown into Bihar&apos;s most trusted
                  partner for businesses seeking to thrive in the digital age.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our team of passionate developers, designers, and strategists
                  work tirelessly to deliver solutions that don&apos;t just meet
                  expectations—they exceed them. We believe in the power of
                  local talent and the potential of homegrown innovation to
                  compete on a global stage.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From startups to established enterprises, we&apos;ve helped
                  businesses transform their digital presence, streamline
                  operations, and achieve unprecedented growth. Every project is
                  a testament to our commitment to excellence and our belief
                  that great technology can come from anywhere.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                  <Rocket className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Innovation Driven
                  </h3>
                  <p className="text-gray-600">
                    Cutting-edge solutions that push boundaries
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                  <Heart className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Client First
                  </h3>
                  <p className="text-gray-600">
                    Your success is our top priority
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                  <Shield className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Quality Assured
                  </h3>
                  <p className="text-gray-600">
                    Excellence in every line of code
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                  <Zap className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-600">
                    Rapid development without compromise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  To empower businesses and individuals across Bihar and beyond
                  with world-class technology solutions that drive growth,
                  innovation, and success.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We&apos;re committed to nurturing local talent, creating
                  opportunities, and proving that exceptional technology can
                  emerge from any corner of the world. Through our internship
                  programs and training initiatives, we&apos;re building the
                  next generation of tech leaders.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed mb-4 opacity-95">
                  To establish Bihar as a recognized hub of technological
                  excellence and innovation, where local talent competes
                  globally and businesses thrive in the digital economy.
                </p>
                <p className="text-lg leading-relaxed opacity-95">
                  We envision a future where geography is no barrier to success,
                  where every business has access to premium technology
                  solutions, and where Bihar&apos;s tech ecosystem is celebrated
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="h-4 w-4 mr-2" />
                What Makes Us Different
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Businesses Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re not just another tech company. Here&apos;s what sets
                us apart from the rest.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Local Expertise, Global Standards
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We combine deep understanding of local markets with
                  international best practices, delivering solutions that
                  resonate locally while competing globally.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Personalized Attention
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  You&apos;re not just a client number. We build lasting
                  relationships, understanding your unique needs and crafting
                  solutions tailored specifically for you.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  End-to-End Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From concept to deployment and beyond, we handle everything.
                  Web development, digital marketing, training—all under one
                  roof.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The brilliant minds behind our success
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    ) : (
                      <div className="text-4xl sm:text-6xl">
                        {member.icon || "👤"}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-3 text-sm sm:text-base break-words">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed break-words">
                    {member.description}
                  </p>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Connect <Star className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Milestones that shaped our story
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                <Rocket className="h-4 w-4 mr-2" />
                Our Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your
                business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Website Development
                </h3>
                <p className="text-sm text-gray-600">
                  Modern, responsive websites that drive results and engage your
                  audience
                </p>
              </div>
              <div className="group bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Digital Marketing
                </h3>
                <p className="text-sm text-gray-600">
                  Strategic campaigns that boost visibility and accelerate
                  growth
                </p>
              </div>
              <div className="group bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Software Development
                </h3>
                <p className="text-sm text-gray-600">
                  Custom software solutions built to solve your unique
                  challenges
                </p>
              </div>
              <div className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Internship Programs
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive training that transforms students into
                  industry-ready professionals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brochure Download CTA */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Our Complete Brochure
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Download our comprehensive brochure to explore all our services,
                success stories, and how we can help transform your business.
              </p>
              <a
                href="/brochure.jpeg"
                download="JankiInfotech-Brochure.jpeg"
                className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <FileText className="h-6 w-6" />
                Download Brochure
                <Download className="h-6 w-6 animate-bounce" />
              </a>
              <p className="text-sm mt-6 opacity-75">
                PDF format • Comprehensive overview • Free download
              </p>
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
      </main>
      <SmallFooter />
    </>
  );
}
