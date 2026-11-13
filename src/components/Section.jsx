import Reveal from './Reveal.jsx'

export default function Section({ id, eyebrow, title, subtitle, alt = false, children }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${alt ? 'bg-surface/40' : ''}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent2">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
          <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-accent to-accent2" />
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
