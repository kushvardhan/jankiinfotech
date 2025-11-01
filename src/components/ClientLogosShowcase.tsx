"use client";

import { Building2, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ClientLogosShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clients = [
    { name: "Ayurakshak", logo: "/Client-logo/Ayurakshaklogo.png", industry: "Healthcare" },
    { name: "Cambridge", logo: "/Client-logo/cambridgelogo.png", industry: "Education" },
    { name: "Delhi Public School", logo: "/Client-logo/delhipublicschool.png", industry: "Education" },
    { name: "Krishna Mehandi", logo: "/Client-logo/krishnamehandilogo.png", industry: "Beauty & Wellness" },
    { name: "Mission Education", logo: "/Client-logo/missioneducation.png", industry: "Education" },
    { name: "Rental Fashion", logo: "/Client-logo/rentalfashionlogo.png", industry: "Fashion & Retail" },
    { name: "Shienitu", logo: "/Client-logo/shienitupdatedlogo.png", industry: "Technology" },
    { name: "Shine It Laundry", logo: "/Client-logo/shineitlaundry.png", industry: "Services" },
    { name: "Shyam Mehandi", logo: "/Client-logo/shyammehandilogo.png", industry: "Beauty & Wellness" },
    { name: "Vinay Mehandi", logo: "/Client-logo/vinaymehandilogo.png", industry: "Beauty & Wellness" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.8;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500" />

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
            From education to healthcare, fashion to technology — empowering brands that inspire.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left and Right buttons */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-12 pb-4"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 sm:w-52 md:w-56 lg:w-64 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="relative aspect-square flex items-center justify-center mb-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">{client.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{client.industry}</p>
                </div>
                <div className="flex justify-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Edge gradients for fade effect */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent pointer-events-none" />
        </div>

        {/* “More” indicator */}
        <div className="flex items-center justify-center gap-3 text-gray-600 text-sm font-medium mt-10">
          <span className="block h-[1px] w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <span className="relative uppercase tracking-[0.25em] bg-white/70 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 ease-out group">
            <span className="text-gray-700">More</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </span>
          <span className="block h-[1px] w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
      </div>

      {/* Hide scrollbar globally */}
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
