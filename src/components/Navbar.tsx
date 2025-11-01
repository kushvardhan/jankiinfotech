"use client";

import {
  ChevronDown,
  Code2,
  Download,
  FileText,
  GraduationCap,
  MapPin,
  Menu,
  Monitor,
  Phone,
  TrendingUp,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServiceDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceItems = [
    {
      title: "Website Development",
      icon: <Monitor className="w-5 h-5 text-blue-500" />,
      link: "/#services",
      hoverColor: "hover:bg-blue-50",
    },
    {
      title: "GMB (Google My Business)",
      icon: <MapPin className="w-5 h-5 text-red-500" />,
      link: "/#services",
      hoverColor: "hover:bg-red-50",
    },
    {
      title: "Software Development",
      icon: <Code2 className="w-5 h-5 text-purple-500" />,
      link: "/#services",
      hoverColor: "hover:bg-purple-50",
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      link: "/#services",
      hoverColor: "hover:bg-orange-50",
    },
    {
      title: "Internship",
      icon: <GraduationCap className="w-5 h-5 text-green-500" />,
      link: "/internship",
      hoverColor: "hover:bg-green-50",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-white/98 via-green-50/95 to-blue-50/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-white/95 via-purple-50/90 to-pink-50/90 backdrop-blur-md"
      }`}
    >
      {/* Subtle bottom border with gradient */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-50"
        }`}
      ></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="lg" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 ml-4">
            <Link
              href="/"
              className="relative px-4 py-2 text-gray-800 hover:text-green-700 font-medium transition-all duration-300 group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>

            <Link
              href="/about"
              className="relative px-4 py-2 text-gray-800 hover:text-green-700 font-medium transition-all duration-300 group"
            >
              About
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                }
                setServiceDropdown(true);
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setServiceDropdown(false);
                }, 200); // Smooth delay to prevent flickering
              }}
            >
              <button className="relative flex items-center px-4 py-2 text-gray-800 hover:text-green-700 font-medium transition-all duration-300 group">
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    serviceDropdown ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </button>

              {serviceDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 animate-fadeIn"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                    }
                    setServiceDropdown(true);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setServiceDropdown(false);
                    }, 200);
                  }}
                >
                  {serviceItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.link}
                      className={`flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-all duration-300 rounded-lg ${item.hoverColor} hover:translate-x-1 hover:shadow-sm`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/our-work"
              className="relative px-4 py-2 text-gray-800 hover:text-green-700 font-medium transition-all duration-300 group"
            >
              Our Work
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>

            <Link
              href="/careers"
              className="relative px-4 py-2 text-gray-800 hover:text-green-700 font-medium transition-all duration-300 group"
            >
              Careers
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>

            <a
              href="/brochure.pdf"
              download="JankiInfotech-Brochure.pdf"
              className="group relative px-5 py-2.5 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 hover:from-green-700 hover:via-emerald-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
              title="Download our company brochure"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <FileText className="h-4 w-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="hidden lg:inline relative z-10">
                Get Brochure
              </span>
              <Download className="h-4 w-4 group-hover:animate-bounce relative z-10" />
            </a>

            <Link
              href="/schedule-consultation"
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 flex items-center gap-2 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Phone className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Consultation</span>
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Menu className="h-6 w-6" />
              </span>
              <span
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                }`}
              >
                <X className="h-6 w-6" />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-1">
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "Our Work", link: "/our-work" },
                { name: "Internship", link: "/internship" },
                { name: "Careers", link: "/careers" },
                { name: "Success Stories", link: "/success-stories" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="/brochure.pdf"
                  download="JankiInfotech-Brochure.pdf"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                  title="Download our company brochure"
                >
                  <FileText className="h-5 w-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold">Get Our Brochure</span>
                    <span className="text-xs opacity-90">
                      Complete service guide
                    </span>
                  </div>
                  <Download className="h-5 w-5 animate-bounce ml-auto" />
                </a>
                <Link
                  href="/schedule-consultation"
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-in-out forwards;
        }
      `}</style>
    </header>
  );
}
