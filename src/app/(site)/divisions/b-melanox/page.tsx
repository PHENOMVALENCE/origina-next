import type { Metadata } from "next";
import Image from "next/image";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { ProductGallery } from "@/components/ProductGallery";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import {
  bMelanoxFocusAreas,
  bMelanoxFutureExpansion,
  bMelanoxGalleryViews,
  bMelanoxProducts,
} from "@/lib/content/divisions";

export const metadata: Metadata = {
  title: "B-Melanox™ — Pigmentation Science",
  description:
    "B-Melanox is ORIGINA's scientific pigmentation division and BMX-24™ pigment regulation platform for skin of colour.",
};

export default function BMelanoxPage() {
  return (
    <>
      <PageHero
        crumb="B-Melanox™"
        kicker="Scientific pigmentation division"
        title={
          <>
            Pigmentation is
            <br />
            <em className="not-italic text-gold-light">biology.</em>
          </>
        }
        intro="B-Melanox is ORIGINA's pigmentation-science platform with specific emphasis on skin of colour."
      />

      <Section eyebrow="01" title="The research question.">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Quote>
            How can excessive or dysregulated pigmentation be addressed without relying on conventional
            hydroquinone-based approaches, while developing a system appropriate for melanin-rich skin?
          </Quote>
          <div
            className="mx-auto grid h-48 w-48 place-content-center rounded-full border border-gold/30 bg-cream font-serif text-6xl text-oxblood"
            aria-hidden="true"
          >
            B
          </div>
        </div>
      </Section>

      <Section tone="cream" eyebrow="Platform" title="BMX-24™">
        <p className="font-serif text-xl text-graphite">Proprietary Pigment Regulation Platform</p>
        <p className="mt-4 max-w-2xl text-sm text-graphite/85">
          Developed as a proprietary pigment-regulation platform originating from research into
          non-hydroquinone approaches to hyperpigmentation in skin of colour. Clinical studies are
          not currently complete—wording remains appropriately conservative.
        </p>
      </Section>

      <Section tone="noir" eyebrow="Focus areas" title="Understand the whole pathway.">
        <p className="mb-8 max-w-xl text-sm text-stone">
          Pigmentation cannot be approached in isolation from inflammation, barrier integrity, exposure,
          and long-term management.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bMelanoxFocusAreas.map((area, index) => (
            <div key={area} className="flex gap-3 border border-gold/15 p-4 text-sm text-ivory/90">
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              {area}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="02" title="The current expression.">
        <p className="mb-8 max-w-2xl text-sm text-graphite/85">
          A first look at the B-Melanox Night Intensive Pigment Corrector. Product claims,
          availability, protocols, and commercial details remain subject to formal approval before
          publication.
        </p>
        <div className="grid gap-8 lg:grid-cols-3">
          {bMelanoxProducts.map((product) => (
            <article key={product.title}>
              <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-sm">
                <Image src={product.image} alt={product.alt} fill className="object-cover" />
              </div>
              <span className="text-[0.62rem] uppercase tracking-[0.14em] text-stone">{product.label}</span>
              <h3 className="mt-2 font-serif text-2xl">{product.title}</h3>
              <p className="mt-2 text-sm text-graphite/85">{product.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cream" eyebrow="Future expansion" title="Beyond the product shelf.">
        <div className="border-t border-border-subtle">
          {bMelanoxFutureExpansion.map((item) => (
            <div key={item.title} className="flex gap-6 border-b border-border-subtle py-4">
              <span className="font-serif text-oxblood">{item.num}</span>
              <div>
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-graphite/85">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-border-subtle bg-cream py-8">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <p className="text-sm text-graphite/85">
            BMelanox website content is institutional information and does not replace individual
            medical advice. Product claims and availability remain subject to formal validation and
            approval.
          </p>
        </div>
      </section>

      <PageCta
        eyebrow="Scientific enquiries"
        title="Advance the conversation."
        links={[
          { href: "/contact", label: "Contact B-Melanox" },
          { href: "/labs", label: "Explore the Labs", variant: "secondary" },
        ]}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-(--content-max) gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <ProductGallery views={bMelanoxGalleryViews} />
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-oxblood">
              Product dossier · 01
            </p>
            <h2 className="mb-4 font-serif text-4xl leading-tight">
              Night Intensive
              <br />
              <em className="not-italic text-gold">Pigment Corrector.</em>
            </h2>
            <p className="mb-6 font-serif text-xl text-graphite">
              The first visible product expression of the BMelanox pigmentation-science platform.
            </p>
            <dl className="grid gap-4 border-t border-border-subtle pt-4 text-sm">
              <div><dt className="text-stone">Format</dt><dd className="font-medium">Targeted night serum</dd></div>
              <div><dt className="text-stone">Platform</dt><dd className="font-medium">BMelanox · Origina Labs</dd></div>
              <div><dt className="text-stone">Focus</dt><dd className="font-medium">Uneven tone and visible pigmentation</dd></div>
              <div><dt className="text-stone">Status</dt><dd className="font-medium">Institutional preview</dd></div>
            </dl>
            <details className="mt-6 border-t border-border-subtle pt-4" open>
              <summary className="cursor-pointer font-serif text-lg">How it fits the ritual</summary>
              <p className="mt-2 text-sm text-graphite/85">
                Designed as a considered evening step within a broader routine that respects barrier
                integrity, consistency, and professional guidance where appropriate.
              </p>
            </details>
            <details className="mt-4 border-t border-border-subtle pt-4">
              <summary className="cursor-pointer font-serif text-lg">Scientific approach</summary>
              <p className="mt-2 text-sm text-graphite/85">
                The platform studies pigmentation alongside inflammation, exposure, skin-barrier
                condition, and long-term management. Formal ingredient and claim information will follow
                validation.
              </p>
            </details>
            <details className="mt-4 border-t border-border-subtle pt-4">
              <summary className="cursor-pointer font-serif text-lg">Availability and safety</summary>
              <p className="mt-2 text-sm text-graphite/85">
                This presentation is institutional, not commercial. Availability, directions,
                ingredients, suitability, and claims remain subject to final regulatory and scientific
                approval.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
