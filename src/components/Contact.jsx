import { useState } from "react";

// GitHub Pages is static — this opens the visitor's email client. Swap for a
// Formspree POST (https://formspree.io) to collect submissions automatically.
const RECIPIENT = "info@huboengineering.com.np";

const details = [
  { label: "Address", value: "Banepa, Kavrepalanchowk, Nepal" },
  {
    label: "Email",
    value: "info@huboengineering.com.np",
    href: "mailto:info@huboengineering.com.np",
  },
  { label: "Phone", value: "+977 9849579603", href: "tel:+9779849579603" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website enquiry from ${form.name || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-t border-line bg-base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mono-label">Get in touch</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-fg sm:text-5xl">
              Let&apos;s build something that lasts.
            </h2>
            <p className="mt-5 max-w-md text-lg text-fg-dim">
              Tell us about your project — we usually respond within a day.
            </p>

            <dl className="mt-10 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center justify-between bg-base-900 px-5 py-4"
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
                    {d.label}
                  </dt>
                  <dd className="text-sm text-fg">
                    {d.href ? (
                      <a href={d.href} className="hover:text-acc-500">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={update}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                required
              />
            </div>
            <div className="mt-5">
              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={update}
              />
            </div>
            <div className="mt-5">
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-faint">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                required
                className="w-full rounded-lg border border-line bg-base-900 px-3.5 py-2.5 text-sm text-fg outline-none transition placeholder:text-fg-faint focus:border-acc-500"
              />
            </div>
            <button
              type="submit"
              className="mt-6 btn-acc w-full justify-center"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-faint">
        {label}
        {required && <span className="text-acc-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-line bg-base-900 px-3.5 py-2.5 text-sm text-fg outline-none transition focus:border-acc-500"
      />
    </div>
  );
}
