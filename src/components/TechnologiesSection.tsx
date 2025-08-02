"use client";

export default function TechnologiesSection() {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Jenkins", icon: "🔧" },
    { name: "Microsoft Azure", icon: "🔷" },
    { name: "Redis", icon: "🔴" },
    { name: "TypeScript", icon: "📘" },
    { name: "Python", icon: "🐍" },
    { name: "Kubernetes", icon: "⚙️" },
  ];

  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Multi-cloud solutions with AWS, Azure, and GCP integration",
      features: [
        "Auto-scaling",
        "Load Balancing",
        "Serverless Computing",
        "Hybrid Cloud Solutions",
      ],
      icon: "☁️",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform and native mobile solutions for all devices",
      features: [
        "React Native & Flutter",
        "iOS/Swift & Android/Kotlin",
        "Progressive Web Apps",
        "Mobile-first UX/UI Design",
      ],
      icon: "📱",
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web application development solutions",
      features: [
        "Frontend (React, Next.js, Angular)",
        "Backend (Node.js, Django, Laravel)",
        "Database Design & Integration",
        "RESTful & GraphQL APIs",
      ],
      icon: "💻",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging the latest innovations to drive your digital
            transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
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
          ))}
        </div>

        {/* Technologies We Work With */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Technologies We Work With
          </h3>
        </div>

        {/* Technology Icons - Scrolling Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {/* First set */}
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[120px]"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="text-sm font-medium text-gray-700">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {technologies.map((tech, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[120px]"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="text-sm font-medium text-gray-700">
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
