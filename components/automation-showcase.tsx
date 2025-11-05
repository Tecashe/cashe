"use client"

import { useState } from "react"
import { ArrowRight, Zap } from "lucide-react"

interface AutomationExample {
  id: string
  title: string
  description: string
  tools: string[]
  steps: string[]
  benefit: string
  icon: string
}

const automations: AutomationExample[] = [
  {
    id: "1",
    title: "Lead Qualification Pipeline",
    description: "Automatically capture, qualify, and nurture leads from multiple sources",
    tools: ["Zapier", "Slack", "Google Sheets", "Email"],
    steps: ["Receive form submission", "Score lead quality", "Send to Slack notification", "Add to CRM database"],
    benefit: "Save 5+ hours per week on lead management",
    icon: "📧",
  },
  {
    id: "2",
    title: "Content Distribution",
    description: "Publish content across all channels with a single trigger",
    tools: ["n8n", "Twitter", "LinkedIn", "Medium", "Newsletter"],
    steps: [
      "New blog post published",
      "Generate social previews",
      "Schedule to all platforms",
      "Track engagement metrics",
    ],
    benefit: "Reach 10x audience with minimal effort",
    icon: "📱",
  },
  {
    id: "3",
    title: "VoiceFlow Chatbot Integration",
    description: "AI-powered customer support with seamless handoff to humans",
    tools: ["VoiceFlow", "OpenAI", "Zendesk", "Database"],
    steps: ["Customer initiates chat", "AI handles common questions", "Escalate if needed", "Log conversation data"],
    benefit: "Handle 100+ conversations simultaneously",
    icon: "🤖",
  },
  {
    id: "4",
    title: "Invoice & Payment Automation",
    description: "From quote to payment tracking - fully automated workflow",
    tools: ["Make", "Stripe", "Email", "Accounting Software"],
    steps: ["Client approves quote", "Generate invoice", "Send payment link", "Auto-reconcile payments"],
    benefit: "Accelerate cash flow by 40%",
    icon: "💰",
  },
]

export default function AutomationShowcase() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="py-24 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-30"
          style={{ animation: "float-smooth 22s ease-in-out infinite", animationDelay: "2s" }}
        />
        <div
          className="absolute top-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl opacity-20"
          style={{ animation: "drift 18s ease-in-out infinite" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-cyan-300 tracking-widest">
              AUTOMATION EXAMPLES
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Real-World Workflows</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            See how automation can transform your business processes. These are proven workflows I've built for clients.
          </p>
        </div>

        {/* Automation Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {automations.map((automation, index) => (
            <div
              key={automation.id}
              className="group"
              style={{
                animation: `slide-up-fade 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className={`glass rounded-2xl p-8 transition-all duration-500 h-full flex flex-col border-cyan-400/20`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{automation.icon}</div>
                  <Zap
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedId === automation.id ? "text-cyan-400" : "text-muted-foreground"
                    }`}
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {automation.title}
                </h3>
                <p className="text-muted-foreground mb-6">{automation.description}</p>

                {/* Tools Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {automation.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1 rounded-full glass text-cyan-300 font-semibold border border-cyan-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-cyan-400/20">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-4 tracking-widest">HOW IT WORKS</h4>
                  <div className="space-y-3">
                    {automation.steps.map((step, stepIndex) => (
                      <div
                        key={step}
                        className="flex items-start gap-3 animate-in fade-in-50 slide-in-from-left-4 duration-300"
                        style={{ animationDelay: `${stepIndex * 50}ms` }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full glass flex items-center justify-center text-xs font-bold text-cyan-300 border border-cyan-400/50">
                          {stepIndex + 1}
                        </div>
                        <p className="text-sm text-foreground pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
                    <p className="text-sm text-cyan-300 font-semibold">💡 Result: {automation.benefit}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Have a process you want to automate? Let's build it together.</p>
          <a
            href="https://calendly.com/your-calendly-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full font-semibold text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
