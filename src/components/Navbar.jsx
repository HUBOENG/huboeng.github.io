import { useEffect, useState } from 'react'

const links = [
  { label: 'Services', href: '#services', n: '01' },
  { label: 'Why HUBO', href: '#why', n: '02' },
  { label: 'Process', href: '#process', n: '03' },
  { label: 'Clients', href: '#clients', n: '04' },
  { label: 'Contact', href: '#contact', n: '05' },
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
        scrolled || open
          ? 'border-b border-line bg-base-900/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 items-center justify-center rounded-lg bg-white p-1">
            <img
              src="/assets/images/Logo.png"
              alt="HUBO Company logo"
              className="h-full w-auto object-contain"
            />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-fg">
            HUBO<span className="text-acc-500">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-center gap-1.5 text-sm font-medium text-fg-dim transition-colors hover:text-fg"
              >
                <span className="font-mono text-[10px] text-acc-500/70 group-hover:text-acc-500">
                  {l.n}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden btn-acc lg:inline-flex">
          Start a project
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-fg lg:hidden"
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
        <div className="border-t border-line bg-base-900 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-b border-line/60 py-3 text-sm font-medium text-fg-dim hover:text-fg"
                >
                  <span className="font-mono text-[10px] text-acc-500">{l.n}</span>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 btn-acc w-full justify-center"
              >
                Start a project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
