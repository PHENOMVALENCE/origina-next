import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Use — ORIGINA™",
  description: "Terms governing use of the ORIGINA institutional website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms" title="Terms of Use" />

      <Section>
        <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-graphite/90">
          <p>
            This website provides institutional information about ORIGINA™. Content does not constitute
            medical advice, product authorization, or regulatory approval.
          </p>
          <p>
            Product information, availability, and claims remain subject to formal validation. Do not
            reproduce institutional content without permission.
          </p>
          <p>
            For enquiries:{" "}
            <a href="mailto:info@origina.co" className="text-oxblood hover:underline">
              info@origina.co
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
