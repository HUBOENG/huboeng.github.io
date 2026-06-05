const year = 2026

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/HuboLogo.jpg"
                alt="HUBO"
                className="h-9 w-9 rounded-md object-cover"
              />
              <span className="text-lg font-bold text-white">HUBO Company</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Engineering &amp; IT solutions from Banepa, Nepal — with a goal of
              providing services around the globe.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#services" className="text-slate-400 hover:text-white">Services</a></li>
              <li><a href="#clients" className="text-slate-400 hover:text-white">Clients</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Banepa, Kavrepalanchowk, Nepal</li>
              <li>
                <a href="mailto:returnzerosh@gmail.com" className="hover:text-white">
                  returnzerosh@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+9779843371844" className="hover:text-white">
                  +977 9843371844
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {year} HUBO Company. All rights reserved.</p>
          <p>Banepa · Kavrepalanchowk · Nepal</p>
        </div>
      </div>
    </footer>
  )
}
