import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Terminal, ChevronRight } from 'lucide-react'
import useTyped from '../hooks/useTyped.js'
import { links, person } from '../data/profile.js'

const terminalRows = [
  ['name', 'Daksh Sharma'],
  ['role', 'Software Developer · AI/ML'],
  ['education', 'B.Tech, Computer Science & Engineering'],
  ['institute', 'NIT Srinagar · 2024–2028'],
  ['location', 'India'],
  ['focus', 'NLP Research · Fraud Detection · Full-Stack'],
  ['venture', 'Founder / Creator · FirstDraft'],
]

export default function Hero() {
  const typed = useTyped(person.roles)

  return (
    <section id="home" className="hero-section relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="hero-tech-backdrop pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-tech-label">ENGINEERING / INTELLIGENCE</div>
        <div className="hero-scanline" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-data-tag hero-data-tag-one"><span>SYS.01</span> NEURAL SYSTEMS</div>
        <div className="hero-data-tag hero-data-tag-two"><span>DS//</span> BUILDING THE FUTURE</div>
        <div className="hero-code-fragment hero-code-one">&lt; intelligence /&gt;<br /><b>model.train()</b><br />deploy("ideas")</div>
        <div className="hero-code-fragment hero-code-two">01001001<br />10110100<br />00101101</div>
        <div className="hero-particle hero-particle-one" />
        <div className="hero-particle hero-particle-two" />
        <div className="hero-particle hero-particle-three" />
        <svg className="hero-circuit-art" viewBox="0 0 900 620" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M900 80H690V150H590V230H470M900 260H760V330H650V410H520M850 0V90H790V150H710M900 500H780V450H700V520H610" />
          <path d="M620 0V70H540V130H440V190H350M0 470H130V410H230V350H330V300" />
          <path d="M900 570H820V540H760V590H680M240 0V80H300V140H380V210" />
          <path className="circuit-secondary" d="M470 620V540H390V480H310V430H230M690 0V55H640V105H590V155M0 170H90V220H150V280H215" />
          <circle cx="590" cy="230" r="5"/><circle cx="650" cy="410" r="5"/><circle cx="710" cy="150" r="5"/><circle cx="330" cy="300" r="5"/><circle cx="440" cy="190" r="5"/><circle cx="760" cy="590" r="5"/>
          <circle cx="390" cy="480" r="4"/><circle cx="590" cy="155" r="4"/><circle cx="215" cy="280" r="4"/>
          <rect x="555" y="315" width="112" height="72" rx="8" />
          <path d="M575 338H647M575 354H631M575 370H640" />
        </svg>
        <div className="hero-tech-index">DS<span>_</span> / 2026</div>
      </div>
      <div className="hero-ambient hero-ambient-left pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full" />
      <div className="hero-ambient hero-ambient-right pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="hero-copy">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-xs text-muted">
            <span className="h-2 w-2 animate-pulseRing rounded-full bg-accent" />
            CSE · {person.college}
          </p>

          <h1 className="hero-title mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
            Hi, I&apos;m <span className="text-gradient animate-gradient">{person.name}</span>
          </h1>

          <p className="mt-5 h-9 font-display text-xl font-semibold text-fg sm:text-2xl">
            <span className="text-accent">{typed}</span>
            <span className="ml-0.5 animate-blink text-accent2">|</span>
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{person.intro}</p>
          <p className="mt-3 font-mono text-sm text-accent2">{person.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View projects <ArrowDown size={16} /></a>
            <a href="#contact" className="btn-ghost">Contact me <ArrowUpRight size={16} /></a>
            <a href={links.resume} className="btn-ghost" download>Download resume <Download size={16} /></a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/70 text-muted transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg">
              <Github size={19} />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/70 text-muted transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg">
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        {/* Command-line profile panel */}
        <div className="hero-terminal-wrap relative mx-auto w-full max-w-xl">
          <div className="terminal-window overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-border bg-bg/60 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E58A52]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#A5A5A0]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#6F7776]" />
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-muted sm:text-xs">
                <Terminal size={13} /> daksh@portfolio: ~
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent2">bash</span>
            </div>

            <div className="p-5 font-mono text-xs sm:p-7 sm:text-[13px]">
              <div className="flex flex-wrap items-center gap-2 text-muted">
                <span className="text-accent">daksh@portfolio</span>
                <span>~</span>
                <span className="text-fg">$ whoami --verbose</span>
              </div>
              <div className="mt-5 border-l-2 border-accent/70 pl-4">
                <p className="text-base font-semibold text-fg sm:text-lg">{person.name}</p>
                <p className="mt-1 font-sans text-sm text-muted">Building software. Exploring intelligent systems.</p>
              </div>

              <div className="mt-6">
                {terminalRows.map(([label, value]) => (
                  <div key={label} className="terminal-line">
                    <span className="text-accent2">{label}</span>
                    <span className="break-words font-sans text-muted">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-muted">
                <ChevronRight size={14} className="text-accent" />
                <span className="text-accent">status</span>
                <span className="text-fg">--check</span>
                <span className="ml-1 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-accent2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Open to opportunities
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-muted">
                <span className="text-accent">daksh@portfolio</span><span>~</span><span>$</span>
                <span className="h-4 w-2 animate-blink bg-accent" />
              </div>
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">A little about me, straight from the command line</p>
        </div>
      </div>
    </section>
  )
}
