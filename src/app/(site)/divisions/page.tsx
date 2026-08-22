import type { Metadata } from "next";
import { DivisionCard } from "@/components/DivisionCard";
import { InstitutionMap } from "@/components/InstitutionMap";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ImageBreak } from "@/components/SplitSection";
import { createPageMetadata } from "@/lib/metadata";
import { divisions } from "@/lib/content/divisions";
import { productImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "Divisions — ORIGINA™",
  description:
    "ORIGINA's active and emerging divisions: B-Melanox™, BettyWorld, BValence™, DIVINE™, NOVIA™, Skin Safari™, and ORIGINA Labs™.",
  path: "/divisions",
});

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        variant="light"
        crumb="Divisions"
        kicker="Institutional divisions"
        title={
          <>
            Distinct expressions.
            <br />
            <span className="text-gold-light">Shared institution.</span>
          </>
        }
        intro="Brands are expressions of the institution. Research is part of the institutional infrastructure."
        image={productImages.lifestyleTwo}
      />

      <Section
        eyebrow="Architecture"
        title="How divisions connect."
        intro="Each division carries a specific scientific focus while operating under shared institutional standards."
      >
        <InstitutionMap />
      </Section>

      <ImageBreak
        image={productImages.detail}
        title="Products are outputs. Brands are expressions."
        subtitle="Every division operates under the same evidence, quality, and institutional standards."
      />

      <Section tone="sunk" eyebrow="Directory" title="All divisions">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division) => (
            <DivisionCard key={division.slug} division={division} />
          ))}
        </div>
      </Section>
    </>
  );
}
