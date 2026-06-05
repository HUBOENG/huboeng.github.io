const stats = [
  { value: '4', label: 'Engineering departments' },
  { value: '4+', label: 'Trusted clients' },
  { value: '100%', label: 'Commitment to quality' },
  { value: 'Global', label: 'Service ambition' },
]

export default function Stats() {
  return (
    <section className="bg-brand-700">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-white sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
