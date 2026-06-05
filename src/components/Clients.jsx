const clients = [
  { name: 'Bhairav Hospital', logo: '/assets/images/hospital.png' },
  { name: 'Hotel Sarathi', logo: '/assets/images/sarathi.jpg' },
  { name: 'Panauti Municipality', logo: '/assets/images/Municipality.png' },
  { name: 'Milestones Pvt. Ltd', logo: '/assets/images/MS.jpg' },
]

export default function Clients() {
  return (
    <section id="clients" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Trusted by
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Our Clients</h2>
          <p className="mt-4 text-lg text-ink-500">
            Organisations that have partnered with us.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-7 text-center transition-all hover:border-brand-200 hover:shadow-md"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-20 w-20 rounded-xl object-contain"
              />
              <span className="text-sm font-semibold text-ink-700">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
