"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

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
      detailedDescription:
        "We create stunning, high-performance websites that not only look beautiful but also drive real business results. Our websites are built with the latest technologies, optimized for search engines, and designed to convert visitors into customers.",
      benefits: [
        "Increased online visibility and brand awareness",
        "Higher conversion rates and customer engagement",
        "Mobile-first responsive design for all devices",
        "Fast loading speeds for better user experience",
        "SEO-optimized for better search rankings",
        "Secure and scalable architecture",
      ],
      cta: "Schedule Consultation",
      ctaLink: "/schedule-consultation",
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
      detailedDescription:
        "From concept to deployment, we build robust, scalable software solutions tailored to your unique business needs. Our expert team uses cutting-edge technologies and best practices to deliver software that drives efficiency and growth.",
      benefits: [
        "Custom solutions built for your specific needs",
        "Seamless integration with existing systems",
        "Scalable architecture for future growth",
        "Advanced security and data protection",
        "Ongoing support and maintenance",
        "Faster time-to-market for your product",
      ],
      cta: "Schedule Consultation",
      ctaLink: "/schedule-consultation",
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your brand's online presence.",
      features: [
        "Social Media Marketing",
        "Email Campaigns",
        "Content Strategy",
        "Ad Management",
      ],
      icon: "📈",
      link: "/service/digital-marketing",
      detailedDescription:
        "Grow your brand's online presence with our comprehensive digital marketing strategies. We combine data-driven insights with creative excellence to help you reach your target audience and achieve measurable results.",
      benefits: [
        "Increased brand awareness and reach",
        "Higher engagement and customer loyalty",
        "Data-driven marketing strategies",
        "Improved ROI on marketing spend",
        "Multi-channel marketing approach",
        "Detailed analytics and reporting",
      ],
      cta: "Schedule Consultation",
      ctaLink: "/schedule-consultation",
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
      detailedDescription:
        "Maximize your local visibility with expert Google My Business management. We optimize your profile to ensure your business appears prominently in local searches and Google Maps, driving more foot traffic and inquiries.",
      benefits: [
        "Higher visibility in local search results",
        "Increased customer inquiries and calls",
        "Better review management and reputation",
        "Detailed insights into customer behavior",
        "Optimized business information",
        "Competitive advantage in your local market",
      ],
      cta: "Schedule Consultation",
      ctaLink: "/schedule-consultation",
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
      detailedDescription:
        "Launch your tech career with our comprehensive internship programs. Gain hands-on experience working on real projects, learn from industry experts, and build a portfolio that impresses employers.",
      benefits: [
        "Hands-on experience with real projects",
        "Mentorship from industry experts",
        "Certificate upon completion",
        "Portfolio building opportunities",
        "Networking with professionals",
        "Career guidance and job placement support",
      ],
      cta: "Explore Programs",
      ctaLink: "/internship",
    },
  ];

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Startup Solutions Portfolio
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to drive startup growth,
            efficiency, and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="w-14 md:w-16 h-14 md:h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6">
                {service.icon}
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h4>

              <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700 text-sm md:text-base">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-1.5"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => setSelectedService(index)}
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-sm md:text-base"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="sticky top-0 right-0 self-end z-20 p-3 m-4 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition-all duration-200 hover:scale-110"
                title="Close (ESC)"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="text-4xl mb-4">{services[selectedService].icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {services[selectedService].title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-600">
                    {services[selectedService].detailedDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Key Benefits
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services[selectedService].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <p className="text-gray-700 text-sm md:text-base">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href={services[selectedService].ctaLink} className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                      <span>{services[selectedService].cta}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => setSelectedService(null)}
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
