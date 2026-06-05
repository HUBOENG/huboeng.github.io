const disciplines = ['SOFTWARE', 'CIVIL', 'ELECTRICAL', 'RESEARCH', 'CONSULTING', 'IT SOLUTIONS']

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-base-900 pt-32">
      {/* Backdrop layers */}
      <div className="tech-grid absolute inset-0 -z-10 opacity-70" />
      <div className="glow absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-6">
        <p className="animate-fade-up mono-label flex items-center gap-3">
          <span className="h-px w-8 bg-acc-500" />
          HUBO // ENGINEERING &amp; IT · BANEPA, NEPAL
        </p>

        <h1 className="animate-fade-up mt-8 max-w-5xl font-display text-5xl font-bold leading-[0.98] text-fg sm:text-7xl lg:text-[5.5rem]">
          We engineer
          <br />
          <span className="text-fg-faint">software, structures</span>
          <br />
          &amp; systems that{' '}
          <span className="bg-gradient-to-r from-acc-500 to-lime-400 bg-clip-text text-transparent">
            endure
          </span>
          .
        </h1>

        <p className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-fg-dim">
          One team, four disciplines. HUBO unites software, civil, and electrical
          engineering with research — delivering precise, dependable work for
          clients in Nepal and beyond.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4">
          <a href="#services" className="btn-acc">
            Explore services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            Start a project
          </a>
        </div>
      </div>

      {/* Disciplines marquee */}
      <div className="relative mt-24 overflow-hidden border-y border-line py-5">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...disciplines, ...disciplines].map((d, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-mono text-sm tracking-[0.3em] text-fg-faint"
            >
              {d}
              <span className="text-acc-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
