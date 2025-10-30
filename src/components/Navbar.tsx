"use client";

import {
  ChevronDown,
  Code2,
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
      link: "#services",
      hoverColor: "hover:bg-blue-50",
    },
    {
      title: "GMB (Google My Business)",
      icon: <MapPin className="w-5 h-5 text-red-500" />,
      link: "#services",
      hoverColor: "hover:bg-red-50",
    },
    {
      title: "Software Development",
      icon: <Code2 className="w-5 h-5 text-purple-500" />,
      link: "#services",
      hoverColor: "hover:bg-purple-50",
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      link: "#services",
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 ml-4">
            <Link
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-3 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              About
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
              <button className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
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
              className="px-3 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Our Work
            </Link>

            <Link
              href="/careers"
              className="px-3 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Careers
            </Link>

            <Link
              href="/schedule-consultation"
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-md"
            >
              <Phone className="ml-1 h-4 w-4" />
              Consultation
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
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/schedule-consultation"
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="ml-1 h-4 w-4" />
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
