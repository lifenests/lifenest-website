import { Cloud, Compass, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Choose your moment",
    description:
      "Open LifeNest and pick what you need right now — a quick meditation, a sleep story, a mood check-in, or a goal reminder.",
  },
  {
    number: "02",
    icon: Cloud,
    title: "Follow along",
    description:
      "Lean into guided audio, gentle prompts, and calming visuals. There are no streaks to break, only small steps forward.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch progress grow",
    description:
      "See your patterns over time, celebrate consistency, and return to what works best for your mind and schedule.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Wellness that fits into real life
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100"
            >
              <span className="absolute right-6 top-6 text-5xl font-bold text-slate-100">
                {number}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
