import Link from "next/link";
import { Leaf } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200 transition group-hover:bg-indigo-700">
            <Leaf className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            {SITE.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
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
            className="rounded-full bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
          >
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-indigo-600 px-3 py-2 text-sm font-medium text-white sm:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
