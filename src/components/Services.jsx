import { useEffect, useState } from 'react'

const services = [
  {
    key: 'software',
    title: 'Software Development',
    image: '/assets/images/se-506x523.jpg',
    summary: 'Full-stack software development, from web platforms to custom tools.',
    department: 'Software Engineering Department',
    head: 'Mr. Suman Humagain',
    role: 'Software Engineer · Founder of HUBO Company',
    photo: '/assets/images/suman.jpg',
    contact: 'inbox@sumanhumagain.com.np',
  },
  {
    key: 'civil',
    title: 'Civil Engineering',
    image: '/assets/images/ce-506x265.jpg',
    summary: 'We design, construct, and consult across civil engineering projects.',
    department: 'Civil Engineering Department',
    head: 'Er. Suresh Humagain',
    role: 'Civil Engineer · MD of HUBO Company',
    contact: '069bce45@gmail.com',
  },
  {
    key: 'electrical',
    title: 'Electrical Engineering',
    image: '/assets/images/ee-306x165.jpg',
    summary:
      'A wide range of services and facilities, including the supply of electronics.',
    department: 'Electrical Engineering Department',
    head: 'Er. Samir Bolakhe',
    role: 'Electrical Engineer · Board Member of HUBO Company',
    contact: 'samirbolakhe@gmail.com',
  },
  {
    key: 'research',
    title: 'Research',
    image: '/assets/images/r-506x416.png',
    summary: 'Research across science topics and professional article writing.',
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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-brand-700 px-6 py-4">
          <h3 className="text-lg font-semibold text-white">{service.department}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition hover:bg-white/20"
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
              className="h-24 w-24 shrink-0 rounded-xl object-cover ring-1 ring-slate-200"
            />
          )}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Head of Department
            </p>
            <p className="mt-1 text-lg font-semibold text-ink-900">{service.head}</p>
            <p className="mt-0.5 text-sm text-ink-500">{service.role}</p>
          </div>
        </div>
        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
          <p className="text-sm text-ink-700">
            <span className="font-semibold">Contact:</span>{' '}
            <a
              href={`mailto:${service.contact}`}
              className="text-brand-700 hover:underline"
            >
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
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-ink-500">
            Four specialised departments, one dependable team — covering the full
            spectrum of engineering and IT.
          </p>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.key}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {s.summary}
                </p>
                <button
                  onClick={() => setActive(s)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                >
                  Read more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && <Modal service={active} onClose={() => setActive(null)} />}
    </section>
  )
}
