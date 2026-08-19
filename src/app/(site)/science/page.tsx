import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { ProcessPathway } from "@/components/ProcessPathway";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import { developmentPathway, systemsThinking } from "@/lib/content/science";

export const metadata: Metadata = createPageMetadata({
  title: "Science — ORIGINA™",
  description:
    "ORIGINA's scientific position, development framework, and institutional approach to biology-first innovation.",
  path: "/science",
});

export default function SciencePage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Science"
        kicker="Scientific institution"
        title={
          <>
            Science with
            <br />
            <span className="text-gold-light">institutional discipline.</span>
          </>
        }
        intro="ORIGINA operates at the intersection of biology, dermatology, formulation science, biotechnology, and human wellbeing. Skin science is where we begin—not where we end."
      />

      <Section
        eyebrow="01 · Position"
        title="Skin of colour is where we begin."
        id="position"
        intro="Population-aware, evidence-based formulation—not one-formula thinking."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <LeadCopy>What changes when human biology is studied from the perspective of melanin-rich skin?</LeadCopy>
          <div className="space-y-5 body-copy">
            <p>
              Research considerations include pigmentation, post-inflammatory hyperpigmentation, melasma, acne, barrier
              dysfunction, photoageing, inflammation, ageing, cosmetic tolerability, formulation design, and clinical
              evaluation.
            </p>
            <Quote>
              Skin colour is an important biological and clinical consideration—not a single biological category.
            </Quote>
            <p>
              Relevant variables can include Fitzpatrick skin type, ancestry, phenotype, disease state, environmental
              exposure, and individual biology.
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="cream"
        eyebrow="02 · Framework"
        title="From hypothesis to product."
        id="framework"
        intro="A controlled development pathway—not thirteen disconnected claims."
      >
        <ProcessPathway steps={developmentPathway} />
      </Section>

      <Section tone="noir" eyebrow="03 · Systems thinking" title="Biology is interconnected.">
        <DetailList tone="dark" items={systemsThinking.map((title) => ({ title }))} />
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Enter the scientific engine."
        links={[
          { href: "/labs", label: "ORIGINA Labs™" },
          { href: "/science/evidence", label: "Evidence hierarchy", variant: "secondary" },
        ]}
      />
    </>
  );
}
