import type { Metadata } from "next";
import { EvidenceLadder } from "@/components/EvidenceLadder";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";
import { evidenceLevels, evidenceResearchNote, researchRecordPlaceholder } from "@/lib/content/evidence";

export const metadata: Metadata = createPageMetadata({
  title: "Clinical & Scientific Evidence — ORIGINA™",
  description:
    "ORIGINA distinguishes hypothesis, formulation testing, human evaluation, and clinical evidence. Evidence has levels.",
  path: "/science/evidence",
});

export default function EvidencePage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Evidence"
        kicker="Evidence architecture"
        title={
          <>
            Evidence has
            <br />
            <span className="text-gold-light">levels.</span>
          </>
        }
        intro="ORIGINA is ambitious scientifically and conservative in claims. The strength of a claim must correspond to the strength of the evidence."
      />

      <Section
        eyebrow="01 · Ladder"
        title="The evidence ladder."
        intro="Marketing language must not jump between evidence levels. A study conducted by ORIGINA does not automatically mean clinically proven."
      >
        <EvidenceLadder levels={evidenceLevels} />
      </Section>

      <Section tone="cream" eyebrow="02 · Records" title="Research records" intro={evidenceResearchNote}>
        <article className="institutional-card">
          <p className="mb-3 flex justify-between gap-4 text-[0.62rem] uppercase tracking-[0.14em] text-stone">
            <span>{researchRecordPlaceholder.meta[0]}</span>
            <span>{researchRecordPlaceholder.meta[1]}</span>
          </p>
          <h3 className="font-serif text-2xl text-graphite">{researchRecordPlaceholder.title}</h3>
          <p className="mt-3 body-copy">{researchRecordPlaceholder.text}</p>
        </article>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Understand institutional claim discipline."
        links={[
          { href: "/science/responsible-science", label: "Responsible science" },
          { href: "/science/quality", label: "Quality framework", variant: "secondary" },
        ]}
      />
    </>
  );
}
