import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { bValenceDomains } from "@/lib/content/divisions";

export const metadata: Metadata = {
  title: "BValence™ — Ageing & Longevity Biology",
  description:
    "BValence is ORIGINA's ageing-science platform exploring how biological processes associated with ageing may be modulated, delayed, or better preserved.",
};

export default function BValencePage() {
  return (
    <>
      <PageHero
        crumb="BValence™"
        kicker="Ageing science"
        title={
          <>
            Ageing is
            <br />
            <em className="not-italic text-gold-light">biology.</em>
          </>
        }
        intro="ORIGINA's ageing-science platform. Research platform in development."
      />

      <Section>
        <p className="max-w-2xl text-sm text-graphite/85">
          BValence explores how biological processes associated with ageing may be modulated, delayed,
          or better preserved—using appropriately conservative language. Initial research population
          can include skin of colour while scientific questions may extend more broadly.
        </p>
        <div className="mt-4">
          <StatusBadge status="research" />
        </div>
      </Section>

      <Section tone="cream" title="Research domains">
        <DetailList items={bValenceDomains} />
      </Section>

      <PageCta links={[{ href: "/labs", label: "ORIGINA Labs™" }]} />
    </>
  );
}
