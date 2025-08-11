"use client";

import { Button } from "@/components/ui/button";
import {
  Award,
  Building,
  Globe,
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
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      value: "150+",
      label: "Projects Completed",
      color: "text-green-600",
    },
    {
      icon: Award,
      value: "50+",
      label: "Awards Won",
      color: "text-purple-600",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Countries Served",
      color: "text-orange-600",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "Your data and projects are secure with us. We maintain the highest standards of security and confidentiality.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Every decision we make is centered around our clients&apos; success and satisfaction.",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Excellence",
      description:
        "We strive for perfection in every project, ensuring quality that exceeds expectations.",
      gradient: "from-purple-400 to-purple-600",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "👨‍💼",
      description: "Visionary leader with 15+ years in tech industry",
      linkedin: "#",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      image: "👩‍💻",
      description: "Tech expert specializing in cloud architecture",
      linkedin: "#",
    },
    {
      name: "Amit Singh",
      role: "Head of Development",
      image: "👨‍💻",
      description: "Full-stack developer with expertise in modern frameworks",
      linkedin: "#",
    },
    {
      name: "Sunita Devi",
      role: "Head of Training",
      image: "👩‍🏫",
      description: "Education specialist with passion for skill development",
      linkedin: "#",
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

      {/* Mission, Vision, Values Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on strong principles that guide everything we do
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1 flex">
              {["mission", "vision", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-green-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "mission" && (
              <div className="text-center animate-fadeIn">
                <Target className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To democratize technology and make it accessible to everyone.
                  We believe that every business, regardless of size, deserves
                  world-class digital solutions. Our mission is to bridge the
                  technology gap and empower our clients with innovative tools
                  that drive growth and success.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="text-center animate-fadeIn">
                <Zap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the leading technology partner in Bihar and beyond,
                  known for innovation, quality, and social impact. We envision
                  a future where technology serves humanity, creates
                  opportunities, and builds a more connected and prosperous
                  world for all.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mb-4`}
                      >
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.description}
                </p>
                <Link
                  href={member.linkedin}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of satisfied clients who trust us with their digital
            transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              <Rocket className="w-5 h-5 mr-2" />
              Start a Project
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our Team
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
    </main>
  );
}
