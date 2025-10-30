"use client";

import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  Heart,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    {
      icon: Rocket,
      title: "Innovation First",
      description:
        "We don't just follow trends—we create them. Every project is an opportunity to push boundaries.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "People-Centered",
      description:
        "Your success is our heartbeat. We build relationships, not just software.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Sparkles,
      title: "Quality Obsessed",
      description:
        "Excellence isn't an act, it's a habit. We're perfectionists who deliver nothing but the best.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Results Driven",
      description:
        "We measure success by your growth. Every line of code serves your business goals.",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-green-50 to-blue-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
            <Sparkles className="h-4 w-4 mr-2" />
            Our Story
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Where{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Dreams Meet Code
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We&apos;re not just another tech company. We&apos;re dreamers, builders, and
            innovators on a mission to transform Bihar into a global tech
            powerhouse—one brilliant idea at a time.
          </p>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Engaging Story */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                From Local Roots to Global Impact
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Born in the heart of Bihar, JankiInfotech started with a simple
                yet powerful belief:{" "}
                <span className="font-semibold text-green-600">
                  talent knows no geography
                </span>
                . What began as a small team of passionate developers has
                blossomed into a thriving tech ecosystem that&apos;s rewriting the
                rules of innovation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we&apos;re not just building websites and apps—we&apos;re building
                futures. We&apos;re empowering local talent, creating opportunities,
                and proving that world-class technology can come from anywhere.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-4">Our Promise to You</h4>
              <p className="leading-relaxed opacity-95">
                Every project we touch becomes a masterpiece. Every client we
                serve becomes family. We don&apos;t just deliver code—we deliver
                dreams wrapped in innovation, sealed with excellence.
              </p>
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section with Brochure Download */}
        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Discover Our Full Story
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Dive deeper into our journey, values, and the team that makes it
              all happen.
            </p>
            <Link href="/about">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More About Us
              </Button>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Get Our Brochure
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Download our comprehensive brochure to explore all our services
              and offerings.
            </p>
            <a
              href="/brochure.jpeg"
              download="JankiInfotech-Brochure.jpeg"
              className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FileText className="h-5 w-5" />
              Download Brochure
              <Download className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
