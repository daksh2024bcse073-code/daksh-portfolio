import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Research from './components/Research.jsx'
import Internships from './components/Internships.jsx'
import Achievements from './components/Achievements.jsx'
import Leadership from './components/Leadership.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="site-atmosphere" aria-hidden="true">
        <div className="site-grid" />
        <div className="site-glow site-glow-a" />
        <div className="site-glow site-glow-b" />
        <div className="site-glow site-glow-c" />
        <div className="site-rail site-rail-left" />
        <div className="site-rail site-rail-right" />
        <div className="site-orbit site-orbit-a" />
        <div className="site-orbit site-orbit-b" />
        <div className="site-pulse site-pulse-a" />
        <div className="site-pulse site-pulse-b" />
        <div className="site-pulse site-pulse-c" />
        <div className="site-hud site-hud-left">DS / SYSTEMS<br /><span>CREATIVE ENGINEERING</span></div>
        <div className="site-hud site-hud-right">SIGNAL: ACTIVE<br /><span>BUILD · TEST · DEPLOY</span></div>
        <svg className="site-circuit" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path d="M0 180H150V250H260V330H390 M1440 110H1300V190H1190V270H1080 M0 690H180V620H300V550H430 M1440 720H1290V640H1170V560H1040" />
          <path d="M720 0V105H650V175H570V250 M860 900V800H930V730H1010V660 M350 0V80H430V145H510V220 M1110 900V820H1040V755H960V690" />
          <circle cx="390" cy="330" r="4"/><circle cx="1080" cy="270" r="4"/><circle cx="430" cy="550" r="4"/><circle cx="1040" cy="560" r="4"/><circle cx="570" cy="250" r="4"/><circle cx="960" cy="690" r="4"/>
        </svg>
      </div>
      <Navbar />
      <main className="site-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Internships />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
