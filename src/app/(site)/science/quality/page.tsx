import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { qualityFramework, technicalFileArchitecture } from "@/lib/content/science";

export const metadata: Metadata = {
  title: "Quality & Safety — ORIGINA™",
  description:
    "Quality is designed into the ORIGINA system. Intended frameworks for regulatory compliance, GMP-aligned manufacturing, and product development.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        crumb="Quality & Safety"
        kicker="Quality framework"
        title={
          <>
            Quality is designed
            <br />
            <em className="not-italic text-gold-light">into the system.</em>
          </>
        }
        intro="Designed for quality. Tested for purpose. Framework intentions—not claims of existing certification unless documented."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualityFramework.map((item) => (
            <article key={item.title} className="border border-border-subtle p-6">
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-graphite/85">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" title="Technical file architecture">
        <p className="text-sm text-graphite/85">{technicalFileArchitecture}</p>
        <Quote>
          The difference between making formulas and building a regulated product-development
          organization.
        </Quote>
      </Section>

      <PageCta links={[{ href: "/science/regulatory", label: "Regulatory science" }]} />
    </>
  );
}
