// src/components/Hero.jsx
import React from 'react'
import heroImg from '../assets/hero-image.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[110vh] md:min-h-[115vh] text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          filter: 'brightness(0.7) contrast(1.05)' // <-- oscurece la imagen
        }}
        aria-hidden="true"
      />
      {/* Overlay extra para refuerzo */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="pt-[28vh] md:pt-[30vh] max-w-4xl">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-light md:font-semibold leading-tight tracking-tight"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
          >
            Commercial and High-end Residential Carpentry and Joinery
          </h1>

          {/* Botones */}
          <div className="mt-16 md:mt-20 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gray-900/90 backdrop-blur px-7 py-3 text-sm font-semibold tracking-wider uppercase text-white hover:bg-gray-800 transition shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl px-7 py-3 text-sm font-semibold tracking-wider uppercase border transition shadow-sm
                         text-white border-white/90 hover:bg-[#00aa66] hover:text-black hover:border-[#00aa66]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
