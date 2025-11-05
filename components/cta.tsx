"use client"

import { useEffect, useState } from "react"

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className="glass-lg p-12 md:p-20 rounded-3xl text-center transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/30"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 800ms cubic-bezier(0.23, 1, 0.320, 1)",
          }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
            Ready to Build Something Extraordinary?
          </h2>

          <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Let's collaborate on your next design project, automation challenge, or digital transformation. I'm
            available for full-time engagements and strategic partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://calendly.com/cashe"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-lg font-bold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2 text-white">
                Schedule a Call
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
              href="mailto:hello@cashe.dev"
              className="group px-10 py-4 rounded-lg font-bold border border-foreground/20 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10"
            >
              Get in Touch
            </a>
          </div>

          <div className="pt-12 border-t border-foreground/10">
            <p className="text-xs uppercase font-bold text-foreground/50 mb-6 tracking-widest">Current Status</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              {[
                { icon: "✓", text: "Open to new projects" },
                { icon: "⚡", text: "24-hour response time" },
                { icon: "🎯", text: "Available for partnerships" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-foreground/70 group-hover:text-cyan-400 transition-colors"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "scale(1)" : "scale(0.8)",
                    transition: `all 500ms cubic-bezier(0.23, 1, 0.320, 1) ${400 + i * 100}ms`,
                  }}
                >
                  <span className="text-lg font-bold text-cyan-400">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
