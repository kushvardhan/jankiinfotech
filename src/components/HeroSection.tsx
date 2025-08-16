"use client";

import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Star, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
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

          {/* Stunning Main Heading with Dynamic Word Animation */}
          <div
            className={`transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight tracking-tight">
              <span
                className="block animate-fadeInUp transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0.2s" }}
              >
                Delivering{" "}
                <span className="relative inline-block">
                  <span className="text-green-600 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent animate-pulse">
                    {dynamicWords[currentWordIndex]}
                  </span>
                  <span className="absolute -inset-1 bg-green-100 rounded-lg -z-10 opacity-30 animate-pulse"></span>
                </span>
              </span>
              <span
                className="block text-transparent bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text animate-fadeInUp transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0.4s" }}
              >
                digital solutions
              </span>
              <span
                className="block animate-fadeInUp transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0.6s" }}
              >
                and{" "}
                <span className="relative">
                  <span className="text-green-600">scalable</span>
                  <span className="absolute inset-0 bg-green-200 rounded-lg -z-10 opacity-20 animate-pulse"></span>
                </span>{" "}
                cloud
              </span>
              <span
                className="block animate-fadeInUp transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0.8s" }}
              >
                <span className="relative">
                  infrastructure
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-scaleX"></div>
                </span>
              </span>
            </h1>
          </div>

          {/* Enhanced Subtitle with Typewriter Effect */}
          <div
            className={`transition-all duration-1500 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-15"
            }`}
          >
            <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
              <span className="relative">
                Tailored to power{" "}
                <span className="text-green-600 font-bold relative">
                  innovation
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 animate-scaleX"></span>
                </span>{" "}
                and{" "}
                <span className="text-green-600 font-bold relative">
                  startup success
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 animate-scaleX"
                    style={{ animationDelay: "0.5s" }}
                  ></span>
                </span>
                .
              </span>
            </p>
          </div>

          {/* Stunning CTA Buttons with 3D Effects */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1500 delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <Link href="/schedule-consultation" className="group">
              <Button className="relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 text-xl rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-green-500/25 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-3 h-6 w-6 group-hover:animate-spin" />
                  Schedule Consultation
                  <Rocket className="ml-3 h-6 w-6 group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </Link>

            <Link href="/careers" className="group">
              <Button
                variant="outline"
                className="relative border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-5 text-xl rounded-2xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-green-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Star className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Join Our Team
                  <Zap className="ml-3 h-6 w-6 group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
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
            <div className="mt-12">
              <div
                className={`transition-all duration-1500 delay-1700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="text-4xl font-bold text-green-600 animate-pulse">
                  500+
                </span>
                <span className="text-gray-700 ml-3 text-lg font-medium">
                  Startup Clients Worldwide
                </span>
                <Star className="inline ml-2 h-6 w-6 text-yellow-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with 3D Effects */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-30 animate-float shadow-lg"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-25 animate-float-delayed shadow-xl"></div>
      <div
        className="absolute top-1/2 left-20 w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-35 animate-float shadow-md"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-20 animate-float shadow-lg"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Geometric Shapes */}
      <div
        className="absolute top-40 right-40 w-12 h-12 bg-green-300 opacity-20 animate-spin"
        style={{ animationDuration: "10s" }}
      ></div>
      <div
        className="absolute bottom-40 left-40 w-8 h-8 bg-green-400 opacity-25 animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
}
