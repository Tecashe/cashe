"use client"

import { useEffect, useRef, useState } from "react"

const tools = [
  { name: "Figma", icon: "figma.jpg", category: "design" },
  { name: "Adobe XD", icon: "adobexd.jpg", category: "design" },
  { name: "Zapier", icon: "zapier.jpg", category: "automation" },
  { name: "n8n", icon: "n8n.jpg", category: "automation" },
  { name: "Make", icon: "make.jpg", category: "automation" },
  { name: "VoiceFlow", icon: "voiceflow.jpg", category: "automation" },
  { name: "React", icon: "react.jpg", category: "development" },
  { name: "Next.js", icon: "nextjs.jpg", category: "development" },
  { name: "TypeScript", icon: "typescript.jpg", category: "development" },
  { name: "Tailwind", icon: "tailwind.jpg", category: "development" },
]

export default function ToolsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const scroll = () => {
      if (!isHovering) {
        scrollPositionRef.current += 1
        const maxScroll = container.scrollWidth - container.clientWidth
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0
        }
        container.scrollLeft = scrollPositionRef.current
      }
    }

    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [isHovering])

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-40"
          style={{ animation: "float-smooth 25s ease-in-out infinite" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-cyan-300 tracking-widest">
              TECHNOLOGY STACK
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Tools & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized in design tools, automation platforms, and modern development technologies
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {[...tools, ...tools, ...tools].map((tool, index) => (
              <div key={`${tool.name}-${index}`} className="flex-shrink-0">
                <div className="glass rounded-2xl p-8 h-48 w-56 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-cyan-400/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  <img
                    src={`/icons/${tool.icon}`}
                    alt={tool.name}
                    className="h-16 w-16 mb-4 group-hover:scale-110 transition-transform duration-300 object-contain"
                  />

                  <h3 className="font-bold text-lg text-foreground group-hover:text-cyan-300 transition-colors duration-300">
                    {tool.name}
                  </h3>

                  <span className="mt-3 text-xs font-semibold text-cyan-400 tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {tool.category}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
