"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import FadeInSection from "@/components/FadeInSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import OurWorkPreview from "@/components/OurWorkPreview";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <FadeInSection delay={100}>
        <Features />
      </FadeInSection>

      <FadeInSection delay={200}>
        <ServicesSection />
      </FadeInSection>

      <FadeInSection delay={100}>
        <WhyChooseUs />
      </FadeInSection>

      <FadeInSection delay={100}>
        <OurWorkPreview />
      </FadeInSection>

      <FadeInSection delay={200}>
        <AboutSection />
      </FadeInSection>

      <FadeInSection delay={100}>
        <CTASection />
      </FadeInSection>

      <FadeInSection delay={200}>
        <ContactSection />
      </FadeInSection>

      <Footer />
    </main>
  );
}
