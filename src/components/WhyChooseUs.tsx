"use client";

import {
  Award,
  Clock,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: Shield,
      title: "Trusted by Industry Leaders",
      description:
        "We've earned the trust of 50+ businesses across Bihar and beyond. Our commitment to excellence and integrity has made us the go-to partner for digital transformation.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation at Our Core",
      description:
        "We don't just follow trends—we create them. Our team stays ahead of the curve with cutting-edge technologies and creative solutions that give you a competitive edge.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Dedicated Support Team",
      description:
        "Your success is our mission. Our expert team provides 24/7 support, ensuring you're never alone on your digital journey. We're partners, not just service providers.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description:
        "Numbers speak louder than words. With 95% client retention and 50+ successful projects, we deliver results that exceed expectations every single time.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Clock,
      title: "Lightning-Fast Delivery",
      description:
        "Time is money. We respect both. Our agile methodology ensures rapid development without compromising quality, getting your projects live faster than you imagined.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Heart,
      title: "Passionate About Your Growth",
      description:
        "We measure our success by yours. Every project is treated with care, creativity, and commitment. Your growth fuels our passion to deliver extraordinary results.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description:
        "Recognition from industry leaders validates our commitment to quality. Our innovative solutions have earned accolades and set new standards in the tech industry.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      icon: Zap,
      title: "Future-Ready Solutions",
      description:
        "Build for tomorrow, today. Our scalable, future-proof solutions ensure your business stays relevant and competitive as technology evolves.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
            <Award className="h-4 w-4 mr-2" />
            Why Partner With Us
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              JankiInfotech
            </span>
            ?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another tech company. We're your growth partner,
            committed to transforming your vision into reality with innovation,
            integrity, and unmatched expertise.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${reason.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
              ></div>

              {/* Icon */}
              <div
                className={`w-14 h-14 ${reason.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <reason.icon className={`w-7 h-7 ${reason.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {reason.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Join 50+ Happy Clients Who Trust Us
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            From startups to established businesses, we've helped transform
            ideas into thriving digital realities. Your success story starts
            here.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-sm md:text-base opacity-90">
                Client Satisfaction
              </div>
            </div>
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base opacity-90">
                Projects Delivered
              </div>
            </div>
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-90">
                Expert Support
              </div>
            </div>
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm md:text-base opacity-90">
                Commitment
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

