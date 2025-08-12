"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Code,
  Coffee,
  Globe,
  Heart,
  MapPin,
  MessageCircle,
  Rocket,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CommunityPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("events");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const communityStats = [
    { icon: Users, value: "2,500+", label: "Active Members", color: "text-green-600" },
    { icon: Code, value: "150+", label: "Projects Built", color: "text-blue-600" },
    { icon: Calendar, value: "50+", label: "Events Hosted", color: "text-purple-600" },
    { icon: Globe, value: "25+", label: "Cities Reached", color: "text-orange-600" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Patna Tech Hub",
      type: "Workshop",
      attendees: 45,
      description: "Hands-on workshop covering React, Node.js, and modern web development practices.",
      image: "🚀"
    },
    {
      id: 2,
      title: "AI & Machine Learning Meetup",
      date: "March 22, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Online",
      type: "Meetup",
      attendees: 120,
      description: "Explore the latest trends in AI and ML with industry experts.",
      image: "🤖"
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      date: "March 30, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Innovation Center",
      type: "Competition",
      attendees: 80,
      description: "Present your startup ideas to investors and get valuable feedback.",
      image: "💡"
    }
  ];

  const communityHighlights = [
    {
      title: "Student Success Stories",
      description: "Our community members have landed jobs at top tech companies",
      icon: Star,
      count: "95%",
      metric: "Placement Rate"
    },
    {
      title: "Open Source Projects",
      description: "Collaborative projects that make a real impact",
      icon: Code,
      count: "50+",
      metric: "Active Projects"
    },
    {
      title: "Mentorship Program",
      description: "Connect with industry experts and experienced developers",
      icon: Heart,
      count: "100+",
      metric: "Mentors Available"
    },
    {
      title: "Knowledge Sharing",
      description: "Weekly tech talks and knowledge sharing sessions",
      icon: MessageCircle,
      count: "Weekly",
      metric: "Tech Talks"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer at TCS",
      image: "👩‍💻",
      quote: "The JankiInfotech community helped me transition from a non-tech background to landing my dream job in just 8 months!"
    },
    {
      name: "Rahul Kumar",
      role: "Startup Founder",
      image: "👨‍💼",
      quote: "The networking opportunities and mentorship I received here were invaluable for starting my own tech company."
    },
    {
      name: "Anjali Singh",
      role: "Data Scientist at Wipro",
      image: "👩‍🔬",
      quote: "From learning basics to advanced concepts, this community supported me throughout my journey in data science."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Join Our Community
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect, Learn &
              <span className="block text-green-600">Grow Together</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join a vibrant community of developers, entrepreneurs, and tech enthusiasts. 
              Learn from experts, collaborate on projects, and accelerate your career growth.
            </p>

            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {communityStats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Rocket className="h-5 w-5 mr-2" />
                Join Community
              </Button>
              <Button
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Calendar className="h-5 w-5 mr-2" />
                View Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Our Community?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of being part of our thriving tech community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-100"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{highlight.count}</div>
                <div className="text-sm text-green-700 font-medium mb-3">{highlight.metric}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t miss out on these exciting learning opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                  <div className="text-4xl mb-3">{event.image}</div>
                  <div className="text-sm bg-white/20 rounded-full px-3 py-1 inline-block mb-2">
                    {event.type}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">{event.attendees} attending</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">{event.description}</p>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our community members who have achieved their goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{testimonial.image}</div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-green-600 font-medium text-sm">{testimonial.role}</p>
                </div>
                <blockquote className="text-gray-600 italic text-center">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Connect with like-minded individuals and accelerate your tech journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              <Users className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              Follow on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Hidden Developer Signature */}
      <div 
        className="absolute bottom-0 right-0 opacity-0 text-xs"
        style={{
          fontSize: "1px",
          color: "transparent",
          userSelect: "none",
          pointerEvents: "none",
        }}
        title="Crafted with passion by Kush Vardhan"
      >
        {/* Developed by Kush Vardhan (kushvardhan39797@gmail.com) */}
        <span>KV</span>
      </div>
    </main>
  );
}
