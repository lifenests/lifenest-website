import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${SITE.name} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      description={`This policy describes how ${SITE.company} ("we", "us") handles information when you use the ${SITE.name} mobile app.`}
    >
      <section>
        <h2>Who we are</h2>
        <p>
          {SITE.name} is a wellness application published by {SITE.company}.
          Contact:{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Account information:</strong> name, email address, and
            password (stored using industry-standard hashing on our servers).
          </li>
          <li>
            <strong>Wellness data you choose to save:</strong> mood entries,
            journal entries, goals, habits, reminders, favorites, and related
            preferences (such as theme settings).
          </li>
          <li>
            <strong>Technical data:</strong> basic device and app usage needed to
            operate the service (for example, authentication tokens and API
            requests).
          </li>
        </ul>
      </section>
      <section>
        <h2>How we use information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and sync app features across your sessions and devices</li>
          <li>Maintain your account and authenticate you securely</li>
          <li>Respond to support requests</li>
          <li>Improve reliability and security of the service</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </section>
      <section>
        <h2>Where data is stored</h2>
        <p>
          Data is processed on servers operated by or for {SITE.company} (for
          example, our API at{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            dev-api.lifenests.com
          </code>{" "}
          or successor production hosts). Media content may be delivered through
          cloud storage and content delivery networks.
        </p>
      </section>
      <section>
        <h2>Security</h2>
        <p>
          Production app traffic uses encryption in transit (HTTPS). Passwords
          are not stored in plain text. No method of transmission or storage is
          100% secure; we work to protect your data using reasonable safeguards.
        </p>
      </section>
      <section>
        <h2>Retention</h2>
        <p>
          We keep your information while your account is active. When you delete
          your account, we delete or anonymize personal data as described on our{" "}
          <Link href="/delete-account">account deletion</Link> page, except where
          we must retain limited records for legal, security, or backup purposes
          for a short period.
        </p>
      </section>
      <section>
        <h2>Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, or
          delete your personal information. To request account deletion, follow
          the steps on{" "}
          <Link href="/delete-account">Delete account</Link>. For other requests,
          email{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </p>
      </section>
      <section>
        <h2>Children</h2>
        <p>
          {SITE.name} is not directed at children under 13 (or the minimum age in
          your jurisdiction). See our{" "}
          <Link href="/children">Children&apos;s privacy</Link> page for more.
        </p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>
          We may update this policy from time to time. We will revise the &quot;Last
          updated&quot; date when we do.
        </p>
      </section>
    </LegalPage>
  );
}
