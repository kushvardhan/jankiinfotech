"use client";

import { Navbar } from "@/components/Navbar";
import SmallFooter from "@/components/SmallFooter";
import { Building, Star, TrendingUp, Users } from "lucide-react";
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
    },{
  "name": "Abhishek Narayan",
  "role": "General Manager",
  "icon": "🧑",
  "description": "Strategic leader and sales expert driving business growth through effective client pitching and management",
  "linkedin": "https://www.linkedin.com/in/abhishek#"
},
{
      name: "Kush",
      role: "Full Stack Developer & Web Designer",
      icon: "👨‍💻",
      description: "Full-Stack Developer & Web Designer building fast, modern, and engaging websites.",
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
