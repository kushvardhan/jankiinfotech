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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling Features */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:animate-pause space-x-8">
            {/* First set */}
            {features.map(({ title, icon: Icon, desc }, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-80 p-6 bg-green-50 rounded-lg border border-green-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {features.map(({ title, icon: Icon, desc }, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-80 p-6 bg-green-50 rounded-lg border border-green-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
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
          animation: scroll 15s linear infinite;
        }

        .animate-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
