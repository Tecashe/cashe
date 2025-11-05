"use client"
import { useState } from "react"
import Link from "next/link"

interface MicroSite {
  id: string
  title: string
  description: string
  category: "web" | "mobile" | "saas"
  url: string
  technologies: string[]
}

const microSites: MicroSite[] = [
  {
    id: "1",
    title: "Financial Dashboard Pro",
    description: "Modern SaaS financial analytics platform with real-time data visualization",
    category: "web",
    url: "https://yazzil.com",
    technologies: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "Premium shopping experience with seamless checkout and inventory management",
    category: "web",
    url: "https://yazzil.com",
    technologies: ["Next.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "3",
    title: "Mobile Fitness Tracker",
    description: "Elegant health tracking app with social features and AI coaching",
    category: "mobile",
    url: "https://yazzil.com",
    technologies: ["React Native", "Firebase", "Node.js"],
  },
  {
    id: "4",
    title: "Project Management Suite",
    description: "Collaborative workspace for teams with real-time updates and integrations",
    category: "saas",
    url: "https://yazzil.com",
    technologies: ["Vue", "WebSockets", "MongoDB"],
  },
]

export default function MicroSites() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "web" | "mobile" | "saas">("all")
  const [selectedSite, setSelectedSite] = useState<MicroSite | null>(microSites[0])

  const filteredSites =
    selectedCategory === "all" ? microSites : microSites.filter((site) => site.category === selectedCategory)

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-40 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-30"
          style={{ animation: "float-smooth 20s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl opacity-20"
          style={{ animation: "drift 15s ease-in-out infinite", animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-cyan-300 tracking-widest">
              LIVE PROJECTS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Real websites and applications I've designed and built. Click on any project to see a live preview.
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-3">
            {filteredSites.map((site) => (
              <button
                key={site.id}
                onClick={() => setSelectedSite(site)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  selectedSite?.id === site.id
                    ? "glass-lg bg-cyan-500/20 border-cyan-400/50"
                    : "glass hover:border-cyan-400/30 border-transparent"
                }`}
              >
                <h3 className="font-semibold text-foreground mb-1">{site.title}</h3>
                <span className="text-xs font-semibold text-cyan-400 uppercase">{site.category}</span>
              </button>
            ))}
          </div>

          {selectedSite && (
            <div
              className="lg:col-span-2 glass-lg rounded-2xl overflow-hidden h-96 lg:h-full min-h-96"
              style={{
                animation: "scale-in 0.5s ease-out",
              }}
            >
              <iframe
                src={selectedSite.url}
                className="w-full h-full border-0"
                allow="geolocation; microphone; camera"
              />
            </div>
          )}
        </div>

        {selectedSite && (
          <div className="mt-12 flex gap-4">
            <Link
              href={`/projects/${selectedSite.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              View Full Project Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={selectedSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold glass border-cyan-400/30 text-cyan-300 hover:border-cyan-400/50 transition-all duration-300"
            >
              Open Live Site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
