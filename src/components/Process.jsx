const steps = [
  {step:'01', title:'Brief & Measure', copy:'We meet on site, capture measurements and align on budget, timeline and finishes.'},
  {step:'02', title:'Design & Quote', copy:'CAD drawings and itemised quote for approval. We source materials and appliances.'},
  {step:'03', title:'Manufacture', copy:'Joinery is manufactured in Sydney to specification with quality checks at each stage.'},
  {step:'04', title:'Install & Handover', copy:'Our install team manages site coordination, safety, defects list and final sign‑off.'},
]

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-4xl font-semibold">How we work</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((p,i)=> (
            <div key={i} className="rounded-2xl border p-6">
              <div className="text-sm text-slate-500">{p.step}</div>
              <h3 className="font-semibold mt-1">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
