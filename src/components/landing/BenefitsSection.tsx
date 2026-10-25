import Image from "next/image";
import { Check, Headphones, Shield, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Headphones,
    title: "Audio-first calm",
    description: "Guided meditations, sleep stories, and soundscapes you can enjoy eyes-free.",
  },
  {
    icon: Smartphone,
    title: "Made for your rhythm",
    description: "One minute or one hour — sessions adapt to the time you actually have.",
  },
  {
    icon: Shield,
    title: "Private by design",
    description: "Your journal, mood entries, and goals stay yours. Read our privacy policy for details.",
  },
];

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Why LifeNest
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Calm tools that actually feel good to use
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No clutter, no guilt, no overwhelming to-do lists. Just a clean space
            designed to help you slow down and show up for yourself.
          </p>

          <ul className="mt-10 space-y-6">
            {benefits.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-slate-600">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <ul className="mt-10 grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {[
              "No ads or interruptions",
              "Works offline where possible",
              "Gentle reminders",
              "Beautiful dark mode",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex justify-center gap-4 lg:order-2">
          <div className="relative mt-8 w-40 sm:w-48">
            <div className="absolute inset-0 -z-10 scale-105 rounded-[2.5rem] bg-indigo-200/50 blur-xl" />
            <Image
              src="/screenshots/meditation.png"
              alt="LifeNest meditation screen"
              width={430}
              height={932}
              className="rounded-[2rem] border-[5px] border-slate-900/5 shadow-2xl"
            />
          </div>
          <div className="relative w-40 sm:w-48">
            <div className="absolute inset-0 -z-10 scale-105 rounded-[2.5rem] bg-cyan-200/50 blur-xl" />
            <Image
              src="/screenshots/sleep.png"
              alt="LifeNest sleep screen"
              width={430}
              height={932}
              className="rounded-[2rem] border-[5px] border-slate-900/5 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
