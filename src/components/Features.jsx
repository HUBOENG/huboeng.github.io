export default function Features() {
  return (
    <section id="why" className="border-t border-line bg-base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mono-label">[ 02 ] Why HUBO</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold text-fg sm:text-5xl">
          Built like engineers think — precise, tested, accountable.
        </h2>

        {/* Bento grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Big feature with image */}
          <div className="card relative min-h-[18rem] overflow-hidden md:col-span-2 md:row-span-2">
            <img
              src="/assets/images/background2.jpg"
              alt="HUBO engineering work"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="font-mono text-5xl font-bold text-acc-600">4</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-fg">
                Disciplines under one roof
              </h3>
              <p className="mt-2 max-w-md text-fg-dim">
                Software, civil, and electrical engineers plus researchers —
                coordinated on a single project, accountable to a single contact.
              </p>
            </div>
          </div>

          <Cell
            title="Engineering-grade quality"
            body="Every project is designed, reviewed, and built to professional standards."
            icon={<path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />}
          />
          <Cell
            title="Local roots, global goal"
            body="Based in Banepa, Nepal — with a mission to serve clients worldwide."
            icon={<path d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />}
          />
          <Cell
            className="md:col-span-1"
            title="End-to-end delivery"
            body="From consultation to design, build, and handover — we own the journey."
            icon={<path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" />}
          />
        </div>
      </div>
    </section>
  )
}

function Cell({ title, body, icon, className = '' }) {
  return (
    <div className={`card group p-7 hover:border-acc-500/40 ${className}`}>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-acc-500/10 text-acc-500 ring-1 ring-acc-500/20">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-dim">{body}</p>
    </div>
  )
}
