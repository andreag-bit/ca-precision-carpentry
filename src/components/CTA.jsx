export default function CTA() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden border-t border-[#b9883b]/25 bg-[#16110b] py-20 text-white md:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.28em] text-[#c8943f]">
          READY TO GET STARTED?
        </p>

        <h2 className="mt-4 text-4xl font-light tracking-wide md:text-5xl">
          You dream it. We build it.
        </h2>

        <div className="mx-auto mt-6 h-px w-14 bg-[#c8943f]" />

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/65">
          Send us your plans or ideas and we’ll come back with guidance,
          a clear scope and a transparent quote.
        </p>

        <a
          href="#contact"
          className="mt-9 inline-block bg-[#c8943f] px-8 py-4 text-xs font-semibold tracking-[0.16em] text-black transition hover:bg-[#ddb15d]"
        >
          GET A QUOTE
        </a>
      </div>
    </section>
  )
}
