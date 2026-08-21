import type { Metadata } from "next";
import { ContentStatus } from "@/components/ContentStatus";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { createPageMetadata } from "@/lib/metadata";
import { skinSafariAreas } from "@/lib/content/divisions";

export const metadata: Metadata = createPageMetadata({
  title: "Skin Safari™ — Education & Scientific Communication",
  description:
    "Skin Safari is ORIGINA's education, media, and scientific communication platform. Science should travel.",
  path: "/divisions/skin-safari",
});

const futureCapabilities = [
  { title: "Documentaries", text: "Long-form scientific storytelling." },
  { title: "Courses", text: "Structured education for professionals and informed audiences." },
  { title: "Publications", text: "Research translation and institutional writing." },
  { title: "Interviews", text: "Conversations with scientists, clinicians, and innovators." },
  { title: "Scientific media", text: "Institutional communication without diluting rigor." },
  { title: "Professional education", text: "Training pathways for qualified audiences." },
] as const;

export default function SkinSafariPage() {
  return (
    <>
      <PageHero
        variant="dark"
        crumb="Skin Safari™"
        kicker="Division / Scientific communication"
        title={
          <>
            Science should
            <br />
            <span className="text-gold-light">travel.</span>
          </>
        }
        intro="Education, media, and scientific communication — designed more like a scientific publication platform than a product brand."
      />

      <Section eyebrow="01 · Focus areas" title="Where knowledge goes public.">
        <ScientificLabel className="mb-6 block">Skin Safari / Topics</ScientificLabel>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skinSafariAreas.map((area, index) => (
            <li key={area} className="institutional-panel">
              <span className="scientific-label">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-serif text-lg text-ink">{area}</p>
            </li>
          ))}
        </ul>
        <ContentStatus status="research" />
      </Section>

      <Section tone="cream" eyebrow="02 · Future platform" title="Future capabilities.">
        <p className="mb-8 max-w-2xl body-copy">
          Skin Safari is in development as ORIGINA&apos;s education and scientific communication platform — distinct from
          product marketing and division commerce.
        </p>
        <DetailList items={futureCapabilities.map(({ title, text }) => ({ title, text }))} />
      </Section>

      <PageCta
        tone="noir"
        eyebrow="Media"
        title="Bring a communication opportunity."
        links={[{ href: "/contact?subject=media#enquiry-form", label: "Media enquiries" }]}
      />
    </>
  );
}
