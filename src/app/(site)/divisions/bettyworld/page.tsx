import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "BettyWorld — Everyday Skincare for Skin of Colour",
  description:
    "BettyWorld is ORIGINA's everyday dermatological skincare division. Daily care, barrier preservation, practical dermatology—not deep pigmentation science.",
  path: "/divisions/bettyworld",
});

export default function BettyWorldPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="BettyWorld"
        kicker="Everyday skincare for skin of colour"
        title={
          <>
            Daily care.
            <br />
            <span className="text-gold-light">Consistent use.</span>
          </>
        }
        intro="BettyWorld handles everyday dermatological skincare. B-Melanox handles deeper pigmentation science. The distinction is intentional."
      />

      <Section eyebrow="01 · Division logic" title="Two complementary expressions.">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="compare-panel">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-oxblood">BettyWorld</span>
            <p className="mt-4 body-copy leading-loose">
              Everyday skin-of-colour skincare
              <br />
              Barrier preservation
              <br />
              Practical dermatology
              <br />
              Daily routines
            </p>
          </div>
          <div className="compare-panel border-gold/25">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">B-Melanox™</span>
            <p className="mt-4 body-copy leading-loose">
              Deeper pigmentation science
              <br />
              Platform innovation
              <br />
              Intensive pigment management
              <br />
              Research-led protocols
            </p>
          </div>
        </div>
        <p className="mt-8 body-copy">
          Potential ecosystem: cleanser, moisturizer, sunscreen, exfoliator, daily pigmentation-care products, and
          future everyday dermatological formulations.
        </p>
        <div className="mt-4">
          <StatusBadge status="development" />
        </div>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Follow the pigmentation platform."
        links={[
          { href: "/divisions/b-melanox", label: "B-Melanox™" },
          { href: "/contact", label: "Enquire", variant: "secondary" },
        ]}
      />
    </>
  );
}
