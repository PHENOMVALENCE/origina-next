import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageCta } from "@/components/PageCta";
import { Section } from "@/components/Section";
import { expansionChecks, roadmapItems } from "@/lib/content/future";

export const metadata: Metadata = {
  title: "Future Divisions — Origina",
  description: "Explore the planned and future divisions within Origina's institutional framework.",
};

export default function FuturePage() {
  return (
    <>
      <section className="bg-[radial-gradient(circle_at_78%_40%,rgba(181,146,74,0.17),transparent_30%)] bg-noir pt-32 pb-20 text-ivory lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <p className="mb-6 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.15em] text-stone">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span>/</span>
            Future
          </p>
          <p className="mb-4 text-[0.66rem] uppercase tracking-[0.2em] text-gold">Future divisions</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Built for the ideas
            <br />
            <em className="not-italic text-gold-light">still without names.</em>
          </h1>
          <p className="mt-6 max-w-xl text-[#b7aca0]">
            Origina&apos;s framework is designed to expand when the capacity to execute with excellence
            arrives—not before.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-gold">01</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Expansion with
              <br />
              <em className="not-italic text-gold">discipline.</em>
            </h2>
          </div>
          <div>
            <p className="font-serif text-2xl text-graphite">
              The institution is open-ended by design. Its standards are not.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-graphite/85">
              New divisions are not created because an opportunity is fashionable. They emerge when
              Origina has the knowledge, people, systems, and patience to execute them with integrity.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-noir py-20 text-ivory lg:py-32">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <div className="flex flex-col gap-4 border-b border-gold/25 pb-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.66rem] uppercase tracking-[0.2em] text-gold">Institutional horizon</p>
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
                <span
                  className={`text-[0.53rem] tracking-[0.15em] ${item.unnamed ? "text-noir" : "text-gold"}`}
                >
                  {item.label}
                </span>
                <h2 className="font-serif text-4xl leading-none sm:text-5xl lg:text-6xl">{item.title}</h2>
                <div>
                  <p className={`text-sm ${item.unnamed ? "text-noir/80" : "text-stone"}`}>
                    {item.description}
                  </p>
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
        </div>
      </section>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src="/img/founder/founder-06.jpeg"
              alt="Dr. Elizabeth Consoli exchanging ideas with a professional community"
              fill
              className="object-cover"
            />
            <figcaption className="mt-2 text-xs text-stone">Ideas advance through exchange</figcaption>
          </div>
          <div>
            <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-gold">02</p>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-graphite">The expansion test</p>
            <h2 className="mb-8 font-serif text-4xl leading-tight sm:text-5xl">
              Before a new
              <br />
              <em className="not-italic text-gold">division begins.</em>
            </h2>
            <div className="border-t border-[#cfc3b6]">
              {expansionChecks.map((check, index) => (
                <div
                  key={check}
                  className="grid grid-cols-[40px_1fr] gap-4 border-b border-[#cfc3b6] py-5"
                >
                  <span className="text-[0.55rem] text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <p className="font-serif text-xl">{check}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-graphite py-16 text-center text-ivory">
        <div className="mx-auto max-w-3xl px-6">
          <blockquote className="font-serif text-2xl italic sm:text-3xl">
            The final destination is intentionally undefined.
            <br />
            The standard for reaching it is not.
          </blockquote>
        </div>
      </section>

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
