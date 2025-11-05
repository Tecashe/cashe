"use client"

import { useEffect, useState } from "react"

const CODE_SNIPPET = `// Welcome to Cashe's Digital Studio
// Building elegant solutions for complex problems

const designPhilosophy = {
  approach: "User-Centric",
  tools: ["Figma", "Adobe XD"],
  automation: ["Zapier", "n8n", "VoiceFlow"],
  impact: "Transforming Business"
}

function craftsDigitalExperience() {
  return "Premium Design + Seamless Automation"
}

// Let's create something extraordinary together ✨`

export default function Hero() {
  const [displayCode, setDisplayCode] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Typewriter effect for code
    let index = 0
    const timer = setInterval(() => {
      if (index <= CODE_SNIPPET.length) {
        setDisplayCode(CODE_SNIPPET.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 20)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-3xl"
          style={{ animation: "float-smooth 20s ease-in-out infinite" }}
        />
        <div
          className="absolute -top-40 right-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/6 blur-3xl"
          style={{ animation: "float-smooth 25s ease-in-out infinite reverse", animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div
            className="space-y-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateX(0)" : "translateX(-40px)",
              transition: "all 800ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div className="inline-block">
              <div className="glass-hover px-6 py-2.5 rounded-full backdrop-blur-xl">
                <p className="text-xs sm:text-sm font-semibold text-cyan-300 uppercase tracking-wide">
                  Web & Mobile Designer
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-4">
                <span className="block">Design That</span>
                <span className="block">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      Moves Business
                    </span>
                    <span
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300"
                      style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
                    />
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-foreground/70 max-w-xl leading-relaxed font-light">
              I craft premium digital experiences combined with intelligent automation. From pixel-perfect designs to
              seamless workflows, every project is built with precision and purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://calendly.com/cashe"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-105" />
                <span className="relative flex items-center justify-center gap-2 text-white">
                  Schedule Call
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>

              <a
                href="/#projects"
                className="group px-8 py-4 rounded-lg font-semibold border border-foreground/20 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:border-foreground/30 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right: Code Editor */}
          <div
            className="relative"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateX(0)" : "translateX(40px)",
              transition: "all 800ms cubic-bezier(0.23, 1, 0.32, 1) 200ms",
            }}
          >
            <div className="glass-lg rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              {/* Editor Header */}
              <div className="bg-card/50 px-6 py-4 border-b border-foreground/10 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-foreground/50 ml-4 font-mono">portfolio.ts</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                <pre className="text-foreground/80 whitespace-pre-wrap break-words">
                  <code>
                    {displayCode}
                    <span className="animate-pulse">▌</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-2xl -z-10 opacity-30" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-5 h-5 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
