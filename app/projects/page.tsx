"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation scrolled={scrolled} />
      <div className="pt-32 px-6 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="mb-20 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              A selection of my recent design projects and automation implementations that showcase my expertise in
              creating beautiful, functional digital experiences.
            </p>
          </div>
          <ProjectGrid isVisible={isVisible} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
