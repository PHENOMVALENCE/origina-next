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
    "Science does not replace regulation. ORIGINA works across cosmetic (TBS), medicines, devices, and clinical research (TMDA) with appropriate classification.",
  path: "/science/regulatory",
});

export default function RegulatoryPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Regulatory Science"
        kicker="ORIGINA / Evidence & Quality"
        title={
          <>
            Science does not
            <br />
            <span className="text-gold-light">replace regulation.</span>
          </>
        }
        intro="Cosmetics, medicines, medical devices, and clinical investigations may follow different regulatory pathways. Classification precedes claims."
      />

      <Section eyebrow="01 · Regulatory architecture" title="Classification precedes claims.">
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="institutional-panel border-gold/25">
            <p className="scientific-label text-gold">Cosmetics · Tanzania</p>
            <p className="mt-3 body-copy">
              Cosmetic products placed on the Tanzanian market are subject to applicable Tanzania Bureau of Standards
              (TBS) frameworks. ORIGINA does not claim TBS approval unless explicitly documented.
            </p>
          </div>
          <div className="institutional-panel border-gold/25">
            <p className="scientific-label text-gold">Medicines · Devices · Clinical trials</p>
            <p className="mt-3 body-copy">
              Medicines, medical devices, diagnostics, and regulated clinical investigations fall under applicable
              Tanzania Medicines and Medical Devices Authority (TMDA) frameworks where relevant.
            </p>
          </div>
        </div>
        <DetailList items={regulatoryCategories} />
        <div className="mt-8">
          <Quote>Regulatory classification precedes claims architecture.</Quote>
        </div>
      </Section>

      <Section
        tone="cream"
        eyebrow="02 · Clinical research"
        title="Clinical research pathway"
        id="clinical"
        intro={clinicalResearchPathway}
      >
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
