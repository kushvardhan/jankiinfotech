"use client";

import {
  ArrowRight,
  Award,
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
  Users,
  Youtube,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", icon: Globe, href: "/service/web-development" },
    {
      name: "Mobile Apps",
      icon: Smartphone,
      href: "/service/application-development",
    },
    { name: "Cloud Solutions", icon: Zap, href: "/service/cloud-optimization" },
    { name: "DevOps", icon: Code, href: "/service/devops-solution" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Internships", href: "/internship" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Schedule Consultation", href: "/schedule-consultation" },
    { name: "Contact", href: "/contact" },
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: Award },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Years Experience", value: "5+", icon: Clock },
    { label: "Team Members", value: "25+", icon: Code },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. We
              specialize in web development, mobile applications, cloud
              solutions, and professional training programs that drive digital
              transformation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-green-400" />
                <a
                  href="tel:+918228800345"
                  className="hover:text-green-400 transition-colors"
                >
                  +91 822-8800-345
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-green-400" />
                <a
                  href="mailto:jankiinfotech7@gmail.com"
                  className="hover:text-green-400 transition-colors"
                >
                  jankiinfotech7@gmail.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-green-400 mt-1" />
                <span>
                  Bihar, India
                  <br />
                  Serving clients globally
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                  >
                    <service.icon className="h-4 w-4 mr-3 text-green-400" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                    <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-green-600 bg-opacity-20 rounded-lg border border-green-500 border-opacity-30">
              <h4 className="font-semibold text-green-400 mb-2">
                Free Consultation
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                Get expert advice on your next project. No commitment required.
              </p>
              <Link
                href="/schedule-consultation"
                className="inline-flex items-center text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
              >
                Schedule Now <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Business Hours */}
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-green-400" />
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Impact</h3>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-green-400" />
                  <div className="text-lg font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/janki-infotech"
                  target="_blank"
                  className="bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all hover:scale-110"
                >
                  <Linkedin className="h-5 w-5 text-blue-400" />
                </Link>
                <Link
                  href="https://www.instagram.com/jankiinfotech"
                  target="_blank"
                  className="bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all hover:scale-110"
                >
                  <Instagram className="h-5 w-5 text-pink-400" />
                </Link>
                <Link
                  href="https://www.facebook.com/jankiinfotech"
                  target="_blank"
                  className="bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all hover:scale-110"
                >
                  <Facebook className="h-5 w-5 text-blue-500" />
                </Link>
                <Link
                  href="https://twitter.com/jankiinfotech"
                  target="_blank"
                  className="bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all hover:scale-110"
                >
                  <Twitter className="h-5 w-5 text-blue-400" />
                </Link>
                <Link
                  href="https://youtube.com/@jankiinfotech"
                  target="_blank"
                  className="bg-white bg-opacity-10 p-3 rounded-lg hover:bg-opacity-20 transition-all hover:scale-110"
                >
                  <Youtube className="h-5 w-5 text-red-500" />
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8 p-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-sm text-green-100 mb-3">
                Get the latest tech insights and updates delivered to your
                inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-white bg-opacity-20 border border-white border-opacity-30 rounded-l-lg placeholder-white placeholder-opacity-70 text-white focus:outline-none focus:bg-opacity-30"
                />
                <button className="px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 border-l-0 rounded-r-lg hover:bg-opacity-30 transition-colors">
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © {currentYear}{" "}
                <span className="font-semibold text-white">JankiInfotech</span>.
                All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Crafted with <Heart className="h-3 w-3 inline text-red-500" />{" "}
                in Bihar, India
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <Link
                href="/privacy"
                className="hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-green-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-green-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
