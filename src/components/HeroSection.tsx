"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
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

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="block">Delivering secure</span>
            <span className="block text-green-600">digital solutions</span>
            <span className="block">and scalable cloud</span>
            <span className="block">infrastructure</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tailored to power innovation and startup success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
