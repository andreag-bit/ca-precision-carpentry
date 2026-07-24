const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'Tell us about your project, ideas, requirements and vision for the space.',
  },
  {
    number: '02',
    title: 'Design & Quote',
    description:
      'We discuss the design, materials and finishes, then prepare a clear quote.',
  },
  {
    number: '03',
    title: 'Confirm & Plan',
    description:
      'Once approved, we finalise the details, measurements and project schedule.',
  },
  {
    number: '04',
    title: 'Build',
    description:
      'Your joinery is manufactured with precision using carefully selected materials.',
  },
  {
    number: '05',
    title: 'Installation',
    description:
      'We complete the installation with care, attention to detail and a clean handover.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-[#b9883b]/20 bg-[#090909] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#c8943f]">
            OUR PROCESS
          </p>

          <h2 className="mt-4 text-3xl font-light tracking-wide md:text-5xl">
            Simple. Transparent. Easy.
          </h2>

          <div className="mx-auto mt-6 h-px w-14 bg-[#c8943f]" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative border-t border-[#b9883b]/40 pt-8 text-center md:border-t-0 md:pt-0"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c8943f] text-sm text-[#d5a34c]">
                {step.number}
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] right-[calc(-50%+28px)] top-7 hidden border-t border-dashed border-[#b9883b]/45 md:block" />
              )}

              <h3 className="mt-6 text-base font-medium tracking-wide">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/55">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
