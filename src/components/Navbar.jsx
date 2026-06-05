import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/images/HuboLogo.jpg"
            alt="HUBO"
            className="h-9 w-9 rounded-md object-cover"
          />
          <span className="text-lg font-bold tracking-tight text-ink-900">
            HUBO<span className="text-brand-600"> Company</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+9779843371844"
          className="hidden rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md md:inline-block"
        >
          +977 9843371844
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-900 md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+9779843371844"
                className="mt-1 block rounded-full bg-brand-700 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                +977 9843371844
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
