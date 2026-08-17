import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Quote } from "@/components/Quote";

export const metadata: Metadata = {
  title: "Dr. Elizabeth Consoli — Founder of ORIGINA™",
  description:
    "Dr. Elizabeth Consoli, MD, MBChB — Medical Doctor, Cosmetic Formulation Scientist, and Founder of ORIGINA™.",
};

const roles = [
  "Founder & Director — ORIGINA™",
  "Founder / Scientific Director — ORIGINA Labs™",
  "Creator — BMX-24™ platform",
  "Focus — Skin of colour, formulation science and biological systems",
];

export default function FounderPage() {
  return (
    <>
      <PageHero
        crumb="Founder"
        kicker="Institutional leadership"
        title={
          <>
            Dr. Elizabeth
            <br />
            <em className="not-italic text-gold-light">Consoli.</em>
          </>
        }
        intro="MD, MBChB · Medical Doctor · Cosmetic Formulation Scientist · Founder of ORIGINA™"
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-(--content-max) gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div className="relative aspect-4/5 overflow-hidden rounded-sm">
            <Image
              src="/img/founder/founder-01.jpeg"
              alt="Dr. Elizabeth Consoli, Founder of ORIGINA"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-3 font-semibold text-graphite">Institutional roles:</p>
            <ul className="flex flex-col gap-2 text-graphite/85">
              {roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section tone="cream">
        <p className="font-serif text-2xl text-graphite">
          Dr. Elizabeth Consoli founded ORIGINA around a conviction that scientific innovation does
          not need to originate elsewhere to be globally relevant.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-graphite/85">
          Her early work sits at the intersection of medicine, dermatology, formulation science,
          and the needs of skin of colour. That initial focus expands into a broader institutional
          vision: build scientific platforms from Africa capable of serving global populations.
        </p>
        <div className="mt-6">
          <Quote>Build scientific platforms from Africa capable of serving global populations.</Quote>
        </div>
      </Section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-(--content-max) gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-3/4 overflow-hidden rounded-sm">
              <Image
                src="/img/founder/founder-02.jpeg"
                alt="Dr. Elizabeth Consoli at a professional event"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-3/4 overflow-hidden rounded-sm">
              <Image
                src="/img/founder/founder-09.jpeg"
                alt="Dr. Elizabeth Consoli in conversation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">Institutional mandate</p>
            <h2 className="mb-4 font-serif text-4xl leading-tight">
              Reinforce the institution,
              <br />
              <em className="not-italic text-gold">not celebrity.</em>
            </h2>
            <p className="text-sm text-graphite/85">
              The founder establishes the intellectual culture; the institution is designed to
              carry it forward.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-noir py-16 text-ivory">
        <div className="mx-auto flex max-w-(--content-max) flex-wrap gap-4 px-6 lg:px-16">
          <Link
            href="/about"
            className="rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
          >
            The institution
          </Link>
          <Link
            href="/labs"
            className="rounded-full border border-ivory/35 px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ivory hover:border-gold hover:text-gold"
          >
            ORIGINA Labs™
          </Link>
        </div>
      </section>
    </>
  );
}
