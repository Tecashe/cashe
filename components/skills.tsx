"use client"

import { useEffect, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 98 },
        { name: "Adobe XD", level: 95 },
        { name: "Prototyping", level: 96 },
        { name: "Design Systems", level: 94 },
      ],
    },
    {
      title: "Automation & Integration",
      skills: [
        { name: "n8n", level: 96 },
        { name: "Zapier", level: 97 },
        { name: "API Integration", level: 95 },
        { name: "VoiceFlow", level: 93 },
      ],
    },
    {
      title: "Design Disciplines",
      skills: [
        { name: "User Research", level: 92 },
        { name: "UI/UX Design", level: 97 },
        { name: "Interaction Design", level: 95 },
        { name: "Mobile Design", level: 96 },
      ],
    },
  ]

  const otherSkills = [
    { name: "Accessibility (WCAG)", icon: "♿" },
    { name: "Performance Optimization", icon: "⚡" },
    { name: "Responsive Design", icon: "📱" },
    { name: "Brand Strategy", icon: "🎯" },
    { name: "User Testing", icon: "🔬" },
    { name: "Database Design", icon: "📊" },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-20px)",
              transition: "all 700ms cubic-bezier(0.23, 1, 0.320, 1)",
            }}
          >
            <p className="text-xs uppercase font-bold text-cyan-400 tracking-widest mb-4">Expertise</p>
            <h2 className="text-4xl sm:text-5xl font-black leading-[1.1]">Skills & Proficiencies</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 700ms cubic-bezier(0.23, 1, 0.320, 1) ${200 + categoryIndex * 100}ms`,
              }}
            >
              <h3 className="text-lg font-bold mb-8 text-cyan-400">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-foreground/90">{skill.name}</span>
                      <span className="text-xs font-bold text-cyan-400/70 group-hover:text-cyan-400 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2.5 bg-foreground/10 rounded-full overflow-hidden group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full origin-left transition-all duration-1000"
                        style={{
                          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                          width: `${skill.level}%`,
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 80}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 700ms cubic-bezier(0.23, 1, 0.320, 1) 800ms",
          }}
        >
          <p className="text-xs uppercase font-bold text-cyan-400 tracking-widest mb-6">Additional Competencies</p>
          <div className="grid md:grid-cols-3 gap-3">
            {otherSkills.map((skill, i) => (
              <div
                key={skill.name}
                className="glass-hover px-4 py-3 rounded-lg text-center group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0.9)",
                  transition: `all 500ms cubic-bezier(0.23, 1, 0.320, 1) ${900 + i * 50}ms`,
                }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
