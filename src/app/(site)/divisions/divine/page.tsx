import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "DIVINE™ — Luxury Makeup Science",
  description:
    "DIVINE is ORIGINA's luxury makeup science division: colour science, cosmetic formulation, skin compatibility, and luxury aesthetics.",
};

export default function DivinePage() {
  return (
    <>
      <PageHero
        crumb="DIVINE™"
        kicker="Luxury makeup science"
        title={
          <>
            Luxury makeup.
            <br />
            <em className="not-italic text-gold-light">Biology-aware design.</em>
          </>
        }
        intro="Colour science + cosmetic formulation + skin compatibility + luxury aesthetics."
      />

      <Section>
        <Quote>
          Makeup should not require skin of colour to adapt to the industry.
        </Quote>
        <p className="mt-4 max-w-2xl text-sm text-graphite/85">
          Future products may include foundation, complexion systems, and future colour cosmetics. The
          parent identity remains scientific.
        </p>
        <div className="mt-4">
          <StatusBadge status="planned" />
        </div>
      </Section>

      <PageCta links={[{ href: "/contact", label: "Explore the division" }]} />
    </>
  );
}
