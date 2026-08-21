import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ImageBreak } from "@/components/SplitSection";
import { createPageMetadata } from "@/lib/metadata";
import { responsibleScienceRejections } from "@/lib/content/science";
import { founderImages } from "@/lib/content/images";

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
            <span className="text-crimson">scientific inflation.</span>
          </>
        }
        intro="ORIGINA is ambitious scientifically and conservative in claims. The strength of a claim must match the strength of the evidence."
        image={founderImages.formulation}
      />

      <ImageBreak
        image={founderImages.recognition}
        title="If the evidence is preliminary, we call it preliminary."
        subtitle="If the evidence is strong, we show it. If we do not know, we say we do not know."
      />

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
