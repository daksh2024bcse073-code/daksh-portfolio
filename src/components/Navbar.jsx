import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems, person } from '../data/profile.js'

const compactLabels = {
  about: 'About',
  education: 'Education',
  skills: 'Skills',
  projects: 'Projects',
  research: 'Research',
  internships: 'Experience',
  achievements: 'Awards',
  leadership: 'Leadership',
  contact: 'Contact',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const progressRef = useRef(null)
  const frameRef = useRef(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark'
    try { localStorage.setItem('theme', 'dark') } catch (e) { /* ignore */ }
  }, [])

  useEffect(() => {
    // Batch scroll work to one animation frame. Update the progress bar directly
    // and only re-render React when the active section or compact-header state changes.
    const updateOnFrame = () => {
      frameRef.current = 0
      const root = document.documentElement
      const total = root.scrollHeight - window.innerHeight
      const ratio = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`

      const compact = window.scrollY > 18
      setScrolled((previous) => previous === compact ? previous : compact)

      const marker = window.scrollY + 150
      let current = ''
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) current = id
      })
      setActive((previous) => previous === current ? previous : current)
    }
    const onScroll = () => {
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(updateOnFrame)
    }
    updateOnFrame()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div ref={progressRef} className="header-progress" />
      <div className="header-shell mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-7 xl:px-10">
        <a href="#home" className="brand-lockup" aria-label={`${person.name} — home`} onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><span>D</span><em>S</em></span>
          <span className="brand-copy">
            <strong>{person.name}</strong>
            <small>SOFTWARE ENGINEER <b>·</b> AI/ML</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(({ id }) => (
            <a key={id} href={`#${id}`} className={`nav-link ${active === id ? 'active' : ''}`}>
              {compactLabels[id] || id}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="header-cta">
            <span>Let's talk</span><ArrowUpRight size={15} />
          </a>
          <button
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="mobile-menu-button"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-heading"><span>~/ navigate</span><span>09 SECTIONS</span></div>
          <div className="mobile-nav-grid">
            {navItems.map(({ id }, index) => (
              <a key={id} href={`#${id}`} onClick={closeMenu} className={`mobile-nav-link ${active === id ? 'active' : ''}`}>
                <span className="mobile-nav-index">0{index + 1}</span>
                <span>{compactLabels[id] || id}</span>
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
          <div className="mobile-nav-foot"><span className="brand-live-dot" /> SYSTEM ONLINE <span>DAKSH SHARMA / PORTFOLIO</span></div>
        </nav>
      )}
    </header>
  )
}
