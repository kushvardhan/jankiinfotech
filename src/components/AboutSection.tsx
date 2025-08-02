"use client";

import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const teamImages = [
    "/images/team-img.jpg",
    "/images/team-img2.jpg",
    "/images/team-img3.jpg",
    "/images/team-img4.jpg",
  ];

  const stats = [
    { number: "5+", label: "Years of Excellence" },
    { number: "20+", label: "Team Members" },
    { number: "95%", label: "Client Retention" },
    { number: "5+", label: "Countries", sublabel: "Global Reach" },
    { number: "20+", label: "Jobs", sublabel: "Local Impact" },
    { number: "50+", label: "Projects", sublabel: "Innovation" },
    { number: "95%", label: "Success", sublabel: "Excellence" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-4">
            Our Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The JankiInfotech Story
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Building a vibrant tech ecosystem with innovation and excellence
          </p>
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Explore More About Us
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Team Images */}
          <div className="grid grid-cols-2 gap-4">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-xl overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Team Image {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Years of Excellence
              </h4>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                To create a world-class tech hub, combining traditional values
                with modern innovation. We're building more than just a company
                - we're nurturing a tech ecosystem that empowers local talent
                and serves global clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  20+
                </div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600">Client Retention</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 cursor-pointer transition-colors">
                <span className="text-sm">Li</span>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 cursor-pointer transition-colors">
                <span className="text-sm">Ig</span>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Journey Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Journey
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of a transformative movement that's putting innovation on
            the global tech map. Together, we can build something extraordinary.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold">
            Start Your Journey
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.slice(0, 4).map((stat, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
              {stat.sublabel && (
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 bg-green-50 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Summer Training Opportunities
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {stats.slice(4).map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Explore All
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
