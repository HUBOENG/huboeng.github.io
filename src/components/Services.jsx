import { useEffect, useState } from 'react'

const icons = {
  code: <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" />,
  building: (
    <>
      <path d="M4 21h16M6 21V5a1 1 0 011-1h7a1 1 0 011 1v16M15 21V9h3a1 1 0 011 1v11" />
      <path d="M9 7h2M9 11h2M9 15h2" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  flask: <path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3M7.5 15h9" />,
}

const services = [
  {
    key: 'software',
    n: '01',
    title: 'Software Development',
    icon: icons.code,
    image: '/assets/images/se-506x523.jpg',
    summary: 'Full-stack web platforms, custom business tools, and IT solutions.',
    points: ['Web & app dev', 'Custom tooling', 'IT consulting'],
    department: 'Software Engineering Department',
    head: 'Mr. Suman Humagain',
    role: 'Software Engineer · Founder of HUBO Company',
    photo: '/assets/images/suman.jpg',
    contact: 'inbox@sumanhumagain.com.np',
  },
  {
    key: 'civil',
    n: '02',
    title: 'Civil Engineering',
    icon: icons.building,
    image: '/assets/images/ce-506x265.jpg',
    summary: 'We design, construct, and consult across civil engineering projects.',
    points: ['Structural design', 'Construction', 'Consulting'],
    department: 'Civil Engineering Department',
    head: 'Er. Suresh Humagain',
    role: 'Civil Engineer · MD of HUBO Company',
    contact: '069bce45@gmail.com',
  },
  {
    key: 'electrical',
    n: '03',
    title: 'Electrical Engineering',
    icon: icons.bolt,
    image: '/assets/images/ee-306x165.jpg',
    summary: 'A wide range of services and facilities, including electronics supply.',
    points: ['Electrical systems', 'Electronics supply', 'Installations'],
    department: 'Electrical Engineering Department',
    head: 'Er. Samir Bolakhe',
    role: 'Electrical Engineer · Board Member of HUBO Company',
    contact: 'samirbolakhe@gmail.com',
  },
  {
    key: 'research',
    n: '04',
    title: 'Research',
    icon: icons.flask,
    image: '/assets/images/r-506x416.png',
    summary: 'Research across science topics and professional article writing.',
    points: ['Scientific research', 'Article writing', 'Journalism'],
    department: 'Science Journalism Department',
    head: 'Mr. Saugat Bolakhe',
    role: 'Science Journalist · Board Member of HUBO Company',
    contact: 'saugatbol@gmail.com',
  },
]

function Modal({ service, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-900/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-base-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-acc-500/10 text-acc-500 ring-1 ring-acc-500/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {service.icon}
              </svg>
            </span>
            <h3 className="text-base font-semibold text-fg">{service.department}</h3>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-fg-dim transition hover:bg-base-700 hover:text-fg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex items-start gap-5 px-6 py-6">
          {service.photo && (
            <img
              src={service.photo}
              alt={service.head}
              className="h-24 w-24 shrink-0 rounded-xl object-cover ring-1 ring-line"
            />
          )}
          <div>
            <p className="mono-label">Head of Department</p>
            <p className="mt-1.5 text-lg font-semibold text-fg">{service.head}</p>
            <p className="mt-0.5 text-sm text-fg-dim">{service.role}</p>
          </div>
        </div>
        <div className="border-t border-line bg-base-900 px-6 py-4">
          <p className="text-sm text-fg-dim">
            <span className="font-mono text-xs uppercase tracking-wider text-fg-faint">
              Contact ·{' '}
            </span>
            <a href={`mailto:${service.contact}`} className="text-acc-500 hover:underline">
              {service.contact}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="border-t border-line bg-base-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mono-label">[ 01 ] What we do</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold text-fg sm:text-5xl">
              Four disciplines, one accountable team.
            </h2>
          </div>
          <p className="max-w-sm text-fg-dim">
            From first line of code to final beam — coordinated delivery instead
            of juggling separate vendors.
          </p>
        </div>

        <div className="mt-16 border-t border-line">
          {services.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s)}
              className="group grid w-full grid-cols-1 items-center gap-4 border-b border-line py-8 text-left transition-colors hover:bg-base-850/60 md:grid-cols-[auto_1.4fr_1.6fr_auto] md:gap-8 md:px-4"
            >
              <span className="font-mono text-sm text-acc-500">{s.n}</span>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-800 text-acc-500 ring-1 ring-line transition-colors group-hover:bg-acc-500 group-hover:text-base-950">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">
                  {s.title}
                </h3>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-fg-dim">{s.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <span
                      key={p}
                      className="rounded-md border border-line bg-base-850 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-fg-faint"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <span className="flex items-center gap-2 justify-self-start font-mono text-xs uppercase tracking-wider text-fg-faint transition-colors group-hover:text-acc-500 md:justify-self-end">
                Team
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && <Modal service={active} onClose={() => setActive(null)} />}
    </section>
  )
}
