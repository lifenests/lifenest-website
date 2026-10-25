"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";

const faqs = [
  {
    question: "What is LifeNest?",
    answer:
      "LifeNest is a wellness companion app that brings meditation, sleep stories, mood tracking, journaling, goals, and habits into one calm, easy-to-use space.",
  },
  {
    question: "Is LifeNest free?",
    answer:
      "We are launching with a generous free experience so everyone can build a daily wellness routine. Premium features may be added later, but the core calm tools will always be accessible.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your journal entries, mood history, goals, and personal data are tied to your account and handled carefully. You can read our full privacy policy for details.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "You can request account deletion by emailing us from the address associated with your LifeNest account. We explain the full process and timeline on our delete account page.",
  },
  {
    question: "Can I use LifeNest offline?",
    answer:
      "Many sessions and tools are designed to work offline once they have been loaded, so you can stay calm even without a constant connection.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Questions & answers
        </h2>
      </div>

      <div className="mt-14 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-2 sm:px-6">
        {faqs.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={question} className="py-5 sm:py-6">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-slate-900 sm:text-lg">
                  {question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition ${isOpen ? "rotate-180 bg-indigo-100 text-indigo-700" : ""}`}
                >
                  <ChevronDown className="h-5 w-5" aria-hidden />
                </span>
              </button>
              {isOpen && (
                <div className="mt-3 pr-10 text-slate-600 leading-relaxed">
                  <p>
                    {answer}{" "}
                    {index === 2 && (
                      <Link
                        href="/privacy"
                        className="font-medium text-indigo-600 underline-offset-2 hover:underline"
                      >
                        Read our privacy policy
                      </Link>
                    )}
                    {index === 3 && (
                      <Link
                        href="/delete-account"
                        className="font-medium text-indigo-600 underline-offset-2 hover:underline"
                      >
                        Delete account
                      </Link>
                    )}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Still have questions?{" "}
        <Link
          href={`mailto:${SITE.supportEmail}`}
          className="font-medium text-indigo-600 hover:underline"
        >
          Email {SITE.supportEmail}
        </Link>
      </p>
    </section>
  );
}
