import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data safety summary",
  description: `Summary of how ${SITE.name} handles data for Google Play Data safety.`,
};

export default function DataSafetyPage() {
  return (
    <LegalPage
      title="Data safety summary"
      description="Human-readable summary aligned with our Google Play Data safety disclosure. The Privacy policy is the authoritative legal document."
    >
      <section>
        <h2>Overview</h2>
        <p>
          {SITE.name} collects account and wellness-related data you provide to
          enable app features. We do not sell personal data.
        </p>
      </section>
      <section>
        <h2>Data collected (examples)</h2>
        <ul>
          <li>Name and email address (account)</li>
          <li>Password (stored hashed on our servers—not plain text)</li>
          <li>Mood, journal, goals, habits, reminders, and favorites</li>
          <li>App preferences such as theme settings</li>
        </ul>
      </section>
      <section>
        <h2>Security practices</h2>
        <ul>
          <li>Data encrypted in transit (HTTPS) for production app traffic</li>
          <li>Account sign-in with email and password</li>
        </ul>
      </section>
      <section>
        <h2>Account deletion</h2>
        <p>
          You can request account and data deletion. See{" "}
          <Link href="/delete-account">Delete account</Link>. We do not currently
          offer deletion of all personal data without deleting the account.
        </p>
      </section>
      <section>
        <h2>More information</h2>
        <p>
          Full details: <Link href="/privacy">Privacy policy</Link>. Questions:{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
