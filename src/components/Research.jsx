import { useRef } from 'react'
import { FlaskConical, Lightbulb, UserCheck } from 'lucide-react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import Card from './Card.jsx'
import useInView from '../hooks/useInView.js'
import { accents } from '../data/accents.js'
import { research } from '../data/profile.js'

function Bar({ label, value, color }) {
  const ref = useRef(null)
  const seen = useInView(ref, 0.4)
  const a = accents[color]
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="font-mono text-muted">{value.toFixed(2)}</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-surface2">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${a.bar} transition-[width] duration-1000 ease-out motion-reduce:transition-none`}
          style={{ width: seen ? `${value * 100}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="05 · Research experience"
      title="Research at DTU"
      subtitle={research.summary}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent2/10 text-accent2">
                <FlaskConical size={20} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{research.title}</h3>
                <p className="text-sm text-muted">{research.org}</p>
              </div>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm text-muted">
              <UserCheck size={16} className="text-accent" />
              Supervisor: <span className="text-fg">{research.supervisor}</span>
            </p>
            <p className="mt-1 text-sm text-muted">Domain: {research.domain}</p>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-accent2">My work</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {research.work.map((w) => (
                <span key={w} className="chip">
                  {w}
                </span>
              ))}
            </div>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-accent2">Tasks</h4>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {research.tasks.map((t) => (
                <li key={t}>• {t}</li>
              ))}
            </ul>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-accent2">Models explored</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {research.models.map((m) => (
                <span key={m} className="chip">
                  {m}
                </span>
              ))}
            </div>
          </Card>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={100}>
            <Card>
              <h3 className="font-display text-lg font-semibold">Dataset (FHMLD)</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {research.dataset.map((d) => (
                  <div key={d.label} className="rounded-xl border border-border bg-bg/50 px-4 py-3">
                    <p className="font-display text-xl font-bold text-accent2">{d.value}</p>
                    <p className="text-xs text-muted">{d.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted">Split: {research.split}</p>
            </Card>
          </Reveal>

          <Reveal delay={180}>
            <Card>
              <h3 className="font-display text-lg font-semibold">Reported F1 scores</h3>
              <div className="mt-5 space-y-4">
                {research.results.map((r) => (
                  <Bar key={r.label} label={r.label} value={r.f1} color={r.color} />
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {research.auc.map((a) => (
                  <span key={a.label} className="chip">
                    {a.label}: {a.value}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted">F1 values are approximate, as reported.</p>
            </Card>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex gap-3 rounded-2xl border border-accent4/40 bg-accent4/10 p-5">
              <Lightbulb size={20} className="mt-0.5 shrink-0 text-accent4" />
              <div>
                <p className="font-display font-semibold">Key finding</p>
                <p className="mt-1 text-sm text-muted">{research.finding}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
