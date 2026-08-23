import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { EvidenceLadder } from "@/components/EvidenceLadder";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { createPageMetadata } from "@/lib/metadata";
import { clinicalResearchPrinciples } from "@/lib/content/science";
import { evidenceLevels, evidencePrinciples, evidenceResearchNote, researchRecordPlaceholder } from "@/lib/content/evidence";

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
        variant="light"
        crumb="Evidence"
        parent={{ label: "Science", href: "/science" }}
        kicker="ORIGINA / Evidence & Quality"
        title={
          <>
            Evidence has
            <br />
            <span className="text-crimson">levels.</span>
          </>
        }
        intro="ORIGINA is ambitious scientifically and conservative in claims. The strength of a claim must correspond to the strength of the evidence."
      />

      <Section
        eyebrow="01 · Evidence ladder"
        title="The evidence hierarchy."
        intro="Marketing language must not jump between evidence levels. A study conducted by ORIGINA does not automatically mean clinically proven."
      >
        <EvidenceLadder levels={evidenceLevels} />
        <div className="mt-10 space-y-4 border-t border-rule pt-8">
          {evidencePrinciples.map((statement) => (
            <Quote key={statement}>{statement}</Quote>
          ))}
        </div>
      </Section>

      <Section
        tone="sunk"
        eyebrow="02 · Clinical research"
        title="Product marketing and clinical research are separate."
        id="clinical"
        intro="Where clinical research is discussed, it is structured around disciplined methodology — not marketing language."
      >
        <ScientificLabel className="mb-6 block">Clinical research architecture · Framework intentions</ScientificLabel>
        <DetailList items={clinicalResearchPrinciples.map((title) => ({ title }))} />
        <p className="mt-8 body-copy">
          ORIGINA does not create fabricated clinical trial results, imply regulatory authorization where none exists,
          or present ongoing studies as completed.
        </p>
      </Section>

      <Section tone="paper" eyebrow="03 · Research records" title="Research records" intro={evidenceResearchNote}>
        <article className="institutional-panel">
          <p className="mb-3 flex justify-between gap-4 text-[0.75rem] uppercase tracking-[0.14em] text-stone-deep">
            <span>{researchRecordPlaceholder.meta[0]}</span>
            <span>{researchRecordPlaceholder.meta[1]}</span>
          </p>
          <h3 className="font-serif text-2xl text-ink">{researchRecordPlaceholder.title}</h3>
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
