import type { Metadata } from "next";
import Image from "next/image";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { MediaFigure, SplitSection } from "@/components/SplitSection";
import { TagList } from "@/components/TagList";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "Culture & Talent — ORIGINA",
  description: "Discover the standards, values, expectations, and people philosophy behind ORIGINA.",
  path: "/culture",
});

const values = [
  ["Excellence", "A standard embedded in every formula, decision, and interaction."],
  ["Accountability", "Ownership of outcomes, not only effort."],
  ["Innovation", "The willingness to question, rebuild, and imagine."],
  ["Integrity", "Intellectual honesty and transparency without exception."],
  ["Curiosity", "The belief that every answer opens new questions."],
  ["Long-term thinking", "Building for the next generation, not the next quarter."],
  ["Discipline", "The bridge between intention and achievement."],
  ["Respect", "For people, science, ideas, and the communities we serve."],
] as const;

const traits = [
  "Curiosity",
  "Integrity",
  "Problem solving",
  "Discipline",
  "Initiative",
  "Critical thinking",
  "Excellence",
];

const workPrinciples = [
  { title: "Think", text: "Question deeply before acting." },
  { title: "Build", text: "Translate knowledge into useful outcomes." },
  { title: "Own", text: "Take responsibility for the result." },
  { title: "Improve", text: "Raise the standard every cycle." },
];

const communityPhotos = [
  {
    src: "/img/founder/founder-04.jpeg",
    alt: "Dr. Elizabeth Consoli sharing a community event moment with a participant",
    caption: "Presence · Community",
  },
  {
    src: "/img/founder/founder-03.jpeg",
    alt: "Dr. Elizabeth Consoli receiving professional recognition from dermatology peers",
    caption: "Recognition · Standards",
  },
  {
    src: "/img/founder/founder-05.jpeg",
    alt: "Dr. Elizabeth Consoli explaining skin-care formulation to a participant",
    caption: "Education · Practice",
  },
];

export default function CulturePage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Culture"
        kicker="Culture & talent"
        title={
          <>
            We do not seek employees.
            <br />
            <span className="text-crimson">We seek builders.</span>
          </>
        }
        intro="Every member is expected to contribute ideas, not simply perform tasks. Credentials are respected. Capability is required. Character is essential."
        image={founderImages.multidisciplinary}
      />

      <Section tone="ivory" eyebrow="01 · People" title="The person behind the work.">
        <SplitSection>
          <LeadCopy>Origina is built by people whose thinking, discipline, and character compound over time.</LeadCopy>
          <TagList items={traits} />
        </SplitSection>
      </Section>

      <Section
        tone="noir"
        eyebrow="The Origina Standard"
        title="Eight values. One way of operating."
        intro="Not slogans on a wall. Expectations visible in decisions, quality, responsibility, and how people treat one another."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text], index) => (
            <article key={title} className="border border-white/10 p-6">
              <span className="text-[0.75rem] uppercase tracking-[0.2em] text-ivory/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-ivory">{title}</h3>
              <p className="mt-3 text-sm text-stone">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" eyebrow="02 · Working at Origina">
        <SplitSection reverse>
          <MediaFigure
            src={founderImages.multidisciplinary.src}
            alt={founderImages.multidisciplinary.alt}
            caption={founderImages.multidisciplinary.caption}
          />
          <div>
            <h2 className="section-title">
              Capability and
              <br />
              <span className="text-crimson">character.</span>
            </h2>
            <p className="body-copy">
              We value expertise, but we do not confuse credentials with contribution. The environment should reward
              clear thinking, rigorous execution, intellectual generosity, and the confidence to challenge assumptions
              responsibly.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {workPrinciples.map((item) => (
                <div key={item.title} className="institutional-card">
                  <strong className="block font-serif text-xl text-noir">{item.title}</strong>
                  <span className="mt-1 block body-copy">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </SplitSection>
      </Section>

      <QuoteBand>
        Institutions outlive individuals.
        <br />
        Standards are how they do it.
      </QuoteBand>

      <PageCta
        eyebrow="Talent & collaboration"
        title="Do your best work with purpose."
        links={[
          { href: "/contact?subject=talent#enquiry-form", label: "Talent enquiries" },
          { href: "/about", label: "About Origina", variant: "secondary" },
        ]}
      />

      <Section
        tone="ivory"
        eyebrow="03 · Culture in practice"
        title="Knowledge moves between people."
        intro="Origina's culture is expressed through listening, demonstration, professional exchange, and the confidence to make scientific knowledge useful in real settings."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {communityPhotos.map((photo) => (
            <figure key={photo.src}>
              <div className="relative aspect-4/5 overflow-hidden rounded-sm">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="33vw" />
              </div>
              <figcaption className="mt-3 text-[0.72rem] uppercase tracking-[0.12em] text-stone">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
