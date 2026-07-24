import React from 'react'
import homeHero from '../assets/home-hero.jpg' // asegúrate que el nombre coincida con tu archivo

export default function Home() {
  const brandColor = "#00aa66"
  const brandColorHover = "#00cc77"

  return (
    <section id="home" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda: Historia + Highlights */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Tailored Joinery Solutions Since 2018
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Since 2018, GMC Solutions has curated a team of experts with extensive 
              combined experience in joinery and carpentry for over 40 years. 
              Our collective expertise allows us to provide seamless service 
              from concept design through to completion. 
              Our commitment is to deliver high-quality products 
              and exceed customer expectations on every project.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside font-medium">
              <li>Office Fit-Outs</li>
              <li>Kitchen Installation</li>
              <li>Residential & Medical Joinery</li>
            </ul>

            <div className="mt-8 flex gap-4">
              <a
                href="#services"
                className="rounded-xl px-6 py-3 font-semibold transition"
                style={{ backgroundColor: brandColor, color: "#000000" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = brandColorHover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = brandColor)}
              >
                Explore Services
              </a>
              <a
                href="#projects"
                className="rounded-xl bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition"
              >
                See Projects
              </a>
            </div>
          </div>

          {/* Columna derecha: Imagen */}
          <div className="rounded-2xl overflow-hidden shadow-lg border">
            <img 
              src={homeHero} 
              alt="GMC Solutions Joinery Project" 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>
      </div>
    </section>
  )
}
