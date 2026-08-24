import Image from "next/image";
import Link from "next/link";
import { DivisionCard } from "@/components/DivisionCard";
import { EvidenceLadder } from "@/components/EvidenceLadder";
import { HomeHero } from "@/components/HomeHero";
import { InstitutionMap } from "@/components/InstitutionMap";
import { PageCta } from "@/components/PageCta";
import { ProcessPathway } from "@/components/ProcessPathway";
import { Quote, QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { SystemsThinking } from "@/components/SystemsThinking";
import { EditorialImage, SplitSection } from "@/components/SplitSection";
import { ContentStatus } from "@/components/ContentStatus";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { TextLink } from "@/components/ui/TextLink";
import { biologyFirst, developmentPathway, labsFunctions, qualityFramework } from "@/lib/content/science";
import { evidenceLevels, evidencePrinciples } from "@/lib/content/evidence";
import { divisions } from "@/lib/content/divisions";
import { platforms } from "@/lib/content/platforms";
import { roadmapItems } from "@/lib/content/future";
import { founderImages } from "@/lib/content/images";

const divisionPreviews = divisions.filter((division) => division.slug !== "labs");
const futurePreview = roadmapItems.filter((item) => !item.unnamed);

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="home-section-bridge" aria-hidden="true">
        <p>ORIGINA / Institution · Biology First™ · Evidence-led innovation</p>
      </div>

      {/* 02 · The Institution */}
      <Section
        id="institutional-thesis"
        tone="paper"
        eyebrow="02 · The institution"
        title="We begin with biology."
        intro="Human biology is interconnected. ORIGINA studies systems — not symptoms in isolation — before designing intervention."
      >
        <SplitSection reverse>
          <div className="space-y-8">
            <SystemsThinking />
            <LeadCopy>Understand the biological system before attempting to change it.</LeadCopy>
          </div>
          <div className="space-y-6">
            <EditorialImage image={founderImages.multidisciplinary} variant="portrait" tone="light" />
            <div className="space-y-5 body-copy">
              <p>
                Skin of colour is ORIGINA&apos;s first scientific specialization because those populations have
                historically been underrepresented within dermatological research, clinical evidence, and product
                development.
              </p>
              <Quote>It is our starting point, not our limitation.</Quote>
              <TextLink href="/about">Explore the institution</TextLink>
            </div>
          </div>
        </SplitSection>
      </Section>

      {/* 03 · Scientific Position */}
      <Section tone="noir" eyebrow="03 · Scientific position" title="Skin of colour is where we begin.">
        <SplitSection>
          <LeadCopy light>
            What changes when human biology is studied from the perspective of melanin-rich skin?
          </LeadCopy>
          <div className="space-y-5 body-copy-light">
            <p>
              Research considerations include pigmentation, post-inflammatory hyperpigmentation, melasma, acne, barrier
              dysfunction, photoageing, inflammation, ageing, cosmetic tolerability, formulation design, and clinical
              evaluation.
            </p>
            <Quote light large>
              Skin colour is an important biological and clinical consideration — not a single biological category.
            </Quote>
            <p className="text-sm text-stone">
              Fitzpatrick skin type, ancestry, phenotype, disease state, environmental exposure, and individual biology
              all matter — without simplistic biological determinism.
            </p>
            <TextLink href="/science#position" light>
              Read the scientific position
            </TextLink>
          </div>
        </SplitSection>
      </Section>

      {/* 04 · Biology First */}
      <Section
        tone="sunk"
        eyebrow="04 · Biology First™"
        title="A philosophical framework for innovation."
        intro="Four principles that govern how ORIGINA asks questions, designs research, and evaluates claims."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {biologyFirst.pillars.map((pillar, index) => (
            <article key={pillar.name} className="institutional-panel">
              <span className="pillar-card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-2xl text-ink">{pillar.name}</h3>
              <p className="mt-3 body-copy">{pillar.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 grid overflow-hidden rounded-none bg-noir lg:mt-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="p-6 sm:p-8 lg:p-12">
            <ScientificLabel tone="dark">
              Evidence progression
            </ScientificLabel>
            <div className="principle-stack mt-6">
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
        <TextLink href="/biology-first" className="mt-8">
          Explore Biology First™
        </TextLink>
      </Section>

      {/* 05 · ORIGINA Labs */}
      <Section
        tone="paper"
        eyebrow="05 · ORIGINA Labs™"
        title="The scientific engine of ORIGINA."
        intro="Research · Formulation · Clinical Science · IP · Manufacturing Development"
      >
        <SplitSection reverse>
          <EditorialImage image={founderImages.recognition} variant="portrait" tone="light" />
          <div>
            <p className="body-copy">
              ORIGINA Labs is the institutional R&D function — not merely a visual label. From hypothesis to technical
              file, the Labs function translates biological questions into evidence, prototypes, and repeatable methods.
            </p>
            <DetailFunctions items={labsFunctions} />
            <TextLink href="/labs" className="mt-6">
              Enter ORIGINA Labs™
            </TextLink>
          </div>
        </SplitSection>
      </Section>

      {/* 06 · Development Framework */}
      <Section
        tone="sunk"
        eyebrow="06 · Development framework"
        title="From hypothesis to product."
        intro="Thirteen disciplined stages connect scientific curiosity to responsible commercial output."
      >
        <ProcessPathway steps={developmentPathway} />
        <TextLink href="/science#framework" className="mt-8 inline-flex">
          Examine the full framework
        </TextLink>
      </Section>

      {/* 07 · Platforms */}
      <Section tone="graphite" eyebrow="07 · Platforms" title="Proprietary science platforms.">
        <div className="grid gap-4 lg:grid-cols-2">
          {platforms.map((platform) => (
            <article
              key={platform.id}
              className="institutional-panel flex h-full flex-col border-white/10 bg-noir/40 text-ivory"
            >
              <ScientificLabel tone="dark">Platform / {platform.name}</ScientificLabel>
              <h3 className="mt-3 font-serif text-2xl">{platform.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-stone">{platform.subtitle}</p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-stone">{platform.summary}</p>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                <ContentStatus status={platform.status} dark />
                <TextLink href={platform.href} light>
                  View platform
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 08 · Institutional architecture + Divisions */}
      <Section
        eyebrow="08 · Divisions"
        title="A scientific institution — not a single brand."
        intro="Distinct expressions. Shared institution. Products are outputs. Brands are expressions."
      >
        <InstitutionMap />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionPreviews.map((division) => (
            <DivisionCard key={division.slug} division={division} />
          ))}
        </div>
      </Section>

      {/* 09 · Evidence & Quality */}
      <Section
        tone="noir"
        eyebrow="09 · Evidence & quality"
        title="Evidence has levels. Quality is designed in."
        intro="ORIGINA is ambitious scientifically and conservative in claims."
      >
        <EvidenceLadder levels={evidenceLevels.slice(0, 6)} tone="dark" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {qualityFramework.slice(0, 6).map((item) => (
            <div key={item.title} className="border border-white/12 p-4">
              <h3 className="font-serif text-lg text-ivory">{item.title}</h3>
              <p className="mt-2 text-sm text-stone">{item.text}</p>
            </div>
          ))}
        </div>
        <TextLink href="/science/evidence" light className="mt-8 inline-flex">
          Understand evidence & quality
        </TextLink>
      </Section>

      {/* 10 · Responsible Science */}
      <QuoteBand>
        &ldquo;If the evidence is preliminary, we call it preliminary. If the evidence is strong, we show it. If we do
        not know, we say we do not know.&rdquo;
      </QuoteBand>

      <Section tone="paper" eyebrow="10 · Responsible science" title="Ambition without scientific inflation.">
        <p className="max-w-3xl body-copy">
          ORIGINA will not deliberately use unsupported clinically proven claims, exaggerated anti-ageing claims,
          unauthorized disease-treatment claims, or regulatory language implying approval where approval has not
          occurred.
        </p>
        <TextLink href="/science/responsible-science" className="mt-6">
          Read the responsible science doctrine
        </TextLink>
      </Section>

      {/* 11 · Founder */}
      <Section tone="sunk" eyebrow="11 · Founder" title="Dr. Elizabeth Consoli">
        <SplitSection reverse>
          <EditorialImage image={founderImages.portraitClinical} variant="portrait" tone="light" />
          <div className="space-y-4">
            <p className="scientific-metadata">MD, MBChB · Medical Doctor · Cosmetic Formulation Scientist</p>
            <LeadCopy>
              Scientific innovation does not need to originate elsewhere to become globally relevant.
            </LeadCopy>
            <p className="body-copy">
              Founder & Director — ORIGINA™. Founder / Scientific Director — ORIGINA Labs™. Creator — BMX-24™ platform.
              Focus — Skin of colour, formulation science, and biological systems.
            </p>
            <TextLink href="/founder">Read founder profile</TextLink>
          </div>
        </SplitSection>
      </Section>

      {/* 12 · Africa Originating */}
      <Section tone="noir" eyebrow="12 · Africa originating" title="Africa is the origin. Not the limitation.">
        <SplitSection>
          <LeadCopy light>Dar es Salaam is presented proudly — as the place where ORIGINA begins.</LeadCopy>
          <div className="space-y-5 body-copy-light">
            <p>
              Africa can originate scientific platforms, clinical research, advanced formulations, intellectual property,
              technology, global brands, and new institutions.
            </p>
            <Quote light>
              The ambition is not to build an African version of an existing foreign company. The ambition is to build
              something globally relevant that happens to have originated in Africa.
            </Quote>
            <TextLink href="/africa" light>
              Explore Africa originating
            </TextLink>
          </div>
        </SplitSection>
      </Section>

      {/* 13 · Future ORIGINA */}
      <Section
        tone="paper"
        eyebrow="13 · Future ORIGINA"
        title="Built for expansion with discipline."
        intro="A staged institutional horizon — an academy, a research institute, and new ventures — advanced only as the evidence and capacity are ready."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {futurePreview.map((item) => (
            <article key={item.id} id={item.id} className="institutional-panel">
              <ScientificLabel>{item.label}</ScientificLabel>
              <h3 className="mt-2 font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 body-copy">{item.description}</p>
              <ContentStatus status="future" />
            </article>
          ))}
        </div>
        <TextLink href="/future" className="mt-8">
          View institutional horizon
        </TextLink>
      </Section>

      {/* 14 · Unnamed Division */}
      <section className="unnamed-division" id="unnamed">
        <ScientificLabel tone="dark">
          ∞ · Open possibility
        </ScientificLabel>
        <p className="unnamed-division__symbol" aria-hidden="true">
          ∞
        </p>
        <h2 className="mt-6 max-w-lg font-serif text-3xl sm:text-4xl">What has not yet been named.</h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
          The most important division of ORIGINA may not exist today. ORIGINA deliberately leaves room for discoveries
          that do not yet have a commercial category.
        </p>
        <Link href="/future#unnamed" className="text-link-light mt-8">
          Explore the unnamed division
        </Link>
      </section>

      {/* 15 · Contact CTA */}
      <PageCta
        eyebrow="Build with ORIGINA"
        title="Enquire with ORIGINA."
        intro="Scientific collaboration, manufacturing development, investment, brand partnerships, and scientific communication."
        links={[
          { href: "/contact", label: "Enquire with ORIGINA" },
          { href: "/labs", label: "Enter ORIGINA Labs™", variant: "secondary" },
        ]}
      />
    </>
  );
}

function DetailFunctions({ items }: { items: readonly { num: string; title: string }[] }) {
  return (
    <div className="mt-8 border-t border-crimson/25">
      {items.map((fn) => (
        <div
          key={fn.num}
          className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-crimson/15 py-4 sm:grid-cols-[3rem_1fr] sm:gap-4 sm:py-5"
        >
          <span className="font-serif text-2xl text-crimson">{fn.num}</span>
          <span className="font-serif text-xl text-ink">{fn.title}</span>
        </div>
      ))}
    </div>
  );
}
