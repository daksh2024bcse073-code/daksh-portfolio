import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Card from './Card.jsx'
import { accents } from '../data/accents.js'
import { achievements } from '../data/profile.js'

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="07 · Achievements"
      title="Achievements"
      subtitle="Academic results, technical work and leadership."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {achievements.map((g, i) => {
          const a = accents[g.accent]
          const Icon = g.icon
          return (
            <Reveal key={g.group} delay={i * 100}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${a.soft} ${a.text}`}>
                    <Icon size={19} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{g.group}</h3>
                </div>
                <ul className="mt-5 divide-y divide-border">
                  {g.items.map((it) => (
                    <li key={it.label} className="flex items-baseline justify-between gap-4 py-3">
                      <span className="text-sm text-muted">{it.label}</span>
                      <span className={`shrink-0 text-right font-display font-bold ${a.text}`}>{it.value}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
