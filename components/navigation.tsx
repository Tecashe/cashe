"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass backdrop-blur-xl py-3 shadow-lg shadow-black/50" : "py-6"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.15)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="group text-2xl font-black tracking-tight transition-all duration-300">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Cashe
          </span>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
            Home
          </Link>
          <Link href="/projects" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
            Projects
          </Link>
          <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
            About
          </Link>
          <a
            href="https://calendly.com/cashe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 duration-200"
          >
            Book Call
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass mx-4 mt-4 p-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-foreground/70 hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
            <a
              href="https://calendly.com/cashe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-center"
            >
              Book Call
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
