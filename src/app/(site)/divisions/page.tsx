import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionMap } from "@/components/InstitutionMap";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { createPageMetadata } from "@/lib/metadata";
import { divisions } from "@/lib/content/divisions";

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
        variant="gradient"
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
      />

      <Section eyebrow="Architecture" title="How divisions connect." intro="Each division carries a specific scientific focus while operating under shared institutional standards.">
        <InstitutionMap />
      </Section>

      <Section tone="cream" eyebrow="Directory" title="All divisions">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division) => (
            <Link key={division.slug} href={division.href} className="institutional-card group">
              <StatusBadge status={division.status} />
              <strong className="mt-3 block font-serif text-2xl text-graphite group-hover:text-oxblood">
                {division.name}
              </strong>
              <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.12em] text-stone">{division.role}</span>
              <span className="mt-3 block body-copy">{division.tagline}</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
