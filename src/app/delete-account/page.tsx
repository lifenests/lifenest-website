import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Trash2 } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete account",
  description: `Request deletion of your ${SITE.name} account and associated data.`,
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your LifeNest account"
      description="Request removal of your account and personal data associated with the LifeNest app."
    >
      <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 not-prose">
        <div className="flex gap-3">
          <Trash2 className="h-6 w-6 shrink-0 text-amber-700" aria-hidden />
          <p className="font-medium text-amber-900">
            This process permanently deletes your {SITE.name} account and the
            personal data listed below. It cannot be undone.
          </p>
        </div>
      </div>

      <section>
        <h2>How to request deletion</h2>
        <ol>
          <li>
            Send an email to{" "}
            <a href={`mailto:${SITE.supportEmail}?subject=Delete%20my%20LifeNest%20account`}>
              {SITE.supportEmail}
            </a>{" "}
            from the <strong>same email address</strong> registered on your{" "}
            {SITE.name} account.
          </li>
          <li>
            Use the subject line:{" "}
            <strong>Delete my LifeNest account</strong>.
          </li>
          <li>
            Optionally include your display name or any detail that helps us
            locate your account.
          </li>
          <li>
            We will confirm and complete deletion within{" "}
            <strong>{SITE.deletionDays} days</strong> of verifying your request.
          </li>
        </ol>
        <p>
          <a
            href={`mailto:${SITE.supportEmail}?subject=Delete%20my%20LifeNest%20account`}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-indigo-700"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Email deletion request
          </a>
        </p>
      </section>

      <section>
        <h2>Data that will be deleted</h2>
        <ul>
          <li>Account profile (name, email)</li>
          <li>Mood and wellness check-in history</li>
          <li>Journal entries</li>
          <li>Goals, habits, and reminders</li>
          <li>Favorites and saved preferences tied to your account</li>
          <li>Other user-generated content stored for your account</li>
        </ul>
      </section>

      <section>
        <h2>Data we may retain temporarily</h2>
        <p>
          Encrypted backups, server logs, and records needed for security, fraud
          prevention, or legal compliance may be retained for a limited time
          after deletion, then removed or anonymized as described in our{" "}
          <Link href="/privacy">Privacy policy</Link>.
        </p>
      </section>

      <section>
        <h2>Delete data without deleting your account</h2>
        <p>
          {SITE.name} does not currently offer a separate flow to delete all
          personal data while keeping your account. You may delete individual
          items (such as journal entries or goals) inside the app where
          available.
        </p>
      </section>
    </LegalPage>
  );
}
