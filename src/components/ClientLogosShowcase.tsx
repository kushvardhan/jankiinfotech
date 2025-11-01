"use client";

import { Building2, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClientLogosShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clients = [
    { 
      name: "Ayurakshak", 
      logo: "/Client-logo/Ayurakshaklogo.png",
      industry: "Healthcare",
      color: "from-teal-500 to-cyan-500"
    },
    { 
      name: "Cambridge", 
      logo: "/Client-logo/cambridgelogo.png",
      industry: "Education",
      color: "from-blue-500 to-indigo-500"
    },
    { 
      name: "Delhi Public School", 
      logo: "/Client-logo/delhipublicschool.png",
      industry: "Education",
      color: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Krishna Mehandi", 
      logo: "/Client-logo/krishnamehandilogo.png",
      industry: "Beauty & Wellness",
      color: "from-pink-500 to-rose-500"
    },
    { 
      name: "Mission Education", 
      logo: "/Client-logo/missioneducation.png",
      industry: "Education",
      color: "from-orange-500 to-amber-500"
    },
    { 
      name: "Rental Fashion", 
      logo: "/Client-logo/rentalfashionlogo.png",
      industry: "Fashion & Retail",
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Shienitu", 
      logo: "/Client-logo/shienitupdatedlogo.png",
      industry: "Technology",
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Shine It Laundry", 
      logo: "/Client-logo/shineitlaundry.png",
      industry: "Services",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      name: "Shyam Mehandi", 
      logo: "/Client-logo/shyammehandilogo.png",
      industry: "Beauty & Wellness",
      color: "from-rose-500 to-red-500"
    },
    { 
      name: "Vinay Mehandi", 
      logo: "/Client-logo/vinaymehandilogo.png",
      industry: "Beauty & Wellness",
      color: "from-amber-500 to-orange-500"
    },
  ];

  const itemsPerPage = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-blue-100 px-6 py-3 rounded-full mb-6 shadow-md">
            <Building2 className="h-5 w-5 text-teal-600 mr-2" />
            <span className="text-sm font-semibold text-teal-800">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Diverse Industries
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From education to healthcare, fashion to technology - we empower businesses across sectors
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white hover:bg-gray-50 p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-200"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white hover:bg-gray-50 p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-200"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>

          {/* Logos grid */}
          <div className="overflow-hidden px-2">
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-500"
              style={{
                transform: `translateX(-${(currentIndex % clients.length) * (100 / 4)}%)`,
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${(index % 10) * 100}ms` }}
                >
                  <div className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* Logo */}
                    <div className="relative z-10 aspect-square flex items-center justify-center mb-4">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={120}
                        height={120}
                        className="object-contain w-full h-full transition-all duration-500 transform group-hover:scale-110"
                      />
                    </div>

                    {/* Info */}
                    <div className="relative z-10 text-center">
                      <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{client.name}</h3>
                      <p className="text-xs text-gray-500">{client.industry}</p>
                    </div>

                    {/* Star rating */}
                    <div className="relative z-10 flex justify-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex % clients.length
                    ? "w-8 bg-gradient-to-r from-teal-600 to-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

