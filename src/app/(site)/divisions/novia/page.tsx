import type { Metadata } from "next";
import Image from "next/image";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { noviaPillars, noviaStatements } from "@/lib/content/divisions";

export const metadata: Metadata = {
  title: "NOVIA™ — Luxury Body Care",
  description:
    "NOVIA is ORIGINA's luxury body care division: sensory experience meets formulation engineering.",
};

export default function NoviaPage() {
  return (
    <>
      <PageHero
        crumb="NOVIA™"
        kicker="Luxury body care"
        title={
          <>
            Sensory experience meets
            <br />
            <em className="not-italic text-gold-light">formulation engineering.</em>
          </>
        }
        intro="NOVIA focuses on texture, sensory performance, barrier compatibility, elegant formulation, and repeatable quality—not generic lifestyle positioning."
      />

      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">01</p>
            <h2 className="mb-4 font-serif text-4xl leading-tight">
              Formulation science
              <br />
              <em className="not-italic text-sage">for the body.</em>
            </h2>
            <p className="mb-3 font-serif text-xl text-graphite">
              An ORIGINA formulation-science expression applied to body care.
            </p>
            <p className="text-sm text-graphite/85">
              NOVIA is not a generic wellness brand. It is disciplined luxury body care built on
              institutional formulation standards—texture, sensory performance, barrier compatibility,
              and repeatable quality.
            </p>
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src="/img/founder/founder-07.jpeg"
              alt="Woman enjoying an active self-care moment beside a tennis court"
              fill
              className="object-cover"
            />
            <figcaption className="mt-3 text-[0.62rem] uppercase tracking-[0.14em] text-stone">
              Self-care in motion
            </figcaption>
          </div>
        </div>
      </Section>

      <section className="bg-sage py-16 text-center text-ivory">
        <div className="mx-auto max-w-xl space-y-2 px-6 font-serif text-2xl lg:text-3xl">
          {noviaStatements.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <Section eyebrow="02" title="The world of Novia.">
        <p className="mb-8 max-w-xl text-sm text-graphite/85">
          A lifestyle ecosystem built around how care feels, what it communicates, and the confidence
          it leaves behind.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {noviaPillars.map((pillar) => (
            <article key={pillar.title} className="border border-border-subtle p-6">
              <span className="font-serif text-gold">{pillar.num}</span>
              <h3 className="mt-2 font-serif text-xl">{pillar.title}</h3>
              <p className="mt-2 text-sm text-graphite/85">{pillar.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="noir">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-3/4 overflow-hidden rounded-sm">
              <Image
                src="/img/products/bmelanox-09.jpeg"
                alt="Hands presenting a portable personal-care product"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-3/4 overflow-hidden rounded-sm">
              <Image
                src="/img/products/bmelanox-03.jpeg"
                alt="Personal-care product photographed in an active lifestyle setting"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-gold">Visual world</p>
            <h2 className="mb-4 font-serif text-4xl leading-tight">
              Botanical.
              <br />
              Warm. <em className="not-italic text-gold-light">Assured.</em>
            </h2>
            <p className="text-sm text-stone">
              Novia&rsquo;s visual system pairs vivid botanical colour with tactile details, precise
              typography, movement, and intimate imagery—care presented as part of a full life.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-sage py-16 text-center text-ivory">
        <blockquote className="mx-auto max-w-2xl font-serif text-2xl italic">
          Self-care is not a routine.
          <br />
          It is a relationship with yourself.
        </blockquote>
      </section>

      <PageCta
        eyebrow="The lifestyle expression"
        title="Enter the world of Novia."
        links={[
          { href: "/contact", label: "Novia enquiries" },
          { href: "/divisions/b-melanox", label: "Explore B-Melanox", variant: "secondary" },
        ]}
      />
    </>
  );
}
