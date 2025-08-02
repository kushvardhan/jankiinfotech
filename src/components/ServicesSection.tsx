'use client'

import { Button } from '@/components/ui/button'

export default function ServicesSection() {
  const services = [
    {
      title: 'Startup Cloud Solutions',
      description: 'Secure, scalable, and reliable cloud infrastructure tailored for Startup needs. Includes migration, optimization, and 24/7 support.',
      features: [
        'Multi-cloud Strategy',
        'Cost Optimization',
        'High Availability',
        'Disaster Recovery'
      ],
      icon: '☁️',
      link: '/service/cloud'
    },
    {
      title: 'DevOps as a Service',
      description: 'End-to-end DevOps implementation with CI/CD pipelines, automation, and infrastructure as code.',
      features: [
        'CI/CD Implementation',
        'Infrastructure as Code',
        'Microservices',
        'Container Orchestration'
      ],
      icon: '⚙️',
      link: '/service/devops'
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end development solutions that seamlessly integrate engaging front-end interfaces with robust back-end systems.',
      features: [
        'Responsive Web Design',
        'API Integration',
        'Robust Back-end Architecture',
        'Continuous Deployment'
      ],
      icon: '💻',
      link: '/service/webdevelopment'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Startup Solutions Portfolio
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to drive Startup growth, efficiency, and innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h4>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant="outline" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We specialize in creating tailored technology solutions that perfectly fit your unique business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
