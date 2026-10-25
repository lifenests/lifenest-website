import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Mail, Shield } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Help and FAQs for ${SITE.name}.`,
};

const faqs = [
  {
    q: "How do I create an account?",
    a: "Open LifeNest, complete the welcome tour, then sign up with your email and password on the login screen.",
  },
  {
    q: "I forgot my password.",
    a: "Password reset in the app is rolling out soon. Email us from your registered address and we will help you regain access.",
  },
  {
    q: "How do I delete my account?",
    a: "Follow the steps on our Delete account page. We verify requests sent from your registered email.",
  },
  {
    q: "Is my data encrypted?",
    a: "Production app traffic uses HTTPS. See our Privacy policy and Data safety summary for details.",
  },
  {
    q: "Is LifeNest medical advice?",
    a: "No. LifeNest supports general wellness and is not a substitute for professional medical care.",
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-indigo-600">{SITE.name}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Support
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Need help with the app, your account, or your data? Start here.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${SITE.supportEmail}`}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200"
        >
          <Mail className="h-6 w-6 text-indigo-600" aria-hidden />
          <div>
            <p className="font-semibold text-slate-900">Email support</p>
            <p className="mt-1 text-sm text-slate-600">{SITE.supportEmail}</p>
          </div>
        </a>
        <Link
          href="/privacy"
          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200"
        >
          <Shield className="h-6 w-6 text-indigo-600" aria-hidden />
          <div>
            <p className="font-semibold text-slate-900">Privacy & data</p>
            <p className="mt-1 text-sm text-slate-600">Policies and deletion</p>
          </div>
        </Link>
      </div>

      <h2 className="mt-14 flex items-center gap-2 text-xl font-semibold text-slate-900">
        <HelpCircle className="h-5 w-5 text-indigo-600" aria-hidden />
        Frequently asked questions
      </h2>
      <ul className="mt-6 space-y-6">
        {faqs.map((item) => (
          <li
            key={item.q}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <p className="font-medium text-slate-900">{item.q}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {item.a}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-slate-600">
        Account deletion:{" "}
        <Link href="/delete-account" className="font-medium text-indigo-600 hover:underline">
          Delete account
        </Link>
        {" · "}
        <Link href="/contact" className="font-medium text-indigo-600 hover:underline">
          Contact
        </Link>
      </p>
    </main>
  );
}
