const year = 2026;

const nav = [
  { label: "Services", href: "#services" },
  { label: "Why HUBO", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Big wordmark */}
        <div className="flex flex-col gap-8 border-b border-line pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 items-center justify-center rounded-lg bg-white p-1.5">
                <img
                  src="/assets/images/Logo.png"
                  alt="HUBO Company logo"
                  className="h-full w-auto object-contain"
                />
              </span>
              <span className="font-display text-2xl font-bold text-fg">
                HUBO<span className="text-acc-500">.</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-dim">
              Engineering &amp; IT solutions from Banepa, Nepal — with a goal of
              serving clients around the globe.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-xs uppercase tracking-wider text-fg-dim transition-colors hover:text-acc-500"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-sm text-fg-faint sm:flex-row sm:items-center">
          <p className="font-mono text-xs">
            © {year} HUBO COMPANY · ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-5 font-mono text-xs">
            <a
              href="mailto:info@huboengineering.com.np"
              className="hover:text-acc-500"
            >
              EMAIL
            </a>
            <a href="tel:+9779849579603" className="hover:text-acc-500">
              +977 9849579603
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
