"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-200 transition group-hover:from-indigo-700 group-hover:to-violet-700">
            <Leaf className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-md"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600 sm:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white sm:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
