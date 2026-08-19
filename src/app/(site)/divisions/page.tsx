import type { Metadata } from "next";
import Link from "next/link";
import { InstitutionMap } from "@/components/InstitutionMap";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { divisions } from "@/lib/content/divisions";

export const metadata: Metadata = {
  title: "Divisions — ORIGINA™",
  description:
    "ORIGINA's active and emerging divisions: B-Melanox™, BettyWorld, BValence™, DIVINE™, NOVIA™, Skin Safari™, and ORIGINA Labs™.",
};

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        crumb="Divisions"
        kicker="Institutional divisions"
        title={
          <>
            Distinct expressions.
            <br />
            <em className="not-italic text-gold-light">Shared institution.</em>
          </>
        }
        intro="Brands are expressions of the institution. Research is part of the institutional infrastructure."
      />

      <Section>
        <InstitutionMap />
      </Section>

      <Section tone="cream" title="All divisions">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division) => (
            <Link
              key={division.slug}
              href={division.href}
              className="flex flex-col gap-2 border border-border-subtle bg-ivory p-6 transition-colors hover:border-gold/40 hover:bg-cream"
            >
              <StatusBadge status={division.status} />
              <strong className="font-serif text-xl">{division.name}</strong>
              <small className="text-xs text-stone">
                {division.role} · {division.tagline}
              </small>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
