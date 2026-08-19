import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { responsibleScienceRejections } from "@/lib/content/science";

export const metadata: Metadata = {
  title: "Responsible Science — ORIGINA™",
  description:
    "Ambition without scientific inflation. ORIGINA's institutional doctrine on evidence, claims, and scientific integrity.",
};

export default function ResponsibleSciencePage() {
  return (
    <>
      <PageHero
        crumb="Responsible Science"
        kicker="Institutional doctrine"
        title={
          <>
            Ambition without
            <br />
            <em className="not-italic text-gold-light">scientific inflation.</em>
          </>
        }
      />

      <Section>
        <blockquote className="border-l-2 border-gold py-1 pl-4 font-serif text-2xl italic text-graphite lg:text-3xl">
          If the evidence is preliminary, we call it preliminary.
          <br />
          If the evidence is strong, we show it.
          <br />
          If we do not know, we say we do not know.
        </blockquote>
      </Section>

      <Section tone="noir" title="What we reject">
        <DetailList
          tone="dark"
          items={responsibleScienceRejections.map((title) => ({ title }))}
        />
      </Section>

      <PageCta
        links={[
          { href: "/science/evidence", label: "Evidence hierarchy" },
          { href: "/science/regulatory", label: "Regulatory science", variant: "secondary" },
        ]}
      />
    </>
  );
}
