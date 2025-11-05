"use client"

export default function ProjectCard({
  project,
  isHovered,
  onHover,
}: {
  project: any
  isHovered: boolean
  onHover: (id: string | null) => void
}) {
  return (
    <a href={project.link}>
      <div
        className="glass-lg rounded-2xl overflow-hidden cursor-pointer group h-full flex flex-col transition-all duration-400 hover:shadow-2xl hover:shadow-cyan-500/20"
        onMouseEnter={() => onHover(project.id)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-foreground/10 to-foreground/5 aspect-video">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-125 rotate-1" : "scale-100"
            }`}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80 transition-all duration-500 ${
              isHovered ? "from-black/20 via-black/40 to-black/90" : ""
            }`}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-center transform transition-all duration-500">
                <div
                  className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mb-3 mx-auto transition-all duration-500 ${isHovered ? "scale-100 shadow-lg shadow-white/20" : "scale-75"}`}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p
                  className={`text-white font-semibold transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  View Project
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4">
            <span className="text-xs font-bold text-cyan-300 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3
            className={`text-xl font-bold mb-2 transition-all duration-400 ${
              isHovered ? "text-cyan-400" : "text-foreground"
            }`}
          >
            {project.title}
          </h3>

          <p className="text-foreground/60 text-sm mb-4 flex-1 leading-relaxed font-light">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-foreground/10">
            {project.tools.map((tool: string, i: number) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-foreground/70 border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-all duration-300 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}
