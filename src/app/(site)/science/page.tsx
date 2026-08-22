import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { ProcessPathway } from "@/components/ProcessPathway";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { SystemsThinking } from "@/components/SystemsThinking";
import { EditorialImage, SplitSection } from "@/components/SplitSection";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import { developmentPathway } from "@/lib/content/science";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "Science — ORIGINA™",
  description:
    "ORIGINA's scientific position, development framework, and institutional approach to biology-first innovation.",
  path: "/science",
});

const researchConsiderations = [
  "Pigmentation",
  "Post-inflammatory hyperpigmentation",
  "Melasma",
  "Acne",
  "Barrier dysfunction",
  "Photoageing",
  "Inflammation",
  "Ageing",
  "Cosmetic tolerability",
  "Formulation design",
  "Clinical evaluation",
] as const;

const biologicalQualifiers = [
  "Fitzpatrick skin type",
  "Ancestry",
  "Phenotype",
  "Disease state",
  "Environmental exposure",
  "Individual biology",
] as const;

export default function SciencePage() {
  return (
    <>
      <PageHero
        variant="light"
        crumb="Science"
        kicker="ORIGINA / Science"
        title={
          <>
            Science with
            <br />
            <span className="text-crimson">institutional discipline.</span>
          </>
        }
        intro="ORIGINA operates at the intersection of biology, dermatology, formulation science, biotechnology, and human wellbeing. Skin science is where we begin — not where we end."
        image={founderImages.formulation}
      />

      <Section
        eyebrow="01 · Scientific position"
        title="Skin of colour is where we begin."
        id="position"
        intro="Population-aware, evidence-based formulation — not one-formula thinking."
      >
        <SplitSection reverse>
          <EditorialImage image={founderImages.multidisciplinary} variant="portrait" tone="light" />
          <div className="space-y-6">
            <LeadCopy>What changes when human biology is studied from the perspective of melanin-rich skin?</LeadCopy>
            <p className="body-copy">
              Those populations have historically been underrepresented within dermatological research, clinical evidence,
              and product development. ORIGINA&apos;s work begins there — as a starting point, not an institutional limit.
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {researchConsiderations.map((item) => (
                <li key={item} className="border-l border-crimson/30 pl-3 text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
            <Quote>
              Skin colour is an important biological and clinical consideration — not a single biological category.
            </Quote>
            <div>
              <p className="mb-2 text-[0.75rem] uppercase tracking-[0.14em] text-stone">Factors that matter</p>
              <ul className="flex flex-wrap gap-2">
                {biologicalQualifiers.map((item) => (
                  <li key={item} className="tag-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SplitSection>
      </Section>

      <Section tone="sunk" eyebrow="02 · Systems thinking" title="Every variable affects the whole.">
        <SystemsThinking />
      </Section>

      <Section
        tone="paper"
        eyebrow="03 · Development framework"
        title="From hypothesis to product."
        id="framework"
        intro="Thirteen disciplined stages — a controlled development pipeline, not thirteen generic product claims."
      >
        <ProcessPathway steps={developmentPathway} />
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
