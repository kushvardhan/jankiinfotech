import { ArrowRight, Briefcase, GraduationCap, Users } from "lucide-react";

const features = [
  {
    title: "IT Job Creation",
    icon: Briefcase,
    desc: "Creating local jobs in Bihar and building capacity/capability for world class software development.",
  },
  {
    title: "Skill development",
    icon: GraduationCap,
    desc: "Working with local engineering colleges and training students on latest technologies and tools.",
  },
  {
    title: "Hands-on Internship",
    icon: Users,
    desc: "Live, real-world projects for student interns to help develop practical skills and employability.",
  },
  {
    title: "Reversing Migration",
    icon: ArrowRight,
    desc: "Inspiring talented engineers to come back to their native place and work from Bihar.",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, icon: Icon, desc }, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-green-50 rounded-lg border border-green-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="flex-shrink-0 mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 break-words">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed break-words">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
