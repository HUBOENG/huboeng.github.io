import { useState } from 'react'

// NOTE: GitHub Pages is static (no backend), so this form opens the visitor's
// email client with a prefilled message. To collect submissions automatically,
// sign up at https://formspree.io and replace handleSubmit with a POST to your
// Formspree endpoint.
const RECIPIENT = 'returnzerosh@gmail.com'

const details = [
  {
    label: 'Address',
    value: 'Banepa, Kavrepalanchowk, Nepal',
    icon: (
      <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z M12 11a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
  {
    label: 'Email',
    value: 'returnzerosh@gmail.com',
    href: 'mailto:returnzerosh@gmail.com',
    icon: <path d="M3 7l9 6 9-6 M3 7v10a1 1 0 001 1h16a1 1 0 001-1V7 M3 7l1-1h16l1 1" />,
  },
  {
    label: 'Phone',
    value: '+977 9843371844',
    href: 'tel:+9779843371844',
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    )
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-ink-500">
            Tell us about your project — we usually respond within a day.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Details + map */}
          <div className="lg:col-span-2">
            <ul className="space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {d.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a href={d.href} className="text-ink-900 hover:text-brand-700">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-ink-900">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <iframe
                title="HUBO location"
                className="h-56 w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Banepa%20Kavrepalanchowk%20Nepal&output=embed"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} onChange={update} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={update} required />
            </div>
            <div className="mt-5">
              <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={update} />
            </div>
            <div className="mt-5">
              <label className="mb-1.5 block text-sm font-medium text-ink-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                required
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
    </div>
  )
}
