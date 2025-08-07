"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-12">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </Link>

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
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-green-50 hover:scale-105 animate-in slide-in-from-left-2"
                style={{ animationDelay: "0.1s" }}
              >
                Home
              </Link>
              <div
                className="space-y-2 animate-in slide-in-from-left-2"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-gray-700 font-medium py-2 px-4">
                  Services
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/service/application-development"
                    className="block text-sm text-gray-600 hover:text-green-600"
                  >
                    Application Development
                  </Link>
                  <Link
                    href="/service/web-development"
                    className="block text-sm text-gray-600 hover:text-green-600"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/service/cloud-optimization"
                    className="block text-sm text-gray-600 hover:text-green-600"
                  >
                    Cloud Optimization
                  </Link>
                  <Link
                    href="/service/devops-solution"
                    className="block text-sm text-gray-600 hover:text-green-600"
                  >
                    DevOps Solution
                  </Link>
                  <Link
                    href="/service/project-consultation"
                    className="block text-sm text-gray-600 hover:text-green-600"
                  >
                    Project Consultation
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Products</div>
                <div className="pl-4">
                  <Link
                    href="/product/janki-hrms"
                    className="block text-sm text-gray-600 hover:text-green-600"
                  >
                    Janki HRMS
                  </Link>
                </div>
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
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 block text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
