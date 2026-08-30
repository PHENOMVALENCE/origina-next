import type { Metadata } from "next";
import { DivisionTheme } from "@/components/DivisionTheme";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { MediaFigure, PhotoGrid, SplitSection } from "@/components/SplitSection";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import { noviaPillars, noviaStatements } from "@/lib/content/divisions";

export const metadata: Metadata = createPageMetadata({
  title: "NOVIA™ — Luxury Body Care",
  description: "NOVIA is ORIGINA's luxury body care division: sensory experience meets formulation engineering.",
  path: "/divisions/novia",
});

export default function NoviaPage() {
  return (
    <DivisionTheme division="novia">
      <PageHero
        variant="dark"
        crumb="NOVIA™"
        parent={{ label: "Divisions", href: "/divisions" }}
        kicker="Luxury body care"
        title={
          <>
            Sensory experience meets
            <br />
            <span className="text-gold-light">formulation engineering.</span>
          </>
        }
        intro="NOVIA focuses on texture, sensory performance, barrier compatibility, elegant formulation, and repeatable quality—not generic lifestyle positioning."
      />

      <Section tone="paper" eyebrow="01 · Position">
        <SplitSection reverse>
          <div>
            <h2 className="section-title">
              Formulation science
              <br />
              <span className="text-sage">for the body.</span>
            </h2>
            <LeadCopy>An ORIGINA formulation-science expression applied to body care.</LeadCopy>
            <p className="mt-4 body-copy">
              NOVIA is not a generic wellness brand. It is disciplined luxury body care built on institutional
              formulation standards—texture, sensory performance, barrier compatibility, and repeatable quality.
            </p>
          </div>
          <MediaFigure
            src="/img/founder/founder-07.jpeg"
            alt="Woman enjoying an active self-care moment beside a tennis court"
            caption="Self-care in motion"
          />
        </SplitSection>
      </Section>

      <section className="bg-sage py-12 text-center text-ivory sm:py-16">
        <div className="site-container">
          <div className="mx-auto max-w-xl space-y-2 font-serif text-2xl lg:text-3xl">
            {noviaStatements.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="02 · Ecosystem"
        title="The world of Novia."
        intro="A lifestyle ecosystem built around how care feels, what it communicates, and the confidence it leaves behind."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {noviaPillars.map((pillar) => (
            <article key={pillar.title} className="institutional-card">
              <span className="font-serif text-crimson">{pillar.num}</span>
              <h3 className="mt-2 font-serif text-xl text-ink">{pillar.title}</h3>
              <p className="mt-2 body-copy">{pillar.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="noir" eyebrow="Visual world">
        <SplitSection>
          <PhotoGrid
            images={[
              { src: "/img/products/bmelanox-09.jpeg", alt: "Hands presenting a portable personal-care product" },
              {
                src: "/img/products/bmelanox-03.jpeg",
                alt: "Personal-care product photographed in an active lifestyle setting",
                offset: true,
              },
            ]}
          />
          <div>
            <h2 className="section-title-light">
              Botanical.
              <br />
              Warm. <span className="text-gold-light">Assured.</span>
            </h2>
            <p className="body-copy-light">
              Novia&apos;s visual system pairs vivid botanical colour with tactile details, precise typography,
              movement, and intimate imagery—care presented as part of a full life.
            </p>
          </div>
        </SplitSection>
      </Section>

      <QuoteBand>
        Self-care is not a routine.
        <br />
        It is a relationship with yourself.
      </QuoteBand>

      <PageCta
        tone="noir"
        eyebrow="The lifestyle expression"
        title="Enter the world of Novia."
        links={[
          { href: "/contact", label: "Novia enquiries" },
          { href: "/divisions/b-melanox", label: "Explore B-Melanox", variant: "secondary" },
        ]}
      />
    </DivisionTheme>
  );
}
