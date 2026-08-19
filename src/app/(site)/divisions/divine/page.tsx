import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "DIVINE™ — Luxury Makeup Science",
  description:
    "DIVINE is ORIGINA's luxury makeup science division: colour science, cosmetic formulation, skin compatibility, and luxury aesthetics.",
  path: "/divisions/divine",
});

export default function DivinePage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="DIVINE™"
        kicker="Luxury makeup science"
        title={
          <>
            Luxury makeup.
            <br />
            <span className="text-gold-light">Biology-aware design.</span>
          </>
        }
        intro="Colour science + cosmetic formulation + skin compatibility + luxury aesthetics."
      />

      <Section eyebrow="01 · Principle" title="Makeup designed for skin of colour.">
        <Quote>Makeup should not require skin of colour to adapt to the industry.</Quote>
        <p className="mt-6 max-w-2xl body-copy">
          Future products may include foundation, complexion systems, and future colour cosmetics. The parent identity
          remains scientific.
        </p>
        <div className="mt-6">
          <StatusBadge status="planned" />
        </div>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Explore the division."
        links={[{ href: "/contact", label: "Explore the division" }]}
      />
    </>
  );
}
