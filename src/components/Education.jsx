import { GraduationCap } from 'lucide-react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { education } from '../data/profile.js'

export default function Education() {
  return (
    <Section id="education" eyebrow="02 · Education" title="Education" alt>
      <ol className="relative mx-auto max-w-3xl space-y-8 border-l border-border pl-8">
        {education.map((e, i) => (
          <Reveal as="li" key={e.title} delay={i * 100} className="relative">
            <span className="absolute -left-[45px] top-1 grid h-8 w-8 place-items-center rounded-full border border-border bg-surface text-accent2">
              <GraduationCap size={16} />
            </span>
            <div className="education-card rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-fg">{e.title}</h3>
                {e.period && <span className="font-mono text-xs text-accent2">{e.period}</span>}
              </div>
              <p className="mt-1 text-base font-medium text-muted">{e.place}</p>
              <p className="mt-3 inline-block rounded-lg border border-accent/30 bg-accent/15 px-3 py-1.5 text-sm font-bold text-accent2">
                {e.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
