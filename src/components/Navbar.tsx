"use client";

import {
  Briefcase,
  ChevronDown,
  GraduationCap,
  Home,
  Info,
  Menu,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for beautiful navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-gradient-to-b from-white/95 via-white/90 to-transparent backdrop-blur-2xl shadow-2xl border-b border-green-100/50"
          : "bg-gradient-to-b from-white/80 via-white/60 to-transparent backdrop-blur-xl border-b border-white/20"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 ml-4">
            <Link
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServiceDropdown(true)}
              onMouseLeave={() => setServiceDropdown(false)}
            >
              <button className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {serviceDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    href="/internship"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Internships
                  </Link>
                  <Link
                    href="/careers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/community"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Community
                  </Link>
                  <Link
                    href="/success-stories"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Success Stories
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setServiceDropdown(true)}
                onMouseLeave={() => setServiceDropdown(false)}
              >
                Service
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    serviceDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              {serviceDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setServiceDropdown(true)}
                  onMouseLeave={() => setServiceDropdown(false)}
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <Link
                    href="/service/application-development"
                    className="group flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 transition-all duration-300 rounded-lg mx-2 hover:scale-105 hover:shadow-md"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Application Development
                  </Link>
                  <Link
                    href="/service/web-development"
                    className="group flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 transition-all duration-300 rounded-lg mx-2 hover:scale-105 hover:shadow-md"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Web Development
                  </Link>
                  <Link
                    href="/service/cloud-optimization"
                    className="group flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 transition-all duration-300 rounded-lg mx-2 hover:scale-105 hover:shadow-md"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Cloud Optimization
                  </Link>
                  <Link
                    href="/service/devops-solution"
                    className="group flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 transition-all duration-300 rounded-lg mx-2 hover:scale-105 hover:shadow-md"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    DevOps Solution
                  </Link>
                  <Link
                    href="/service/project-consultation"
                    className="group flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 transition-all duration-300 rounded-lg mx-2 hover:scale-105 hover:shadow-md"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Project Consultation
                  </Link>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-green-600 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setProductDropdown(true)}
                onMouseLeave={() => setProductDropdown(false)}
              >
                Product
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    productDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              {productDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 animate-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setProductDropdown(true)}
                  onMouseLeave={() => setProductDropdown(false)}
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <Link
                    href="/product/janki-hrms"
                    className="group flex items-center px-6 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 transition-all duration-300 rounded-lg mx-2 hover:scale-105 hover:shadow-md"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Janki HRMS
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/community"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Community
            </Link>
            <Link
              href="/careers"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Career
            </Link>
            <Link
              href="/internship"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Program
            </Link>
            <Link
              href="/success-stories"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="/schedule-consultation"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
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
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/internship"
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Internships
              </Link>
              <Link
                href="/careers"
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/community"
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/success-stories"
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Success Stories
              </Link>

              <div className="pt-4 border-t border-green-200">
                <Link
                  href="/schedule-consultation"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 block text-center font-semibold transform hover:translate-y-[-2px]"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
