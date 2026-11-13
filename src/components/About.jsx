import { Target } from 'lucide-react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Card from './Card.jsx'
import { about, person } from '../data/profile.js'

export default function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm">
            <span>
              <span className="text-fg">Native place:</span> {person.hometown}
            </span>
            <span>
              <span className="text-fg">Based in:</span> {person.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-5">
          <Card className="about-interest-card">
            <h3 className="font-display text-lg font-semibold">Areas of interest</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.interests.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </div>
          </Card>
          <Card className="objective-card">
            <div className="flex items-start gap-3">
              <Target size={20} className="mt-0.5 shrink-0 text-accent4" />
              <div>
                <h3 className="font-display text-lg font-semibold">Career objective</h3>
                <p className="mt-2 text-base font-medium leading-relaxed text-muted">{about.objective}</p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
