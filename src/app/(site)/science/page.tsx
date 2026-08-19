import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { ProcessPathway } from "@/components/ProcessPathway";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { EditorialImage, ImageBreak, SplitSection } from "@/components/SplitSection";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import { developmentPathway, systemsThinking } from "@/lib/content/science";
import { founderImages } from "@/lib/content/images";

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
        image={founderImages.formulation}
      />

      <Section
        eyebrow="01 · Position"
        title="Skin of colour is where we begin."
        id="position"
        intro="Population-aware, evidence-based formulation—not one-formula thinking."
      >
        <SplitSection reverse>
          <EditorialImage image={founderImages.multidisciplinary} variant="portrait" tone="light" />
          <div className="space-y-5">
            <LeadCopy>What changes when human biology is studied from the perspective of melanin-rich skin?</LeadCopy>
            <div className="body-copy space-y-5">
              <p>
                Research considerations include pigmentation, post-inflammatory hyperpigmentation, melasma, acne,
                barrier dysfunction, photoageing, inflammation, ageing, cosmetic tolerability, formulation design, and
                clinical evaluation.
              </p>
              <Quote>
                Skin colour is an important biological and clinical consideration—not a single biological category.
              </Quote>
            </div>
          </div>
        </SplitSection>
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

      <ImageBreak
        image={founderImages.recognition}
        title="Biology is interconnected."
        subtitle="Systems thinking governs how ORIGINA connects research questions to responsible outputs."
      />

      <Section tone="noir" eyebrow="03 · Systems thinking" title="Every variable affects the whole.">
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
