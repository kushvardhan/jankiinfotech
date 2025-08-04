"use client";

import { Button } from "@/components/ui/button";
import { Award, BookOpen, Clock, Code, Users } from "lucide-react";

export default function TrainingSection() {
  const programs = [
    {
      title: "Summer Training Program",
      duration: "6-8 Weeks",
      level: "Beginner to Intermediate",
      icon: "🌞",
      description:
        "Comprehensive hands-on training program for engineering students during summer break.",
      features: [
        "Live Project Experience",
        "Industry Mentorship",
        "Certificate of Completion",
        "Job Placement Assistance",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      price: "Contact for Pricing",
      popular: true,
    },
    {
      title: "Winter Internship",
      duration: "3-4 Months",
      level: "Intermediate to Advanced",
      icon: "❄️",
      description:
        "Extended internship program with real client projects and professional development.",
      features: [
        "Real Client Projects",
        "Professional Mentoring",
        "Industry Exposure",
        "Performance-based Stipend",
      ],
      technologies: ["Full Stack", "DevOps", "Cloud", "AI/ML"],
      price: "Stipend Available",
      popular: false,
    },
    {
      title: "Weekend Bootcamp",
      duration: "12 Weeks",
      level: "All Levels",
      icon: "🚀",
      description:
        "Intensive weekend sessions for working professionals and students.",
      features: [
        "Flexible Schedule",
        "Industry Projects",
        "Networking Opportunities",
        "Career Guidance",
      ],
      technologies: ["Python", "Django", "React", "Docker"],
      price: "Affordable Pricing",
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Practical Learning",
      description:
        "Learn by working on real-world projects with industry-standard tools and practices.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description:
        "Get guidance from experienced professionals working in top tech companies.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Receive certificates and recommendations that boost your career prospects.",
    },
    {
      icon: Code,
      title: "Latest Technologies",
      description:
        "Stay updated with cutting-edge technologies and industry best practices.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      image: "👩‍💻",
      quote:
        "The summer training at JankiInfotech transformed my understanding of web development. The hands-on approach and mentorship helped me land my dream job.",
    },
    {
      name: "Rahul Kumar",
      role: "Full Stack Developer",
      image: "👨‍💻",
      quote:
        "Best decision I made was joining the winter internship. Working on real client projects gave me confidence and practical skills.",
    },
    {
      name: "Anjali Singh",
      role: "DevOps Engineer",
      image: "👩‍🔧",
      quote:
        "The training program not only taught me technical skills but also helped me understand the industry workflow and best practices.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-4">
            Training & Development
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skill Development Programs
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of tech professionals with hands-on
            training and real-world experience
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                program.popular ? "ring-2 ring-green-500" : ""
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h4>
                <p className="text-gray-600">{program.description}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 text-green-600 mr-3" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 text-green-600 mr-3" />
                  <span>{program.level}</span>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3">
                  Program Features:
                </h5>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3">
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {program.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    {program.price}
                  </span>
                </div>
                <Button
                  className={`w-full ${
                    program.popular
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-600 hover:bg-gray-700"
                  } text-white`}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Training Programs?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h5 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h5>
                    <p className="text-green-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Tech Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students who have transformed their careers with
            our training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              Apply for Training
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
