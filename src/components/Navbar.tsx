"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              JankiInfotech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                onMouseEnter={() => setServiceDropdown(true)}
                onMouseLeave={() => setServiceDropdown(false)}
              >
                Service
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {serviceDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setServiceDropdown(true)}
                  onMouseLeave={() => setServiceDropdown(false)}
                >
                  <Link
                    href="/service/application-development"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Application Development
                  </Link>
                  <Link
                    href="/service/web-development"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/service/cloud-optimization"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Cloud Optimization
                  </Link>
                  <Link
                    href="/service/devops-solution"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    DevOps Solution
                  </Link>
                  <Link
                    href="/service/project-consultation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Project Consultation
                  </Link>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                onMouseEnter={() => setProductDropdown(true)}
                onMouseLeave={() => setProductDropdown(false)}
              >
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {productDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setProductDropdown(true)}
                  onMouseLeave={() => setProductDropdown(false)}
                >
                  <Link
                    href="/product/janki-hrms"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
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
              href="/contact"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Get In Touch
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
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Services</div>
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
                href="/contact"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
