"use client";

import {
  Code,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  MapPin,
  Sparkles,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function SmallFooter() {
  return (
    <footer className="relative bg-gradient-to-r from-white via-green-50 to-green-100 text-gray-800 border-t border-green-300/30 py-4 md:py-6 overflow-x-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-2 left-4 md:left-8 w-12 md:w-16 h-12 md:h-16 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-2 right-4 md:right-8 w-10 md:w-12 h-10 md:h-12 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-3 md:mb-4">
          <Link
            href="/about"
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-sm md:text-base flex items-center gap-1 group whitespace-nowrap"
          >
            <Sparkles className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0 group-hover:animate-spin" />
            <span className="hidden sm:inline">About us</span>
            <span className="sm:hidden">About</span>
          </Link>
          <Link
            href="/community"
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-sm md:text-base flex items-center gap-1 group whitespace-nowrap"
          >
            <Heart className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0 group-hover:animate-pulse text-red-500" />
            Community
          </Link>
          <Link
            href="/careers"
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-sm md:text-base flex items-center gap-1 group whitespace-nowrap"
          >
            <Code className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0 group-hover:animate-bounce" />
            Jobs
          </Link>
          <Link
            href="/internship"
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium text-sm md:text-base flex items-center gap-1 group whitespace-nowrap"
          >
            <MapPin className="h-3 md:h-4 w-3 md:w-4 flex-shrink-0 group-hover:animate-pulse" />
            <span className="hidden sm:inline">Internships</span>
            <span className="sm:hidden">Intern</span>
          </Link>
        </nav>

        {/* Social Links */}
        <nav className="mb-3 md:mb-4">
          <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            <Link
              href="https://x.com/Jankiinfotech_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform group p-1"
            >
              <Twitter className="h-5 md:h-6 w-5 md:w-6 group-hover:animate-bounce flex-shrink-0" />
            </Link>

            <Link
              href="https://youtube.com/@jankiinfotech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform group p-1"
            >
              <Youtube className="h-5 md:h-6 w-5 md:w-6 group-hover:animate-pulse flex-shrink-0" />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=61581206342758"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform group p-1"
            >
              <Facebook className="h-5 md:h-6 w-5 md:w-6 group-hover:animate-bounce flex-shrink-0" />
            </Link>
            <Link
              href="https://www.instagram.com/_jankiinfotech_/"
              target="_blank"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform group p-1"
            >
              <Instagram className="h-5 md:h-6 w-5 md:w-6 group-hover:animate-bounce flex-shrink-0" />
            </Link>
            <Link
              href="https://www.instagram.com/_jankiinfotech_/"
              target="_blank"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform group p-1"
            >
              <Linkedin className="h-5 md:h-6 w-5 md:w-6 group-hover:animate-bounce flex-shrink-0" />
            </Link>
          </div>
        </nav>

        {/* Copyright */}
        <aside className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-1 md:gap-2 lg:gap-4 text-xs md:text-sm text-gray-600">
            <p className="flex items-center gap-1 flex-wrap justify-center">
              Copyright © {new Date().getFullYear()} - All rights reserved by
              <span className="font-semibold text-green-600">
                JankiInfotech
              </span>
            </p>
            <div className="flex items-center gap-1 text-xs">
              Made with{" "}
              <Heart className="h-3 md:h-4 w-3 md:w-4 text-red-500 animate-pulse flex-shrink-0" />
            </div>
            <div
              title="kushvardhan39797@gmail.com"
              className="text-xs text-zinc-500 flex items-center gap-1"
            >
              <Code className="h-3 w-3 flex-shrink-0" />
              <span className="hidden sm:inline">Crafted by</span>
              <Link target="_blank" href='https://kush-personal-portfolio-my-portfolio.vercel.app/' >
                <span  className="cursor-pointer text-zinc-600 hover:text-blue-600 font-mono text-sm md:text-md">
                Kush
              </span>
              </Link>
              
            </div>
          </div>
        </aside>
      </div>
    </footer>
  );
}
