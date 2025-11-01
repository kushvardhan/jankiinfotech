"use client";

import {
  ArrowRight,
  Clock,
  Code,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Twitter,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  useFormValidation,
  ValidationMessage,
  ValidationRules,
} from "./FormValidation";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const { handleFieldChange, getFieldValidation, isFormValid } =
    useFormValidation();

  const handleEmailChange = (value: string) => {
    setEmail(value);
    handleFieldChange("newsletter_email", value, ValidationRules.email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid() || !email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      console.log("📧 Newsletter subscription (frontend only):", { email });

      setMessage("Thank you for subscribing! We'll keep you updated.");
      setEmail("");
      setTimeout(() => setMessage(""), 5000);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const colorClasses = {
    blue: {
      text: "text-blue-600",
      hover: "hover:text-blue-700",
    },
    purple: {
      text: "text-purple-600",
      hover: "hover:text-purple-700",
    },
    green: {
      text: "text-green-600",
      hover: "hover:text-green-700",
    },
    red: {
      text: "text-red-600",
      hover: "hover:text-red-700",
    },
  };

  const services = [
    { name: "Web Development", icon: Globe, href: "/#services", color: "blue" },
    {
      name: "Mobile Apps",
      icon: Smartphone,
      href: "/#services",
      color: "purple",
    },
    { name: "Cloud Solutions", icon: Zap, href: "/#services", color: "green" },
    { name: "DevOps", icon: Code, href: "/#services", color: "red" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Internships", href: "/internship" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Schedule Consultation", href: "/schedule-consultation" },
    { name: "Our Work", href: "/our-work" },
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-white via-green-50 to-green-100 text-gray-800 border-t border-green-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo className="text-green-800" />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Empowering businesses with{" "}
                <span className="text-green-700 font-semibold">
                  cutting-edge technology
                </span>{" "}
                solutions. We specialize in{" "}
                <span className="text-blue-600 font-medium">web</span> and{" "}
                <span className="text-purple-600 font-medium">mobile</span>{" "}
                development, <span className="text-green-600">cloud</span>{" "}
                solutions, and professional training programs.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-3 text-green-600" />
                  <a
                    href="tel:+91 76329 66717"
                    className="hover:text-green-700 transition-colors"
                  >
                    +91 76329 66717
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-3 text-green-600" />
                  <a
                    href="mailto:jankiinfotech7@gmail.com"
                    className="hover:text-green-700 transition-colors"
                  >
                    jankiinfotech7@gmail.com
                  </a>
                </div>
                <div className="flex items-start text-gray-600">
                  <MapPin className="h-4 w-4 mr-3 text-green-600 mt-1" />
                  <span>
                    Bihar, India
                    <br />
                    Serving clients globally 🌍
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className={`flex items-center text-gray-600 ${
                        colorClasses[service.color].hover
                      } transition-colors group`}
                    >
                      <service.icon
                        className={`h-4 w-4 mr-3 ${
                          colorClasses[service.color].text
                        }`}
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {service.name}
                      </span>
                      <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
                <h4 className="font-semibold text-green-800 mb-2">
                  Free Consultation
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Get expert advice on your next project. No commitment
                  required.
                </p>
                <Link
                  href="/schedule-consultation"
                  className="inline-flex items-center text-sm font-medium text-purple-700 hover:text-purple-800 transition-colors"
                >
                  Schedule Now <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-green-700 transition-colors hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Business Hours */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-green-600" />
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span className="text-green-700">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-purple-700">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-600 font-medium">Anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                <Link
                  href="https://www.linkedin.com/company/jankiinfotech/?viewAsMember=true"
                  target="_blank"
                  className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-all hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 text-blue-500" />
                </Link>
                <Link
                  href="https://www.instagram.com/_jankiinfotech_/"
                  target="_blank"
                  className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-all hover:scale-110"
                >
                  <Instagram className="h-5 w-5 text-pink-500" />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61581206342758"
                  target="_blank"
                  className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-all hover:scale-110"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </Link>
                <Link
                  href="https://x.com/Jankiinfotech_"
                  target="_blank"
                  className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-all hover:scale-110"
                >
                  <Twitter className="h-5 w-5 text-blue-400" />
                </Link>
              </div>

              {/* Newsletter */}
              <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-sm text-green-100 mb-3">
                  Get the latest tech insights delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={isSubmitting}
                      className="flex-1 min-w-0 px-3 py-2 text-sm bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg sm:rounded-l-lg sm:rounded-r-none placeholder-white placeholder-opacity-70 text-zinc-700 font-semibold focus:outline-none focus:bg-opacity-30 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-opacity-30 transition-colors disabled:opacity-50 flex items-center justify-center flex-shrink-0"
                    >
                      {isSubmitting ? (
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <ArrowRight className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>

                  <ValidationMessage
                    result={getFieldValidation("newsletter_email").result}
                    show={getFieldValidation("newsletter_email").showMessage}
                  />

                  {message && (
                    <p
                      className={`text-sm ${
                        message.includes("Thank you")
                          ? "text-blue-200"
                          : "text-red-200"
                      }`}
                    >
                      {message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-600">
                  © {currentYear}{" "}
                  <span className="font-semibold text-green-700">
                    JankiInfotech
                  </span>{" "}
                  — All rights reserved.
                </p>
                <p
                  title="kushvardhan39797@gmail.com"
                  className="text-sm text-gray-500 mt-1"
                >
                  Crafted with{" "}
                  <Heart className="h-5 w-5 inline text-red-600 cursor-pointer" />{" "}
                  by{" "}
                  <Link
                    target="_blank"
                    href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                  >
                    <span className="cursor-pointer hover:text-blue-700 text-gray-800 font-mono">
                      Kush
                    </span>
                  </Link>
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <Link
                  href="/privacy"
                  className="hover:text-green-700 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-green-700 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="hover:text-green-700 transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
