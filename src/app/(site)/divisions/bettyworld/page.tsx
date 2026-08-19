import type { Metadata } from "next";
import { ContentStatus } from "@/components/ContentStatus";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { TextLink } from "@/components/ui/TextLink";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "BettyWorld — Everyday Skincare for Skin of Colour",
  description:
    "BettyWorld is ORIGINA's everyday dermatological skincare division. Daily care, barrier preservation, practical dermatology.",
  path: "/divisions/bettyworld",
});

const bettyworldEcosystem = [
  "Cleanser",
  "Moisturizer",
  "Sunscreen",
  "Exfoliator",
  "Daily pigmentation-care products",
  "Everyday dermatological formulations",
] as const;

export default function BettyWorldPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="BettyWorld"
        kicker="Division / Everyday dermatological skincare"
        title={
          <>
            Daily care.
            <br />
            <span className="text-gold-light">Consistent use.</span>
          </>
        }
        intro="Everyday skincare for skin of colour. Core philosophy: daily care, consistent use, barrier preservation, practical dermatology."
      />

      <Section eyebrow="01 · Division logic" title="Two complementary expressions.">
        <ScientificLabel className="mb-6 block">Portfolio architecture · Intentional separation</ScientificLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="institutional-panel">
            <span className="scientific-label text-oxblood">BettyWorld</span>
            <p className="mt-4 font-serif text-xl text-graphite">Everyday dermatological care</p>
            <ul className="mt-4 space-y-2 body-copy">
              <li>Everyday skin-of-colour skincare</li>
              <li>Barrier preservation</li>
              <li>Practical dermatology</li>
              <li>Daily routines</li>
            </ul>
            <ContentStatus status="development" />
          </div>
          <div className="institutional-panel border-gold/30">
            <span className="scientific-label text-gold">B-Melanox™</span>
            <p className="mt-4 font-serif text-xl text-graphite">Advanced pigmentation science</p>
            <ul className="mt-4 space-y-2 body-copy">
              <li>Deeper pigmentation science</li>
              <li>Platform innovation (BMX-24™)</li>
              <li>Intensive pigment management</li>
              <li>Research-led protocols</li>
            </ul>
            <TextLink href="/divisions/b-melanox" className="mt-4">
              View B-Melanox™
            </TextLink>
          </div>
        </div>
      </Section>

      <Section tone="cream" eyebrow="02 · Ecosystem" title="Everyday dermatological portfolio.">
        <p className="mb-6 max-w-2xl body-copy">
          BettyWorld handles everyday dermatological skincare. B-Melanox handles advanced pigmentation science. The
          distinction is intentional — these brands must not cannibalize each other&apos;s positioning.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bettyworldEcosystem.map((item) => (
            <li key={item} className="institutional-panel text-sm text-graphite">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
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
