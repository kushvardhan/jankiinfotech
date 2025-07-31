'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-green-800 font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-green-100">
        <Link href="/" className="text-6xl font-bold text-green-900">
          Janki<span className="text-green-600">Infotech</span>
        </Link>
        <nav className="flex gap-6 text-green-700 font-medium">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-green-900">
            Empowering Businesses with <span className="text-green-600">Smart Tech</span>
          </h1>
          <p className="text-lg text-green-700 mb-8">
            We help startups and enterprises build scalable and smart solutions tailored to their goals.
          </p>
          <Link
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Get Started
          </Link>
        </div>
        <div>
          JDFF
        </div>
      </section>
    </main>
  )
}
