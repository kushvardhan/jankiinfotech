"use client";

import { Navbar } from "@/components/Navbar";
import SmallFooter from "@/components/SmallFooter";
import {
  ArrowUpRight,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  impact?: string;
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
      "A comprehensive healthcare platform dedicated to making traditional Naturopathy & Ayurvedic healing accessible to all. Ayurakshak is a registered NGO providing natural healthcare solutions to 10,000+ patients across India through 55+ hospitals and 70+ clinics. The platform bridges the gap between ancient wisdom and modern technology.",
    features: [
      "Disease consultation & treatment booking",
      "Health camp management system",
      "Patient testimonials & success stories",
      "Product catalog for natural remedies",
      "Responsive design for all devices",
      "SEO optimized for healthcare searches",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js"],
    impact: "Serving 10,000+ patients | 55+ hospitals | 70+ clinics",
  },
  {
    id: "2",
    title: "Krishna Mehandi",
    image: "/our-projects/KrishnaMehandi.png",
    duration: "2 months",
    liveLink: "https://krishnamehandiartist.in/",
    description: "Professional bridal mehandi artist portfolio",
    fullDescription:
      "A stunning portfolio website for a professional mehandi artist in Noida with 10+ years of experience. This platform showcases an extensive gallery of 500+ intricate designs, features an intuitive online booking system, and displays client testimonials. The design celebrates the artistry of traditional mehandi with modern web aesthetics.",
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
    impact:
      "500+ satisfied clients | 10+ years expertise | Arabic & Rajasthani designs",
  },
  {
    id: "3",
    title: "Cambridge Trust",
    image: "/our-projects/CambrigeTrust.png",
    duration: "4 months",
    liveLink: "https://cambridgewelfaretrust.org/",
    description: "Educational charity & welfare organization",
    fullDescription:
      "A registered charitable trust providing quality education and welfare support to underprivileged children in Bihar. Cambridge Trust has impacted 500+ children through 10+ school partnerships and comprehensive social welfare programs. This platform enables transparency and connects donors with meaningful causes.",
    features: [
      "Donation management system",
      "Project showcase & impact tracking",
      "Beneficiary testimonials",
      "Secure payment integration",
      "Transparency & accountability features",
      "Multi-language support",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Razorpay", "Node.js"],
    impact:
      "500+ children supported | 10+ school partnerships | 12G & 80G certified",
  },
  {
    id: "4",
    title: "Ravi Mehandi",
    image: "/our-projects/RaviMehandi.png",
    duration: "2 months",
    liveLink: "https://ravi-mehandi.vercel.app/",
    description: "Traditional mehandi artist booking platform",
    fullDescription:
      "A professional website for a traditional mehandi artist in Motihari with 12+ years of experience and 2000+ happy clients. This platform beautifully presents the artist's work, showcases service offerings, and provides an easy booking system for bridal, Arabic, and custom mehandi designs with 100% natural henna.",
    features: [
      "Service showcase with pricing",
      "Gallery with design categories",
      "Client testimonials & reviews",
      "Easy contact & booking forms",
      "Location & hours information",
      "Social media integration",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "TypeScript"],
    impact: "2000+ happy clients | 12+ years experience | 100% natural henna",
  },

  {
    "id": "5",
    "title": "Shine It Cleaning (ShineItCleaning)",
    "image": "/our-projects/ShineItCleaning.png",
    "duration": "Active local cleaning business (established — ongoing operations)",
    "liveLink": "https://shineitcleaning.com",
    "description": "Commercial & residential cleaning services (local/regional provider with online booking / contact presence).",
    "fullDescription": "Shine It Cleaning is a professional cleaning services brand that advertises home and commercial cleaning, sofa and mattress cleaning, kitchen degreasing, and move-in/move-out cleaning. The business maintains local social listings (Instagram / Facebook) and a booking/contact page. The site positions itself as an eco/quality-focused local cleaning provider.",
    "features": [
      "Home & commercial cleaning packages",
      "Sofa/mattress deep-cleaning",
      "Kitchen degreasing & bathroom deep clean",
      "Online contact / quote form and local booking info",
      "Social proof via Instagram/Facebook listings"
    ],
    "technologies": [
      "Static site / CMS (could not definitively fingerprint; public listings and social pages observed)",
      "HTML / CSS / JavaScript"
    ],
    "impact": "Local cleaning coverage with client testimonials and social presence (Instagram / Facebook listings and local directory entries)"
  },

  {
    "id": "6",
    "title": "Delhi Public School — Thalwara (DPS Thalwara)",
    "image": "/our-projects/DPS.png",
    "duration": "Operational (school ongoing; admissions open notices on social pages)",
    "liveLink": "https://dpsthalwara.com",
    "description": "CBSE-affiliated local school serving Thalwara / Darbhanga region with standard K–12 curriculum and community outreach.",
    "fullDescription": "Delhi Public School Thalwara (DPS Thalwara) runs standard school operations for the Thalwara / Darbhanga area. The website provides about, contact and admission/enquiry details. School contact number and email are publicly listed and the school posts inspection/announcement updates on social pages.",
    "features": [
      "CBSE-aligned curriculum & standard K–12 academics",
      "Admissions & contact pages",
      "Announcements / inspection / community updates (social posts)",
      "Contact phone and email publicly listed"
    ],
    "technologies": [
      "Simple static site (HTML pages like about.html observed)",
      "HTML / CSS / JavaScript (likely built as a small static or PHP-backed site)"
    ],
    "impact": "Serving families in the Thalwara / Darbhanga region — active enrollment / announcements shown on the site and social pages"
  },
  {
  "id": "7",
  "title": "Mission Education Consultancy",
  "image": "/our-projects/MissionEducation.png",
  "duration": "Operational (active consultancy / course listings)",
  "liveLink": "https://missioneducation.info",
  "description": "Local education consultancy and admission counselling service offering guidance and direct-admission support for professional & higher education courses.",
  "fullDescription": "Mission Education is an education consultancy and admission counselling service based in Laheriasarai, Darbhanga. The website lists course pages (B.Ed, Polytechnic, Engineering, Medical, Management and other professional/technical courses), contact details (phone and email), and course-specific pages designed to help students with admissions and course selection. The site presents itself as a local consultancy offering affordable professional course admissions and counselling services.",
  "features": [
    "Course listings & course-detail pages (B.Ed, Polytechnic, Engineering, etc.)",
    "Contact & enquiry page with phone numbers and email",
    "Local office address listed (Laheriasarai, G.N. Ganj / Gudri Bazar)",
    "Admission counselling and direct-admission assistance",
    "Course detail pages (duration, overview) for prospective students"
  ],
  "technologies": [
    "Vite + React (site indicates Vite + React in page metadata / build info)",
    "HTML / CSS / JavaScript",
    "Static SPA style routing (course pages under /course and /course_details paths)"
  ],
  "impact": "Local admission counselling for students in Darbhanga region — course pages and contact listings indicate active local operations and student outreach."
}

];

export default function OurWorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Premium */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-4"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Experiences
            </span>{" "}
            That Matter
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every project tells a story of innovation, dedication, and
            transformative impact. Explore the digital solutions we&apos;ve
            built with passion and precision.
          </p>
        </div>
      </section>

      {/* Projects Grid - Premium Layout */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 flex flex-col h-full"
              >
                {/* Image Container - Larger */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-7 flex flex-col flex-grow">
                  {/* Title with Link */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="flex-shrink-0 p-2 bg-green-100 text-green-600 hover:bg-green-200 rounded-lg transition-colors"
                        title="Visit Website"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Badge */}
                  {project.impact && (
                    <div className="mb-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <p className="text-sm font-semibold text-green-700">
                        ✨ {project.impact}
                      </p>
                    </div>
                  )}

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-600 mb-5 text-sm">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span className="font-medium">{project.duration}</span>
                  </div>

                  {/* Developer Credit - Subtle */}
                  <div className="mb-5 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Crafted by</span>
                      <Link
                        href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                        target="_blank"
                        className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1 transition-colors"
                      >
                        <Globe className="h-3 w-3" />
                        Kush Vardhan
                      </Link>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Explore Project</span>
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Creative */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-emerald-200 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-green-200 shadow-xl text-center">
              <div className="cursor-pointer inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-6">
                <Sparkles className="h-8 w-8 text-green-600 hover:animate-spin" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Projects in Progress ✨
              </h2>
              <p className="text-lg text-gray-600 mb-2 leading-relaxed">
                Our team is actively working on new and exciting projects,
                bringing fresh ideas and powerful solutions to life.
              </p>
              <p className="text-gray-500 mb-8">
                Stay tuned — several innovative experiences are currently in
                design and development, soon to be launched for our clients and
                community.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  🎨 Design Phase
                </div>
                <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  ⚙️ Development
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  🚀 Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Premium */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Sticky */}
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-0 right-0 float-right z-20 p-3 m-4 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0"
              title="Close (ESC)"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6 md:p-10 pt-0">
              {/* Image - Larger */}
              <div className="relative h-72 md:h-96 mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600">
                      {selectedProject.description}
                    </p>
                  </div>
                  {selectedProject.liveLink && (
                    <Link
                      href={selectedProject.liveLink}
                      target="_blank"
                      className="flex-shrink-0 p-3 bg-green-100 text-green-600 hover:bg-green-200 rounded-lg transition-colors"
                    >
                      <ArrowUpRight className="h-6 w-6" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Impact */}
              {selectedProject.impact && (
                <div className="mb-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <p className="text-green-700 font-semibold">
                    ✨ {selectedProject.impact}
                  </p>
                </div>
              )}

              {/* Full Description */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  About This Project
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-700 mb-8 text-sm">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="font-semibold">
                  Development Time: {selectedProject.duration}
                </span>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-green-600 font-bold text-lg mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developer Credit - Premium */}
              <div className="mb-8 p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-2xl border border-green-200">
                <p className="text-xs text-gray-600 mb-2 font-mono">
                  Crafted with ❤️ by
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                      className="cursor-pointer text-md font-semibold text-gray-900 hover:text-green-800 "
                    >
                      Kush Vardhan
                    </Link>
                    <p className="text-sm text-gray-600">
                      Full Stack Developer & Creative Technologist
                    </p>
                  </div>
                  <Link
                    href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                    target="_blank"
                    className="flex-shrink-0 p-3 bg-white text-green-600 hover:bg-green-50 rounded-lg transition-colors border border-green-200"
                  >
                    <Globe className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* CTA Button */}
              {selectedProject.liveLink && (
                <Link
                  href={selectedProject.liveLink}
                  target="_blank"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  <ExternalLink className="h-5 w-5" />
                  Visit Live Project
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Brochure Download CTA - Portfolio Themed */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            ></div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left side - Icon and visual */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                      <FileText className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Middle - Content */}
                <div className="flex-1 text-white text-center md:text-left">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <Sparkles className="h-4 w-4 mr-2 text-green-400" />
                    <span className="text-sm font-semibold">
                      Complete Service Portfolio
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Want to See More Amazing Work?
                  </h2>
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                    Download our brochure to explore our complete portfolio,
                    detailed case studies, client testimonials, and the full
                    spectrum of services we offer.
                  </p>
                </div>

                {/* Right side - CTA */}
                <div className="flex-shrink-0">
                  <a
                    href="/brochure.pdf"
                    download="JankiInfotech-Brochure.pdf"
                    className="group relative bg-white hover:bg-gray-50 text-gray-900 font-bold py-5 px-8 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex flex-col items-center gap-3 min-w-[200px]"
                  >
                    <Download className="h-8 w-8 text-green-600 group-hover:animate-bounce" />
                    <div className="text-center">
                      <div className="text-lg font-bold">Get Brochure</div>
                      <div className="text-xs text-gray-500">
                        Full Portfolio Inside
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Credit Section - Minimal & Elegant */}
      {/* <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8">
         
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Every project is crafted with passion, precision, and a
                commitment to excellence.
                <span className="block mt-2 text-gray-500 text-xs md:text-sm">
                  Transforming ideas into impactful digital experiences.
                </span>
              </p>
            </div>

            <Link
              href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
              target="_blank"
              className="group flex items-center gap-3 px-5 py-3 rounded-full border border-gray-200 hover:border-green-400 bg-white hover:bg-green-50 transition-all duration-300 hover:shadow-md flex-shrink-0"
            >
              <div className="flex flex-col items-end">
                <p className="text-xs text-gray-500 font-medium">Crafted by</p>
                <p className="text-sm md:text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  Kush Vardhan
                </p>
              </div>
              <Globe className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section> */}

      <SmallFooter />
    </main>
  );
}
