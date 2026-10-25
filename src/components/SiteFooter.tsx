import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-slate-900">{SITE.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-sm text-slate-500">
              © {SITE.copyrightYear} {SITE.company}. All rights reserved.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-1">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-600 transition hover:text-indigo-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
