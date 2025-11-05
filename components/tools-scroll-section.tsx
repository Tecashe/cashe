"use client"

import { useEffect, useState } from "react"

interface Tool {
  name: string
  icon: string
}

const tools: Tool[] = [
  { name: "Figma", icon: "🎨" },
  { name: "Adobe XD", icon: "✏️" },
  { name: "Zapier", icon: "⚙️" },
  { name: "n8n", icon: "🔗" },
  { name: "Make", icon: "🧩" },
  { name: "VoiceFlow", icon: "🎙️" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
]

export default function ToolsScrollSection() {
  const [currentToolIndex, setCurrentToolIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("tools-scroll-section")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight

      // Calculate scroll progress relative to this section
      const startScroll = viewportHeight
      const endScroll = -sectionHeight

      if (sectionTop <= startScroll && sectionTop >= endScroll) {
        const progress = (startScroll - sectionTop) / (startScroll - endScroll)
        setScrollProgress(Math.max(0, Math.min(1, progress)))

        // Calculate which tool to display based on scroll progress
        const toolIndex = Math.floor(progress * (tools.length - 1))
        setCurrentToolIndex(toolIndex)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentTool = tools[currentToolIndex]

  return (
    <section id="tools-scroll-section" className="relative min-h-[600vh] bg-background">
      {/* Sticky content container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-40"
            style={{ animation: "float-smooth 25s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl opacity-30"
            style={{ animation: "drift 20s ease-in-out infinite", animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 text-center">
          {/* Fancy start-like circle */}
          <div className="flex justify-center mb-12">
            <div className="relative w-64 h-64">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-300"
                style={{ animation: "spin 8s linear infinite" }}
              />

              {/* Middle pulsing ring */}
              <div className="absolute inset-4 rounded-full border border-cyan-500/30 animate-pulse" />

              {/* Inner circle with glow */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/10 shadow-2xl shadow-cyan-500/30" />

              {/* Icon display area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  key={currentTool.name}
                  style={{
                    animation: "scale-in 0.4s ease-out",
                  }}
                  className="text-center"
                >
                  <div className="text-9xl mb-4">{currentTool.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">{currentTool.name}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mt-12">
            <div className="text-muted-foreground text-sm mb-4">
              {currentToolIndex + 1} of {tools.length}
            </div>
            <div className="w-48 h-1 bg-foreground/10 rounded-full overflow-hidden mx-auto">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300"
                style={{ width: `${((currentToolIndex + 1) / tools.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Instruction text */}
          <div className="mt-8 text-foreground/50 text-sm">
            <p>Scroll to discover the tools I work with</p>
          </div>
        </div>
      </div>

      {/* Hidden spacer to enable scrolling through all tools */}
      <div className="relative h-screen" />
    </section>
  )
}
