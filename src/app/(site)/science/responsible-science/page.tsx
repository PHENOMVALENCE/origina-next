import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";
import { responsibleScienceRejections } from "@/lib/content/science";

export const metadata: Metadata = createPageMetadata({
  title: "Responsible Science — ORIGINA™",
  description:
    "Ambition without scientific inflation. ORIGINA's institutional doctrine on evidence, claims, and scientific integrity.",
  path: "/science/responsible-science",
});

export default function ResponsibleSciencePage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Responsible Science"
        kicker="Institutional doctrine"
        title={
          <>
            Ambition without
            <br />
            <span className="text-gold-light">scientific inflation.</span>
          </>
        }
        intro="ORIGINA is ambitious scientifically and conservative in claims. The strength of a claim must match the strength of the evidence."
      />

      <QuoteBand>
        If the evidence is preliminary, we call it preliminary.
        <br />
        If the evidence is strong, we show it.
        <br />
        If we do not know, we say we do not know.
      </QuoteBand>

      <Section tone="noir" eyebrow="01 · Rejections" title="What we reject">
        <DetailList tone="dark" items={responsibleScienceRejections.map((title) => ({ title }))} />
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Follow the evidence architecture."
        links={[
          { href: "/science/evidence", label: "Evidence hierarchy" },
          { href: "/science/regulatory", label: "Regulatory science", variant: "secondary" },
        ]}
      />
    </>
  );
}
