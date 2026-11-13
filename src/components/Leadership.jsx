import { ArrowUpRight, Palette } from 'lucide-react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Card from './Card.jsx'
import { accents } from '../data/accents.js'
import { firstdraft, leadership, links, softSkills } from '../data/profile.js'

export default function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="08 · Leadership & entrepreneurship"
      title="Leadership & FirstDraft"
      subtitle="Organizing events, leading teams and building a digital product venture."
      alt
    >
      <div className="space-y-5">
        {leadership.map((l, i) => {
          const a = accents[l.accent]
          const Icon = l.icon
          const isBusinessClub = l.title.startsWith('Business Club')
          return (
            <Reveal key={l.title} delay={i * 100}>
              <Card className={isBusinessClub ? 'w-full p-7 sm:p-8' : 'w-full p-6 sm:p-7'}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-11 w-11 place-items-center rounded-xl ${a.soft} ${a.text}`}>
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{l.title}</h3>
                      {isBusinessClub && (
                        <p className="mt-1 text-xs font-mono uppercase tracking-[0.16em] text-accent">
                          Student Executive
                        </p>
                      )}
                    </div>
                  </div>
                  {isBusinessClub && (
                    <span className="chip">Leadership · Event Management</span>
                  )}
                </div>
                <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted">{l.text}</p>
                {l.bullets.length > 0 && (
                  <ul className={`mt-4 grid gap-3 text-sm text-muted ${isBusinessClub ? 'md:grid-cols-2' : ''}`}>
                    {l.bullets.map((b) => (
                      <li key={b} className="flex gap-3 rounded-xl border border-border/70 bg-background/40 p-4 leading-relaxed">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${a.solid}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </Reveal>
          )
        })}
      </div>

      {/* FirstDraft */}
      <Reveal className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/20 via-surface to-accent4/20 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent4/20 blur-[90px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent4">
                <Palette size={14} /> Entrepreneurship
              </p>
              <h3 className="mt-3 font-display text-4xl font-bold tracking-tight">{firstdraft.name}</h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{firstdraft.description}</p>
              <p className="mt-3 max-w-xl text-sm text-muted">{firstdraft.objective}</p>
              <a
                href={links.firstdraft}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7"
              >
                View company on LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="space-y-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent2">Products</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {firstdraft.products.map((p) => (
                    <span key={p} className="chip">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent2">Areas</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {firstdraft.areas.map((p) => (
                    <span key={p} className="chip">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">Soft skills</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {softSkills.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
