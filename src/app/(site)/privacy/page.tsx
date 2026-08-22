import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";
import { privacySections } from "@/lib/content/privacy";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy — ORIGINA™",
  description: "ORIGINA privacy policy, data protection information, and research-participant separation for website visitors.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumb="Privacy"
        kicker="ORIGINA / Legal"
        title="Privacy & data architecture"
        intro="How ORIGINA handles personal data collected through this website — separate from future clinical research participant workflows."
      />

      <Section>
        <div className="legal-prose">
          {privacySections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <div>
            <h2>Contact</h2>
            <p>
              Privacy enquiries:{" "}
              <a href="mailto:info@origina.co">info@origina.co</a>. See also{" "}
              <Link href="/terms">Terms of use</Link> and{" "}
              <Link href="/contact">institutional contact</Link>.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
