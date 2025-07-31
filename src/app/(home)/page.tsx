'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Features from '@/components/Features';


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-green-800 font-sans">
      {/* Navbar */}
      <Navbar/>

      <section className="text-center py-20 px-4 bg-white">
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
        Build Modern Solutions for Mithila
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
        Empowering local tech, communities, and culture through innovation.
      </p>
      <Button className="bg-primary text-white px-6 py-2 text-lg hover:bg-green-700">
        Get Started
      </Button>
    </section>

    <Features />

    <Footer />
    </main>
  )
}
