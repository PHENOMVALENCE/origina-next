import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
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
        variant="gradient"
        crumb="BValence™"
        kicker="Ageing science"
        title={
          <>
            Ageing is
            <br />
            <span className="text-gold-light">biology.</span>
          </>
        }
        intro="ORIGINA's ageing-science platform. Research platform in development."
      />

      <Section
        eyebrow="01 · Platform"
        title="Conservative language. Serious science."
        intro="BValence explores how biological processes associated with ageing may be modulated, delayed, or better preserved—using appropriately conservative language. Initial research population can include skin of colour while scientific questions may extend more broadly."
      >
        <StatusBadge status="research" />
      </Section>

      <Section tone="cream" eyebrow="02 · Domains" title="Research domains">
        <DetailList items={bValenceDomains} />
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Follow the research engine."
        links={[{ href: "/labs", label: "ORIGINA Labs™" }]}
      />
    </>
  );
}
