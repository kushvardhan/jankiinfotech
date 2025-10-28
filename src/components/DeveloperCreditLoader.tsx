"use client";

import { useEffect, useState } from "react";

export default function DeveloperCreditLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loader for 3 seconds on page load
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 z-[9999] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Animated circle */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-4 border-white/30" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-white animate-spin" />
            <div className="absolute inset-2 rounded-full border-2 border-white/20 animate-pulse" />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            JankiInfotech
          </h2>
          <p className="text-xl text-white/90 font-semibold mb-6">
            Crafted with precision and innovation
          </p>

          {/* Developer Credit */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
            <p className="text-white/80 text-sm mb-3">Developed & Designed by</p>
            <h3 className="text-3xl font-bold text-white mb-2">Kush Vardhan</h3>
            <p className="text-white/70 text-sm mb-4">Full Stack Developer</p>
            <a
              href="mailto:kushvardhan39797@gmail.com"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              kushvardhan39797@gmail.com
            </a>
            <div className="mt-4 pt-4 border-t border-white/20">
              <a
                href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 text-sm font-medium transition-colors inline-block"
              >
                View Portfolio →
              </a>
            </div>
          </div>

          {/* Loading text */}
          <div className="pt-8">
            <p className="text-white/70 text-sm">
              Loading amazing content
              <span className="inline-block ml-1">
                <span className="animate-bounce inline-block">.</span>
                <span className="animate-bounce inline-block" style={{ animationDelay: "0.1s" }}>
                  .
                </span>
                <span className="animate-bounce inline-block" style={{ animationDelay: "0.2s" }}>
                  .
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

