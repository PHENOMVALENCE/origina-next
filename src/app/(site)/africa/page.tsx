import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { EditorialImage, ImageBreak, SplitSection } from "@/components/SplitSection";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "Africa Originating — ORIGINA™",
  description:
    "Africa is the origin, not the limitation. ORIGINA is headquartered in Dar es Salaam, Tanzania, designed for global relevance.",
  path: "/africa",
});

export default function AfricaPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Africa Originating"
        kicker="Institutional origin"
        title={
          <>
            Africa is the origin.
            <br />
            <span className="text-crimson">Not the limitation.</span>
          </>
        }
        intro="Headquartered in Dar es Salaam, Tanzania. Geography is not presented as a ceiling."
        image={founderImages.multidisciplinary}
      />

      <Section
        eyebrow="01 · Conviction"
        title="Global relevance from African origin."
        intro="ORIGINA is built on the conviction that Africa can originate scientific platforms, clinical research, advanced formulations, intellectual property, technology, global brands, and institutions."
      >
        <SplitSection reverse>
          <EditorialImage image={founderImages.community} variant="portrait" tone="light" />
          <div>
            <Quote>
              The ambition is not to build an African version of an existing foreign company. The ambition is to build
              something globally relevant that happens to have originated in Africa.
            </Quote>
            <p className="mt-6 body-copy">
              Africa is represented through institutional confidence—not stereotypes. Avoiding cliché visual motifs in
              favour of scientific rigor, intellectual ambition, and long-term institutional permanence.
            </p>
          </div>
        </SplitSection>
      </Section>

      <ImageBreak
        image={founderImages.lifestyle}
        title="Beginning in Africa. Serving the world."
        subtitle="Dar es Salaam · Tanzania · Biology First™"
      />

      <Section tone="noir" eyebrow="02 · Headquarters">
        <SplitSection>
          <div>
            <h2 className="section-title-light">
              A global institution
              <br />
              <span className="text-stone">with African origin.</span>
            </h2>
            <LeadCopy light>A multi-divisional innovation institution designed for worldwide relevance.</LeadCopy>
          </div>
          <EditorialImage image={founderImages.exchange} variant="landscape" tone="dark" />
        </SplitSection>
      </Section>

      <PageCta
        eyebrow="Collaboration"
        title="Build with ORIGINA."
        links={[{ href: "/contact", label: "Start a conversation" }]}
      />
    </>
  );
}
