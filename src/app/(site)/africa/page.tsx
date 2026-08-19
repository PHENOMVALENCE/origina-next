import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";

export const metadata: Metadata = {
  title: "Africa Originating — ORIGINA™",
  description:
    "Africa is the origin, not the limitation. ORIGINA is headquartered in Dar es Salaam, Tanzania, designed for global relevance.",
};

export default function AfricaPage() {
  return (
    <>
      <PageHero
        crumb="Africa Originating"
        kicker="Institutional origin"
        title={
          <>
            Africa is the origin.
            <br />
            <em className="not-italic text-gold-light">Not the limitation.</em>
          </>
        }
        intro="Headquartered in Dar es Salaam, Tanzania. Geography is not presented as a ceiling."
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <p className="max-w-2xl font-serif text-2xl text-graphite">
            ORIGINA is built on the conviction that Africa can originate scientific platforms,
            clinical research, advanced formulations, intellectual property, technology, global
            brands, and institutions.
          </p>
          <div className="mt-6 max-w-2xl">
            <Quote>
              The ambition is not to build an African version of an existing foreign company. The
              ambition is to build something globally relevant that happens to have originated in
              Africa.
            </Quote>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-graphite/85">
            Africa is represented through institutional confidence—not stereotypes. Avoiding
            cliché visual motifs in favour of scientific rigor, intellectual ambition, and
            long-term institutional permanence.
          </p>
        </div>
      </section>

      <section className="bg-noir py-20 text-ivory lg:py-28">
        <div className="mx-auto grid max-w-(--content-max) items-center gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-gold">Dar es Salaam</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Beginning in Africa.
              <br />
              <em className="not-italic text-gold-light">Serving the world.</em>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="grid h-40 w-40 place-content-center rounded-full border border-gold/40 text-sm uppercase tracking-[0.2em] text-gold">
              DSM
            </div>
            <p className="font-serif text-xl text-ivory/90">
              Biology First™ · A multi-divisional innovation institution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
          >
            Build with ORIGINA
          </Link>
        </div>
      </section>
    </>
  );
}
