"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-black text-lg mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Cashe
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-light">
              Premium design and automation solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground/90 text-sm uppercase tracking-widest">Navigate</h4>
            <div className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "mailto:hello@cashe.dev" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/60 hover:text-cyan-400 transition-colors duration-300 font-light"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-foreground/90 text-sm uppercase tracking-widest">Services</h4>
            <div className="space-y-3 text-sm">
              {["UI/UX Design", "Mobile Design", "Automation", "Brand Strategy"].map((service) => (
                <p key={service} className="text-foreground/60 font-light">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold mb-4 text-foreground/90 text-sm uppercase tracking-widest">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://calendly.com/cashe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm font-bold hover:bg-cyan-500/30 transition-colors duration-300 border border-cyan-500/20 hover:border-cyan-500/50"
              >
                Book Call
              </a>
              <p className="text-foreground/60 text-sm font-light">hello@cashe.dev</p>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-foreground/50 font-light">
            © {currentYear} Cashe. All rights reserved. Crafted with precision and passion.
          </p>
          <div className="flex gap-8">
            {[
              { name: "Privacy", href: "#" },
              { name: "Terms", href: "#" },
              { name: "Credits", href: "#" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-foreground/50 hover:text-foreground/80 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
