import { DivisionCard } from "@/components/DivisionCard";
import { HomeHero } from "@/components/HomeHero";
import { PageCta } from "@/components/PageCta";
import { Quote, QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { SystemsThinking } from "@/components/SystemsThinking";
import { EditorialImage, SplitSection } from "@/components/SplitSection";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { TextLink } from "@/components/ui/TextLink";
import { biologyFirst } from "@/lib/content/science";
import { divisions } from "@/lib/content/divisions";
import { roadmapItems } from "@/lib/content/future";
import { founderImages } from "@/lib/content/images";

/*
 * Homepage — an executive institutional overview, not the full institutional
 * document. Each area is a glimpse that links to the dedicated page where the
 * detail already lives (About, Biology First, Labs, Science, Platforms,
 * Divisions, Evidence, Founder, Africa, Future). See Phase 4 in docs/PROGRESS.md.
 */

// Explicit preview selection (not a slice) so the three cards avoid reusing a
// photograph shown elsewhere on the homepage: the default first-three includes
// BValence, whose card image is `portraitClinical` — the same founder portrait
// used in the Founder section. b-melanox (product shot), bettyworld, and novia
// each carry a distinct image. Card imagery is still placeholder founder
// photography — see docs/client-photography-requirements.md.
const previewSlugs = ["b-melanox", "bettyworld", "novia"] as const;
const divisionPreviews = previewSlugs
  .map((slug) => divisions.find((division) => division.slug === slug))
  .filter((division): division is (typeof divisions)[number] => Boolean(division));
const horizon = roadmapItems.filter((item) => !item.unnamed).slice(0, 3);
const biologyFirstPillars = biologyFirst.pillars.map((pillar) => pillar.name).join(" · ");

// ORIGINA's principal areas of activity — previews, each linking to its page.
const focusAreas = [
  {
    num: "01",
    title: "ORIGINA Labs™",
    text: "The institutional R&D engine — research, formulation, clinical science, intellectual property, and manufacturing development.",
    href: "/labs",
    cta: "Enter ORIGINA Labs™",
  },
  {
    num: "02",
    title: "Development framework",
    text: "Thirteen disciplined stages connecting scientific curiosity to responsible commercial output.",
    href: "/science#framework",
    cta: "Examine the framework",
  },
  {
    num: "03",
    title: "Science platforms",
    text: "Proprietary platforms — the BMX-24™ pigment-regulation platform and the BRP-1™ research platform.",
    href: "/platforms",
    cta: "View the platforms",
  },
] as const;

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="home-section-bridge" aria-hidden="true">
        <p>ORIGINA / Institution · Biology First™ · Evidence-led innovation</p>
      </div>

      {/* Who we are */}
      <Section
        id="institution"
        tone="paper"
        eyebrow="01 · The institution"
        title="We begin with biology."
        intro="Human biology is interconnected. ORIGINA studies systems — not symptoms in isolation — before designing intervention."
      >
        <SplitSection reverse>
          <div className="space-y-8">
            <SystemsThinking />
            <LeadCopy>Understand the biological system before attempting to change it.</LeadCopy>
          </div>
          <div className="space-y-6">
            <EditorialImage image={founderImages.recognition} variant="landscape" tone="light" />
            <div className="space-y-5 body-copy">
              <p>
                Skin of colour is ORIGINA&apos;s first scientific specialization — populations historically
                underrepresented within dermatological research, clinical evidence, and product development. It is our
                starting point, not our limitation.
              </p>
              <TextLink href="/about">Learn about ORIGINA</TextLink>
            </div>
          </div>
        </SplitSection>
      </Section>

      {/* Why ORIGINA exists — dark punctuation */}
      <Section tone="noir" eyebrow="02 · Why ORIGINA exists" title="Skin of colour is where we begin.">
        <SplitSection>
          <LeadCopy light>
            What changes when human biology is studied from the perspective of melanin-rich skin?
          </LeadCopy>
          <div className="space-y-5 body-copy-light">
            <p>
              Biology First™ is the framework that governs how ORIGINA asks questions, designs research, and evaluates
              claims — {biologyFirstPillars}.
            </p>
            <Quote light large>
              Skin colour is an important biological and clinical consideration — not a single biological category.
            </Quote>
            <TextLink href="/biology-first" light>
              Explore Biology First™
            </TextLink>
          </div>
        </SplitSection>
      </Section>

      {/* What we do */}
      <Section
        id="work"
        tone="sunk"
        eyebrow="03 · What we do"
        title="The scientific engine of ORIGINA."
        intro="From hypothesis to technical file, ORIGINA translates biological questions into evidence, prototypes, and repeatable methods."
      >
        <div className="border-t border-rule-strong">
          {focusAreas.map((area) => (
            <div
              key={area.num}
              className="grid gap-4 border-b border-rule py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <span className="font-serif text-2xl leading-none text-crimson/50">{area.num}</span>
              <div>
                <h3 className="font-serif text-2xl text-ink">{area.title}</h3>
                <p className="mt-2 max-w-xl body-copy">{area.text}</p>
              </div>
              <TextLink href={area.href} className="sm:justify-self-end">
                {area.cta}
              </TextLink>
            </div>
          ))}
        </div>
      </Section>

      {/* Divisions */}
      <Section
        id="divisions"
        tone="paper"
        eyebrow="04 · Divisions"
        title="A scientific institution — not a single brand."
        intro="Distinct expressions. Shared institution. Products are outputs; brands are expressions."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionPreviews.map((division) => (
            <DivisionCard key={division.slug} division={division} />
          ))}
        </div>
        <TextLink href="/divisions" className="mt-10">
          See all divisions
        </TextLink>
      </Section>

      {/* Evidence & responsibility */}
      <QuoteBand attribution="ORIGINA · Responsible science">
        &ldquo;If the evidence is preliminary, we call it preliminary. If the evidence is strong, we show it. If we do
        not know, we say we do not know.&rdquo;
      </QuoteBand>

      <Section
        tone="paper"
        eyebrow="05 · Evidence & responsibility"
        title="Ambition without scientific inflation."
        intro="Evidence has levels, and quality is designed in. ORIGINA is ambitious scientifically and conservative in claims."
      >
        <p className="max-w-3xl body-copy">
          ORIGINA will not deliberately use unsupported clinically proven claims, exaggerated anti-ageing claims,
          unauthorized disease-treatment claims, or regulatory language implying approval where approval has not
          occurred.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <TextLink href="/science/evidence">Understand evidence &amp; quality</TextLink>
          <TextLink href="/science/responsible-science">Read the responsible science doctrine</TextLink>
        </div>
      </Section>

      {/* Founder — people */}
      <Section id="founder" tone="sunk" eyebrow="06 · Founder" title="Dr. Elizabeth Consoli">
        <SplitSection reverse>
          <EditorialImage image={founderImages.portraitClinical} variant="portrait" tone="light" />
          <div className="space-y-4">
            <p className="scientific-metadata">MD, MBChB · Medical Doctor · Cosmetic Formulation Scientist</p>
            <LeadCopy>
              Scientific innovation does not need to originate elsewhere to become globally relevant.
            </LeadCopy>
            <p className="body-copy">
              Founder &amp; Director — ORIGINA™. Founder / Scientific Director — ORIGINA Labs™. Creator — BMX-24™
              platform. Focus — skin of colour, formulation science, and biological systems.
            </p>
            <TextLink href="/founder">Read the founder profile</TextLink>
          </div>
        </SplitSection>
      </Section>

      {/* Africa originating — dark punctuation */}
      <Section tone="noir" eyebrow="07 · Africa originating" title="Africa is the origin. Not the limitation.">
        <SplitSection>
          <LeadCopy light>Dar es Salaam is presented proudly — as the place where ORIGINA begins.</LeadCopy>
          <div className="space-y-5 body-copy-light">
            <p>
              Africa can originate scientific platforms, clinical research, advanced formulations, intellectual
              property, technology, global brands, and new institutions.
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

      {/* The horizon */}
      <Section
        id="future"
        tone="paper"
        eyebrow="08 · The horizon"
        title="Built for expansion with discipline."
        intro="A staged institutional horizon — an academy, a research institute, and new ventures — advanced only as the evidence and capacity are ready."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {horizon.map((item) => (
            <article key={item.id} className="index-card">
              <span className="pillar-card-index">{item.label}</span>
              <h3 className="font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-2 body-copy">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <TextLink href="/future">View the institutional horizon</TextLink>
          <TextLink href="/future#unnamed">Explore the unnamed division</TextLink>
        </div>
      </Section>

      {/* Closing institutional CTA */}
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
