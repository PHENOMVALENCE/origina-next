import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";
import { clinicalResearchPathway, regulatoryCategories, regulatoryDisclaimer } from "@/lib/content/science";

export const metadata: Metadata = createPageMetadata({
  title: "Regulatory Science — ORIGINA™",
  description:
    "Science does not replace regulation. ORIGINA works across multiple regulatory categories with appropriate classification and claims architecture.",
  path: "/science/regulatory",
});

export default function RegulatoryPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Regulatory Science"
        kicker="Regulatory science"
        title={
          <>
            Science does not
            <br />
            <span className="text-gold-light">replace regulation.</span>
          </>
        }
        intro="ORIGINA may work across multiple regulatory categories. These categories do not share one regulatory pathway."
      />

      <Section eyebrow="01 · Categories" title="Regulatory classification precedes claims.">
        <DetailList items={regulatoryCategories} />
        <div className="mt-8">
          <Quote>Regulatory classification precedes claims architecture.</Quote>
        </div>
      </Section>

      <Section tone="cream" eyebrow="02 · Clinical research" title="Clinical research pathway" intro={clinicalResearchPathway}>
        <p className="body-copy">
          <strong>Important:</strong> {regulatoryDisclaimer}
        </p>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Follow the quality and claims framework."
        links={[
          { href: "/science/quality", label: "Quality framework" },
          { href: "/science/responsible-science", label: "Claims discipline", variant: "secondary" },
        ]}
      />
    </>
  );
}
