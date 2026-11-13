import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Card from './Card.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 · Technical skills"
      title="Tools & technologies"
      subtitle="What I work with across software development, machine learning and NLP."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon: Icon, items, wide }, i) => (
          <Reveal key={title} delay={(i % 3) * 80} className={wide ? 'lg:col-span-2' : ''}>
            <Card className="h-full">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={19} />
                </span>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
