import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { links, navItems, person } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold">
              {person.name}
              <span className="text-accent2">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted">{person.tagline}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted transition hover:border-accent/60 hover:text-fg"
              >
                <Github size={18} />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-muted transition hover:border-accent/60 hover:text-fg"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent2">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted md:grid-cols-1">
              {navItems.slice(0, 5).map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="transition hover:text-fg">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent2">More</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {navItems.slice(5).map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="transition hover:text-fg">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <p>
            {person.college} · Built with React, Tailwind CSS &amp; Lucide
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 transition hover:border-accent/60 hover:text-fg"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
