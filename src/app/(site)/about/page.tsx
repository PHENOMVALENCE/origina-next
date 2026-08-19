import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About ORIGINA — Innovation Institution",
  description: "Discover ORIGINA's mission, vision, philosophy, founder, and institutional purpose.",
};

const beliefs = [
  { title: "Great ideas", text: "can come from anywhere." },
  { title: "Curiosity", text: "is where innovation begins." },
  { title: "Excellence", text: "is a standard, not a goal." },
  { title: "Knowledge", text: "must lead to action." },
  { title: "Science & creativity", text: "are complementary." },
  { title: "Long-term impact", text: "matters more than short-term gain." },
  { title: "Institutions", text: "outlive individuals." },
];

const timeline = [
  { period: "2024", title: "Origina established", text: "A long-term institutional vision takes form in Dar es Salaam." },
  { period: "Now", title: "Scientific direction", text: "Research discipline, formulation logic, and standards are embedded in every programme." },
  { period: "Next", title: "Institutional expansion", text: "Teams, partnerships, and knowledge systems grow around the mission—not around one personality." },
];

const roles = [
  { title: "Scientific direction", text: "Led by Dr. Elizabeth Consoli, safeguarding scientific standards and programme integrity." },
  { title: "Research & formulation", text: "Translating complex questions into evidence, prototypes, and repeatable methods." },
  { title: "Institutional development", text: "Building the systems, culture, and operating model required for lasting work." },
  { title: "Strategic partnerships", text: "Connecting aligned collaborators, manufacturing capability, and global opportunity." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="Institution"
        kicker="The institution"
        title={
          <>
            Created for what
            <br />
            <em className="not-italic text-gold-light">does not yet exist.</em>
          </>
        }
        intro="Origina is an innovation institution dedicated to the discovery, development, and advancement of ideas, technologies, products, systems, and people that improve human life."
      />

      {/* 01 · What Origina is */}
      <Section eyebrow="01" title="What Origina is.">
        <p className="font-serif text-2xl text-graphite">
          A home for thinkers and builders. A multi-industry platform. A long-term legacy
          organisation.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-graphite/85">
          Origina exists to create what does not yet exist. Extraordinary progress comes from
          extraordinary thinking—and innovation should never be limited by credentials, hierarchy,
          industry boundaries, or conventional approaches.
        </p>
        <div className="mt-8 grid gap-8 border-t border-border-subtle pt-8 sm:grid-cols-2">
          <div>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-oxblood">Not</span>
            <p className="mt-2 text-sm leading-loose text-graphite/85">
              A skincare company
              <br />A cosmetics company
              <br />A personal brand
              <br />A single-industry business
            </p>
          </div>
          <div>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">Yes</span>
            <p className="mt-2 text-sm leading-loose text-graphite/85">
              An innovation institution
              <br />A home for builders
              <br />A multi-industry platform
              <br />A legacy organisation
            </p>
          </div>
        </div>
      </Section>

      {/* 02/03 · Mission & Vision */}
      <Section tone="cream" eyebrow="02 · 03">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">Mission</p>
            <h2 className="mb-4 font-serif text-3xl leading-tight">
              Turn knowledge
              <br />
              into <em className="not-italic text-gold">action.</em>
            </h2>
            <p className="text-sm text-graphite/85">
              To discover, create, and advance transformative solutions that improve human life
              through science, innovation, craftsmanship, and exceptional thinking.
            </p>
          </div>
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">Vision</p>
            <h2 className="mb-4 font-serif text-3xl leading-tight">
              Emerge from Africa.
              <br />
              <em className="not-italic text-gold">Resonate globally.</em>
            </h2>
            <p className="text-sm text-graphite/85">
              To become one of the most respected innovation institutions emerging from Africa,
              recognised globally for exceptional ideas, exceptional people, and exceptional
              solutions.
            </p>
          </div>
        </div>
      </Section>

      {/* 04 · Beliefs */}
      <Section tone="noir" eyebrow="04" title="The beliefs beneath the work.">
        <p className="mb-8 max-w-xl text-sm text-stone">
          Our philosophy guides every decision, formula, collaboration, and hire.
        </p>
        <div className="border-t border-gold/20">
          {beliefs.map((belief, index) => (
            <div key={belief.title} className="flex gap-6 border-b border-gold/15 py-4">
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-xl">{belief.title}</h3>
              <p className="text-sm text-stone">{belief.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 05 · Founder */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-(--content-max) items-center gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src="/img/founder/founder-01.jpeg"
              alt="Dr. Elizabeth Consoli in her clinical environment"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">05 · Founder</p>
            <h2 className="mb-4 font-serif text-4xl leading-tight">
              Dr. Elizabeth
              <br />
              <em className="not-italic text-gold">Consoli.</em>
            </h2>
            <p className="mb-3 font-serif text-xl text-graphite">
              Medical doctor. Cosmetic formulator. Skin of colour specialist. Institution builder.
            </p>
            <p className="text-sm text-graphite/85">
              Origina begins under Dr. Consoli&rsquo;s direct scientific direction in Dar es Salaam.
              The founder&rsquo;s role is not to make Origina a personal brand, but to establish the
              standard, systems, and intellectual culture from which an enduring institution can
              grow.
            </p>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-graphite py-16 text-center text-ivory">
        <div className="mx-auto max-w-2xl px-6">
          <blockquote className="font-serif text-2xl italic">
            &ldquo;The future is created by people willing to think beyond existing limitations.&rdquo;
          </blockquote>
          <cite className="mt-4 block text-[0.66rem] uppercase not-italic tracking-[0.2em] text-gold">
            Dr. Elizabeth Consoli · Founder
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-noir py-16 text-ivory">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-gold">Continue exploring</p>
          <h2 className="mb-6 font-serif text-3xl">
            See where ideas
            <br />
            become research.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/labs"
              className="rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
            >
              Enter Origina Labs
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-ivory/35 px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ivory hover:border-gold hover:text-gold"
            >
              Contact Origina
            </Link>
          </div>
        </div>
      </section>

      {/* Founder's mandate / timeline */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-(--content-max) gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-3/4 overflow-hidden rounded-sm">
              <Image src="/img/founder/founder-02.jpeg" alt="Dr. Elizabeth Consoli at a professional event" fill className="object-cover" />
            </div>
            <div className="relative mt-8 aspect-3/4 overflow-hidden rounded-sm">
              <Image src="/img/founder/founder-09.jpeg" alt="Dr. Elizabeth Consoli in conversation" fill className="object-cover" />
            </div>
          </div>
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">A founder&rsquo;s mandate</p>
            <h2 className="mb-4 font-serif text-4xl leading-tight">
              Set the standard.
              <br />
              <em className="not-italic text-gold">Build beyond self.</em>
            </h2>
            <p className="mb-6 font-serif text-xl text-graphite">
              The founder establishes the intellectual culture; the institution is designed to
              carry it forward.
            </p>
            <ol className="flex flex-col gap-4 border-t border-border-subtle pt-4">
              {timeline.map((item) => (
                <li key={item.period} className="flex gap-4">
                  <span className="w-14 shrink-0 text-[0.66rem] uppercase tracking-[0.15em] text-oxblood">{item.period}</span>
                  <div>
                    <h3 className="font-serif text-lg">{item.title}</h3>
                    <p className="text-sm text-graphite/80">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Institutional architecture / team */}
      <Section tone="cream" eyebrow="Institutional architecture" title="The roles that move ideas forward.">
        <p className="mb-8 max-w-2xl text-sm text-graphite/85">
          Origina is building a multidisciplinary organisation. These functions define the
          capability being assembled as the institution grows.
        </p>
        <div className="grid gap-8 border-t border-border-subtle pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <article key={role.title}>
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-xl">{role.title}</h3>
              <p className="mt-2 text-sm text-graphite/80">{role.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
