const stats = [
  { value: '4', label: 'Engineering disciplines' },
  { value: '4+', label: 'Trusted clients' },
  { value: '100%', label: 'Commitment to quality' },
  { value: '∞', label: 'Global ambition' },
]

export default function Stats() {
  return (
    <section className="border-t border-line bg-base-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-line border-x border-line md:grid-cols-4 md:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-12 text-center">
            <p className="font-display text-4xl font-bold text-fg sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
