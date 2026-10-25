import Link from "next/link";
import { Play, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-700" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-indigo-100">
          <Sparkles className="h-4 w-4" aria-hidden />
          Coming soon to Google Play
        </div>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Start building your daily wellness nest today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
          Join the list to get early access, exclusive updates, and a first look
          at new features as LifeNest grows.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-lg shadow-indigo-900/20 transition hover:-translate-y-0.5 hover:bg-indigo-50"
          >
            Get early access
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
            <Play className="h-4 w-4 fill-current" aria-hidden />
            Google Play — coming soon
          </span>
        </div>
      </div>
    </section>
  );
}
