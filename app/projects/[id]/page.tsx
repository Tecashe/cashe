"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

const projectDetails: Record<string, any> = {
  "1": {
    title: "Financial Dashboard Pro",
    description: "Modern SaaS financial analytics platform with real-time data visualization",
    category: "web",
    url: "https://yazzil.com",
    technologies: ["React", "TypeScript", "Tailwind", "Chart.js", "PostgreSQL"],
    overview:
      "A comprehensive financial analytics dashboard built for modern businesses. Real-time data visualization, advanced filtering, and customizable reports.",
    features: [
      "Real-time data updates",
      "Advanced analytics and reporting",
      "Custom dashboard widgets",
      "Data export capabilities",
      "Mobile responsive design",
      "Dark mode support",
    ],
    process: [
      "Conducted user research with financial professionals",
      "Designed wireframes and high-fidelity prototypes in Figma",
      "Built interactive components with React",
      "Implemented real-time data visualization",
      "Optimized for performance and accessibility",
    ],
    results: "Increased user engagement by 340% and became the leading dashboard in its category",
  },
  "2": {
    title: "E-Commerce Platform",
    description: "Premium shopping experience with seamless checkout and inventory management",
    category: "web",
    url: "https://yazzil.com",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    overview: "Full-stack e-commerce platform designed for luxury brands with seamless UX",
    features: [
      "Seamless checkout process",
      "Real-time inventory management",
      "Advanced product filtering",
      "Personalized recommendations",
      "Order tracking",
      "Admin dashboard",
    ],
    process: [
      "Analyzed competitor platforms",
      "Created detailed user flows",
      "Designed premium UI components",
      "Built scalable backend",
      "Implemented payment processing",
    ],
    results: "Achieved 2.5x conversion rate improvement and $1M+ in annual revenue",
  },
  "3": {
    title: "Mobile Fitness Tracker",
    description: "Elegant health tracking app with social features and AI coaching",
    category: "mobile",
    url: "https://yazzil.com",
    technologies: ["React Native", "Firebase", "Node.js", "Machine Learning"],
    overview: "Cross-platform fitness tracking app with AI-powered workout recommendations",
    features: [
      "Workout tracking and analytics",
      "AI-powered recommendations",
      "Social challenges",
      "Nutrition tracking",
      "Heart rate integration",
      "Progress visualization",
    ],
    process: [
      "Conducted fitness enthusiast interviews",
      "Created user personas",
      "Designed mobile-first interface",
      "Implemented ML recommendations",
      "Built social features",
    ],
    results: "100K+ downloads and 4.8 star rating on app stores",
  },
  "4": {
    title: "Project Management Suite",
    description: "Collaborative workspace for teams with real-time updates and integrations",
    category: "saas",
    url: "https://yazzil.com",
    technologies: ["Vue.js", "WebSockets", "MongoDB", "Node.js"],
    overview: "Enterprise project management solution with real-time collaboration",
    features: [
      "Real-time collaboration",
      "Task management",
      "Team communication",
      "File sharing",
      "Integrations with third-party tools",
      "Advanced reporting",
    ],
    process: [
      "Interviewed 50+ teams",
      "Built comprehensive design system",
      "Implemented real-time sync",
      "Created intuitive UI",
      "Built robust backend",
    ],
    results: "Trusted by 500+ teams with 99.9% uptime",
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [scrolled, setScrolled] = useState(false)
  const project = projectDetails[params.id]

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation scrolled={scrolled} />
        <div className="pt-32 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project not found</h1>
            <Link href="/projects" className="text-cyan-400 hover:text-cyan-300">
              Back to projects
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation scrolled={scrolled} />

      {/* Back Button */}
      <div className="pt-32 px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 pb-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">{project.overview}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="glass px-4 py-2 rounded-full text-sm text-cyan-300 font-semibold border border-cyan-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl overflow-hidden h-96 md:h-[600px] w-full">
            <iframe src={project.url} className="w-full h-full border-0" allow="geolocation; microphone; camera" />
          </div>

          {/* Expand to fullscreen button */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => {
                const modal = document.createElement("div")
                modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                modal.innerHTML = `
                  <div class="glass rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden" onclick="event.stopPropagation()">
                    <div class="flex items-center justify-between p-6 border-b border-cyan-400/20">
                      <h3 class="text-2xl font-bold text-foreground">${project.title}</h3>
                      <button class="group p-2 rounded-lg hover:bg-foreground/10 transition-colors" onclick="this.closest('div').parentElement.remove()">
                        <svg class="w-6 h-6 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div class="flex-grow overflow-hidden bg-white">
                      <iframe src="${project.url}" class="w-full h-full border-0" allow="geolocation; microphone; camera" />
                    </div>
                  </div>
                `
                modal.onclick = () => modal.remove()
                document.body.appendChild(modal)
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Full Screen Preview
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold glass border-cyan-400/30 text-cyan-300 hover:border-cyan-400/50 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Site
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature: string, index: number) => (
              <div
                key={feature}
                className="glass rounded-xl p-6 border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                style={{
                  animation: `slide-up-fade 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <h3 className="font-semibold text-foreground mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Development Process</h2>
          <div className="space-y-4">
            {project.process.map((step: string, index: number) => (
              <div
                key={step}
                className="glass rounded-xl p-6 border-cyan-400/20 flex gap-4"
                style={{
                  animation: `slide-up-fade 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center text-sm font-bold text-cyan-300 border border-cyan-400/50">
                  {index + 1}
                </div>
                <p className="text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 py-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl p-12 border-cyan-400/20 text-center">
            <h3 className="text-sm font-semibold text-cyan-300 tracking-widest mb-4">RESULTS & IMPACT</h3>
            <p className="text-3xl md:text-4xl font-bold text-foreground">{project.results}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to start your project?</h2>
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Schedule a Consultation
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
