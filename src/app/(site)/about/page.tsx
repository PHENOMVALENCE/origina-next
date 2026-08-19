import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { EditorialImage, PhotoGrid, SplitSection } from "@/components/SplitSection";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { TextLink } from "@/components/ui/TextLink";
import { createPageMetadata } from "@/lib/metadata";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "About ORIGINA — Innovation Institution",
  description: "Discover ORIGINA's mission, vision, philosophy, founder, and institutional purpose.",
  path: "/about",
});

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
        variant="gradient"
        crumb="Institution"
        kicker="The institution"
        title={
          <>
            Created for what
            <br />
            <span className="text-gold-light">does not yet exist.</span>
          </>
        }
        intro="Origina is an innovation institution dedicated to the discovery, development, and advancement of ideas, technologies, products, systems, and people that improve human life."
        image={founderImages.portraitClinical}
      />

      <Section
        eyebrow="01 · Identity"
        title="What Origina is."
        intro="A home for thinkers and builders. A multi-industry platform. A long-term legacy organisation."
      >
        <LeadCopy>
          Origina exists to create what does not yet exist. Extraordinary progress comes from extraordinary
          thinking—and innovation should never be limited by credentials, hierarchy, industry boundaries, or
          conventional approaches.
        </LeadCopy>
        <div className="mt-10 grid gap-8 border-t border-border-subtle pt-8 sm:grid-cols-2">
          <div className="institutional-card">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-oxblood">Not</span>
            <p className="mt-3 body-copy leading-loose">
              A skincare company
              <br />A cosmetics company
              <br />A personal brand
              <br />A single-industry business
            </p>
          </div>
          <div className="institutional-card">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">Yes</span>
            <p className="mt-3 body-copy leading-loose">
              An innovation institution
              <br />A home for builders
              <br />A multi-industry platform
              <br />A legacy organisation
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream" eyebrow="02 · 03 · Purpose">
        <SplitSection>
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">Mission</p>
            <h2 className="mb-4 font-serif text-3xl leading-tight sm:text-4xl">
              Turn knowledge
              <br />
              into <span className="text-gold">action.</span>
            </h2>
            <p className="body-copy">
              To discover, create, and advance transformative solutions that improve human life through science,
              innovation, craftsmanship, and exceptional thinking.
            </p>
          </div>
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">Vision</p>
            <h2 className="mb-4 font-serif text-3xl leading-tight sm:text-4xl">
              Emerge from Africa.
              <br />
              <span className="text-gold">Resonate globally.</span>
            </h2>
            <p className="body-copy">
              To become one of the most respected innovation institutions emerging from Africa, recognised globally
              for exceptional ideas, exceptional people, and exceptional solutions.
            </p>
          </div>
        </SplitSection>
      </Section>

      <Section
        tone="noir"
        eyebrow="04 · Philosophy"
        title="The beliefs beneath the work."
        intro="Our philosophy guides every decision, formula, collaboration, and hire."
      >
        <div className="border-t border-gold/20">
          {beliefs.map((belief, index) => (
            <div key={belief.title} className="grid gap-4 border-b border-gold/15 py-5 sm:grid-cols-[3rem_1fr_1.5fr] sm:items-baseline">
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-xl text-ivory">{belief.title}</h3>
              <p className="text-sm text-stone">{belief.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ivory" eyebrow="05 · Founder">
        <SplitSection>
          <EditorialImage image={founderImages.portraitClinical} variant="portrait" tone="light" />
          <div>
            <h2 className="section-title">
              Dr. Elizabeth
              <br />
              <span className="text-gold">Consoli.</span>
            </h2>
            <p className="lead-serif text-2xl sm:text-3xl">
              Medical doctor. Cosmetic formulator. Skin of colour specialist. Institution builder.
            </p>
            <p className="mt-4 body-copy">
              Origina begins under Dr. Consoli&rsquo;s direct scientific direction in Dar es Salaam. The founder&rsquo;s
              role is not to make Origina a personal brand, but to establish the standard, systems, and intellectual
              culture from which an enduring institution can grow.
            </p>
            <TextLink href="/founder" className="mt-6">
              Read the founder profile
            </TextLink>
          </div>
        </SplitSection>
      </Section>

      <QuoteBand>
        &ldquo;The future is created by people willing to think beyond existing limitations.&rdquo;
        <cite className="mt-4 block text-[0.66rem] uppercase not-italic tracking-[0.2em] text-gold">
          Dr. Elizabeth Consoli · Founder
        </cite>
      </QuoteBand>

      <Section tone="ivory" eyebrow="06 · Mandate">
        <SplitSection reverse>
          <PhotoGrid
            images={[
              founderImages.professionalEvent,
              { ...founderImages.conversation, offset: true },
            ]}
          />
          <div>
            <h2 className="section-title">
              Set the standard.
              <br />
              <span className="text-gold">Build beyond self.</span>
            </h2>
            <p className="lead-serif text-2xl sm:text-3xl">
              The founder establishes the intellectual culture; the institution is designed to carry it forward.
            </p>
            <ol className="mt-8 flex flex-col gap-4 border-t border-border-subtle pt-6">
              {timeline.map((item) => (
                <li key={item.period} className="grid gap-4 sm:grid-cols-[4rem_1fr]">
                  <span className="text-[0.66rem] uppercase tracking-[0.15em] text-oxblood">{item.period}</span>
                  <div>
                    <h3 className="font-serif text-lg text-graphite">{item.title}</h3>
                    <p className="mt-1 body-copy">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </SplitSection>
      </Section>

      <Section
        tone="cream"
        eyebrow="07 · Architecture"
        title="The roles that move ideas forward."
        intro="Origina is building a multidisciplinary organisation. These functions define the capability being assembled as the institution grows."
      >
        <div className="grid gap-6 border-t border-border-subtle pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <article key={role.title} className="institutional-card">
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-xl text-graphite">{role.title}</h3>
              <p className="mt-2 body-copy">{role.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <PageCta
        eyebrow="Continue exploring"
        title="See where ideas become research."
        links={[
          { href: "/labs", label: "Enter Origina Labs" },
          { href: "/contact", label: "Contact Origina", variant: "secondary" },
        ]}
      />
    </>
  );
}
