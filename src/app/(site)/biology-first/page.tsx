import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { biologyFirst } from "@/lib/content/science";
import { evidencePrinciples } from "@/lib/content/evidence";

export const metadata: Metadata = {
  title: "Biology First™ — ORIGINA",
  description:
    "Biology First™ is ORIGINA's philosophical framework: every innovation begins by understanding living systems.",
};

export default function BiologyFirstPage() {
  return (
    <>
      <PageHero
        crumb="Biology First™"
        kicker="Philosophical framework"
        title="Biology First™"
        intro={biologyFirst.summary}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {biologyFirst.pillars.map((pillar) => (
              <article key={pillar.name}>
                <h3 className="font-serif text-2xl">{pillar.name}</h3>
                <p className="mt-2 text-sm text-graphite/85">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noir py-20 text-ivory lg:py-28">
        <div className="mx-auto flex max-w-(--content-max) flex-col gap-4 px-6 lg:px-16">
          {evidencePrinciples.map((statement) => (
            <blockquote key={statement} className="font-serif text-xl italic text-ivory/90">
              &ldquo;{statement}&rdquo;
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto flex max-w-(--content-max) flex-wrap gap-4 px-6 lg:px-16">
          <Link
            href="/science"
            className="rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
          >
            Scientific position
          </Link>
          <Link
            href="/science/responsible-science"
            className="rounded-full border border-graphite/25 px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-graphite hover:border-gold hover:text-oxblood"
          >
            Responsible science
          </Link>
        </div>
      </section>
    </>
  );
}
