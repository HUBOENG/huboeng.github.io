export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/background1.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/80 to-brand-900/70" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 py-32">
        <span className="animate-fade-up mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-brand-400" />
          Banepa, Kavrepalanchowk · Nepal
        </span>

        <h1 className="animate-fade-up max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Engineering &amp; IT solutions,
          <span className="text-brand-300"> built to last.</span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
          HUBO brings software, civil, and electrical engineering together under
          one roof — delivering dependable solutions with a goal of serving
          clients around the globe.
        </p>

        <div className="animate-fade-up mt-9 flex flex-wrap gap-4">
          <a
            href="#services"
            className="rounded-full bg-brand-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-brand-900/30 transition-all hover:bg-brand-400 hover:shadow-xl"
          >
            Explore our services
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 bg-white/5 px-7 py-3 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
