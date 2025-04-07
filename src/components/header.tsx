"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Chalam<span className="text-blue-600">Soft</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/employers" className="text-gray-700 hover:text-blue-600 font-medium">
              For Employers
            </Link>
            <Link href="/job-seekers" className="text-gray-700 hover:text-blue-600 font-medium">
              For Job Seekers
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium">
              Testimonials
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-base hover:bg-blue-200">Find a Job</Button>
            <Button className="text-white bg-blue-600 hover:bg-blue-400">Hire Talent</Button>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-4 pb-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/employers" className="text-gray-700 hover:text-blue-600 font-medium">
                For Employers
              </Link>
              <Link href="/job-seekers" className="text-gray-700 hover:text-blue-600 font-medium">
                For Job Seekers
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 font-medium">
                Testimonials
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full text-base hover:bg-blue-200">Find a Job</Button>
              <Button className="w-full text-white bg-blue-600 hover:bg-blue-400">Hire Talent</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

