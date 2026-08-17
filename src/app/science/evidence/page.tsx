import type { Metadata } from "next";
import { EvidenceLadder } from "@/components/EvidenceLadder";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import {
  evidenceLevels,
  evidenceResearchNote,
  researchRecordPlaceholder,
} from "@/lib/content/evidence";

export const metadata: Metadata = {
  title: "Clinical & Scientific Evidence — ORIGINA™",
  description:
    "ORIGINA distinguishes hypothesis, formulation testing, human evaluation, and clinical evidence. Evidence has levels.",
};

export default function EvidencePage() {
  return (
    <>
      <PageHero
        crumb="Evidence"
        kicker="Evidence architecture"
        title={
          <>
            Evidence has
            <br />
            <em className="not-italic text-gold-light">levels.</em>
          </>
        }
        intro="ORIGINA is ambitious scientifically and conservative in claims. The strength of a claim must correspond to the strength of the evidence."
      />

      <Section eyebrow="01" title="The evidence ladder.">
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="text-sm text-graphite/85">
            Marketing language must not jump between evidence levels. A study conducted by ORIGINA
            does not automatically mean clinically proven.
          </p>
          <EvidenceLadder levels={evidenceLevels} />
        </div>
      </Section>

      <Section tone="cream" title="Research records">
        <p className="mb-8 max-w-2xl text-sm text-graphite/85">{evidenceResearchNote}</p>
        <article className="border border-border-subtle bg-ivory p-6">
          <p className="mb-3 flex justify-between gap-4 text-[0.62rem] uppercase tracking-[0.14em] text-stone">
            <span>{researchRecordPlaceholder.meta[0]}</span>
            <span>{researchRecordPlaceholder.meta[1]}</span>
          </p>
          <h3 className="font-serif text-2xl">{researchRecordPlaceholder.title}</h3>
          <p className="mt-3 text-sm text-graphite/85">{researchRecordPlaceholder.text}</p>
        </article>
      </Section>

      <PageCta
        links={[
          { href: "/science/responsible-science", label: "Responsible science" },
          { href: "/science/quality", label: "Quality framework", variant: "secondary" },
        ]}
      />
    </>
  );
}
