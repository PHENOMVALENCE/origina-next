import Image from "next/image";
import { DivisionCard } from "@/components/DivisionCard";
import { EvidenceLadder } from "@/components/EvidenceLadder";
import { HomeHero } from "@/components/HomeHero";
import { EditorialImage, ImageBreak, SplitSection } from "@/components/SplitSection";
import { InstitutionMap } from "@/components/InstitutionMap";
import { PageCta } from "@/components/PageCta";
import { ProcessPathway } from "@/components/ProcessPathway";
import { Quote, QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { TextLink } from "@/components/ui/TextLink";
import { biologyFirst, developmentPathway, labsFunctions } from "@/lib/content/science";
import { evidenceLevels, evidencePrinciples } from "@/lib/content/evidence";
import { divisions } from "@/lib/content/divisions";
import { founderImages, productImages } from "@/lib/content/images";

const divisionPreviews = divisions.filter((division) => division.slug !== "labs");

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="home-section-bridge" aria-hidden="true">
        <p>Institutional thesis · Biology First™ · Evidence-led innovation</p>
      </div>

      <Section
        id="institutional-thesis"
        tone="ivory"
        eyebrow="01 · Institutional thesis"
        title="We begin with biology."
        intro="Human biology is interconnected. ORIGINA studies systems — not symptoms in isolation — before designing intervention."
      >
        <SplitSection reverse>
          <EditorialImage image={founderImages.multidisciplinary} variant="portrait" tone="light" />
          <div className="space-y-6">
            <LeadCopy>
              Pigmentation interacts with inflammation. Barrier function interacts with environmental exposure. Ageing
              interacts with cellular signalling. Understand the biological system before attempting to change it.
            </LeadCopy>
            <div className="space-y-5 body-copy">
              <p>
                Skin of colour is ORIGINA&apos;s first scientific specialization because those populations have
                historically been underrepresented within dermatological research, clinical evidence, and product
                development.
              </p>
              <Quote>It is our starting point, not our limitation.</Quote>
              <TextLink href="/biology-first">Explore Biology First™</TextLink>
            </div>
          </div>
        </SplitSection>
      </Section>

      <Section
        tone="cream"
        eyebrow="02 · Biology First™"
        title="A philosophical framework for innovation."
        intro="Four pillars that govern how ORIGINA asks questions, designs research, and evaluates claims."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {biologyFirst.pillars.map((pillar, index) => (
            <article key={pillar.name} className="institutional-card">
              <span className="pillar-card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-2xl text-graphite">{pillar.name}</h3>
              <p className="mt-3 body-copy">{pillar.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid overflow-hidden rounded-sm bg-noir lg:mt-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="principle-stack">
              {evidencePrinciples.map((statement) => (
                <blockquote key={statement}>&ldquo;{statement}&rdquo;</blockquote>
              ))}
            </div>
          </div>
          <div className="relative min-h-[200px] sm:min-h-[240px]">
            <Image
              src={founderImages.formulation.src}
              alt={founderImages.formulation.alt}
              fill
              className="object-cover opacity-80"
              sizes="40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/40 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="03 · Institutional architecture"
        title="A scientific institution — not a single brand."
        intro="ORIGINA connects research, formulation, IP, clinical evaluation, products, education, and future ventures. Products are outputs. Brands are expressions."
      >
        <InstitutionMap />
      </Section>

      <ImageBreak
        image={founderImages.formulation}
        title="Skin of colour is where we begin."
        subtitle="Population-aware, evidence-based formulation — not one-formula thinking."
      />

      <Section tone="noir" eyebrow="04 · Scientific position" title="Biology studied from melanin-rich skin.">
        <SplitSection>
          <LeadCopy light>What changes when human biology is studied from the perspective of melanin-rich skin?</LeadCopy>
          <div className="space-y-5 body-copy-light">
            <p>
              Research considerations include pigmentation, post-inflammatory hyperpigmentation, melasma, barrier
              dysfunction, photoageing, inflammation, formulation design, and clinical evaluation.
            </p>
            <Quote light large>
              Skin colour is an important biological and clinical consideration — not a single biological category.
            </Quote>
            <TextLink href="/science" light>
              Examine the scientific position
            </TextLink>
          </div>
        </SplitSection>
      </Section>

      <Section
        tone="ivory"
        eyebrow="05 · ORIGINA Labs™"
        title="The scientific engine of ORIGINA."
        intro="ORIGINA Labs is the institutional R&D function — not merely a visual label."
      >
        <SplitSection reverse>
          <EditorialImage image={founderImages.recognition} variant="portrait" tone="light" />
          <div>
            <p className="font-serif text-2xl text-graphite">
              Research · Formulation · Clinical Science · IP · Manufacturing
            </p>
            <p className="mt-4 body-copy">
              From hypothesis to technical file, the Labs function translates biological questions into evidence,
              prototypes, and repeatable methods.
            </p>
            <DetailFunctions items={labsFunctions} />
            <TextLink href="/labs" className="mt-6">
              Enter the Labs
            </TextLink>
          </div>
        </SplitSection>
      </Section>

      <Section
        tone="cream"
        eyebrow="06 · Development framework"
        title="From hypothesis to product."
        intro="Thirteen disciplined stages connect scientific curiosity to responsible commercial output."
      >
        <ProcessPathway steps={developmentPathway} />
        <TextLink href="/science#framework" className="mt-8 inline-flex">
          Examine the full framework
        </TextLink>
      </Section>

      <Section tone="oxblood" eyebrow="07 · Platforms" title="BMX-24™">
        <SplitSection reverse>
          <div>
            <p className="font-serif text-2xl text-ivory/95">Non-hydroquinone approaches to hyperpigmentation.</p>
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-ivory/80">
              Developed from research into pigment regulation, barrier preservation, and long-term management in
              melanin-rich skin.
            </p>
            <TextLink href="/divisions/b-melanox" light className="mt-6 inline-flex">
              Follow the B-Melanox platform
            </TextLink>
          </div>
          <EditorialImage image={productImages.pigmentCorrector} variant="portrait" tone="dark" />
        </SplitSection>
      </Section>

      <Section
        tone="ivory"
        eyebrow="08 · Divisions"
        title="Distinct expressions. Shared institution."
        intro="Each division carries a specific scientific focus while operating under shared institutional standards."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionPreviews.map((division) => (
            <DivisionCard key={division.slug} division={division} />
          ))}
        </div>
      </Section>

      <Section
        tone="noir"
        eyebrow="09 · Evidence & quality"
        title="Evidence has levels. Quality is designed in."
        intro="ORIGINA is ambitious scientifically and conservative in claims. The strength of a claim must match the strength of the evidence."
      >
        <EvidenceLadder levels={evidenceLevels.slice(0, 6)} tone="dark" />
        <TextLink href="/science/evidence" light className="mt-8 inline-flex">
          Understand the evidence ladder
        </TextLink>
      </Section>

      <QuoteBand>
        &ldquo;If the evidence is preliminary, we call it preliminary. If the evidence is strong, we show it. If we do
        not know, we say we do not know.&rdquo;
      </QuoteBand>

      <PageCta
        eyebrow="Responsible science"
        title="Ambition without scientific inflation."
        intro="Read the institutional doctrine on claim discipline, regulatory alignment, and responsible communication."
        links={[
          { href: "/science/responsible-science", label: "Read the doctrine" },
          { href: "/contact", label: "Enquire with ORIGINA", variant: "secondary" },
        ]}
      />
    </>
  );
}

function DetailFunctions({ items }: { items: readonly { num: string; title: string }[] }) {
  return (
    <div className="mt-8 border-t border-gold/25">
      {items.map((fn) => (
        <div key={fn.num} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-gold/15 py-4 sm:grid-cols-[3rem_1fr] sm:gap-4 sm:py-5">
          <span className="font-serif text-2xl text-gold">{fn.num}</span>
          <span className="font-serif text-xl text-graphite">{fn.title}</span>
        </div>
      ))}
    </div>
  );
}
