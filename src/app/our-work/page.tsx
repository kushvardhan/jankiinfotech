"use client";

import { Navbar } from "@/components/Navbar";
import SmallFooter from "@/components/SmallFooter";
import { Calendar, ExternalLink, Globe, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  image: string;
  duration: string;
  liveLink?: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Ayurakshak",
    image: "/our-projects/Ayurakshak.png",
    duration: "3 months",
    liveLink: "https://ayurakshak.com",
    description: "Naturopathy & Ayurvedic healing platform",
    fullDescription:
      "A comprehensive healthcare platform dedicated to making traditional Naturopathy & Ayurvedic healing accessible to all. Ayurakshak is a registered NGO providing natural healthcare solutions to 10,000+ patients across India through 55+ hospitals and 70+ clinics.",
    features: [
      "Disease consultation & treatment booking",
      "Health camp management system",
      "Patient testimonials & success stories",
      "Product catalog for natural remedies",
      "Responsive design for all devices",
      "SEO optimized for healthcare searches",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js"],
  },
  {
    id: "2",
    title: "Krishna Mehandi",
    image: "/our-projects/KrishnaMehandi.png",
    duration: "2 months",
    liveLink: "https://krishnamehandiartist.in/",
    description: "Professional bridal mehandi artist portfolio",
    fullDescription:
      "A stunning portfolio website for a professional mehandi artist in Noida with 10+ years of experience. Features an extensive gallery of 500+ designs, online booking system, and client testimonials showcasing expertise in Arabic, Rajasthani, and modern mehandi styles.",
    features: [
      "Portfolio gallery with 500+ designs",
      "Online booking system",
      "Service pricing & packages",
      "Client reviews & ratings",
      "WhatsApp integration for quick bookings",
      "Mobile-optimized design",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
  },
  {
    id: "3",
    title: "Cambridge Trust",
    image: "/our-projects/CambrigeTrust.png",
    duration: "4 months",
    liveLink: "https://cambridgewelfaretrust.org/",
    description: "Educational charity & welfare organization",
    fullDescription:
      "A registered charitable trust providing quality education and welfare support to underprivileged children in Bihar. Cambridge Trust has impacted 500+ children through 10+ school partnerships and comprehensive social welfare programs.",
    features: [
      "Donation management system",
      "Project showcase & impact tracking",
      "Beneficiary testimonials",
      "Secure payment integration",
      "Transparency & accountability features",
      "Multi-language support",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Razorpay", "Node.js"],
  },
  {
    id: "4",
    title: "Ravi Mehandi",
    image: "/our-projects/RaviMehandi.png",
    duration: "2 months",
    liveLink: "https://ravi-mehandi.vercel.app/",
    description: "Traditional mehandi artist booking platform",
    fullDescription:
      "A professional website for a traditional mehandi artist in Motihari with 12+ years of experience and 2000+ happy clients. Features a beautiful gallery, service showcase, and easy booking system for bridal, Arabic, and custom mehandi designs.",
    features: [
      "Service showcase with pricing",
      "Gallery with design categories",
      "Client testimonials & reviews",
      "Easy contact & booking forms",
      "Location & hours information",
      "Social media integration",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "TypeScript"],
  },
];

export default function OurWorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[35vh] bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-8">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Our <span className="text-green-600">Portfolio</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into impactful digital solutions that drive real
            business results
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-green-200 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 md:h-52 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-700 mb-4 text-sm">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span className="font-medium">{project.duration}</span>
                  </div>

                  {/* Developer Credit - Lowkey */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Developed by</span>
                      <Link
                        href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                        target="_blank"
                        className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1 transition-colors"
                        title="Developer Portfolio"
                      >
                        <Globe className="h-3 w-3" />
                        Kush Vardhan
                      </Link>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Coming */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 md:p-8 border border-green-200">
              <p className="text-gray-700 font-medium mb-2">
                🚀 More Websites Under Development
              </p>
              <p className="text-sm text-gray-600">
                We&apos;re constantly working on exciting new projects. Stay tuned
                for more amazing digital solutions!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full my-8">
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {selectedProject.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Image */}
              <div className="relative h-56 md:h-64 mb-6 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  About
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-700 mb-6 text-sm">
                <Calendar className="h-4 w-4 text-green-600" />
                <span className="font-medium">
                  Development Time: {selectedProject.duration}
                </span>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developer Credit */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6 border border-green-200">
                <p className="text-xs text-gray-600 mb-2">Developed by</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Kush Vardhan</p>
                    <p className="text-xs text-gray-500">
                      Full Stack Developer
                    </p>
                  </div>
                  <Link
                    href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                    target="_blank"
                    className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    Portfolio
                  </Link>
                </div>
              </div>

              {/* Action Button */}
              {selectedProject.liveLink && (
                <Link
                  href={selectedProject.liveLink}
                  target="_blank"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  Visit Live Project
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Thanks Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Thank You to Our Developers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            These projects were crafted with passion and precision by our
            talented development team. Each website represents our commitment to
            delivering exceptional digital solutions that make a real impact.
          </p>
          <div className="inline-block bg-white rounded-lg p-6 border border-green-200 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Lead Developer</p>
            <p className="text-lg font-bold text-gray-900">Kush Vardhan</p>
            <p className="text-xs text-gray-500 mt-1">
              kushvardhan39797@gmail.com
            </p>
          </div>
        </div>
      </section>

      <SmallFooter />
    </main>
  );
}
