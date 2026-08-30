import type { Metadata } from "next";
import Link from "next/link";
import { ContentStatus } from "@/components/ContentStatus";
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
        variant="light"
        crumb="Future"
        kicker="ORIGINA / Future"
        title={
          <>
            Built for the ideas
            <br />
            <span className="text-crimson">still without names.</span>
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
        <div className="flex flex-col gap-4 border-b border-white/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] uppercase tracking-[0.2em] text-ivory/65">Roadmap</p>
          <span className="text-[0.75rem] tracking-[0.16em] text-stone">PLANNED → EMERGING → UNNAMED</span>
        </div>
        <div>
          {roadmapItems.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className={`relative grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[7rem_1fr] sm:gap-6 sm:py-10 lg:grid-cols-[170px_1.1fr_1fr] lg:items-end lg:gap-8 ${
                item.unnamed ? "mt-6 border-0 bg-paper p-6 text-noir sm:mt-8 sm:p-8 lg:p-12" : ""
              }`}
            >
              <span className={`text-[0.75rem] tracking-[0.15em] ${item.unnamed ? "text-crimson" : "text-ivory/70"}`}>
                {item.label}
              </span>
              <h2 className="font-serif text-3xl leading-none sm:text-4xl lg:text-6xl">{item.title}</h2>
              <div>
                <p className={`text-sm ${item.unnamed ? "text-ink-soft" : "text-stone"}`}>{item.description}</p>
                {!item.unnamed ? (
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <ContentStatus status="future" dark />
                    <Link
                      href={`/future/${item.id}`}
                      className="text-[0.75rem] uppercase tracking-[0.14em] text-ivory/75 transition-colors hover:text-ivory"
                    >
                      View horizon →
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={`/future/${item.id}`}
                    className="mt-4 inline-block text-[0.75rem] uppercase tracking-[0.14em] text-crimson transition-colors hover:text-crimson-deep"
                  >
                    Explore possibility →
                  </Link>
                )}
                <small
                  className={`mt-4 block text-[0.75rem] tracking-[0.13em] lg:absolute lg:right-0 lg:bottom-3 ${
                    item.unnamed ? "text-stone-deep" : "text-stone"
                  }`}
                >
                  {item.footnote}
                </small>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sunk" eyebrow="02 · Expansion test">
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
              <span className="text-crimson">division begins.</span>
            </h2>
            <div className="border-t border-rule">
              {expansionChecks.map((check, index) => (
                <div key={check} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-rule py-4 sm:grid-cols-[3rem_1fr] sm:gap-4 sm:py-5">
                  <span className="text-crimson">{String(index + 1).padStart(2, "0")}</span>
                  <p className="font-serif text-xl text-ink">{check}</p>
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
