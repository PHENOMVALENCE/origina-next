import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { skinSafariAreas } from "@/lib/content/divisions";

export const metadata: Metadata = {
  title: "Skin Safari™ — Education & Scientific Communication",
  description:
    "Skin Safari is ORIGINA's education, media, and scientific communication division. Science should travel.",
};

export default function SkinSafariPage() {
  return (
    <>
      <PageHero
        crumb="Skin Safari™"
        kicker="Education · Media · Scientific communication"
        title={
          <>
            Science should
            <br />
            <em className="not-italic text-gold-light">travel.</em>
          </>
        }
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {skinSafariAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-border-subtle px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.12em] text-graphite/85"
            >
              {area}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-graphite/85">
          Future ecosystem: documentaries, courses, publications, interviews, scientific media, and
          professional education.
        </p>
        <div className="mt-4">
          <StatusBadge status="emerging" />
        </div>
      </Section>

      <PageCta links={[{ href: "/contact?subject=media#enquiry-form", label: "Media enquiries" }]} />
    </>
  );
}
