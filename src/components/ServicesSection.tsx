"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Monitor, TrendingUp,MapPin, GraduationCap, X } from "lucide-react";
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
      icon: Monitor,
      color: "text-blue-500",
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
      icon: Code2,
      color:" text-purple-500",
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
      icon: TrendingUp,
      color:"text-orange-500",
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
      icon: MapPin,
      color:" text-red-500",
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
      icon: GraduationCap,
      color:"text-green-500",
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

  // Handle ESC key
  // Handle ESC key and freeze background scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };

    if (selectedService !== null) {
      // Freeze background scrolling
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);

      return () => {
        // Restore scrolling
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      // Ensure scrolling is restored
      document.body.style.overflow = "unset";
    }
  }, [selectedService]);

  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-gray-50 overflow-x-hidden"
    >
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
              <div
  className={`w-14 md:w-16 h-14 md:h-16 bg-gradient-to-br ${
    service.color
      .replace("text-", "from-")
      .replace(/-\d+/, "-100")
  } ${
    service.color
      .replace("text-", "to-")
      .replace(/-\d+/, "-200")
  } rounded-xl flex items-center justify-center mb-4 md:mb-6 flex-shrink-0`}
>
  <service.icon className={`w-7 md:w-8 h-7 md:h-8 ${service.color}`} />
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
                onClick={() => setSelectedService(index)}
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-sm md:text-base"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Service Modal */}
        {selectedService !== null && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl relative max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Fixed */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 p-3 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0"
                title="Close (ESC)"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Modal Content - Scrollable */}
              <div className="p-6 md:p-10 space-y-6 overflow-y-auto">
                {/* Header */}
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                    {(() => {
                      const IconComponent = services[selectedService].icon;
                      return (
                        <IconComponent className="w-8 h-8 text-green-600" />
                      );
                    })()}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {services[selectedService].title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {services[selectedService].detailedDescription}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services[selectedService].benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-green-600 font-bold text-lg mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href={services[selectedService].ctaLink}
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                      <span>{services[selectedService].cta}</span>
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => setSelectedService(null)}
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-4 px-6 rounded-xl font-bold transition-all duration-300 text-lg"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

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
              <Link href="/schedule-consultation">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold">
                  Schedule Consultation
                </Button>
              </Link>
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
