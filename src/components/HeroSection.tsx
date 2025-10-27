"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showClientsModal, setShowClientsModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-20">
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
            <button
              onClick={() => setShowClientsModal(true)}
              className="w-full group"
            >
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mb-8 group-hover:opacity-100 transition-opacity duration-300">
                {/* Client logos with green theme */}
                <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 group-hover:border-green-400 group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <span className="text-xs text-green-600 font-semibold">
                    Client 1
                  </span>
                </div>
                <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 group-hover:border-green-400 group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <span className="text-xs text-green-600 font-semibold">
                    Client 3
                  </span>
                </div>
                <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 group-hover:border-green-400 group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <span className="text-xs text-green-600 font-semibold">
                    Client 4
                  </span>
                </div>
                <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 group-hover:border-green-400 group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <span className="text-xs text-green-600 font-semibold">
                    Client 5
                  </span>
                </div>
                <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 group-hover:border-green-400 group-hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <span className="text-xs text-green-600 font-semibold">
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
                  500+
                </span>
                <span className="text-gray-700 ml-3 text-lg font-medium">
                  Startup Clients Worldwide
                </span>
                <Star className="inline ml-2 h-6 w-6 text-yellow-400 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Clients Modal */}
          {showClientsModal && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Trusted Clients
                  </h2>
                  <button
                    onClick={() => setShowClientsModal(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-gray-600 mb-6">
                  We have successfully served 500+ startup clients worldwide,
                  helping them transform their digital presence and achieve
                  their business goals.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="h-24 bg-green-100 rounded-lg flex items-center justify-center border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-sm text-green-600 font-semibold">
                        Client {i}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 text-center">
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
