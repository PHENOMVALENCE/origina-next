import type { Metadata } from "next";
import Image from "next/image";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { ResearchLibrary } from "@/components/ResearchLibrary";
import { Section } from "@/components/Section";
import {
  labsCapabilities,
  labsContinuum,
  labsFutureFields,
} from "@/lib/content/science";

export const metadata: Metadata = {
  title: "ORIGINA Labs — Research & Development",
  description:
    "Explore the research, formulation, clinical evaluation, intellectual property, and manufacturing development capabilities of ORIGINA Labs.",
};

export default function LabsPage() {
  return (
    <>
      <PageHero
        crumb="ORIGINA Labs™"
        kicker="The scientific engine"
        title={
          <>
            The scientific engine
            <br />
            <em className="not-italic text-gold-light">of ORIGINA.</em>
          </>
        }
        intro="Research · Formulation · Clinical Science · IP · Manufacturing Development"
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-(--content-max) items-center gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">01</p>
            <h2 className="mb-4 font-serif text-4xl leading-tight">
              Not merely
              <br />
              <em className="not-italic text-gold">a facility.</em>
            </h2>
            <p className="mb-3 font-serif text-xl text-graphite">
              Origina Labs is a philosophy: rigorous science and creative formulation are not
              opposites. They are partners.
            </p>
            <p className="text-sm text-graphite/85">
              Every breakthrough formula, proprietary complex, clinical protocol, and manufacturing
              pathway begins here under the direct scientific direction of Dr. Elizabeth Consoli.
            </p>
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src="/img/founder/founder-03.jpeg"
              alt="Dr. Elizabeth Consoli receiving recognition from the Tanzania Society for Dermatovenereology"
              fill
              className="object-cover"
            />
            <figcaption className="mt-3 text-[0.62rem] uppercase tracking-[0.14em] text-stone">
              Science · Community · Recognition
            </figcaption>
          </div>
        </div>
      </section>

      <Section tone="noir" eyebrow="Current functions" title="From first principle to production.">
        <p className="mb-8 max-w-xl text-sm text-stone">
          A connected research architecture that protects quality, evidence, and institutional
          knowledge at every stage.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labsCapabilities.map((item, index) => (
            <article key={item.title} className="border border-gold/15 p-6">
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-stone">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" eyebrow="02" title="The development continuum.">
        <div className="grid gap-6 border-t border-border-subtle pt-6 sm:grid-cols-2 lg:grid-cols-5">
          {labsContinuum.map((item) => (
            <div key={item.title}>
              <span className="text-gold">{item.step}</span>
              <strong className="mt-2 block font-serif text-xl">{item.title}</strong>
              <p className="mt-2 text-sm text-graphite/85">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-(--content-max) gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src="/img/founder/founder-05.jpeg"
              alt="Dr. Elizabeth Consoli discussing a skin-care formulation with a participant"
              fill
              className="object-cover"
            />
            <figcaption className="mt-3 text-[0.62rem] uppercase tracking-[0.14em] text-stone">
              Knowledge in practice
            </figcaption>
          </div>
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">
              Future research fields
            </p>
            <h2 className="mb-4 font-serif text-4xl leading-tight">
              Skin science is
              <br />
              <em className="not-italic text-gold">the beginning.</em>
            </h2>
            <p className="mb-6 text-sm text-graphite/85">
              The Labs framework is intended to expand when excellence can be sustained.
            </p>
            <div className="flex flex-wrap gap-2">
              {labsFutureFields.map((field) => (
                <span
                  key={field}
                  className="rounded-full border border-border-subtle px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.12em] text-graphite/85"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section tone="cream" eyebrow="Knowledge archive" title="Research in active development.">
        <p className="mb-8 max-w-2xl text-sm text-graphite/85">
          A living index of the questions, protocols, and evidence streams shaping Origina Labs.
          Public briefs will be released as work reaches the appropriate standard.
        </p>
        <ResearchLibrary />
      </Section>

      <PageCta
        eyebrow="Research relationships"
        title="Bring a serious question."
        links={[
          { href: "/contact", label: "Research enquiries" },
          { href: "/divisions/b-melanox", label: "See B-Melanox", variant: "secondary" },
        ]}
      />
    </>
  );
}
