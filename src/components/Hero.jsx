// src/components/Hero.jsx
import React from 'react'
import heroImg from '../assets/hero-image.jpg'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 md:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.28em] text-[#d5a34c]">
            YOU DREAM IT
          </p>

          <h1 className="text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            WE BUILD IT
          </h1>

          <div className="mt-6 h-px w-16 bg-[#c8943f]" />

          <p className="mt-7 max-w-lg text-base leading-7 text-white/80 md:text-lg">
            Custom carpentry, interiors and renovations built with precision,
            detail and craftsmanship across Sydney.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[#c8943f] px-7 py-3 text-sm font-semibold tracking-[0.12em] text-black transition hover:bg-[#ddb15d]"
            >
              VIEW OUR WORK
            </a>

            <a
              href="#quote"
              className="border border-[#c8943f] px-7 py-3 text-sm font-semibold tracking-[0.12em] text-white transition hover:bg-[#c8943f] hover:text-black"
            >
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
