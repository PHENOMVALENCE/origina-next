import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";

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
            <span className="text-gold-light">Not the limitation.</span>
          </>
        }
        intro="Headquartered in Dar es Salaam, Tanzania. Geography is not presented as a ceiling."
      />

      <Section
        eyebrow="01 · Conviction"
        title="Global relevance from African origin."
        intro="ORIGINA is built on the conviction that Africa can originate scientific platforms, clinical research, advanced formulations, intellectual property, technology, global brands, and institutions."
      >
        <Quote>
          The ambition is not to build an African version of an existing foreign company. The ambition is to build
          something globally relevant that happens to have originated in Africa.
        </Quote>
        <p className="mt-6 max-w-2xl body-copy">
          Africa is represented through institutional confidence—not stereotypes. Avoiding cliché visual motifs in
          favour of scientific rigor, intellectual ambition, and long-term institutional permanence.
        </p>
      </Section>

      <Section tone="noir" eyebrow="02 · Headquarters">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title-light">
              Beginning in Africa.
              <br />
              <span className="text-gold-light">Serving the world.</span>
            </h2>
            <p className="body-copy-light">Dar es Salaam · Tanzania · Biology First™</p>
          </div>
          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="grid h-40 w-40 place-content-center rounded-full border border-gold/40 text-sm uppercase tracking-[0.2em] text-gold">
              DSM
            </div>
            <LeadCopy light>A multi-divisional innovation institution.</LeadCopy>
          </div>
        </div>
      </Section>

      <PageCta
        eyebrow="Collaboration"
        title="Build with ORIGINA."
        links={[{ href: "/contact", label: "Start a conversation" }]}
      />
    </>
  );
}
