"use client";

import { Button } from "@/components/ui/button";
import { Rocket, Users } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-green-100 mb-8">
          Join hundreds of satisfied clients who trust us with their digital
          transformation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/schedule-consultation">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              <Rocket className="w-5 h-5 mr-2" />
              Start a Project
            </Button>
          </Link>
          <Link href="/careers">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
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
