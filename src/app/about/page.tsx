"use client";

import ClientLogosShowcase from "@/components/ClientLogosShowcase";
import { Navbar } from "@/components/Navbar";
import SmallFooter from "@/components/SmallFooter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building,
  Building2,
  Calendar,
  CheckCircle,
  Download,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Sparkles,
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
      title: "The Beginning",
      description:
        "Born from a dream to revolutionize Bihar's tech ecosystem, we started with just passion and determination.",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      year: "2020",
      title: "First 100 Clients",
      description:
        "Against all odds during the pandemic, we reached our first major milestone, proving resilience conquers all.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      year: "2021",
      title: "Empowering Youth",
      description:
        "Launched transformative internship programs, igniting careers and changing lives across Bihar.",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      year: "2022",
      title: "National Recognition",
      description:
        "Our innovation and social impact earned prestigious awards, putting Bihar on India's tech map.",
      icon: Award,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
    },
    {
      year: "2023",
      title: "500+ Success Stories",
      description:
        "Celebrated over 500 transformed lives — students turned professionals, ideas turned businesses.",
      icon: TrendingUp,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      year: "2024",
      title: "Global Horizons",
      description:
        "Expanded beyond borders, taking Bihar's talent and innovation to the world stage.",
      icon: Globe,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
    },
  ];

  const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 md:from-blue-50 md:via-purple-50 md:to-pink-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 md:from-blue-50 md:via-purple-50 md:to-pink-50">
          {/* Enhanced Animated Background - Subtle on mobile, vibrant on desktop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-300/10 md:from-blue-400/30 md:to-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-300/10 md:from-purple-400/30 md:to-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-green-400/8 to-teal-300/8 md:from-green-400/25 md:to-teal-300/25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-300/8 to-yellow-300/8 md:from-orange-300/20 md:to-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
          </div>

          {/* Animated grid pattern - very subtle on mobile */}
          <div className="absolute inset-0 opacity-[0.02] md:opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
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
        <section className="py-20 bg-gradient-to-br from-white via-green-50/20 to-blue-50/20 md:via-green-50/30 md:to-blue-50/30 relative overflow-hidden">
          {/* Subtle background decoration - very light on mobile */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/8 to-blue-200/8 md:from-green-200/20 md:to-blue-200/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/8 to-pink-200/8 md:from-purple-200/20 md:to-pink-200/20 rounded-full filter blur-3xl"></div>
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
        <section className="py-20 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 md:from-purple-50 md:via-pink-50 md:to-orange-50 relative overflow-hidden">
          {/* Animated background elements - subtle on mobile */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-300/10 to-pink-300/10 md:from-purple-300/30 md:to-pink-300/30 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-orange-300/10 to-yellow-300/10 md:from-orange-300/30 md:to-yellow-300/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
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
        <section className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/20 md:from-blue-50 md:via-cyan-50 md:to-teal-50 relative overflow-hidden">
          {/* Decorative elements - subtle on mobile */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/8 to-cyan-300/8 md:from-blue-300/20 md:to-cyan-300/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-teal-300/8 to-green-300/8 md:from-teal-300/20 md:to-green-300/20 rounded-full filter blur-3xl"></div>
          </div>
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

        {/* Client Logos Showcase */}
        <ClientLogosShowcase />

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-white via-green-50/20 to-emerald-50/20 md:from-green-50 md:via-emerald-50 md:to-teal-50 relative overflow-hidden">
          {/* Background decoration - subtle on mobile */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-300/8 to-emerald-300/8 md:from-green-300/20 md:to-emerald-300/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-300/8 to-cyan-300/8 md:from-teal-300/20 md:to-cyan-300/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
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

        {/* Journey Timeline - Premium & Emotionally Engaging */}
         <section className="relative py-16 md:py-24 bg-white text-gray-900 overflow-hidden">
      {/* subtle background accent - not animated on hover */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block absolute -left-24 top-12 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br from-orange-100 to-amber-100 opacity-30" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-orange-50 border border-orange-100 rounded-full px-4 py-1 text-orange-700 text-sm font-medium">
            <span>Our Story</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
            The Journey of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              Transformation
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Every milestone tells a story of dreams, determination, and steady growth.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Vertical center line on md+, simple thin line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-200 to-amber-200 opacity-40" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  className="relative md:flex md:items-start md:justify-between"
                >
                  {/* Card */}
                  <div
                    className={`md:w-5/12 ${isLeft ? "md:order-1 md:text-right md:pr-8" : "md:order-2 md:text-left md:pl-8"}`}
                  >
                    <div
                      className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm transition-shadow transform-gpu will-change-transform hover:shadow-md"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="inline-flex items-center space-x-3 md:space-x-0 md:space-x-reverse md:justify-end">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${m.color} text-white`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="ml-3 md:ml-0">
                          <div className="text-sm text-orange-600 font-semibold">{m.year}</div>
                          <h3 className="mt-2 text-lg font-medium text-gray-900">{m.title}</h3>
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{m.description}</p>
                    </div>
                  </div>

                  {/* Dot / connector */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 md:top-6 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${m.color} shadow-sm`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 md:mt-16">
            <p className="text-gray-600 mb-4">And this is just the beginning...</p>
            <button
              type="button"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium shadow hover:shadow-lg transition-transform transform-gpu hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-200"
            >
              <span>Join Our Journey</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-gradient-to-br from-white via-pink-50/20 to-rose-50/20 md:from-pink-50 md:via-rose-50 md:to-red-50 relative overflow-hidden">
          {/* Background elements - subtle on mobile */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-300/8 to-rose-300/8 md:from-pink-300/20 md:to-rose-300/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-red-300/8 to-pink-300/8 md:from-red-300/20 md:to-pink-300/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
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

        {/* Brochure Download CTA - About Page Themed */}
        <section className="py-20 bg-gradient-to-br from-white via-indigo-50/20 to-violet-50/20 md:from-indigo-50 md:via-violet-50 md:to-purple-50 relative overflow-hidden">
          {/* Animated background - subtle on mobile */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-indigo-300/10 to-violet-300/10 md:from-indigo-300/25 md:to-violet-300/25 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-300/10 to-pink-300/10 md:from-purple-300/25 md:to-pink-300/25 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-blue-600 via-green-600 to-teal-600 rounded-3xl overflow-hidden shadow-2xl">
              {/* Animated background shapes */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="relative z-10 p-8 md:p-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left side - Content */}
                  <div className="text-white">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6">
                      <Building2 className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Company Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      Everything You Need to Know About Us
                    </h2>

                    <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                      Get the complete picture of JankiInfotech - our services,
                      values, team, success stories, and how we&apos;re
                      transforming businesses across Bihar and beyond.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <span className="text-white/90">
                          Complete service portfolio
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <span className="text-white/90">
                          Client success stories & testimonials
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <span className="text-white/90">
                          Our mission, vision & values
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Download card */}
                  <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full transform hover:scale-105 transition-transform duration-300">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mb-6 shadow-xl">
                          <FileText className="h-12 w-12 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          Company Brochure
                        </h3>

                        <p className="text-gray-600 mb-6">
                          Comprehensive guide to our services and expertise
                        </p>

                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Format:</span>
                            <span className="font-semibold text-gray-900">
                              PDF
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm mt-2">
                            <span className="text-gray-600">Size:</span>
                            <span className="font-semibold text-gray-900">
                              3+ MB
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm mt-2">
                            <span className="text-gray-600">Pages:</span>
                            <span className="font-semibold text-gray-900">
                              2+
                            </span>
                          </div>
                        </div>

                        <a
                          href="/brochure.pdf"
                          download="JankiInfotech-Brochure.pdf"
                          className="group w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                        >
                          <Download className="h-5 w-5 group-hover:animate-bounce" />
                          Download Now
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <p className="text-xs text-gray-500 mt-4">
                          ✓ Free download • ✓ No registration required
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
