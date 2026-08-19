import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { TagList } from "@/components/TagList";
import { createPageMetadata } from "@/lib/metadata";
import { skinSafariAreas } from "@/lib/content/divisions";

export const metadata: Metadata = createPageMetadata({
  title: "Skin Safari™ — Education & Scientific Communication",
  description:
    "Skin Safari is ORIGINA's education, media, and scientific communication division. Science should travel.",
  path: "/divisions/skin-safari",
});

export default function SkinSafariPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Skin Safari™"
        kicker="Education · Media · Scientific communication"
        title={
          <>
            Science should
            <br />
            <span className="text-gold-light">travel.</span>
          </>
        }
        intro="Education, media, and scientific communication—making institutional knowledge accessible without diluting its rigor."
      />

      <Section eyebrow="01 · Focus areas" title="Where knowledge goes public.">
        <TagList items={skinSafariAreas} />
        <p className="mt-6 max-w-2xl body-copy">
          Future ecosystem: documentaries, courses, publications, interviews, scientific media, and professional
          education.
        </p>
        <div className="mt-6">
          <StatusBadge status="emerging" />
        </div>
      </Section>

      <PageCta
        eyebrow="Media"
        title="Bring a communication opportunity."
        links={[{ href: "/contact?subject=media#enquiry-form", label: "Media enquiries" }]}
      />
    </>
  );
}
