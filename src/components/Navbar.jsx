import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why HUBO', href: '#why' },
  { label: 'Process', href: '#process' },
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

  // Solid bar (dark text) once scrolled or when the mobile menu is open;
  // transparent with light text while sitting over the dark hero.
  const solid = scrolled || open
  const linkColor = solid
    ? 'text-ink-700 hover:text-brand-700'
    : 'text-white/90 hover:text-white'
  const brandColor = solid ? 'text-ink-900' : 'text-white'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 items-center justify-center rounded-lg bg-white p-1 shadow-sm ring-1 ring-black/5">
            <img
              src="/assets/images/Logo.png"
              alt="HUBO Company logo"
              className="h-full w-auto object-contain"
            />
          </span>
          <span className={`text-lg font-bold tracking-tight transition-colors ${brandColor}`}>
            HUBO<span className="text-brand-400"> Company</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors ${linkColor}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+9779843371844"
          className={`hidden rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all lg:inline-block ${
            solid
              ? 'bg-brand-600 text-white hover:bg-brand-500'
              : 'bg-white/10 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20'
          }`}
        >
          +977 9843371844
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden ${
            solid ? 'text-ink-900' : 'text-white'
          }`}
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
        <div className="border-t border-slate-100 bg-white lg:hidden">
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
                className="mt-1 block rounded-full bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white"
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
