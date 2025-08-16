"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20">
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

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block mb-2">
                Delivering <span className="text-green-600">innovative</span>
              </span>
              <span className="block text-green-600 mb-2">
                digital solutions
              </span>
              <span className="block text-gray-700">that drive success</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored to power{" "}
              <span className="text-green-600 font-semibold">innovation</span>{" "}
              and{" "}
              <span className="text-green-600 font-semibold">
                startup success
              </span>
              .
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/schedule-consultation">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors">
                Schedule Consultation
              </Button>
            </Link>

            <Link href="/careers">
              <Button
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold rounded-lg transition-colors"
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
