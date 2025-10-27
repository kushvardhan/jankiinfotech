"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "Ayurakshak",
    image: "/our-projects/Ayurakshak.png",
    description: "Naturopathy & Ayurvedic healing platform",
    shortDesc: "NGO providing natural healthcare to 10,000+ patients",
  },
  {
    id: "2",
    title: "Cambridge Trust",
    image: "/our-projects/CambrigeTrust.png",
    description: "Educational charity & welfare organization",
    shortDesc: "Supporting 500+ underprivileged children in Bihar",
  },
];

export default function OurWorkPreview() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-green-600">Portfolio</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into impactful digital solutions
          </p>
        </div>

        {/* Projects Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/our-work"
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
            >
              {/* Image Container - Smaller */}
              <div className="relative h-40 md:h-44 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content - Compact */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2">
                  {project.shortDesc}
                </p>

                <div className="flex items-center gap-2 text-green-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>View Project</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-7 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm md:text-base"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
