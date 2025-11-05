"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 max-w-2xl">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 700ms cubic-bezier(0.23, 1, 0.320, 1)",
            }}
          >
            <p className="text-xs uppercase font-bold text-cyan-400 tracking-widest mb-4">About Me</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Transforming Ideas Into Digital Excellence
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed font-light">
              I blend strategic design thinking with technical automation expertise to create transformative digital
              experiences.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "all 800ms cubic-bezier(0.23, 1, 0.320, 1) 200ms",
            }}
          >
            <div className="space-y-6">
              {[
                "I'm a designer and automation architect passionate about solving complex problems through elegant digital solutions. With deep expertise in UI/UX design and workflow automation, I help businesses streamline operations while creating memorable user experiences.",
                "My work spans from pixel-perfect interfaces to enterprise-grade automation systems. Whether it's designing a SaaS dashboard or orchestrating complex workflows with n8n, I approach every project with meticulous attention to detail.",
                "I believe great design isn't just about aesthetics—it's about understanding user needs, business objectives, and technical constraints. Every solution I create is responsive, accessible, and optimized for performance.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-lg text-foreground/70 leading-relaxed font-light"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 700ms cubic-bezier(0.23, 1, 0.320, 1) ${400 + i * 100}ms`,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Service cards */}
          <div className="space-y-4">
            {[
              {
                title: "UI/UX Design",
                description: "Figma, Adobe XD, Design Systems, Prototyping, Interaction Design",
                icon: "🎨",
              },
              {
                title: "Mobile Design",
                description: "iOS & Android Design, User Research, Accessibility, Responsive Design",
                icon: "📱",
              },
              {
                title: "Workflow Automation",
                description: "Zapier, n8n, API Integration, Process Optimization, Custom Workflows",
                icon: "⚡",
              },
              {
                title: "AI & Chatbots",
                description: "VoiceFlow, Conversational Design, Lead Qualification, Customer Support",
                icon: "🤖",
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className="glass-hover p-6 rounded-xl group cursor-pointer transition-all duration-400 hover:shadow-lg hover:shadow-cyan-500/20"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                  transition: `all 600ms cubic-bezier(0.23, 1, 0.320, 1) ${600 + i * 100}ms`,
                }}
              >
                <div className="flex gap-4">
                  <div className="text-3xl group-hover:scale-125 transition-transform duration-300">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
