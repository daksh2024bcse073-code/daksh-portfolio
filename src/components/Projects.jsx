import { ArrowUpRight, Github, ExternalLink, FileText, Check } from 'lucide-react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Card from './Card.jsx'
import { accents } from '../data/accents.js'
import { projects } from '../data/profile.js'

const linkMeta = {
  github: { label: 'Code', icon: Github },
  live: { label: 'Live demo', icon: ExternalLink },
  paper: { label: 'Paper', icon: FileText },
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 · Projects"
      title="Featured projects"
      subtitle="Machine learning, NLP and full-stack work, from research to hackathon builds."
      alt
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => {
          const a = accents[p.accent]
          const Icon = p.icon
          return (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <Card className="project-card flex h-full flex-col border-border/90">
                <div className={`absolute inset-x-0 top-0 h-1 ${a.solid}`} />
                <div className="flex items-start justify-between gap-4">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${a.soft} ${a.text}`}>
                    <Icon size={22} />
                  </span>
                  <span className="text-right font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent2">
                    {p.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold">{p.title}</h3>
                <p className={`text-sm font-medium ${a.text}`}>{p.subtitle}</p>
                <p className="mt-3 text-base font-medium leading-relaxed text-muted">{p.description}</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="project-metric rounded-xl border px-4 py-3">
                      <p className={`font-display text-xl font-bold ${a.text}`}>{m.value}</p>
                      <p className="text-xs text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>

                <ul className="mt-5 space-y-2.5 text-sm font-medium text-muted">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <Check size={16} className={`mt-0.5 shrink-0 ${a.text}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {Object.entries(p.links).map(([key, href]) => {
                    const { label, icon: LinkIcon } = linkMeta[key]
                    const isPlaceholder = href === '#'
                    return (
                      <a
                        key={key}
                        href={href}
                        target={isPlaceholder ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        title={isPlaceholder ? 'Link not added yet' : undefined}
                        className={`inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${a.hover} ${
                          isPlaceholder ? 'text-muted' : 'text-fg'
                        }`}
                      >
                        <LinkIcon size={15} /> {label} <ArrowUpRight size={13} />
                      </a>
                    )
                  })}
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
