import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { ProcessPathway } from "@/components/ProcessPathway";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { developmentPathway, systemsThinking } from "@/lib/content/science";

export const metadata: Metadata = {
  title: "Science — ORIGINA™",
  description:
    "ORIGINA's scientific position, development framework, and institutional approach to biology-first innovation.",
};

export default function SciencePage() {
  return (
    <>
      <PageHero
        crumb="Science"
        kicker="Scientific institution"
        title={
          <>
            Science with
            <br />
            <em className="not-italic text-gold-light">institutional discipline.</em>
          </>
        }
        intro="ORIGINA operates at the intersection of biology, dermatology, formulation science, biotechnology, and human wellbeing. Skin science is where we begin—not where we end."
      />

      <Section eyebrow="01" title="Skin of colour is where we begin." id="position">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-serif text-2xl text-graphite">
              What changes when human biology is studied from the perspective of melanin-rich skin?
            </p>
            <p className="mt-4 text-sm text-graphite/85">
              Research considerations include pigmentation, post-inflammatory hyperpigmentation,
              melasma, acne, barrier dysfunction, photoageing, inflammation, ageing, cosmetic
              tolerability, formulation design, and clinical evaluation.
            </p>
            <Quote>
              Skin colour is an important biological and clinical consideration—not a single
              biological category.
            </Quote>
            <p className="mt-4 text-sm text-graphite/85">
              Relevant variables can include Fitzpatrick skin type, ancestry, phenotype, disease
              state, environmental exposure, and individual biology. Population-aware and
              evidence-based formulation rather than simplistic one-formula thinking.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream" eyebrow="02" title="From hypothesis to product." id="framework">
        <p className="mb-6 max-w-xl text-sm text-graphite/85">
          A controlled development pathway—not thirteen disconnected claims.
        </p>
        <ProcessPathway steps={developmentPathway} />
      </Section>

      <Section tone="noir" eyebrow="Systems thinking" title="Biology is interconnected.">
        <DetailList
          tone="dark"
          items={systemsThinking.map((title) => ({ title }))}
        />
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
