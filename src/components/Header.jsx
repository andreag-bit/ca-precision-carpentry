import React, { useState } from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'process', label: 'PROJECT INFO' },
    { id: 'projects', label: 'INSPIRATION' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#b9883b]/30 bg-[#090909]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

        <div className="flex items-center gap-5">
          <a href="#top" className="flex items-center">
            <img
              src={logo}
              alt="CA Precision Carpentry"
              className="h-14 w-auto object-contain"
            />
          </a>

          <a
            href="#quote"
            className="hidden border border-[#c8943f] px-5 py-3 text-xs font-semibold tracking-[0.12em] transition hover:bg-[#c8943f] hover:text-black md:inline-block"
          >
            GET A QUOTE
          </a>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-medium tracking-[0.14em] text-white/85 transition hover:text-[#d5a34c]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-[#c8943f]/60 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span className="text-xl text-[#d5a34c]">
            {open ? '×' : '☰'}
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#b9883b]/25 bg-[#090909] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mb-2 border border-[#c8943f] px-5 py-3 text-center text-sm font-semibold tracking-[0.12em] text-[#d5a34c]"
            >
              GET A QUOTE
            </a>

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.12em] text-white/85"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
