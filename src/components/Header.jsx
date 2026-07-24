// src/components/Header.jsx
import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const id = visible.target.getAttribute('id')
          setActiveSection(id || '')
        }
      },
      {
        // ajusta por el header fijo
        root: null,
        rootMargin: '-120px 0px -40% 0px',
        threshold: [0.25, 0.5, 0.6, 0.75],
      }
    )
    sections.forEach((sec) => observer.observe(sec))

    const handleScrollTop = () => {
      const home = document.getElementById('home')
      if (home) {
        const topLimit = home.offsetTop - 140
        if (window.scrollY < topLimit) setActiveSection('')
      }
    }
    window.addEventListener('scroll', handleScrollTop, { passive: true })
    handleScrollTop()

    return () => {
      window.removeEventListener('scroll', handleScrollTop)
      observer.disconnect()
    }
  }, [])

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ]

  const baseLink =
    'px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00aa66]'

  const goTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setOpen(false)
  }

  const NavLinks = ({ onClickItem }) => (
    <>
      {navItems.map((item) => {
        const isActive = activeSection === item.id
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => onClickItem?.()}
            className={`${baseLink} ${
              isActive
                ? 'bg-[#00aa66] text-black font-semibold shadow-md'
                : 'hover:bg-[#00aa66] hover:text-black'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
          </a>
        )
      })}
      <a
        href="#quote"
        onClick={() => onClickItem?.()}
        className="ml-1 md:ml-4 rounded-xl px-4 py-2 font-semibold text-black shadow-md"
        style={{ backgroundColor: '#00aa66' }}
      >
        GET A QUOTE
      </a>
    </>
  )

  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo → va al HERO (top), y un poquito más grande */}
        <a
          href="#"
          onClick={goTop}
          className="flex items-center gap-2"
          aria-label="Go to hero"
        >
          {/* móvil sutil, desktop poquito más grande */}
          <img src={logo} alt="GMC Solutions logo" className="h-12 md:h-14" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2 md:gap-4 items-center">
          <NavLinks />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00aa66]"
          aria-expanded={open ? 'true' : 'false'}
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* simple icon */}
          <span className="sr-only">Open menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path fill="currentColor" d="M18.3 5.71L12 12l6.3 6.29-1.41 1.41L10.59 12l6.3-6.29z" transform="rotate(90 12 12)" />
            ) : (
              <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden bg-gray-900/98 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            <NavLinks onClickItem={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  )
}
