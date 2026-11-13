import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Card from './Card.jsx'
import { internships } from '../data/profile.js'

const statusStyle = (status) => {
  if (status.toLowerCase().includes('offer')) return 'bg-accent3/10 text-accent3 border-accent3/25'
  return 'bg-accent/10 text-accent2 border-accent/25'
}

export default function Internships() {
  const visible = internships.filter((item) => item.show)

  return (
    <Section
      id="internships"
      eyebrow="06 · Experience"
      title="Internships & Research"
      subtitle="A snapshot of my industry exposure and research experience."
      alt
    >
      <div className="relative mx-auto max-w-4xl space-y-5">
        <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-accent/70 via-border to-transparent sm:block" />
        {visible.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={`${item.org}-${item.role}`} delay={index * 100}>
              <div className="relative sm:pl-16">
                <div className="absolute left-[7px] top-7 z-10 hidden h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-bg text-accent shadow-lg shadow-accent/10 sm:grid">
                  <Icon size={19} />
                </div>
                <Card className="p-5 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent sm:hidden">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold leading-snug sm:text-xl">{item.role}</h3>
                        <p className="mt-1 text-base text-muted">{item.org}</p>
                        {item.mentor && <p className="mt-1 text-sm text-muted">{item.mentor}</p>}
                      </div>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${statusStyle(item.status)}`}>
                        {item.status}
                      </span>
                      <p className="mt-2 font-mono text-xs text-accent2">{item.period}</p>
                    </div>
                  </div>

                  {item.points?.length > 0 && (
                    <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tags?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-lg border border-border bg-bg/70 px-2.5 py-1 text-xs text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
