"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import ScrollAnimation, { ParallaxScroll } from "@/components/ScrollAnimations";
import ServicesSection from "@/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import WorkflowSection from "@/components/WorkflowSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <ScrollAnimation animation="fadeInUp" delay={200}>
        <Features />
      </ScrollAnimation>

      <ParallaxScroll speed={0.3}>
        <ScrollAnimation animation="scaleIn" delay={300}>
          <TechnologiesSection />
        </ScrollAnimation>
      </ParallaxScroll>

      <ScrollAnimation animation="fadeInLeft" delay={400}>
        <WorkflowSection />
      </ScrollAnimation>

      <ParallaxScroll speed={0.2}>
        <ScrollAnimation animation="fadeInRight" delay={500}>
          <ServicesSection />
        </ScrollAnimation>
      </ParallaxScroll>

      <ScrollAnimation animation="slideInUp" delay={600}>
        <AboutSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fadeInUp" delay={700}>
        <ContactSection />
      </ScrollAnimation>

      <Footer />
    </main>
  );
}
