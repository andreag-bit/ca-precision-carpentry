import React from 'react'
import homeHero from '../assets/home-hero.jpg'

export default function Home() {
  return (
    <section
      id="home"
      className="bg-[#0b0b0b] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-[#c8943f]">
              ABOUT CA PRECISION
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-light leading-tight md:text-5xl">
              Bespoke craftsmanship,
              <span className="block text-[#d5a34c]">
                tailored to your space.
              </span>
            </h2>

            <div className="mt-7 h-px w-14 bg-[#c8943f]" />

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65">
              CA Precision Carpentry provides custom joinery, interiors,
              renovations and carpentry services across Sydney.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-white/65">
              From initial ideas through to installation, every project is
              approached with careful planning, quality materials and close
              attention to detail.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-[#c8943f] px-6 py-3 text-xs font-semibold tracking-[0.14em] text-black transition hover:bg-[#ddb15d]"
              >
                EXPLORE SERVICES
              </a>

              <a
                href="#contact"
                className="border border-[#c8943f] px-6 py-3 text-xs font-semibold tracking-[0.14em] transition hover:bg-[#c8943f] hover:text-black"
              >
                START A CONVERSATION
              </a>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden border border-[#b9883b]/30">
            <img
              src={homeHero}
              alt="CA Precision Carpentry design inspiration"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 border-r border-t border-[#b9883b]/40 bg-black/80 px-6 py-5 backdrop-blur-sm">
              <p className="text-xs tracking-[0.22em] text-[#d5a34c]">
                BUILT WITH PRECISION
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
