import type { Metadata } from "next";
import { ContentStatus } from "@/components/ContentStatus";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { createPageMetadata } from "@/lib/metadata";
import { bValenceDomains } from "@/lib/content/divisions";

export const metadata: Metadata = createPageMetadata({
  title: "BValence™ — Ageing & Longevity Biology",
  description:
    "BValence is ORIGINA's ageing-science platform exploring how biological processes associated with ageing may be modulated, delayed, or better preserved.",
  path: "/divisions/bvalence",
});

export default function BValencePage() {
  return (
    <>
      <PageHero
        variant="dark"
        crumb="BValence™"
        kicker="Division / Ageing & longevity biology"
        title={
          <>
            Ageing is
            <br />
            <span className="text-gold-light">biology.</span>
          </>
        }
        intro="BValence is ORIGINA's ageing-science research platform — using appropriately conservative language."
      />

      <Section
        eyebrow="01 · Platform"
        title="Conservative language. Serious science."
        intro="BValence explores how biological processes associated with ageing may be modulated, delayed, or better preserved — not reversed, prevented, or cured. Initial research population can include skin of colour while scientific questions may extend more broadly."
      >
        <ContentStatus status="research" />
      </Section>

      <Section tone="sunk" eyebrow="02 · Research domains" title="Ageing biology domains.">
        <ScientificLabel className="mb-6 block">BValence / Research domains</ScientificLabel>
        <DetailList items={bValenceDomains} />
      </Section>

      <Section tone="paper" eyebrow="03 · Status" title="Research platform in development.">
        <StatusBadge status="research" />
        <p className="mt-4 max-w-2xl body-copy">
          BValence represents institutional research ambition — not completed clinical outcomes or commercial product
          claims.
        </p>
      </Section>

      <PageCta
        tone="noir"
        eyebrow="Continue"
        title="Follow the research engine."
        links={[{ href: "/labs", label: "ORIGINA Labs™" }]}
      />
    </>
  );
}
