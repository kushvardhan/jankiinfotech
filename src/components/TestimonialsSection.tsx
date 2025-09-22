"use client";

import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const clientTestimonials = [
    {
      name: "Vikash Kumar",
      role: "Startup Founder",
      company: "TechStart Bihar",
      image: "👨‍💼",
      rating: 5,
      testimonial:
        "JankiInfotech helped us build our MVP in record time. Their technical expertise and understanding of startup needs is exceptional.",
    },
    {
      name: "Anita Sharma",
      role: "Marketing Director",
      company: "Digital Solutions Inc.",
      image: "👩‍💼",
      rating: 5,
      testimonial:
        "Working with JankiInfotech was a game-changer for our digital transformation. Professional, reliable, and innovative.",
    },
    {
      name: "Rajesh Gupta",
      role: "E-commerce Owner",
      company: "Bihar Handicrafts Co.",
      image: "👨‍💻",
      rating: 5,
      testimonial:
        "Our online sales increased by 300% after JankiInfotech developed our e-commerce platform. Highly recommended!",
    },
    {
      name: "Priya Singh",
      role: "Restaurant Owner",
      company: "Taste of Bihar",
      image: "👩‍🍳",
      rating: 5,
      testimonial:
        "The mobile app they created for our restaurant has revolutionized our delivery service. Customer satisfaction is at an all-time high.",
    },
    {
      name: "Amit Jha",
      role: "Educational Institute Director",
      company: "Smart Learning Academy",
      image: "👨‍🎓",
      rating: 5,
      testimonial:
        "JankiInfotech's learning management system has transformed how we deliver education. Students and teachers love the platform.",
    },
    {
      name: "Sunita Devi",
      role: "NGO Coordinator",
      company: "Rural Development Foundation",
      image: "👩‍💼",
      rating: 5,
      testimonial:
        "Their pro-bono work for our NGO's website has helped us reach more communities and increase donations significantly.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients across Bihar, UP, and Jharkhand have to say about our services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-green-600 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 italic">
                "{testimonial.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
