"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import MicroSites from "@/components/micro-sites"
import ToolsScrollSection from "@/components/tools-scroll-section"
import AutomationShowcase from "@/components/automation-showcase"
import About from "@/components/about"
import Skills from "@/components/skills"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation scrolled={scrolled} />
      <Hero />
      <MicroSites />
      <ToolsScrollSection />
      <AutomationShowcase />
      <About />
      <Skills />
      <CTA />
      <Footer />
    </main>
  )
}
