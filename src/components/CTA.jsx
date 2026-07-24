export default function CTA() {
  return (
    <section id="quote" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 via-white to-slate-100" />
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">Got a project? Let’s build it.</h2>
        <p className="mt-2 text-slate-600">Send your plans or a quick brief and we’ll come back with advice, a design outline and a transparent estimate.</p>
        <a href="#contact" className="inline-block mt-6 rounded-xl bg-slate-900 text-white px-6 py-3">Contact the team</a>
      </div>
    </section>
  )
}
