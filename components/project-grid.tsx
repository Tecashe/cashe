"use client"

import { useState } from "react"
import ProjectCard from "./project-card"

export default function ProjectGrid({ isVisible }: { isVisible: boolean }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    {
      id: "1",
      title: "SaaS Financial Dashboard",
      category: "UI/UX Design",
      tags: ["design", "dashboard"],
      description:
        "Complete redesign of enterprise financial dashboard with real-time data visualization and intuitive analytics.",
      tools: ["Figma", "Design System", "Prototyping"],
      image: "/modern-saas-financial-dashboard.jpg",
      link: "#",
      featured: true,
    },
    {
      id: "2",
      title: "E-Commerce Mobile App",
      category: "Mobile Design",
      tags: ["mobile", "design"],
      description:
        "End-to-end mobile shopping experience with intuitive navigation, seamless checkout, and personalization.",
      tools: ["Adobe XD", "User Research", "Prototyping"],
      image: "/mobile-ecommerce-shopping-app.jpg",
      link: "#",
      featured: true,
    },
    {
      id: "3",
      title: "Enterprise Workflow Automation",
      category: "Automation",
      tags: ["automation", "backend"],
      description:
        "Complex n8n workflow automating lead enrichment, CRM sync, email marketing, and multi-channel notifications.",
      tools: ["n8n", "API Integration", "Webhooks"],
      image: "/automation-workflow-system-diagram.jpg",
      link: "#",
      featured: true,
    },
    {
      id: "4",
      title: "AI Chatbot System",
      category: "Design + Automation",
      tags: ["design", "automation", "ai"],
      description:
        "VoiceFlow chatbot with premium UI for intelligent lead qualification, customer support, and engagement.",
      tools: ["VoiceFlow", "UI Design", "NLP"],
      image: "/ai-chatbot-interface-voiceflow.jpg",
      link: "#",
    },
    {
      id: "5",
      title: "Multi-Platform Automation",
      category: "Automation",
      tags: ["automation", "integration"],
      description:
        "Enterprise Zapier automation suite connecting Google Sheets, Slack, Stripe, HubSpot with custom logic.",
      tools: ["Zapier", "Integrations", "API Design"],
      image: "/zapier-automation-integration-tools.jpg",
      link: "#",
    },
    {
      id: "6",
      title: "Brand Identity Suite",
      category: "Design",
      tags: ["design", "branding"],
      description:
        "Full brand identity system and responsive website design for innovative tech startup with premium aesthetic.",
      tools: ["Figma", "Web Design", "Brand Strategy"],
      image: "/brand-identity-design-website.jpg",
      link: "#",
    },
  ]

  const filters = ["all", "design", "automation", "mobile"]

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 capitalize ${
              activeFilter === filter
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                : "glass glass-hover text-foreground/70 hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {filtered.map((project, index) => (
          <div
            key={project.id}
            className={`${project.featured ? "lg:col-span-1" : ""}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: `all 600ms cubic-bezier(0.23, 1, 0.320, 1) ${index * 80}ms`,
            }}
          >
            <ProjectCard project={project} isHovered={hoveredId === project.id} onHover={setHoveredId} />
          </div>
        ))}
      </div>
    </div>
  )
}
