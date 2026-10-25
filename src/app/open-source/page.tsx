import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open source & licenses",
  description: `Third-party software used by ${SITE.name} and this website.`,
};

export default function OpenSourcePage() {
  return (
    <LegalPage
      title="Open source & licenses"
      description="LifeNest and this website use open-source software. Below are representative components."
    >
      <section>
        <h2>LifeNest mobile app</h2>
        <p>
          The {SITE.name} app is built with React Native and related open-source
          libraries. License texts for dependencies are included in the app
          distribution where required by those licenses.
        </p>
      </section>
      <section>
        <h2>This website</h2>
        <ul>
          <li>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            — MIT License
          </li>
          <li>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>{" "}
            — MIT License
          </li>
          <li>
            <a
              href="https://lucide.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucide Icons
            </a>{" "}
            — ISC License
          </li>
        </ul>
      </section>
      <section>
        <h2>Trademarks</h2>
        <p>
          Third-party names and logos are property of their respective owners.
          {SITE.name} and {SITE.company} branding are owned by {SITE.company}.
        </p>
      </section>
    </LegalPage>
  );
}
