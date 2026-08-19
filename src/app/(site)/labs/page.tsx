import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { ResearchLibrary } from "@/components/ResearchLibrary";
import { Section } from "@/components/Section";
import { EditorialImage, SplitSection } from "@/components/SplitSection";
import { TagList } from "@/components/TagList";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import { labsCapabilities, labsContinuum, labsFutureFields } from "@/lib/content/science";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "ORIGINA Labs — Research & Development",
  description:
    "Explore the research, formulation, clinical evaluation, intellectual property, and manufacturing development capabilities of ORIGINA Labs.",
  path: "/labs",
});

export default function LabsPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="ORIGINA Labs™"
        kicker="The scientific engine"
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

      <Section tone="ivory" eyebrow="01 · Philosophy">
        <SplitSection reverse>
          <div>
            <h2 className="section-title">
              Not merely
              <br />
              <span className="text-gold">a facility.</span>
            </h2>
            <LeadCopy>Origina Labs is a philosophy: rigorous science and creative formulation are not opposites. They are partners.</LeadCopy>
            <p className="mt-4 body-copy">
              Every breakthrough formula, proprietary complex, clinical protocol, and manufacturing pathway begins here
              under the direct scientific direction of Dr. Elizabeth Consoli.
            </p>
          </div>
          <EditorialImage image={founderImages.recognition} variant="portrait" tone="light" />
        </SplitSection>
      </Section>

      <Section
        tone="noir"
        eyebrow="Current functions"
        title="From first principle to production."
        intro="A connected research architecture that protects quality, evidence, and institutional knowledge at every stage."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labsCapabilities.map((item, index) => (
            <article key={item.title} className="border border-gold/15 p-6">
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-xl text-ivory">{item.title}</h3>
              <p className="mt-2 text-sm text-stone">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" eyebrow="02" title="The development continuum." intro="Five connected stages from question to repeatable output.">
        <div className="grid gap-6 border-t border-border-subtle pt-6 sm:grid-cols-2 lg:grid-cols-5">
          {labsContinuum.map((item) => (
            <article key={item.title}>
              <span className="text-gold">{item.step}</span>
              <strong className="mt-2 block font-serif text-xl text-graphite">{item.title}</strong>
              <p className="mt-2 body-copy">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ivory" eyebrow="03 · Horizon">
        <SplitSection>
          <EditorialImage image={founderImages.formulation} variant="portrait" tone="light" />
          <div>
            <h2 className="section-title">
              Skin science is
              <br />
              <span className="text-gold">the beginning.</span>
            </h2>
            <p className="body-copy">The Labs framework is intended to expand when excellence can be sustained.</p>
            <TagList items={labsFutureFields} />
          </div>
        </SplitSection>
      </Section>

      <Section
        tone="cream"
        eyebrow="Knowledge archive"
        title="Research in active development."
        intro="A living index of the questions, protocols, and evidence streams shaping Origina Labs. Public briefs will be released as work reaches the appropriate standard."
      >
        <ResearchLibrary />
      </Section>

      <PageCta
        eyebrow="Research relationships"
        title="Bring a serious question."
        links={[
          { href: "/contact", label: "Research enquiries" },
          { href: "/divisions/b-melanox", label: "See B-Melanox", variant: "secondary" },
        ]}
      />
    </>
  );
}
