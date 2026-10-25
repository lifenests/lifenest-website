import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `Terms of use for the ${SITE.name} app.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      description={`Please read these terms before using ${SITE.name}.`}
    >
      <section>
        <h2>Agreement</h2>
        <p>
          By downloading or using {SITE.name}, you agree to these Terms of
          Service and our{" "}
          <Link href="/privacy">Privacy policy</Link>. If you do not agree, do
          not use the app.
        </p>
      </section>
      <section>
        <h2>Service description</h2>
        <p>
          {SITE.name} provides wellness tools including meditation, sleep
          content, mood tracking, journaling, goals, habits, and related
          features. Content and features may change over time.
        </p>
      </section>
      <section>
        <h2>Not medical advice</h2>
        <p>
          {SITE.name} is for general wellness and informational purposes only.
          It is not a medical device and does not provide medical advice,
          diagnosis, or treatment. Always seek advice from a qualified health
          provider for medical concerns. Do not disregard professional medical
          advice because of something you read or experience in the app.
        </p>
      </section>
      <section>
        <h2>Your account</h2>
        <p>
          You are responsible for maintaining the confidentiality of your login
          credentials and for activity under your account. You must provide
          accurate registration information.
        </p>
      </section>
      <section>
        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the app for unlawful purposes</li>
          <li>Attempt to access other users&apos; data without authorization</li>
          <li>Interfere with or disrupt the service or its security</li>
          <li>Reverse engineer or misuse the app except as permitted by law</li>
        </ul>
      </section>
      <section>
        <h2>Intellectual property</h2>
        <p>
          The app, branding, and original materials are owned by {SITE.company}{" "}
          or its licensors. Third-party content may be subject to separate
          licenses. See{" "}
          <Link href="/open-source">Open source & licenses</Link> where
          applicable.
        </p>
      </section>
      <section>
        <h2>Disclaimer</h2>
        <p>
          The service is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, to the fullest extent permitted by
          law.
        </p>
      </section>
      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by applicable law, {SITE.company} will
          not be liable for indirect, incidental, special, consequential, or
          punitive damages arising from your use of {SITE.name}.
        </p>
      </section>
      <section>
        <h2>Termination</h2>
        <p>
          You may stop using the app at any time. We may suspend or terminate
          access if you violate these terms. You may request account deletion
          as described on our{" "}
          <Link href="/delete-account">Delete account</Link> page.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
