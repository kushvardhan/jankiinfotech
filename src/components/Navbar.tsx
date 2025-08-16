"use client";

import { ChevronDown, Menu, X, Phone } from "lucide-react";
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

          

           
            <Link
              href="/schedule-consultation"
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm"
            >
              <Phone className="ml-1 h-4 w-4" />
              Consultaion
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

              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/schedule-consultation"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors block text-center font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
