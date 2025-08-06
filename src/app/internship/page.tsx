import InternshipProgramsSection from "@/components/InternshipProgramsSection";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, MapPin, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internship Programs | JankiInfotech",
  description:
    "Join our comprehensive internship programs in web development, mobile app development, and software engineering. Gain hands-on experience with industry experts.",
  keywords: [
    "internship",
    "training",
    "web development",
    "mobile development",
    "software engineering",
    "career",
  ],
};

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Internship Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Launch your tech career with our comprehensive internship
              programs. Get hands-on experience, industry mentorship, and job
              placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <InternshipProgramsSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Internship Programs?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Mentorship
              </h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hands-on Projects
              </h3>
              <p className="text-gray-600">
                Work on real-world projects that build your portfolio
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Certification
              </h3>
              <p className="text-gray-600">
                Receive industry-recognized certificates upon completion
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Job Placement
              </h3>
              <p className="text-gray-600">
                Get assistance with job placements and career guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have launched their careers through
            our internship programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Apply Now
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
