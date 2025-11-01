"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClientLogosMarquee() {
  const [isVisible, setIsVisible] = useState(false);

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
    { name: "Shienitu", logo: "/Client-logo/shienitupdatedlogo.png" },
    { name: "Shine It Laundry", logo: "/Client-logo/shineitlaundry.png" },
    { name: "Shyam Mehandi", logo: "/Client-logo/shyammehandilogo.png" },
    { name: "Vinay Mehandi", logo: "/Client-logo/vinaymehandilogo.png" },
  ];

  // Duplicate for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative py-16 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 via-pink-100/50 to-purple-100/50 animate-gradient-x"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-4 shadow-md">
            <Sparkles className="h-4 w-4 text-orange-600 mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Brands That Trust Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powering Success for{" "}
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-orange-50 via-pink-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-purple-50 via-pink-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee hover:pause-animation">
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 md:mx-8"
                  style={{ width: "150px" }}
                >
                  <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-100">
                    <div className="aspect-square flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={100}
                        height={100}
                        className="object-contain w-full h-full filter grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm text-gray-600 font-medium">
            Trusted by businesses across education, healthcare, fashion, and more
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
}

