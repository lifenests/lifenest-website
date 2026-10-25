import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, Star } from "lucide-react";
import { SITE } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-slate-50">
      <div className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm shadow-indigo-100">
              <Sparkles className="h-4 w-4" aria-hidden />
              Your personal wellness nest
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.15] lg:text-6xl">
              One calm home for{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                mind, sleep & daily progress.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
              {SITE.tagline} Build a sustainable routine — not perfection —
              whether you have one minute or an hour.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              >
                Get early access
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">
                <Play className="h-4 w-4 fill-current" aria-hidden />
                Google Play — coming soon
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                Guided meditations
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                Sleep stories
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                Mood tracking
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md animate-fade-in">
            <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gradient-to-tr from-indigo-200/60 via-cyan-200/40 to-violet-200/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-slate-900/5 bg-slate-900 shadow-2xl shadow-indigo-900/20">
              <Image
                src="/screenshots/home.png"
                alt="LifeNest home screen showing daily calm, sleep, mood and goals"
                width={430}
                height={932}
                priority
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:block animate-float">
              <p className="text-xs font-medium text-slate-500">Daily streak</p>
              <p className="text-2xl font-bold text-indigo-600">12 days</p>
            </div>
            <div className="absolute -right-4 top-12 hidden rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:block animate-float [animation-delay:1s]">
              <p className="text-xs font-medium text-slate-500">Minutes calm</p>
              <p className="text-2xl font-bold text-cyan-600">348</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
