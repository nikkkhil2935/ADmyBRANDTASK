"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-2xl px-6 py-4 hover:bg-white/40 hover:border-white/50 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-yRlVouGjQZrMsnt0FUJVd7D2bpZnPq.png"
                alt="ADmyBRAND Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Product
              </a>
              <a href="#pricing" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Blog
              </a>
              <a href="#faq" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-slate-700 hover:text-blue-600 font-medium">
                  Product
                </a>
                <a href="#pricing" className="text-slate-700 hover:text-blue-600 font-medium">
                  Pricing
                </a>
                <a href="#testimonials" className="text-slate-700 hover:text-blue-600 font-medium">
                  Blog
                </a>
                <a href="#faq" className="text-slate-700 hover:text-blue-600 font-medium">
                  Contact
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
