'use client'

import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 bg-white border-t text-gray-600 text-sm">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side - Copyright */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-gray-800">
            © 2025 Janki<span className="text-green-800">Infotech</span> &amp; Team. All rights reserved.
          </p>
        </div>

        {/* Center - Contact + Slogan */}
        <div className="text-center text-sm">
          <p>Empowering your digital presence with websites and marketing that deliver results.</p>
          <p className="mt-2">
            <a href="tel:+918228800345" className="hover:underline">+91 822‑8800‑345</a> · 
            <a href="mailto:jankiinfotech7@gmail.com" className="hover:underline">jankiinfotech7@gmail.com</a>
          </p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/company/janki-infotech" target="_blank">
            <Linkedin className="h-5 w-5 hover:text-green-800 transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/jankiinfotech" target="_blank">
            <Instagram className="h-5 w-5 hover:text-green-800 transition-colors" />
          </Link>
          <Link href="https://www.facebook.com/jankiinfotech" target="_blank">
            <Facebook className="h-5 w-5 hover:text-green-800 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
