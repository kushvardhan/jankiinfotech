import { ArrowRight, Briefcase, GraduationCap, Users } from "lucide-react";

const features = [
  {
    title: "IT Job Creation",
    icon: Briefcase,
    desc: "Creating local jobs in Bihar and building capacity/capability for world class software development.",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Skill development",
    icon: GraduationCap,
    desc: "Working with local engineering colleges and training students on latest technologies and tools.",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
  },
  {
    title: "Hands-on Internship",
    icon: Users,
    desc: "Live, real-world projects for student interns to help develop practical skills and employability.",
    gradient: "from-orange-500 to-amber-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
    borderColor: "border-orange-200",
  },
  {
    title: "Reversing Migration",
    icon: ArrowRight,
    desc: "Inspiring talented engineers to come back to their native place and work from Bihar.",
    gradient: "from-green-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
    borderColor: "border-green-200",
  },
];

export default function Features() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map(
            (
              { title, icon: Icon, desc, gradient, bgColor, borderColor },
              index
            ) => (
              <div
                key={index}
                className={`group p-4 md:p-6 ${bgColor} rounded-2xl border ${borderColor} hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="flex-shrink-0 mb-3 md:mb-4">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 md:w-7 h-6 md:h-7 text-white" />
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 break-words">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed break-words">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
