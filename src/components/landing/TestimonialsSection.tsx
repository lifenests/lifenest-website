import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I have tried a few meditation apps, but LifeNest feels like it was actually designed for busy people. I can do a 5-minute session and still feel the difference.",
    author: "Priya S.",
    role: "Design lead",
  },
  {
    quote:
      "The sleep stories are my favorite. I put one on, close my eyes, and drift off without doom-scrolling my phone.",
    author: "Marcus T.",
    role: "Software engineer",
  },
  {
    quote:
      "Mood check-ins and goals together finally make self-care feel like one consistent routine instead of five disconnected apps.",
    author: "Ana R.",
    role: "Grad student",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Loved by early users
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What people are saying
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, author, role }) => (
            <li
              key={author}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100"
            >
              <Quote className="h-8 w-8 text-indigo-200" aria-hidden />
              <p className="mt-4 flex-1 leading-relaxed text-slate-700">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{author}</p>
                <p className="text-sm text-slate-500">{role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
