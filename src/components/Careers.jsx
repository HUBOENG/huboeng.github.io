import { useState } from "react";

const RECIPIENT = "huboengineering@gmail.com";

const vacancies = [
  {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    type: "Full-time",
    location: "Banepa, Nepal",
    experience: "5+ years",
    education: "Bachelor's degree in Mechanical Engineering",
    summary:
      "Join HUBO to design, analyse, and deliver mechanical systems for building services, industrial projects, and client installations across Nepal.",
    responsibilities: [
      "Prepare mechanical drawings, specifications, and BOQs for HVAC, plumbing, and related systems.",
      "Review designs for code compliance, feasibility, and constructability on site.",
      "Coordinate with civil, electrical, and software teams on integrated project delivery.",
      "Support site supervision, vendor evaluation, and commissioning activities.",
    ],
    requirements: [
      "Bachelor's degree in Mechanical Engineering (or equivalent).",
      "Minimum 5 years of professional experience in mechanical design or project execution.",
      "Proficiency in AutoCAD and familiarity with relevant Nepali / international standards.",
      "Strong communication skills and ability to work across multidisciplinary teams.",
    ],
  },
];

export default function Careers() {
  const [selectedId, setSelectedId] = useState(vacancies[0].id);
  const selected = vacancies.find((v) => v.id === selectedId) ?? vacancies[0];

  return (
    <section id="careers" className="border-t border-line bg-base-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="mono-label">[ 05 ] Careers</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-fg sm:text-5xl">
            Build your career at HUBO.
          </h2>
          <p className="mt-5 text-lg text-fg-dim">
            We&apos;re growing our engineering team. Browse open roles and apply
            below — we review every application carefully.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              Open positions
            </p>
            {vacancies.map((job) => (
              <button
                key={job.id}
                type="button"
                onClick={() => setSelectedId(job.id)}
                className={`card w-full p-5 text-left transition-all ${
                  selectedId === job.id
                    ? "border-acc-500 ring-1 ring-acc-500/30"
                    : "hover:border-acc-500/40"
                }`}
              >
                <h3 className="font-display text-lg font-semibold text-fg">
                  {job.title}
                </h3>
                <p className="mt-2 text-sm text-fg-dim">
                  {job.location} · {job.type}
                </p>
                <p className="mt-3 text-sm text-fg-faint">
                  {job.experience} · {job.education}
                </p>
              </button>
            ))}
          </div>

          <div>
            <article className="card p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-fg">
                    {selected.title}
                  </h3>
                  <p className="mt-2 text-sm text-fg-dim">
                    {selected.location} · {selected.type}
                  </p>
                </div>
                <span className="rounded-full border border-acc-500/30 bg-acc-500/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-acc-600">
                  Hiring
                </span>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <Detail label="Experience" value={selected.experience} />
                <Detail label="Education" value={selected.education} />
              </dl>

              <p className="mt-6 text-fg-dim">{selected.summary}</p>

              <JobList
                title="What you'll do"
                items={selected.responsibilities}
              />
              <JobList
                title="What we're looking for"
                items={selected.requirements}
              />

              <p className="mt-8 text-sm text-fg-faint">
                Ready to apply? Fill in the form below. Your email client will
                open so you can attach your CV/resume before sending.
              </p>
            </article>

            <ApplicationForm job={selected} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }) {
  return (
    <div className="rounded-lg border border-line bg-base-900 px-4 py-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-fg">{value}</dd>
    </div>
  );
}

function JobList({ title, items }) {
  return (
    <div className="mt-8">
      <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-fg">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-fg-dim">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acc-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ApplicationForm({ job }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    message: "",
  });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Job application: ${job.title} — ${form.name || "Applicant"}`,
    );
    const body = encodeURIComponent(
      [
        `Position: ${job.title}`,
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        form.linkedin ? `LinkedIn / Portfolio: ${form.linkedin}` : null,
        "",
        "Cover letter / message:",
        form.message,
        "",
        "Please attach your CV/resume to this email before sending.",
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="card mt-6 p-8">
      <h4 className="font-display text-lg font-semibold text-fg">
        Apply for this role
      </h4>
      <p className="mt-2 text-sm text-fg-faint">
        Fields marked with <span className="text-acc-500">*</span> are required.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
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
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={update}
          required
        />
        <Field
          label="LinkedIn or portfolio"
          name="linkedin"
          value={form.linkedin}
          onChange={update}
        />
      </div>
      <div className="mt-5">
        <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-faint">
          Cover letter / message<span className="text-acc-500"> *</span>
        </label>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={update}
          required
          placeholder="Briefly tell us about your experience and why you'd like to join HUBO."
          className="w-full rounded-lg border border-line bg-base-900 px-3.5 py-2.5 text-sm text-fg outline-none transition placeholder:text-fg-faint focus:border-acc-500"
        />
      </div>
      <button type="submit" className="mt-6 btn-acc w-full justify-center">
        Submit application
      </button>
    </form>
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
