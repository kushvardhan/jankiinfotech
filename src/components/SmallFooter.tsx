"use client";

import { Heart, Twitter, Youtube, Facebook, Sparkles, Code, MapPin } from "lucide-react";
import Link from "next/link";

export default function SmallFooter() {
  return (
    <footer className="relative bg-gradient-to-r from-white via-green-50 to-green-100 text-gray-800 border-t border-green-300/30 py-6 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-2 left-8 w-16 h-16 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-2 right-8 w-12 h-12 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 mb-4">
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105 transform flex items-center gap-1 group"
          >
            <Sparkles className="h-4 w-4 group-hover:animate-spin" />
            About us
          </Link>
          <Link 
            href="/community" 
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105 transform flex items-center gap-1 group"
          >
            <Heart className="h-4 w-4 group-hover:animate-pulse text-red-500" />
            Community
          </Link>
          <Link 
            href="/careers" 
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105 transform flex items-center gap-1 group"
          >
            <Code className="h-4 w-4 group-hover:animate-bounce" />
            Jobs
          </Link>
          <Link 
            href="/internship" 
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105 transform flex items-center gap-1 group"
          >
            <MapPin className="h-4 w-4 group-hover:animate-pulse" />
            Internships
          </Link>
        </nav>

        {/* Social Links */}
        <nav className="mb-4">
          <div className="flex justify-center items-center gap-4">
            <Link 
              href="https://twitter.com/jankiinfotech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform group"
            >
              <Twitter className="h-6 w-6 group-hover:animate-bounce" />
            </Link>
            
            <Link 
              href="https://youtube.com/@jankiinfotech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform group"
            >
              <Youtube className="h-6 w-6 group-hover:animate-pulse" />
            </Link>
            
            <Link 
              href="https://facebook.com/jankiinfotech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform group"
            >
              <Facebook className="h-6 w-6 group-hover:animate-bounce" />
            </Link>
          </div>
        </nav>

        {/* Copyright */}
        <aside className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-gray-600">
            <p className="flex items-center gap-1">
              Copyright © {new Date().getFullYear()} - All rights reserved by 
              <span className="font-semibold text-green-600 ml-1">JankiInfotech</span>
            </p>
            <div className="flex items-center gap-1 text-xs">
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> 
            </div>
            <div title="kushvardhan39797@gmail.com" className="text-xs text-zinc-500 flex items-center gap-1">
  <Code className="h-3 w-3" />
  Crafted by <span className="text-zinc-600 font-mono text-sm">kushvardhan39797@gmail.com</span>
</div>

          </div>
        </aside>
      </div>
    </footer>
  );
}
