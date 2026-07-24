import { useState } from 'react'

const questions = [
  {
    question: 'How long does it take?',
    answer:
      'The timeline depends on the size, materials and complexity of your project. Once we review your ideas, plans and measurements, we’ll provide a clear estimated schedule before work begins.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Every project is custom quoted. Pricing depends on the dimensions, materials, finishes, hardware and installation requirements. We’ll provide a transparent quote based on the agreed scope.',
  },
  {
    question: 'What’s included?',
    answer:
      'Depending on your project, the quote may include consultation, measurements, materials, manufacture, delivery, installation and final adjustments. Everything included will be clearly listed in your quote.',
  },
]

export default function Process() {
  const [openQuestion, setOpenQuestion] = useState(0)

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <section
      id="process"
      className="border-t border-[#b9883b]/20 bg-[#090909] py-20 text-white md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">

        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-[#c8943f]">
            PROJECT INFORMATION
          </p>

          <h2 className="mt-4 max-w-md text-4xl font-light leading-tight md:text-5xl">
            What to expect
          </h2>

          <div className="mt-6 h-px w-14 bg-[#c8943f]" />

          <p className="mt-7 max-w-md text-base leading-8 text-white/60">
            Every project is different, but we keep the process clear from the
            first conversation through to installation.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block border border-[#c8943f] px-6 py-3 text-xs font-semibold tracking-[0.14em] transition hover:bg-[#c8943f] hover:text-black"
          >
            ASK US A QUESTION
          </a>
        </div>

        <div className="border-t border-[#b9883b]/35">
          {questions.map((item, index) => {
            const isOpen = openQuestion === index

            return (
              <article
                key={item.question}
                className="border-b border-[#b9883b]/35"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl font-light tracking-wide md:text-2xl">
                    {item.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#c8943f] text-xl text-[#d5a34c]">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="max-w-2xl pb-7 pr-12">
                    <p className="text-sm leading-7 text-white/60 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
