import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";
import { qualityFramework, technicalFileItems } from "@/lib/content/science";

export const metadata: Metadata = createPageMetadata({
  title: "Quality & Safety — ORIGINA™",
  description:
    "Designed for quality. Tested for purpose. ORIGINA's intended frameworks for regulatory compliance, GMP-aligned manufacturing, and product development.",
  path: "/science/quality",
});

export default function QualityPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Quality & Safety"
        kicker="ORIGINA / Evidence & Quality"
        title={
          <>
            Designed for quality.
            <br />
            <span className="text-gold-light">Tested for purpose.</span>
          </>
        }
        intro="Quality is designed into the system. Framework intentions — not claims of existing certification unless documented."
      />

      <Section eyebrow="01 · Quality pillars" title="Quality by design.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {qualityFramework.map((item, index) => (
            <article key={item.title} className="institutional-panel">
              <span className="scientific-label text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-xl text-graphite">{item.title}</h3>
              <p className="mt-2 body-copy">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" eyebrow="02 · Technical file" title="Technical file architecture">
        <p className="mb-8 max-w-3xl body-copy">
          The intended internal technical-file architecture communicates organizational maturity — the difference between
          making formulas and building a regulated product-development organization.
        </p>
        <DetailList items={technicalFileItems.map((title) => ({ title }))} />
        <div className="mt-10">
          <Quote>
            The difference between making formulas and building a regulated product-development organization.
          </Quote>
        </div>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="See regulatory alignment."
        links={[{ href: "/science/regulatory", label: "Regulatory science" }]}
      />
    </>
  );
}
