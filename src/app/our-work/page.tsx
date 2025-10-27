"use client";

import { Navbar } from "@/components/Navbar";
import SmallFooter from "@/components/SmallFooter";
import { ExternalLink, Calendar, Github } from "lucide-react";
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
}

const projects: Project[] = [
  {
    id: "1",
    title: "Ayurakshak",
    image: "/our-projects/Ayurakshak.png",
    duration: "3 months",
    liveLink: "https://ayurakshak.com",
    description: "Healthcare and wellness platform",
  },
  {
    id: "2",
    title: "Cambridge Trust",
    image: "/our-projects/CambrigeTrust.png",
    duration: "4 months",
    liveLink: "https://cambridgetrust.com",
    description: "Trust and financial services platform",
  },
  {
    id: "3",
    title: "Krishna Mehandi",
    image: "/our-projects/KrishnaMehandi.png",
    duration: "2 months",
    liveLink: "https://krishnamehandi.com",
    description: "Mehandi design and booking platform",
  },
  {
    id: "4",
    title: "Ravi Mehandi",
    image: "/our-projects/RaviMehandi.png",
    duration: "2 months",
    liveLink: "https://ravimehandi.com",
    description: "Professional mehandi services platform",
  },
];

export default function OurWorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest projects and digital solutions that have transformed businesses
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-700 mb-4">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <span className="font-medium">{project.duration}</span>
                  </div>

                  {/* Developer Credit */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6 border border-green-200">
                    <p className="text-xs text-gray-600 mb-1">Developed by</p>
                    <p className="font-semibold text-gray-900">Kush Vardhan</p>
                    <p className="text-xs text-gray-500">kushvardhan39797@gmail.com</p>
                    <Link
                      href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                      target="_blank"
                      className="text-xs text-green-600 hover:text-green-700 font-medium mt-2 inline-block"
                    >
                      View Portfolio →
                    </Link>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit Live
                      </Link>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 px-4 rounded-lg transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-600 mb-4 text-lg">
                {selectedProject.description}
              </p>

              <div className="flex items-center gap-2 text-gray-700 mb-6">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="font-medium">{selectedProject.duration}</span>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6 border border-green-200">
                <p className="text-sm text-gray-600 mb-2">Developed by</p>
                <p className="font-semibold text-gray-900 text-lg">Kush Vardhan</p>
                <p className="text-sm text-gray-500">kushvardhan39797@gmail.com</p>
                <Link
                  href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                  target="_blank"
                  className="text-sm text-green-600 hover:text-green-700 font-medium mt-3 inline-block"
                >
                  View Developer Portfolio →
                </Link>
              </div>

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

      <SmallFooter />
    </main>
  );
}

