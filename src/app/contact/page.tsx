import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.company} about ${SITE.name}.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-indigo-600">{SITE.name}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Contact us
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Reach {SITE.company} for support, privacy requests, or partnership
        inquiries about {SITE.name}.
      </p>

      <div className="mt-10 space-y-6">
        <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <Mail className="h-6 w-6 shrink-0 text-indigo-600" aria-hidden />
          <div>
            <p className="font-semibold text-slate-900">Email</p>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="mt-2 inline-block text-indigo-600 hover:underline"
            >
              {SITE.supportEmail}
            </a>
            <p className="mt-3 text-sm text-slate-600">
              For account deletion, use subject &quot;Delete my LifeNest
              account&quot; — see{" "}
              <Link href="/delete-account" className="text-indigo-600 hover:underline">
                Delete account
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <MapPin className="h-6 w-6 shrink-0 text-slate-500" aria-hidden />
          <div>
            <p className="font-semibold text-slate-900">{SITE.company}</p>
            <p className="mt-2 text-sm text-slate-600">
              LifeNest mobile app · Package {SITE.packageName}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
