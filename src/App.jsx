// src/App.jsx
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import AboutUs from './components/AboutUs.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* HERO → no lleva id para que ningún link esté resaltado arriba */}
      <Hero />

      {/* HOME */}
      <section id="home">
        <Home />
      </section>

      {/* ABOUT US */}
      <section id="about">
        <AboutUs />
      </section>

      {/* SERVICES */}
      <section id="services">
        <Services />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* PROCESS */}
      <section id="process">
        <Process />
      </section>

      {/* QUOTE / CALL TO ACTION */}
      <section id="quote">
        <CTA />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}
