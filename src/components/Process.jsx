const steps = [
  {
    n: '01',
    title: 'Consult',
    body: 'We listen to your needs, assess the site or scope, and define clear objectives.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Our engineers produce detailed designs, plans, and estimates for your approval.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'We execute — developing, constructing, or installing to engineering standards.',
  },
  {
    n: '04',
    title: 'Deliver',
    body: 'We test, hand over, and support — making sure the result performs as promised.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink-950 py-24 text-white">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-brand-400">How we work</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            A clear path from idea to delivery
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            A straightforward, transparent process — so you always know what
            happens next.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:border-brand-400/40"
            >
              <span className="text-4xl font-bold text-brand-400/40">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.body}</p>
              {i < steps.length - 1 && (
                <span className="absolute right-4 top-9 hidden text-brand-400/40 md:block">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
