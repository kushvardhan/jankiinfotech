"use client";

import { Button } from "@/components/ui/button";
import { Star, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showClientsModal, setShowClientsModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-20 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Badge */}
          <div className="my-4"></div>
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
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full">
            <Link href="/schedule-consultation" className="w-full sm:w-auto">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-lg transition-colors">
                Schedule Consultation
              </Button>
            </Link>

            <Link href="/careers" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-lg transition-colors"
              >
                Join Our Team
              </Button>
            </Link>
          </div>

          {/* Client Logos */}
          <div className="pt-12 md:pt-16">
            <p className="text-gray-500 text-sm mb-6 md:mb-8">
              Trusted by startups
            </p>
            <button
              onClick={() => setShowClientsModal(true)}
              className="w-full"
            >
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-6 md:mb-8 ">
                {/* Client logos with green theme */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0">
                  <span className="text-xs text-green-600 font-semibold text-center px-1">
                    Client 1
                  </span>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0">
                  <span className="text-xs text-green-600 font-semibold text-center px-1">
                    Client 3
                  </span>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0">
                  <span className="text-xs text-green-600 font-semibold text-center px-1">
                    Client 4
                  </span>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0">
                  <span className="text-xs text-green-600 font-semibold text-center px-1">
                    Client 5
                  </span>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0">
                  <span className="text-xs text-green-600 font-semibold text-center px-1">
                    Client 6
                  </span>
                </div>
              </div>
            </button>
            <div className="mt-12">
              <div
                className={`transition-all duration-1500 delay-1700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="text-4xl font-bold text-green-600 animate-pulse">
                  50+
                </span>
                <span className="text-gray-700 ml-3 text-lg font-medium">
                  Startup Clients
                </span>
                <Star className="inline ml-2 h-6 w-6 text-yellow-400 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Clients Modal */}
          {showClientsModal && (
            <div
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setShowClientsModal(false)}
            >
              <div
                className="bg-white rounded-xl max-w-2xl w-full p-6 md:p-8 my-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start gap-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Our Trusted Clients
                  </h2>
                  <button
                    onClick={() => setShowClientsModal(false)}
                    className="text-gray-500 hover:text-gray-700 flex-shrink-0 p-1"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  We have successfully served 50+ startup clients,
                  helping them transform their digital presence and achieve
                  their business goals.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="h-20 md:h-24 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-xs md:text-sm text-green-600 font-semibold text-center px-2">
                        Client {i}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-gray-500 text-center">
                  Each client represents our commitment to excellence and
                  innovation
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
