import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "BettyWorld — Everyday Skincare for Skin of Colour",
  description:
    "BettyWorld is ORIGINA's everyday dermatological skincare division. Daily care, barrier preservation, practical dermatology—not deep pigmentation science.",
};

export default function BettyWorldPage() {
  return (
    <>
      <PageHero
        crumb="BettyWorld"
        kicker="Everyday skincare for skin of colour"
        title={
          <>
            Daily care.
            <br />
            <em className="not-italic text-gold-light">Consistent use.</em>
          </>
        }
        intro="BettyWorld handles everyday dermatological skincare. B-Melanox handles deeper pigmentation science. The distinction is intentional."
      />

      <Section>
        <div className="grid gap-8 border border-border-subtle sm:grid-cols-2">
          <div className="p-8">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-oxblood">
              BettyWorld
            </span>
            <p className="mt-4 text-sm leading-loose text-graphite/85">
              Everyday skin-of-colour skincare
              <br />
              Barrier preservation
              <br />
              Practical dermatology
              <br />
              Daily routines
            </p>
          </div>
          <div className="border-t border-border-subtle p-8 sm:border-t-0 sm:border-l">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
              B-Melanox™
            </span>
            <p className="mt-4 text-sm leading-loose text-graphite/85">
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
        <p className="mt-8 text-sm text-graphite/85">
          Potential ecosystem: cleanser, moisturizer, sunscreen, exfoliator, daily pigmentation-care
          products, and future everyday dermatological formulations.
        </p>
        <div className="mt-4">
          <StatusBadge status="development" />
        </div>
      </Section>

      <PageCta
        links={[
          { href: "/divisions/b-melanox", label: "B-Melanox™" },
          { href: "/contact", label: "Enquire", variant: "secondary" },
        ]}
      />
    </>
  );
}
