const stats = [
  { value: "50+", label: "Guided sessions & stories" },
  { value: "6", label: "Wellness pillars" },
  { value: "1", label: "Calm home for everything" },
];

export function StatsSection() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
                {value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
