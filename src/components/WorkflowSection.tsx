'use client'

export default function WorkflowSection() {
  const workflowSteps = [
    {
      icon: '📋',
      title: 'Business Requirements Document',
      subtitle: 'Scope Of Work',
      description: 'We start by understanding your business needs and defining clear project scope and requirements.'
    },
    {
      icon: '🔍',
      title: 'Research & Analysis',
      subtitle: 'Market Study',
      description: 'Thorough market research and competitive analysis to ensure optimal solution design.'
    },
    {
      icon: '👥',
      title: 'Team Allocation',
      subtitle: 'Expert Assignment',
      description: 'Dedicated team of experts assigned based on project requirements and technology stack.'
    },
    {
      icon: '🎨',
      title: 'Design',
      subtitle: 'UI/UX Creation',
      description: 'Creating intuitive and engaging user interfaces with focus on user experience.'
    },
    {
      icon: '⚙️',
      title: 'Development & Testing',
      subtitle: 'Build & Validate',
      description: 'Agile development process with continuous testing and quality assurance.'
    },
    {
      icon: '🚀',
      title: 'Deployment & Deliverables',
      subtitle: 'Go Live',
      description: 'Seamless deployment with ongoing support and maintenance services.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Agile Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our streamlined process for success
          </p>
        </div>

        {/* Desktop Workflow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2 z-0"></div>
            
            {/* Workflow Steps */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                    <p className="text-blue-600 text-xs font-medium mb-2">{step.subtitle}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Workflow */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{step.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Mobile Version */}
        <div className="mt-16 lg:hidden">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Our Agile Workflow
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">📋</div>
                <p className="text-sm font-medium">BRD</p>
                <p className="text-xs text-gray-600">SOW</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔍</div>
                <p className="text-sm font-medium">Research</p>
                <p className="text-xs text-gray-600">Analysis</p>
              </div>
              <div>
                <div className="text-3xl mb-2">👥</div>
                <p className="text-sm font-medium">Team</p>
                <p className="text-xs text-gray-600">Allocation</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎨</div>
                <p className="text-sm font-medium">Design</p>
                <p className="text-xs text-gray-600">UI/UX</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚙️</div>
                <p className="text-sm font-medium">Dev</p>
                <p className="text-xs text-gray-600">Testing</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <p className="text-sm font-medium">Deploy</p>
                <p className="text-xs text-gray-600">Deliver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
