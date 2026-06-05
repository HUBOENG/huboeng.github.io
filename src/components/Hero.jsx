const badges = ['Software', 'Civil', 'Electrical', 'Research']

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image + layered overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/background1.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950/95 via-ink-900/85 to-brand-900/75" />
        <div className="blueprint-grid absolute inset-0 opacity-60" />
      </div>

      <div className="mx-auto flex min-h-[100vh] max-w-6xl flex-col justify-center px-6 pb-20 pt-32">
        <span className="animate-fade-up mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
          Banepa, Kavrepalanchowk · Nepal
        </span>

        <h1 className="animate-fade-up max-w-4xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Engineering &amp; IT solutions,
          <span className="bg-gradient-to-r from-brand-300 to-accent-400 bg-clip-text text-transparent">
            {' '}engineered to last.
          </span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
          HUBO unites software, civil, and electrical engineering under one roof —
          delivering dependable, precisely-built solutions for clients in Nepal
          and beyond.
        </p>

        <div className="animate-fade-up mt-9 flex flex-wrap gap-4">
          <a href="#services" className="btn-primary">
            Explore our services
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
          >
            Start a project
          </a>
        </div>

        {/* Discipline badges */}
        <div className="animate-fade-up mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Disciplines
          </span>
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/50 transition hover:text-white sm:block"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
