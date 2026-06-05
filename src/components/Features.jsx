const features = [
  {
    title: 'Multidisciplinary team',
    body: 'Software, civil, and electrical engineers plus researchers — coordinated under one roof.',
    icon: <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
  },
  {
    title: 'Engineering-grade quality',
    body: 'Every project is designed, reviewed, and built to professional engineering standards.',
    icon: <path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />,
  },
  {
    title: 'Local roots, global goal',
    body: 'Based in Banepa, Nepal — with a mission to serve clients around the globe.',
    icon: <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />,
  },
  {
    title: 'End-to-end delivery',
    body: 'From first consultation to design, construction, and handover — we own the whole journey.',
    icon: <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" />,
  },
]

export default function Features() {
  return (
    <section id="why" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <p className="section-eyebrow">Why HUBO</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A single, dependable partner for engineering &amp; IT
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Most projects need more than one discipline. HUBO brings them
              together — so you get coordinated, accountable delivery instead of
              juggling separate vendors.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {f.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with floating accent card */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
              <img
                src="/assets/images/background2.jpg"
                alt="HUBO engineering work"
                className="h-[26rem] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-ink-900 px-7 py-5 text-white shadow-2xl sm:block">
              <p className="text-3xl font-bold text-brand-300">4</p>
              <p className="text-sm text-slate-300">disciplines, one team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
