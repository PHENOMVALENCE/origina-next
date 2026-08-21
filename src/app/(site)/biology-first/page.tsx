import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SystemsThinking } from "@/components/SystemsThinking";
import { EditorialImage, SplitSection } from "@/components/SplitSection";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
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
        kicker="ORIGINA / Science"
        title="Biology First™"
        intro={biologyFirst.summary}
        image={founderImages.exchange}
      />

      <Section eyebrow="01 · Systems thinking" title="Interconnected biology.">
        <SplitSection reverse>
          <SystemsThinking />
          <EditorialImage image={founderImages.formulation} variant="portrait" tone="light" />
        </SplitSection>
      </Section>

      <Section
        tone="cream"
        eyebrow="02 · Four principles"
        title="A framework for innovation."
        intro="Every programme at ORIGINA begins by understanding living systems before designing intervention."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {biologyFirst.pillars.map((pillar, index) => (
            <article key={pillar.name} className="institutional-panel">
              <ScientificLabel>Principle {String(index + 1).padStart(2, "0")}</ScientificLabel>
              <h3 className="mt-2 font-serif text-2xl text-ink">{pillar.name}</h3>
              <p className="mt-3 body-copy">{pillar.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="noir" eyebrow="03 · Evidence before exaggeration" title="Evidence has a progression.">
        <ScientificLabel tone="dark" className="mb-6 block">
          Evidence progression · Not interchangeable with marketing claims
        </ScientificLabel>
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
          { href: "/science#position", label: "Scientific position" },
          { href: "/science/responsible-science", label: "Responsible science", variant: "secondary" },
        ]}
      />
    </>
  );
}
