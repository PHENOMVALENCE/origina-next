import type { Metadata } from "next";
import Image from "next/image";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";

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
        crumb="Culture"
        kicker="Culture & talent"
        title={
          <>
            We do not seek employees.
            <br />
            <em className="not-italic text-gold-light">We seek builders.</em>
          </>
        }
        intro="Every member is expected to contribute ideas, not simply perform tasks. Credentials are respected. Capability is required. Character is essential."
      />

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-[0.66rem] uppercase tracking-[0.2em] text-gold">01</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              The person
              <br />
              <em className="not-italic text-gold">behind the work.</em>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="mb-8 text-lg text-graphite/85">
              Origina is built by people whose thinking, discipline, and character compound over time.
            </p>
            <div className="flex flex-wrap gap-2">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-border-subtle px-4 py-2 text-[0.72rem] uppercase tracking-[0.12em] text-graphite"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="noir">
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-gold">The Origina Standard</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Eight values.
              <br />
              <em className="not-italic text-gold-light">One way of operating.</em>
            </h2>
          </div>
          <p className="text-[#b7aca0]">
            Not slogans on a wall. Expectations visible in decisions, quality, responsibility, and how
            people treat one another.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text], index) => (
            <article key={title} className="border border-white/10 p-6">
              <span className="text-[0.66rem] uppercase tracking-[0.2em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-ivory">{title}</h3>
              <p className="mt-3 text-sm text-stone">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure>
            <div className="relative aspect-4/5 overflow-hidden rounded-sm">
              <Image
                src="/img/founder/founder-08.jpeg"
                alt="Dr. Elizabeth Consoli standing with a multidisciplinary professional community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3 text-[0.72rem] uppercase tracking-[0.12em] text-stone">
              Expertise grows through community
            </figcaption>
          </figure>
          <div>
            <p className="mb-4 text-[0.66rem] uppercase tracking-[0.2em] text-gold">02</p>
            <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-graphite">Working at Origina</p>
            <h2 className="mb-6 font-serif text-4xl leading-tight sm:text-5xl">
              Capability and
              <br />
              <em className="not-italic text-gold">character.</em>
            </h2>
            <p className="mb-8 text-graphite/85">
              We value expertise, but we do not confuse credentials with contribution. The environment
              should reward clear thinking, rigorous execution, intellectual generosity, and the
              confidence to challenge assumptions responsibly.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {workPrinciples.map((item) => (
                <div key={item.title} className="border border-border-subtle p-4">
                  <strong className="block font-serif text-xl text-noir">{item.title}</strong>
                  <span className="mt-1 block text-sm text-graphite/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-graphite py-16 text-ivory">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <Quote light>
            Institutions outlive individuals.
            <br />
            Standards are how they do it.
          </Quote>
        </div>
      </section>

      <PageCta
        eyebrow="Talent & collaboration"
        title="Do your best work with purpose."
        links={[
          { href: "/contact?subject=talent#enquiry-form", label: "Talent enquiries" },
          { href: "/about", label: "About Origina", variant: "secondary" },
        ]}
      />

      <Section tone="ivory" eyebrow="Culture in practice" title="Knowledge moves between people.">
        <p className="mb-10 max-w-2xl text-graphite/85">
          Origina&apos;s culture is not only an internal standard. It is expressed through listening,
          demonstration, professional exchange, and the confidence to make scientific knowledge useful
          in real settings.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {communityPhotos.map((photo) => (
            <figure key={photo.src}>
              <div className="relative aspect-4/5 overflow-hidden rounded-sm">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="33vw" />
              </div>
              <figcaption className="mt-3 text-[0.72rem] uppercase tracking-[0.12em] text-stone">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
