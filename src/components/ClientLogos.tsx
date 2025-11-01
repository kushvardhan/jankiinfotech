"use client";

import { Award, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ClientLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clients = [
    {
      name: "Ayurakshak",
      logo: "/Client-logo/Ayurakshaklogo.png",
      industry: "Healthcare",
      project: "E-commerce Platform",
    },
    {
      name: "Cambridge",
      logo: "/Client-logo/cambridgelogo.png",
      industry: "Education",
      project: "Learning Management",
    },
    {
      name: "Delhi Public School",
      logo: "/Client-logo/delhipublicschool.png",
      industry: "Education",
      project: "School Portal",
    },
    {
      name: "Krishna Mehandi",
      logo: "/Client-logo/krishnamehandilogo.png",
      industry: "Beauty & Wellness",
      project: "Booking System",
    },
    {
      name: "Mission Education",
      logo: "/Client-logo/missioneducation.png",
      industry: "Education",
      project: "Online Learning",
    },
    {
      name: "Rental Fashion",
      logo: "/Client-logo/rentalfashionlogo.png",
      industry: "Fashion & Retail",
      project: "Rental Platform",
    },
    {
      name: "Shienitu",
      logo: "/Client-logo/shienitupdatedlogo.png",
      industry: "Technology",
      project: "Web Application",
    },
    {
      name: "Shine It Laundry",
      logo: "/Client-logo/shineitlaundry.png",
      industry: "Services",
      project: "Service Management",
    },
    {
      name: "Shyam Mehandi",
      logo: "/Client-logo/shyammehandilogo.png",
      industry: "Beauty & Wellness",
      project: "Booking Platform",
    },
    {
      name: "Vinay Mehandi",
      logo: "/Client-logo/vinaymehandilogo.png",
      industry: "Beauty & Wellness",
      project: "Business Website",
    },
  ];

  // Touch/Mouse drag handlers for mobile scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full mb-6">
            <Award className="h-5 w-5 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-800">
              Trusted by Leading Brands
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Valued Partners
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proud to collaborate with innovative businesses across industries,
            helping them achieve digital excellence and growth.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-purple-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Happy Clients
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-blue-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Satisfaction Rate
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-green-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Projects Delivered
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-orange-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Support Available
            </div>
          </div>
        </div>

        {/* Client Logos Grid - Desktop: Grid, Mobile: Infinite Scroll */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-300 overflow-hidden"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Logo container */}
                <div className="relative z-10 aspect-square flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>

                {/* Client name - always visible */}
                <div className="relative z-10 mt-4 text-center">
                  <p className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {client.name}
                  </p>
                </div>

                {/* Client info - visible on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/95 via-gray-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 pt-16 rounded-b-2xl z-20 transform translate-y-2 group-hover:translate-y-0">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-emerald-400 flex items-center justify-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                      {client.industry}
                    </p>
                    <p className="text-xs text-gray-300 text-center">
                      {client.project}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
              </div>
            ))}
          </div>

          {/* Mobile Infinite Scroll View */}
          <div className="md:hidden relative">
            {/* Blur gradients on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-purple-50 via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-blue-50 via-white/80 to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleDragEnd}
              style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
            >
              <div className="flex gap-4 py-4 px-2">
                {/* Triple the array for infinite feel */}
                {[...clients, ...clients, ...clients].map((client, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-4 shadow-md active:shadow-xl transition-all duration-300 border border-gray-100 active:border-purple-300 flex-shrink-0 w-32"
                  >
                    {/* Gradient background on active */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 opacity-0 group-active:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Logo container */}
                    <div className="relative z-10 aspect-square flex items-center justify-center mb-2">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full transition-transform duration-300 group-active:scale-95"
                      />
                    </div>

                    {/* Client name */}
                    <div className="relative z-10 text-center">
                      <p className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent line-clamp-2">
                        {client.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-gray-600">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">
              Join 50+ successful businesses transforming digitally
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
