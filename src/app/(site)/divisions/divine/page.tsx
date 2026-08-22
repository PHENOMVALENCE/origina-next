import type { Metadata } from "next";

import { ContentStatus } from "@/components/ContentStatus";

import { DetailList } from "@/components/DetailList";

import { PageCta } from "@/components/PageCta";

import { PageHero } from "@/components/PageHero";

import { Quote } from "@/components/Quote";

import { Section } from "@/components/Section";

import { createPageMetadata } from "@/lib/metadata";



export const metadata: Metadata = createPageMetadata({

  title: "DIVINE™ — Luxury Makeup Science",

  description:

    "DIVINE is ORIGINA's luxury makeup science division: colour science, cosmetic formulation, skin compatibility, and luxury aesthetics.",

  path: "/divisions/divine",

});



const divineScience = [

  { title: "Colour science", text: "Pigment behaviour, undertone, and performance across skin of colour." },

  { title: "Cosmetic formulation", text: "Stable, compatible formulations designed for repeated use." },

  { title: "Skin compatibility", text: "Biology-aware design — not skin adaptation to industry norms." },

  { title: "Luxury aesthetics", text: "Premium execution within the institutional design system." },

] as const;



export default function DivinePage() {

  return (

    <>

      <PageHero

        variant="dark"

        crumb="DIVINE™"
        parent={{ label: "Divisions", href: "/divisions" }}

        kicker="Division / Luxury makeup science"

        title={

          <>

            Luxury makeup.

            <br />

            <span className="text-gold-light">Biology-aware design.</span>

          </>

        }

        intro="Colour science + cosmetic formulation + skin compatibility + luxury aesthetics."

      />



      <Section eyebrow="01 · Scientific combination" title="Makeup designed for skin of colour.">

        <DetailList items={divineScience.map(({ title, text }) => ({ title, text }))} />

        <div className="mt-8">
          <Quote>Makeup should not require skin of colour to adapt to the industry.</Quote>
        </div>

        <p className="mt-6 max-w-2xl body-copy">

          Future products may include foundation, complexion systems, and colour cosmetics. DIVINE may feel more luxurious

          than ORIGINA Labs — but remains within the parent institution&apos;s scientific architecture.

        </p>

        <ContentStatus status="future" />

      </Section>



      <PageCta
        tone="noir"

        eyebrow="Continue"

        title="Explore the division."

        links={[{ href: "/contact", label: "Explore the division" }]}

      />

    </>

  );

}


