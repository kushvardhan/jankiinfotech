import ScheduleConsultationForm from "@/components/ScheduleConsultationForm";
import { Calendar, CheckCircle, Clock, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Consultation | JankiInfotech - Free Tech Consultation",
  description:
    "Schedule a free consultation with JankiInfotech experts. Get personalized advice for your web development, mobile app, cloud, and DevOps projects.",
  keywords:
    "schedule consultation, free consultation, tech consultation, JankiInfotech, web development consultation, mobile app consultation",
  openGraph: {
    title: "Schedule Free Consultation | JankiInfotech",
    description:
      "Get expert advice for your tech projects. Schedule a free consultation with our experienced team.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule Free Consultation | JankiInfotech",
    description:
      "Get expert advice for your tech projects. Schedule a free consultation with our experienced team.",
  },
};

export default function ScheduleConsultationPage() {
  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description:
        "Choose a time that works best for you from our available slots",
    },
    {
      icon: Clock,
      title: "30-60 Minutes",
      description:
        "Comprehensive discussion about your project requirements and goals",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Meet with our experienced developers and project managers",
    },
    {
      icon: CheckCircle,
      title: "No Commitment",
      description: "Free consultation with no obligation to proceed",
    },
  ];

  const consultationTypes = [
    {
      title: "Web Development",
      description: "Discuss your website or web application requirements",
      duration: "30-45 minutes",
      topics: [
        "Technology stack selection",
        "Project timeline",
        "Budget estimation",
        "Feature planning",
      ],
    },
    {
      title: "Mobile App Development",
      description: "Plan your iOS or Android application project",
      duration: "45-60 minutes",
      topics: [
        "Platform selection",
        "UI/UX design",
        "Backend requirements",
        "App store deployment",
      ],
    },
    {
      title: "Cloud & DevOps",
      description: "Optimize your infrastructure and deployment processes",
      duration: "30-45 minutes",
      topics: [
        "Cloud migration",
        "CI/CD setup",
        "Infrastructure optimization",
        "Security best practices",
      ],
    },
    {
      title: "Training Programs",
      description: "Learn about our internship and training opportunities",
      duration: "20-30 minutes",
      topics: [
        "Program details",
        "Curriculum overview",
        "Certification process",
        "Career guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Schedule Your Free
              <span className="text-green-600 block">Consultation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get expert advice for your tech projects. Our team is ready to
              help you turn your ideas into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                100% Free
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                No Commitment
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Expert Advice
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Schedule a Consultation?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Consultation Types
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {consultationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="flex items-center text-green-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{type.duration}</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    We&apos;ll discuss:
                  </h4>
                  <ul className="space-y-1">
                    {type.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Book Your Consultation
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we&apos;ll get back to you within 24
              hours to schedule your consultation.
            </p>
          </div>
          <ScheduleConsultationForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How long does a consultation take?
              </h3>
              <p className="text-gray-600">
                Consultations typically last 30-60 minutes depending on the
                complexity of your project and the type of consultation you
                choose.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is the consultation really free?
              </h3>
              <p className="text-gray-600">
                Yes, absolutely! We offer free consultations to help you
                understand your project requirements and how we can help you
                achieve your goals.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                What should I prepare for the consultation?
              </h3>
              <p className="text-gray-600">
                Come with your project ideas, any existing materials (designs,
                documents), and questions about timeline, budget, or technical
                requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I reschedule my consultation?
              </h3>
              <p className="text-gray-600">
                Yes, you can reschedule your consultation up to 24 hours before
                the scheduled time. Just contact us and we&apos;ll find a new
                time that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
