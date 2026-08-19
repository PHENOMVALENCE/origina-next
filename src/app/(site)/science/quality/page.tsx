import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";
import { qualityFramework, technicalFileArchitecture } from "@/lib/content/science";

export const metadata: Metadata = createPageMetadata({
  title: "Quality & Safety — ORIGINA™",
  description:
    "Quality is designed into the ORIGINA system. Intended frameworks for regulatory compliance, GMP-aligned manufacturing, and product development.",
  path: "/science/quality",
});

export default function QualityPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Quality & Safety"
        kicker="Quality framework"
        title={
          <>
            Quality is designed
            <br />
            <span className="text-gold-light">into the system.</span>
          </>
        }
        intro="Designed for quality. Tested for purpose. Framework intentions—not claims of existing certification unless documented."
      />

      <Section eyebrow="01 · Framework" title="Quality by design.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualityFramework.map((item) => (
            <article key={item.title} className="institutional-card">
              <h3 className="font-serif text-xl text-graphite">{item.title}</h3>
              <p className="mt-2 body-copy">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" eyebrow="02 · Documentation" title="Technical file architecture" intro={technicalFileArchitecture}>
        <Quote>
          The difference between making formulas and building a regulated product-development organization.
        </Quote>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="See regulatory alignment."
        links={[{ href: "/science/regulatory", label: "Regulatory science" }]}
      />
    </>
  );
}
