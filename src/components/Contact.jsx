import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Download, FileText, Github,
  Linkedin, Mail, MapPin, Send, Sparkles, Terminal, LoaderCircle,
} from 'lucide-react'
import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { links, person } from '../data/profile.js'

const channels = [
  { label: 'Email', value: links.email, href: `mailto:${links.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'Connect professionally', href: links.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'Explore my projects', href: links.github, icon: Github },
]

const initialForm = { name: '', email: '', message: '', website: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }))
    if (status.type !== 'idle') setStatus({ type: 'idle', message: '' })
  }

  const submit = async (event) => {
    event.preventDefault()
    if (form.website) return // quiet honeypot for bots

    setStatus({ type: 'sending', message: 'Sending your message…' })
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${links.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `Portfolio enquiry from ${form.name.trim()}`,
          _template: 'table',
          _honey: form.website,
        }),
      })
      const result = await response.json()
      // FormSubmit can return HTTP 200 for rejected/unactivated forms, so
      // check its explicit success field rather than response.ok alone.
      if (String(result.success) !== 'true') {
        throw new Error(result.message || 'The message could not be sent. Please email me directly.')
      }
      setStatus({ type: 'success', message: 'Message sent successfully. Thanks for reaching out — I’ll get back to you soon.' })
      setForm(initialForm)
    } catch (error) {
      setStatus({
        type: 'error',
        message: `${error.message || 'Something went wrong.'} You can also email me at ${links.email}.`,
      })
    }
  }

  const fieldClass = 'contact-field w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition duration-200'

  return (
    <Section
      id="contact"
      eyebrow="09 · Contact"
      title="Let’s build something meaningful."
      subtitle="Have an opportunity, a research idea, or a product worth building? Send me a note."
    >
      <div className="contact-layout grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10">
        <Reveal className="flex flex-col gap-5">
          <div className="contact-intro-panel relative overflow-hidden rounded-3xl p-6 sm:p-7">
            <div className="contact-panel-orbit" aria-hidden="true" />
            <div className="relative z-10">
              <span className="contact-overline"><Sparkles size={13} /> OPEN TO GOOD IDEAS</span>
              <h3 className="mt-5 max-w-sm font-display text-3xl font-bold leading-tight sm:text-4xl">
                Let’s turn a <span>good idea</span> into something real.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                I’m interested in software engineering, AI/ML, NLP research and building useful products with thoughtful people.
              </p>
              <div className="contact-terminal-note mt-7">
                <Terminal size={15} />
                <span>daksh@portfolio</span>
                <b>~</b>
                <span className="text-accent2">ready_to_connect</span>
                <i aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="contact-channel-list" aria-label="Contact links">
            {channels.map(({ label, value, href, icon: Icon }, index) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-channel group flex items-center gap-4 rounded-2xl px-4 py-4 transition"
              >
                <span className="contact-channel-icon"><Icon size={19} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] uppercase tracking-[.2em] text-accent2">0{index + 1} / {label}</span>
                  <span className="mt-1 block truncate text-sm font-semibold text-fg">{value}</span>
                </span>
                <ArrowUpRight size={17} className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent2" />
              </a>
            ))}
          </div>

          <div className="resume-panel flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="resume-icon"><FileText size={21} /></span>
              <span>
                <span className="block text-sm font-bold text-fg">A closer look at my work</span>
                <span className="mt-1 block text-xs text-muted">Resume · PDF · One page</span>
              </span>
            </div>
            <a href={links.resume} download="Daksh_Sharma_Resume.pdf" className="btn-primary shrink-0">
              Download resume <Download size={16} />
            </a>
          </div>

          <p className="flex items-center gap-2 px-1 text-xs text-muted">
            <MapPin size={14} className="text-accent2" /> {person.location} <span className="text-border">/</span> Available for remote collaboration
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-form-shell relative overflow-hidden rounded-3xl p-5 sm:p-7 lg:p-8">
            <div className="contact-form-top flex items-center justify-between gap-3">
              <div>
                <span className="contact-overline"><span className="contact-live-dot" /> SECURE MESSAGE CHANNEL</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-fg">Send a message</h3>
                <p className="mt-1 text-sm text-muted">I usually respond within 1–2 working days.</p>
              </div>
              <span className="contact-form-index hidden font-mono text-xs sm:block">MSG_001</span>
            </div>

            <form onSubmit={submit} className="mt-7 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="contact-label">
                  <span>Your name</span>
                  <input className={fieldClass} type="text" name="name" autoComplete="name" placeholder="e.g. Alex Morgan" required maxLength={100} value={form.name} onChange={update('name')} />
                </label>
                <label className="contact-label">
                  <span>Email address</span>
                  <input className={fieldClass} type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} value={form.email} onChange={update('email')} />
                </label>
              </div>
              <label className="contact-label">
                <span>What would you like to discuss?</span>
                <textarea className={`${fieldClass} min-h-[170px] resize-y`} name="message" placeholder="Tell me a little about your idea, opportunity or question…" required maxLength={5000} value={form.message} onChange={update('message')} />
              </label>
              <div className="contact-honeypot" aria-hidden="true">
                <label>Leave this field empty<input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update('website')} /></label>
              </div>

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn-primary contact-submit" disabled={status.type === 'sending'}>
                  {status.type === 'sending' ? <><LoaderCircle size={17} className="animate-spin" /> Sending…</> : <>Send message <ArrowRight size={17} /></>}
                </button>
                <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted">Encrypted in transit · Email delivery</span>
              </div>
              {status.type !== 'idle' && (
                <div className={`contact-status contact-status-${status.type}`} role="status" aria-live="polite">
                  {status.type === 'success' ? <CheckCircle2 size={17} /> : status.type === 'sending' ? <LoaderCircle size={17} className="animate-spin" /> : <Mail size={17} />}
                  <span>{status.message}</span>
                  {status.type === 'error' && <a href={`mailto:${links.email}`} className="font-semibold underline underline-offset-4">Open email <ArrowUpRight size={13} className="inline" /></a>}
                </div>
              )}
            </form>
            <div className="contact-form-corner" aria-hidden="true">DS / 09</div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
