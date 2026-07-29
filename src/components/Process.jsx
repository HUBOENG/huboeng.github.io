const steps = [
  {
    title: "Consult",
    body: "We listen, assess the scope or site, and define clear objectives.",
  },
  {
    title: "Design",
    body: "Our engineers produce detailed designs, plans, and estimates for approval.",
  },
  {
    title: "Build",
    body: "We execute — developing, constructing, or installing to standard.",
  },
  {
    title: "Deliver",
    body: "We test, hand over, and support — making sure it performs as promised.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-line bg-base-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mono-label">How we work</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold text-fg sm:text-5xl">
              A clear path from idea to delivery.
            </h2>
          </div>
          <p className="max-w-sm text-fg-dim">
            A transparent, repeatable process — so you always know what happens
            next.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.title}
              className="group relative bg-base-900 p-8 transition-colors hover:bg-base-850"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-acc-500/40 transition-colors group-hover:bg-acc-500" />
              <h3 className="mt-6 font-display text-xl font-semibold text-fg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-dim">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
