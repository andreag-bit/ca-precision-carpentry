// src/components/Services.jsx
const services = [
  {
    number: '01',
    title: 'Custom Joinery',
    description:
      'Bespoke joinery designed around your space, style and everyday needs.',
  },
  {
    number: '02',
    title: 'Kitchens',
    description:
      'Functional, refined kitchen solutions with careful detailing and quality finishes.',
  },
  {
    number: '03',
    title: 'Wardrobes',
    description:
      'Custom storage designed to maximise space while maintaining a seamless look.',
  },
  {
    number: '04',
    title: 'Entertainment Units',
    description:
      'Made-to-measure media units that combine storage, function and clean design.',
  },
  {
    number: '05',
    title: 'Feature Walls',
    description:
      'Architectural wall details that bring warmth, texture and character to a space.',
  },
  {
    number: '06',
    title: 'Commercial Fit-outs',
    description:
      'Tailored carpentry and joinery solutions for offices, retail and commercial interiors.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-[#b9883b]/20 bg-[#090909] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <div className="mb-12 text-center md:mb-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#c8943f]">
            WHAT WE DO
          </p>

          <h2 className="mt-4 text-3xl font-light tracking-wide md:text-5xl">
            Crafted to perfection
          </h2>

          <div className="mx-auto mt-6 h-px w-14 bg-[#c8943f]" />
        </div>

        <div className="grid gap-px overflow-hidden border border-[#b9883b]/35 bg-[#b9883b]/35 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group bg-[#0d0d0d] p-8 transition duration-300 hover:bg-[#15120e] md:min-h-[260px]"
            >
              <p className="text-xs tracking-[0.25em] text-[#c8943f]">
                {service.number}
              </p>

              <div className="mt-10 h-px w-8 bg-[#c8943f] transition-all duration-300 group-hover:w-16" />

              <h3 className="mt-6 text-xl font-medium tracking-wide">
                {service.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
