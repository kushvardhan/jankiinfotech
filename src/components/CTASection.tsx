"use client";

import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Sparkles className="h-4 w-4 text-white mr-2" />
          <span className="text-sm font-semibold text-white">
            Let&apos;s Build Something Amazing
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who trust us with their digital
          transformation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/schedule-consultation">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-xl ">
              <Rocket className="w-5 h-5 mr-2" />
              Start a Project
            </Button>
          </Link>
          <Link href="/careers">
            <Button
              variant="outline"
              className="border-2 border-white text-purple-500 hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-semibold shadow-xl "
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
