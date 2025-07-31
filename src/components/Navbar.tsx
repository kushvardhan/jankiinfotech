'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white">
      <Link href="/" className="text-xl font-bold text-primary">
        MithilaStack
      </Link>
      <nav className="flex gap-4">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Button className="bg-primary text-white hover:bg-green-700">
          Get Started
        </Button>
      </nav>
    </header>
  )
}
