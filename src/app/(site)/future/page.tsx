import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { MediaFigure, SplitSection } from "@/components/SplitSection";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import { expansionChecks, roadmapItems } from "@/lib/content/future";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "Future Divisions — Origina",
  description: "Explore the planned and future divisions within Origina's institutional framework.",
  path: "/future",
});

export default function FuturePage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Future"
        kicker="Future divisions"
        title={
          <>
            Built for the ideas
            <br />
            <span className="text-gold-light">still without names.</span>
          </>
        }
        intro="Origina's framework is designed to expand when the capacity to execute with excellence arrives—not before."
        image={founderImages.exchange}
      />

      <Section eyebrow="01 · Discipline" title="Expansion with discipline.">
        <SplitSection>
          <LeadCopy>The institution is open-ended by design. Its standards are not.</LeadCopy>
          <p className="body-copy">
            New divisions are not created because an opportunity is fashionable. They emerge when Origina has the
            knowledge, people, systems, and patience to execute them with integrity.
          </p>
        </SplitSection>
      </Section>

      <Section tone="noir" eyebrow="Institutional horizon">
        <div className="flex flex-col gap-4 border-b border-gold/25 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.66rem] uppercase tracking-[0.2em] text-gold">Roadmap</p>
          <span className="text-[0.52rem] tracking-[0.16em] text-stone">PLANNED → EMERGING → UNNAMED</span>
        </div>
        <div>
          {roadmapItems.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className={`relative grid gap-6 border-b border-gold/25 py-12 lg:grid-cols-[170px_1.1fr_1fr] lg:items-end lg:gap-8 ${
                item.unnamed ? "mt-8 border-0 bg-gold p-8 text-noir lg:p-12" : ""
              }`}
            >
              <span className={`text-[0.53rem] tracking-[0.15em] ${item.unnamed ? "text-noir" : "text-gold"}`}>
                {item.label}
              </span>
              <h2 className="font-serif text-4xl leading-none sm:text-5xl lg:text-6xl">{item.title}</h2>
              <div>
                <p className={`text-sm ${item.unnamed ? "text-noir/80" : "text-stone"}`}>{item.description}</p>
                <small
                  className={`mt-4 block text-[0.48rem] tracking-[0.13em] lg:absolute lg:right-0 lg:bottom-3 ${
                    item.unnamed ? "text-noir/60" : "text-[#6f655d]"
                  }`}
                >
                  {item.footnote}
                </small>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" eyebrow="02 · Expansion test">
        <SplitSection reverse>
          <MediaFigure
            src={founderImages.exchange.src}
            alt={founderImages.exchange.alt}
            caption={founderImages.exchange.caption}
          />
          <div>
            <h2 className="section-title">
              Before a new
              <br />
              <span className="text-gold">division begins.</span>
            </h2>
            <div className="border-t border-border-subtle">
              {expansionChecks.map((check, index) => (
                <div key={check} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border-subtle py-5">
                  <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <p className="font-serif text-xl text-graphite">{check}</p>
                </div>
              ))}
            </div>
          </div>
        </SplitSection>
      </Section>

      <QuoteBand>
        The final destination is intentionally undefined.
        <br />
        The standard for reaching it is not.
      </QuoteBand>

      <PageCta
        eyebrow="Build the future"
        title="Bring the idea worth developing."
        links={[
          { href: "/contact", label: "Start a conversation" },
          { href: "/labs", label: "Explore the Labs", variant: "secondary" },
        ]}
      />
    </>
  );
}
