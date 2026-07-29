const clients = [
  {
    name: 'Hotel Sarathi',
    logo: '/assets/images/sarathi.jpg',
    description: '4-star hotel in Dhulikhel with mountain views and a rooftop pool.',
    sector: 'Hospitality',
    website: 'https://www.sarathihotel.com',
  },
  {
    name: 'Bhairav Hospital',
    logo: '/assets/images/hospital.png',
    description: 'Healthcare facility serving the Banepa–Kavrepalanchowk region.',
    sector: 'Healthcare',
  },
  {
    name: 'Panauti Municipality',
    logo: '/assets/images/Municipality.png',
    description: 'Local government body of Panauti, one of Nepal\'s oldest towns.',
    sector: 'Government',
    website: 'https://panautimun.gov.np/en',
  },
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

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col items-center gap-5 bg-base-850 p-8 text-center transition-colors hover:bg-base-800"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-line">
                <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-acc-500">
                  {c.sector}
                </span>
                <span className="font-display text-base font-semibold text-fg">
                  {c.name}
                </span>
                <p className="text-xs leading-relaxed text-fg-dim max-w-[200px]">
                  {c.description}
                </p>
              </div>

              {c.website && (
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-fg-faint transition-colors hover:text-acc-500"
                >
                  Visit website
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
