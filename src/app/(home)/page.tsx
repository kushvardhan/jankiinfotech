"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FadeInSection from "@/components/FadeInSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import WorkflowSection from "@/components/WorkflowSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <FadeInSection delay={100}>
        <Features />
      </FadeInSection>

      <FadeInSection delay={200}>
        <TechnologiesSection />
      </FadeInSection>

      <FadeInSection delay={100}>
        <WorkflowSection />
      </FadeInSection>

      <FadeInSection delay={200}>
        <ServicesSection />
      </FadeInSection>

      <FadeInSection delay={100}>
        <AboutSection />
      </FadeInSection>

      <FadeInSection delay={200}>
        <ContactSection />
      </FadeInSection>

      <Footer />
    </main>
  );
}
