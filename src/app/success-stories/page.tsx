import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import SmallFooter from "@/components/SmallFooter";
import { Award, Calendar, Star, TrendingUp, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | JankiInfotech - Client Case Studies & Testimonials",
  description:
    "Discover how JankiInfotech has helped businesses transform their digital presence. Read client success stories, case studies, and testimonials.",
  keywords:
    "success stories, case studies, client testimonials, JankiInfotech projects, web development success, mobile app success",
  openGraph: {
    title: "Success Stories | JankiInfotech",
    description:
      "Discover how we've helped businesses transform their digital presence with innovative solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Success Stories | JankiInfotech",
    description:
      "Discover how we've helped businesses transform their digital presence with innovative solutions.",
  },
};

export default function SuccessStoriesPage() {
  const stats = [
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: TrendingUp, value: "150+", label: "Projects Completed" },
    { icon: Award, value: "95%", label: "Client Satisfaction" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
  ];

  const successStories = [
    {
      title: "E-Commerce Platform for Local Retailer",
      client: "Bihar Handicrafts Co.",
      category: "E-Commerce Development",
      image: "🛍️",
      challenge:
        "A traditional handicrafts business needed to expand online to reach customers across India during the pandemic.",
      solution:
        "We built a comprehensive e-commerce platform with inventory management, payment gateway integration, and mobile-responsive design.",
      results: [
        "300% increase in sales within 6 months",
        "Expanded customer base to 15+ states",
        "Reduced operational costs by 40%",
        "Improved customer satisfaction to 4.8/5",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      duration: "3 months",
      testimonial:
        "JankiInfotech transformed our traditional business into a modern e-commerce success. Their team understood our needs perfectly and delivered beyond expectations.",
      clientName: "Rajesh Kumar",
      clientRole: "Owner, Bihar Handicrafts Co.",
    },
    {
      title: "Mobile App for Healthcare Startup",
      client: "HealthCare Plus",
      category: "Mobile App Development",
      image: "🏥",
      challenge:
        "A healthcare startup needed a mobile app to connect patients with doctors for online consultations.",
      solution:
        "We developed a cross-platform mobile app with video calling, appointment scheduling, and secure patient data management.",
      results: [
        "10,000+ app downloads in first month",
        "500+ doctors onboarded",
        "95% user retention rate",
        "Featured in top health apps",
      ],
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js"],
      duration: "4 months",
      testimonial:
        "The app exceeded our expectations. The user experience is seamless, and the technical implementation is robust. Our users love it!",
      clientName: "Dr. Priya Sharma",
      clientRole: "Founder, HealthCare Plus",
    },
    {
      title: "Cloud Migration for Manufacturing Company",
      client: "Industrial Solutions Ltd.",
      category: "Cloud & DevOps",
      image: "☁️",
      challenge:
        "A manufacturing company needed to migrate their legacy systems to the cloud for better scalability and security.",
      solution:
        "We designed and implemented a comprehensive cloud migration strategy with automated deployment pipelines and monitoring.",
      results: [
        "60% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "50% faster deployment cycles",
        "Enhanced security compliance",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      duration: "6 months",
      testimonial:
        "The cloud migration was seamless. Our operations are now more efficient, secure, and cost-effective. Excellent work by the JankiInfotech team.",
      clientName: "Amit Singh",
      clientRole: "CTO, Industrial Solutions Ltd.",
    },
    {
      title: "Training Program Success",
      client: "Engineering College Partnership",
      category: "Training & Development",
      image: "🎓",
      challenge:
        "Local engineering colleges needed industry-relevant training programs to improve student employability.",
      solution:
        "We designed comprehensive training programs covering modern web development, mobile apps, and cloud technologies.",
      results: [
        "200+ students trained successfully",
        "85% placement rate achieved",
        "15+ companies hired our trainees",
        "Ongoing partnerships with 5 colleges",
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Git"],
      duration: "Ongoing",
      testimonial:
        "The training program has significantly improved our students' industry readiness. Many of our graduates are now working in top tech companies.",
      clientName: "Prof. Sunita Devi",
      clientRole: "Head of Department, Computer Science",
    },
  ];

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
      name: "Ravi Prasad",
      role: "Business Owner",
      company: "Local Retail Chain",
      image: "👨‍💻",
      rating: 5,
      testimonial:
        "They delivered exactly what we needed, on time and within budget. Our online sales have increased dramatically since launch.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Success Stories
              <span className="text-green-600 block">That Inspire</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses across Bihar and beyond
              transform their digital presence and achieve remarkable growth.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Case Studies
          </h2>
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="text-6xl mb-6">{story.image}</div>
                  <div className="text-green-600 font-semibold mb-2">
                    {story.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{story.challenge}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Our Solution:
                    </h4>
                    <p className="text-gray-600">{story.solution}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {story.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-gray-600 mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Project Duration: {story.duration}</span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Key Results:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <TrendingUp className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-6">
                      <blockquote className="text-gray-700 italic mb-4">
                        " &ldquo;{story.testimonial}&rdquo;"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <div className="font-semibold text-gray-900">
                            {story.clientName}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {story.clientRole}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-green-600 text-sm">
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
                <p className="text-gray-700 italic">
                  " &ldquo;{testimonial.testimonial}&rdquo;"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center bg-green-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our growing list of successful clients and transform your
              business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
