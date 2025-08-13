"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const dynamicWords = [
    "innovative",
    "secure",
    "scalable",
    "cutting-edge",
    "revolutionary",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Mouse tracking for cursor effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll tracking for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Word rotation animation
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      {/* Dynamic Cursor Effect */}
      <div
        className="fixed w-6 h-6 bg-green-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isHovering ? 2 : 1})`,
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.3)_1px,transparent_0)] bg-[size:30px_30px] animate-pulse"></div>
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.2)_1px,transparent_0)] bg-[size:50px_50px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Link
            href="/internship"
            className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
          >
            <span className="mr-2">🎓</span>
            Summer Training Program
          </Link>

          {/* Scripting Badge */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Scripting
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg text-lg font-bold">
              New JankiInfotech
            </div>
          </div>

          {/* Main Heading with Beautiful Animations */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span
                className="block animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                Delivering secure
              </span>
              <span
                className="block text-green-600 animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                digital solutions
              </span>
              <span
                className="block animate-fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                and scalable cloud
              </span>
              <span
                className="block animate-fadeInUp"
                style={{ animationDelay: "0.8s" }}
              >
                infrastructure
              </span>
            </h1>
          </div>

          {/* Subtitle with Animation */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tailored to power innovation and startup success.
            </p>
          </div>

          {/* CTA Buttons with Animation */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/schedule-consultation">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg font-semibold">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-lg font-semibold"
              >
                Join Our Team
              </Button>
            </Link>
          </div>

          {/* Client Logos */}
          <div className="pt-16">
            <p className="text-gray-500 text-sm mb-8">
              Trusted by startups worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mb-8">
              {/* Client logos with green theme */}
              <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200">
                <span className="text-xs text-green-600 font-semibold">
                  Client 1
                </span>
              </div>
              <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200">
                <span className="text-xs text-green-600 font-semibold">
                  Client 3
                </span>
              </div>
              <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200">
                <span className="text-xs text-green-600 font-semibold">
                  Client 4
                </span>
              </div>
              <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200">
                <span className="text-xs text-green-600 font-semibold">
                  Client 5
                </span>
              </div>
              <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200">
                <span className="text-xs text-green-600 font-semibold">
                  Client 6
                </span>
              </div>
            </div>
            <div className="mt-8">
              <span className="text-3xl font-bold text-green-600">10+</span>
              <span className="text-gray-600 ml-2">
                Startup Clients Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-100 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
}
