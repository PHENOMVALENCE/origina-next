import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import {
  clinicalResearchPathway,
  regulatoryCategories,
  regulatoryDisclaimer,
} from "@/lib/content/science";

export const metadata: Metadata = {
  title: "Regulatory Science — ORIGINA™",
  description:
    "Science does not replace regulation. ORIGINA works across multiple regulatory categories with appropriate classification and claims architecture.",
};

export default function RegulatoryPage() {
  return (
    <>
      <PageHero
        crumb="Regulatory Science"
        kicker="Regulatory science"
        title={
          <>
            Science does not
            <br />
            <em className="not-italic text-gold-light">replace regulation.</em>
          </>
        }
        intro="ORIGINA may work across multiple regulatory categories. These categories do not share one regulatory pathway."
      />

      <Section>
        <DetailList items={regulatoryCategories} />
        <Quote>Regulatory classification precedes claims architecture.</Quote>
      </Section>

      <Section tone="cream" title="Clinical research pathway">
        <p className="mb-4 text-sm text-graphite/85">{clinicalResearchPathway}</p>
        <p className="text-sm text-graphite/85">
          <strong>Important:</strong> {regulatoryDisclaimer}
        </p>
      </Section>

      <PageCta
        links={[
          { href: "/science/quality", label: "Quality framework" },
          { href: "/science/responsible-science", label: "Claims discipline", variant: "secondary" },
        ]}
      />
    </>
  );
}
