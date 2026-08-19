import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { EditorialImage, SplitSection } from "@/components/SplitSection";
import { createPageMetadata } from "@/lib/metadata";
import { biologyFirst } from "@/lib/content/science";
import { evidencePrinciples } from "@/lib/content/evidence";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "Biology First™ — ORIGINA",
  description:
    "Biology First™ is ORIGINA's philosophical framework: every innovation begins by understanding living systems.",
  path: "/biology-first",
});

export default function BiologyFirstPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Biology First™"
        kicker="Philosophical framework"
        title="Biology First™"
        intro={biologyFirst.summary}
        image={founderImages.exchange}
      />

      <Section
        eyebrow="Four pillars"
        title="A framework for innovation."
        intro="Every programme at ORIGINA begins by understanding living systems before designing intervention."
      >
        <SplitSection reverse>
          <EditorialImage image={founderImages.formulation} variant="portrait" tone="light" />
          <div className="grid gap-6 sm:grid-cols-2">
          {biologyFirst.pillars.map((pillar) => (
            <article key={pillar.name} className="institutional-card">
              <h3 className="font-serif text-2xl text-graphite">{pillar.name}</h3>
              <p className="mt-3 body-copy">{pillar.text}</p>
            </article>
          ))}
          </div>
        </SplitSection>
      </Section>

      <Section tone="noir" eyebrow="Principles" title="What we stand by.">
        <div className="principle-stack">
          {evidencePrinciples.map((statement) => (
            <blockquote key={statement}>&ldquo;{statement}&rdquo;</blockquote>
          ))}
        </div>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Follow the scientific position."
        links={[
          { href: "/science", label: "Scientific position" },
          { href: "/science/responsible-science", label: "Responsible science", variant: "secondary" },
        ]}
      />
    </>
  );
}
