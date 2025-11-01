"use client";

import { Button } from "@/components/ui/button";
import { Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showClientsModal, setShowClientsModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clients = [
    { name: "Ayurakshak", logo: "/Client-logo/Ayurakshaklogo.png" },
    { name: "Cambridge", logo: "/Client-logo/cambridgelogo.png" },
    { name: "Delhi Public School", logo: "/Client-logo/delhipublicschool.png" },
    { name: "Krishna Mehandi", logo: "/Client-logo/krishnamehandilogo.png" },
    { name: "Mission Education", logo: "/Client-logo/missioneducation.png" },
    { name: "Rental Fashion", logo: "/Client-logo/rentalfashionlogo.png" },
    { name: "Shien It", logo: "/Client-logo/shienitupdatedlogo.png" },
    { name: "Shine It Laundry", logo: "/Client-logo/shineitlaundry.png" },
  ];

  return (
    <section className="relative  bg-gradient-to-br from-white via-green-50/30 to-blue-50/40 md:from-blue-50 md:via-purple-50 md:to-pink-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-20 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient blobs - more subtle on mobile */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-200/20 md:from-blue-300 md:to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 md:opacity-40 animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-200/20 to-teal-200/20 md:from-green-200 md:to-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 md:opacity-30 animate-blob animation-delay-6000"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-float-slow opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-300 rounded-full animate-float-medium opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-300 rounded-full animate-float-fast opacity-60"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-300 rounded-full animate-float-slow opacity-60"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Badge */}
          <div className="my-2"></div>
          {/* Main Heading */}
          <div className="mb-8 ">
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
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                innovation
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                startup success
              </span>
              .
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full">
            <Link href="/schedule-consultation" className="w-full sm:w-auto">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 text-base md:text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
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

          {/* Client Logos - Infinite Scrolling Marquee */}
          <div className="pt-12 md:pt-16">
            <p className="text-gray-500 text-sm mb-6 md:mb-8">
              Trusted by startups
            </p>

            {/* Infinite Scrolling Container */}
            <div className="relative w-full mb-6 md:mb-8">
              {/* Blur gradient overlays - subtle on mobile, more visible on desktop */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-green-50/50 to-transparent md:from-blue-50 md:via-purple-50/80 md:to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-blue-50/50 to-transparent md:from-pink-50 md:via-purple-50/80 md:to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling logos wrapper */}
              <div className="overflow-hidden py-4">
                <div className="flex gap-6 md:gap-8 items-center animate-scroll-seamless hover:animation-pause">
                  {/* Duplicate array 3 times for seamless infinite scroll */}
                  {[...clients, ...clients, ...clients].map((client, index) => (
                    <div
                      key={index}
                      title={client.name}
                      className="group flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-gray-200 hover:border-green-400 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-500 cursor-pointer p-3 md:p-4 relative overflow-hidden"
                    >
                      {/* Logo */}
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full relative z-10 transition-all duration-500 transform group-hover:scale-110"
                      />

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>
                  ))}
                </div>
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
                <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-pulse">
                  50+
                </span>
                <span className="text-gray-700 ml-3 text-lg font-medium">
                  Startup Clients
                </span>
                <Star className="inline ml-2 h-6 w-6 text-yellow-500 animate-bounce" />
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
                  We have successfully served 50+ startup clients, helping them
                  transform their digital presence and achieve their business
                  goals.
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

      <style jsx>{`
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(calc(-100% / 3)) translateY(0);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        .animate-scroll-seamless {
          animation: scroll-seamless 22s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .animate-scroll-seamless {
            animation: scroll-seamless 10s linear infinite;
          }
        }

        .animation-pause:hover {
          animation-play-state: paused;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
