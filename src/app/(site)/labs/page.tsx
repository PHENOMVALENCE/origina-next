import type { Metadata } from "next";
import { LabsCapabilities } from "@/components/LabsCapabilities";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { ResearchLibrary } from "@/components/ResearchLibrary";
import { Section } from "@/components/Section";
import { EditorialImage, SplitSection } from "@/components/SplitSection";
import { TagList } from "@/components/TagList";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { createPageMetadata } from "@/lib/metadata";
import { labsContinuum, labsFutureFields } from "@/lib/content/science";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "ORIGINA Labs — Research & Development",
  description:
    "ORIGINA Labs is the scientific engine of ORIGINA: biological research, formulation science, analytical development, safety, clinical evaluation, IP, and manufacturing translation.",
  path: "/labs",
});

export default function LabsPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="ORIGINA Labs™"
        kicker="ORIGINA / Science"
        title={
          <>
            The scientific engine
            <br />
            <span className="text-gold-light">of ORIGINA.</span>
          </>
        }
        intro="Research · Formulation · Clinical Science · IP · Manufacturing Development"
        image={founderImages.recognition}
      />

      <Section tone="ivory" eyebrow="01 · Institutional function">
        <SplitSection reverse>
          <div>
            <h2 className="section-title">
              An R&D organization,
              <br />
              <span className="text-gold">not a label.</span>
            </h2>
            <LeadCopy>
              ORIGINA Labs represents an institutional research and development function — translating biological
              questions into evidence, prototypes, technical files, and repeatable methods.
            </LeadCopy>
            <p className="mt-4 body-copy">
              Every breakthrough formula, proprietary platform, evaluation protocol, and manufacturing pathway begins
              here under direct scientific direction.
            </p>
          </div>
          <EditorialImage image={founderImages.recognition} variant="portrait" tone="light" />
        </SplitSection>
      </Section>

      <Section
        tone="noir"
        eyebrow="02 · Capabilities"
        title="Seven connected capabilities."
        intro="An institutional R&D architecture — closer to a research organization than a cosmetics page."
      >
        <LabsCapabilities />
      </Section>

      <Section tone="cream" eyebrow="03 · Continuum" title="From question to repeatable output." intro="Five connected stages within the broader development framework.">
        <div className="grid gap-6 border-t border-border-subtle pt-6 sm:grid-cols-2 lg:grid-cols-5">
          {labsContinuum.map((item) => (
            <article key={item.title} className="institutional-panel">
              <ScientificLabel>{item.step}</ScientificLabel>
              <strong className="mt-2 block font-serif text-xl text-graphite">{item.title}</strong>
              <p className="mt-2 body-copy">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ivory" eyebrow="04 · Horizon" id="research">
        <SplitSection>
          <EditorialImage image={founderImages.formulation} variant="portrait" tone="light" />
          <div>
            <h2 className="section-title">
              Skin science is
              <br />
              <span className="text-gold">the beginning.</span>
            </h2>
            <p className="body-copy">The Labs framework expands when excellence can be sustained — subject to scientific feasibility and institutional capacity.</p>
            <TagList items={labsFutureFields} />
          </div>
        </SplitSection>
      </Section>

      <Section
        tone="cream"
        eyebrow="05 · Knowledge archive"
        title="Research in active development."
        intro="A living index of questions, protocols, and evidence streams. Public briefs are released as work reaches appropriate disclosure standards — not before."
      >
        <ResearchLibrary />
      </Section>

      <PageCta
        eyebrow="Research relationships"
        title="Bring a serious question."
        links={[
          { href: "/contact?subject=scientific#enquiry-form", label: "Research enquiries" },
          { href: "/platforms", label: "Scientific platforms", variant: "secondary" },
        ]}
      />
    </>
  );
}
