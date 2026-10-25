import Link from "next/link";
import {
  Brain,
  Heart,
  Moon,
  Sparkles,
  Target,
  Waves,
} from "lucide-react";
import { SITE } from "@/lib/site";

const features = [
  {
    icon: Brain,
    title: "Meditation & Daily Calm",
    description: "Guided sessions and programs to center your day.",
  },
  {
    icon: Moon,
    title: "Sleep & wind-down",
    description: "Stories, music, and tools to rest more easily.",
  },
  {
    icon: Heart,
    title: "Mood & journal",
    description: "Check in with yourself and capture what matters.",
  },
  {
    icon: Target,
    title: "Goals & habits",
    description: "Build gentle routines that fit real life.",
  },
  {
    icon: Waves,
    title: "Soundscapes & library",
    description: "Meditation, movement, and restorative audio in one place.",
  },
  {
    icon: Sparkles,
    title: "LifeNest AI (coming soon)",
    description: "Personal guidance for mindfulness and daily rhythm.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-indigo-100 bg-gradient-to-b from-indigo-50 via-white to-slate-50">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-sm font-medium text-indigo-700">
            <Sparkles className="h-4 w-4" aria-hidden />
            Your personal wellness nest
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
            One calm home for meditation, sleep, mood, and daily progress.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            {SITE.tagline} LifeNest helps you build a sustainable routine—not
            perfection—whether you have one minute or an hour.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <span className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
              Google Play — coming soon
            </span>
            <Link
              href="/support"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-indigo-300 hover:text-indigo-700"
            >
              Get help
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          What you can do in LifeNest
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Check in when you can, pick up where you left off, and find support
          across mindfulness, rest, and everyday wellness.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100 transition hover:border-indigo-200 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Built for real life</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Questions about your data or account? We&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy"
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              Privacy policy
            </Link>
            <Link
              href="/delete-account"
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              Delete account
            </Link>
            <Link
              href={`mailto:${SITE.supportEmail}`}
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              {SITE.supportEmail}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
