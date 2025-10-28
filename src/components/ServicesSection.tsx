"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive, and SEO-friendly websites built for performance and conversion.",
      features: [
        "Responsive Design",
        "Custom UI/UX",
        "SEO Optimization",
        "Fast Loading Speed",
      ],
      icon: "💻",
      link: "/service/website-development",
    },
    {
      title: "Software Development",
      description:
        "Tailored software solutions designed to optimize business operations and scalability.",
      features: [
        "Custom Software Design",
        "API Integrations",
        "Database Management",
        "Performance Optimization",
      ],
      icon: "🧠",
      link: "/service/software-development",
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your brand’s online presence.",
      features: [
        "Social Media Marketing",
        "Email Campaigns",
        "Content Strategy",
        "Ad Management",
      ],
      icon: "📈",
      link: "/service/digital-marketing",
    },
    {
      title: "Google My Business (GMB)",
      description:
        "Optimize and manage your GMB profile to increase local visibility and engagement.",
      features: [
        "Profile Setup & Optimization",
        "Local SEO",
        "Review Management",
        "Business Insights",
      ],
      icon: "📍",
      link: "/service/gmb",
    },
    {
  title: "Internship Programs",
  description:
    "Hands-on internship opportunities in frontend, backend, full-stack development, UI/UX design, and digital marketing to build real-world skills.",
  features: [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "UI/UX Design",
    "Digital Marketing",
  ],
  icon: "🎓",
  link: "/service/internships",
}

  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3 md:mb-4">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Startup Solutions Portfolio
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2">
            Comprehensive technology solutions designed to drive Startup growth,
            efficiency, and innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-14 md:w-16 h-14 md:h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 flex-shrink-0">
                {service.icon}
              </div>

              {/* Content */}
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                {service.title}
              </h4>

              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-gray-700 text-sm md:text-base"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-sm md:text-base"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We specialize in creating tailored technology solutions that
              perfectly fit your unique business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold">
                Schedule Consultation
              </Button>
              <Link href="/our-work">
  <Button
    variant="outline"
    className="border-white text-green-400 hover:bg-white hover:text-green-600 px-8 py-3 font-semibold"
  >
    View Portfolio
  </Button>
</Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
