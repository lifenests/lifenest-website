import Link from "next/link";
import { Leaf } from "lucide-react";
import { FOOTER_LINKS, SITE } from "@/lib/site";

const LEGAL_LINKS = FOOTER_LINKS.filter(
  (l) =>
    l.href === "/privacy" ||
    l.href === "/terms" ||
    l.href === "/delete-account" ||
    l.href === "/data-safety"
);

const SUPPORT_LINKS = FOOTER_LINKS.filter(
  (l) => l.href === "/support" || l.href === "/contact"
);

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm shadow-indigo-200">
                <Leaf className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-sm text-slate-500">
              © {SITE.copyrightYear} {SITE.company}. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Legal
            </p>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Help
            </p>
            <ul className="mt-4 space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`mailto:${SITE.supportEmail}`}
                  className="text-sm text-slate-600 transition hover:text-indigo-600"
                >
                  {SITE.supportEmail}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-xs leading-relaxed text-slate-500">
            LifeNest is a wellness companion, not a medical service. If you are
            experiencing a mental health emergency, please contact a qualified
            professional or emergency services in your area.
          </p>
        </div>
      </div>
    </footer>
  );
}
