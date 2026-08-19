import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use — ORIGINA™",
  description: "Terms governing use of the ORIGINA institutional website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms" title="Terms of Use" intro="Conditions governing use of this institutional website." />

      <Section>
        <div className="legal-prose">
          <p>
            This website provides institutional information about ORIGINA™. Content does not constitute medical advice,
            product authorization, or regulatory approval.
          </p>
          <p>
            Product information, availability, and claims remain subject to formal validation. Do not reproduce
            institutional content without permission.
          </p>
          <p>
            For enquiries: <a href="mailto:info@origina.co">info@origina.co</a>
          </p>
        </div>
      </Section>
    </>
  );
}
