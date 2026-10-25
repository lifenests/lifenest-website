import {
  Brain,
  Heart,
  Moon,
  Sparkles,
  Target,
  Waves,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Meditation & Daily Calm",
    description:
      "Guided sessions and structured programs to center your day, reduce stress, and build mindful habits.",
    color: "text-indigo-700",
    bg: "bg-indigo-100",
  },
  {
    icon: Moon,
    title: "Sleep & Wind-down",
    description:
      "Soothing stories, calming music, and bedtime tools designed to help you fall asleep more easily.",
    color: "text-violet-700",
    bg: "bg-violet-100",
  },
  {
    icon: Heart,
    title: "Mood & Journal",
    description:
      "Check in with yourself, track emotional patterns, and capture thoughts in a private, supportive space.",
    color: "text-rose-700",
    bg: "bg-rose-100",
  },
  {
    icon: Target,
    title: "Goals & Habits",
    description:
      "Set gentle routines and small wins that fit real life, with reminders that keep you on track.",
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  {
    icon: Waves,
    title: "Soundscapes & Library",
    description:
      "Meditation, movement, and restorative audio organized in one accessible place.",
    color: "text-cyan-700",
    bg: "bg-cyan-100",
  },
  {
    icon: Sparkles,
    title: "LifeNest AI",
    description:
      "Personal guidance for mindfulness and daily rhythm, coming soon to help you go further.",
    color: "text-emerald-700",
    bg: "bg-emerald-100",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Features
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Everything you need to feel better, daily
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Check in when you can, pick up where you left off, and find support
          across mindfulness, rest, and everyday wellness.
        </p>
      </div>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description, color, bg }) => (
          <li
            key={title}
            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${bg} ${color}`}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              {title}
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
