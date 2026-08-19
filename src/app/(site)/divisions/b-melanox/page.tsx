import type { Metadata } from "next";
import Image from "next/image";
import { DisclaimerBand } from "@/components/DisclaimerBand";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { ProductGallery } from "@/components/ProductGallery";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { SplitSection } from "@/components/SplitSection";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import {
  bMelanoxFocusAreas,
  bMelanoxFutureExpansion,
  bMelanoxGalleryViews,
  bMelanoxProducts,
} from "@/lib/content/divisions";

export const metadata: Metadata = createPageMetadata({
  title: "B-Melanox™ — Pigmentation Science",
  description:
    "B-Melanox is ORIGINA's scientific pigmentation division and BMX-24™ pigment regulation platform for skin of colour.",
  path: "/divisions/b-melanox",
});

export default function BMelanoxPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="B-Melanox™"
        kicker="Scientific pigmentation division"
        title={
          <>
            Pigmentation is
            <br />
            <span className="text-gold-light">biology.</span>
          </>
        }
        intro="B-Melanox is ORIGINA's pigmentation-science platform with specific emphasis on skin of colour."
      />

      <Section eyebrow="01 · Question" title="The research question.">
        <SplitSection>
          <Quote>
            How can excessive or dysregulated pigmentation be addressed without relying on conventional
            hydroquinone-based approaches, while developing a system appropriate for melanin-rich skin?
          </Quote>
          <div
            className="mx-auto grid h-48 w-48 place-content-center rounded-full border border-gold/30 bg-cream font-serif text-6xl text-oxblood lg:mx-0"
            aria-hidden="true"
          >
            B
          </div>
        </SplitSection>
      </Section>

      <Section
        tone="cream"
        eyebrow="Platform"
        title="BMX-24™"
        intro="Proprietary pigment regulation platform. Clinical studies are not currently complete—wording remains appropriately conservative."
      >
        <LeadCopy>Non-hydroquinone approaches to hyperpigmentation in skin of colour.</LeadCopy>
      </Section>

      <Section
        tone="noir"
        eyebrow="Focus areas"
        title="Understand the whole pathway."
        intro="Pigmentation cannot be approached in isolation from inflammation, barrier integrity, exposure, and long-term management."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bMelanoxFocusAreas.map((area, index) => (
            <div key={area} className="flex gap-3 border border-gold/15 p-4 text-sm text-ivory/90">
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              {area}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="02 · Expression"
        title="The current expression."
        intro="A first look at the B-Melanox Night Intensive Pigment Corrector. Product claims, availability, protocols, and commercial details remain subject to formal approval before publication."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {bMelanoxProducts.map((product) => (
            <article key={product.title} className="institutional-card">
              <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-sm">
                <Image src={product.image} alt={product.alt} fill className="object-cover" />
              </div>
              <span className="text-[0.62rem] uppercase tracking-[0.14em] text-stone">{product.label}</span>
              <h3 className="mt-2 font-serif text-2xl text-graphite">{product.title}</h3>
              <p className="mt-2 body-copy">{product.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" eyebrow="03 · Horizon" title="Beyond the product shelf.">
        <div className="border-t border-border-subtle">
          {bMelanoxFutureExpansion.map((item) => (
            <div key={item.title} className="grid gap-6 border-b border-border-subtle py-5 sm:grid-cols-[3rem_1fr]">
              <span className="font-serif text-oxblood">{item.num}</span>
              <div>
                <h3 className="font-serif text-xl text-graphite">{item.title}</h3>
                <p className="mt-2 body-copy">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <DisclaimerBand>
        B-Melanox website content is institutional information and does not replace individual medical advice. Product
        claims and availability remain subject to formal validation and approval.
      </DisclaimerBand>

      <PageCta
        eyebrow="Scientific enquiries"
        title="Advance the conversation."
        links={[
          { href: "/contact", label: "Contact B-Melanox" },
          { href: "/labs", label: "Explore the Labs", variant: "secondary" },
        ]}
      />

      <Section tone="ivory" eyebrow="Product dossier · 01">
        <SplitSection reverse>
          <ProductGallery views={bMelanoxGalleryViews} />
          <div>
            <h2 className="section-title">
              Night Intensive
              <br />
              <span className="text-gold">Pigment Corrector.</span>
            </h2>
            <LeadCopy>The first visible product expression of the B-Melanox pigmentation-science platform.</LeadCopy>
            <dl className="mt-8 grid gap-4 border-t border-border-subtle pt-4">
              <div>
                <dt className="text-stone">Format</dt>
                <dd className="font-medium text-graphite">Targeted night serum</dd>
              </div>
              <div>
                <dt className="text-stone">Platform</dt>
                <dd className="font-medium text-graphite">B-Melanox · Origina Labs</dd>
              </div>
              <div>
                <dt className="text-stone">Focus</dt>
                <dd className="font-medium text-graphite">Uneven tone and visible pigmentation</dd>
              </div>
              <div>
                <dt className="text-stone">Status</dt>
                <dd className="font-medium text-graphite">Institutional preview</dd>
              </div>
            </dl>
            <details className="mt-6 border-t border-border-subtle pt-4" open>
              <summary className="cursor-pointer font-serif text-lg text-graphite">How it fits the ritual</summary>
              <p className="mt-2 body-copy">
                Designed as a considered evening step within a broader routine that respects barrier integrity,
                consistency, and professional guidance where appropriate.
              </p>
            </details>
            <details className="mt-4 border-t border-border-subtle pt-4">
              <summary className="cursor-pointer font-serif text-lg text-graphite">Scientific approach</summary>
              <p className="mt-2 body-copy">
                The platform studies pigmentation alongside inflammation, exposure, skin-barrier condition, and long-term
                management. Formal ingredient and claim information will follow validation.
              </p>
            </details>
            <details className="mt-4 border-t border-border-subtle pt-4">
              <summary className="cursor-pointer font-serif text-lg text-graphite">Availability and safety</summary>
              <p className="mt-2 body-copy">
                This presentation is institutional, not commercial. Availability, directions, ingredients, suitability,
                and claims remain subject to final regulatory and scientific approval.
              </p>
            </details>
          </div>
        </SplitSection>
      </Section>
    </>
  );
}
