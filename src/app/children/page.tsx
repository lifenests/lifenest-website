import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Children's privacy",
  description: `${SITE.name} is not directed at children under 13.`,
};

export default function ChildrenPage() {
  return (
    <LegalPage
      title="Children's privacy"
      description={`${SITE.name} is intended for a general audience and is not directed at children.`}
    >
      <section>
        <h2>Age requirement</h2>
        <p>
          {SITE.name} is not directed at children under 13 years of age (or the
          minimum age required in your country). We do not knowingly collect
          personal information from children under that age.
        </p>
      </section>
      <section>
        <h2>If we learn of child data</h2>
        <p>
          If you believe a child has provided personal information to us,
          contact{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> and
          we will take steps to delete such information.
        </p>
      </section>
      <section>
        <h2>See also</h2>
        <p>
          <Link href="/privacy">Privacy policy</Link>
        </p>
      </section>
    </LegalPage>
  );
}
