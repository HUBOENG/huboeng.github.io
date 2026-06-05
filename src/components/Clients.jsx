const clients = [
  { name: 'Bhairav Hospital', logo: '/assets/images/hospital.png' },
  { name: 'Hotel Sarathi', logo: '/assets/images/sarathi.jpg' },
  { name: 'Panauti Municipality', logo: '/assets/images/Municipality.png' },
]

export default function Clients() {
  return (
    <section id="clients" className="border-t border-line bg-base-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mono-label">[ 04 ] Trusted by</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-fg sm:text-5xl">
              Organisations we&apos;ve worked with.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col items-center gap-5 bg-base-850 p-8 text-center transition-colors hover:bg-base-800"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-line">
                <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-fg-dim group-hover:text-fg">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
