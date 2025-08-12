"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export default function SmallFooter() {
  return (
    <footer className="relative bg-gradient-to-r from-white via-green-50 to-green-100 border-t border-green-200/30 py-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-10 w-32 h-32 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-4 right-10 w-24 h-24 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105 transform"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105 transform"
          >
            About
          </Link>
          <Link
            href="/careers"
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105 transform"
          >
            Careers
          </Link>
          <Link
            href="/community"
            className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105 transform"
          >
            Community
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://linkedin.com/company/janki-infotech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/jankiinfotech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.876-.875-1.366-2.026-1.366-3.323s.49-2.448 1.366-3.323c.875-.876 2.026-1.366 3.323-1.366s2.448.49 3.323 1.366c.876.875 1.366 2.026 1.366 3.323s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366z" />
            </svg>
          </a>

          <a
            href="https://facebook.com/jankiinfotech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110 transform"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-green-200/50 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
            <div>
              © {new Date().getFullYear()} JankiInfotech. All rights reserved.
            </div>
            <div className="flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" />
            </div>
            <div className="text-xs opacity-75">Crafted by Kush Vardhan</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-500 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-200 text-sm mb-4 md:mb-0">
              © 2025 JankiInfotech. All rights reserved.
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/privacy"
                className="text-green-200 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-green-400">•</span>
              <Link
                href="/terms"
                className="text-green-200 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span className="text-green-400">•</span>
              <div className="flex items-center text-green-200 text-sm">
                Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> in
                Bihar
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://linkedin.com/company/janki-infotech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white transition-all duration-300 hover:scale-110 transform"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/jankiinfotech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white transition-all duration-300 hover:scale-110 transform"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.876-.875-1.366-2.026-1.366-3.323s.49-2.448 1.366-3.323c.875-.876 2.026-1.366 3.323-1.366s2.448.49 3.323 1.366c.876.875 1.366 2.026 1.366 3.323s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366z" />
            </svg>
          </a>

          <a
            href="https://facebook.com/jankiinfotech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white transition-all duration-300 hover:scale-110 transform"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Hidden Developer Signature */}
      <div
        className="absolute bottom-0 right-0 opacity-0 text-xs"
        style={{
          fontSize: "1px",
          color: "transparent",
          userSelect: "none",
          pointerEvents: "none",
        }}
        title="Crafted with passion by Kush Vardhan"
      >
        {/* Developed by Kush Vardhan (kushvardhan39797@gmail.com) */}
        <span>KV</span>
      </div>
    </footer>
  );
}
