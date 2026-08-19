import Image from "next/image";
import { EvidenceLadder } from "@/components/EvidenceLadder";
import { InstitutionMap } from "@/components/InstitutionMap";
import { PageCta } from "@/components/PageCta";
import { ProcessPathway } from "@/components/ProcessPathway";
import { Quote, QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { TextLink } from "@/components/ui/TextLink";
import { biologyFirst, developmentPathway, labsFunctions } from "@/lib/content/science";
import { evidenceLevels, evidencePrinciples } from "@/lib/content/evidence";
import { divisions } from "@/lib/content/divisions";

const divisionPreviews = divisions.filter((division) => division.slug !== "labs");

export default function Home() {
  return (
    <>
      <section className="relative grid min-h-[92vh] grid-cols-1 overflow-hidden bg-noir text-ivory lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-6 pt-36 pb-16 lg:px-16 lg:pt-44">
          <Eyebrow tone="dark" className="mb-2">
            ORIGINA™ · Biology First™ · Dar es Salaam
          </Eyebrow>
          <h1 className="font-serif text-6xl leading-[0.9] sm:text-7xl lg:text-[6.25rem]">Beginning in Africa.</h1>
          <p className="mt-2 font-serif text-4xl text-gold-light sm:text-5xl">Serving the world.</p>
          <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed muted-on-dark">
            A multi-divisional innovation institution built at the intersection of biology, clinical science,
            technology, and human wellbeing.
          </p>
          <p className="mt-3 text-sm text-stone">Founded in Africa. Designed without limits. Built for the world.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/about">Explore ORIGINA</Button>
            <Button href="/labs" variant="secondary">
              Enter ORIGINA Labs™
            </Button>
          </div>
          <div className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-gold/20 pt-8">
            <Fact value="2024" label="Established" />
            <Fact value="DSM" label="Tanzania" />
            <Fact value="∞" label="Possibility" />
          </div>
        </div>
        <div className="relative hidden min-h-[520px] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(181,146,74,0.14),transparent_55%),linear-gradient(145deg,#241d19,#100d0b)] lg:block">
          <Image
            src="/img/founder/founder-07.jpeg"
            alt="Dr. Elizabeth Consoli representing ORIGINA institutional science"
            fill
            priority
            className="object-cover opacity-90 mix-blend-luminosity"
            sizes="50vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir/80 to-transparent p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.16em] text-gold">Institutional science</p>
            <p className="mt-1 max-w-sm text-sm text-stone">Evidence-led innovation beginning with skin of colour.</p>
          </div>
        </div>
      </section>

      <Section
        tone="ivory"
        eyebrow="01 · Institutional thesis"
        title="We begin with biology."
        intro="Human biology is interconnected. ORIGINA studies systems — not symptoms in isolation — before designing intervention."
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
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
            <p>
              ORIGINA expands toward dermatology, biotechnology, regenerative technologies, nutritional science,
              medical devices, and future biological fields.
            </p>
            <TextLink href="/biology-first">Explore Biology First™</TextLink>
          </div>
        </div>
      </Section>

      <Section
        tone="cream"
        eyebrow="02 · Biology First™"
        title="A philosophical framework for innovation."
        intro="Four pillars that govern how ORIGINA asks questions, designs research, and evaluates claims."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {biologyFirst.pillars.map((pillar) => (
            <article key={pillar.name} className="institutional-card">
              <h3 className="font-serif text-2xl text-graphite">{pillar.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/85">{pillar.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-sm bg-noir p-8 lg:p-12">
          <div className="principle-stack">
            {evidencePrinciples.map((statement) => (
              <blockquote key={statement}>&ldquo;{statement}&rdquo;</blockquote>
            ))}
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

      <Section
        tone="noir"
        eyebrow="04 · Scientific position"
        title="Skin of colour is where we begin."
        intro="Population-aware, evidence-based formulation — not one-formula thinking."
      >
        <div className="grid gap-12 lg:grid-cols-2">
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
        </div>
      </Section>

      <Section
        tone="ivory"
        eyebrow="05 · ORIGINA Labs™"
        title="The scientific engine of ORIGINA."
        intro="ORIGINA Labs is the institutional R&D function — not merely a visual label."
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-serif text-2xl text-graphite">Research · Formulation · Clinical Science · IP · Manufacturing</p>
            <p className="mt-4 body-copy">
              From hypothesis to technical file, the Labs function translates biological questions into evidence,
              prototypes, and repeatable methods.
            </p>
            <TextLink href="/labs" className="mt-6">
              Enter the Labs
            </TextLink>
          </div>
          <DetailFunctions items={labsFunctions} />
        </div>
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

      <Section tone="oxblood" eyebrow="07 · Platforms" title="BMX-24™" intro="Proprietary pigment-regulation platform for skin of colour.">
        <p className="font-serif text-2xl text-ivory/95">Non-hydroquinone approaches to hyperpigmentation.</p>
        <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-ivory/80">
          Developed from research into pigment regulation, barrier preservation, and long-term management in melanin-rich
          skin.
        </p>
        <TextLink href="/divisions/b-melanox" light className="mt-6 inline-flex">
          Follow the B-Melanox platform
        </TextLink>
      </Section>

      <Section
        tone="ivory"
        eyebrow="08 · Divisions"
        title="Distinct expressions. Shared institution."
        intro="Each division carries a specific scientific focus while operating under shared institutional standards."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionPreviews.map((division) => (
            <a key={division.slug} href={division.href} className="institutional-card group">
              <StatusBadge status={division.status} />
              <strong className="mt-3 block font-serif text-2xl text-graphite group-hover:text-oxblood">
                {division.name}
              </strong>
              <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.12em] text-stone">{division.role}</span>
              <span className="mt-3 block text-sm text-graphite/75">{division.tagline}</span>
            </a>
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

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong className="block font-serif text-3xl text-gold">{value}</strong>
      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-stone">{label}</span>
    </div>
  );
}

function DetailFunctions({ items }: { items: readonly { num: string; title: string }[] }) {
  return (
    <div className="border-t border-gold/25">
      {items.map((fn) => (
        <div key={fn.num} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-gold/15 py-5">
          <span className="font-serif text-2xl text-gold">{fn.num}</span>
          <span className="font-serif text-xl text-graphite">{fn.title}</span>
        </div>
      ))}
    </div>
  );
}
