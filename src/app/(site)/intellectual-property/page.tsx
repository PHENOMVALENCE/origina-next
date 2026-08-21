import type { Metadata } from "next";
import { ContentStatus } from "@/components/ContentStatus";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { TextLink } from "@/components/ui/TextLink";
import { createPageMetadata } from "@/lib/metadata";
import { platforms } from "@/lib/content/platforms";
import { ipTypes } from "@/lib/content/science";

export const metadata: Metadata = createPageMetadata({
  title: "Intellectual Property — ORIGINA™",
  description:
    "Ideas become institutional assets. ORIGINA identifies and protects formulations, platforms, technologies, and research outputs.",
  path: "/intellectual-property",
});

export default function IntellectualPropertyPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Intellectual Property"
        kicker="ORIGINA / Institution"
        title={
          <>
            Ideas become
            <br />
            <span className="text-crimson">institutional assets.</span>
          </>
        }
        intro="ORIGINA's innovation architecture may identify and protect formulations, compositions, delivery systems, technologies, manufacturing processes, analytical methods, scientific platforms, trademarks, designs, and research outputs."
      />

      <Section eyebrow="01 · IP types" title="What the institution protects.">
        <DetailList items={ipTypes} />
      </Section>

      <Section tone="cream" eyebrow="02 · Platform IP" title="Proprietary is not patented.">
        <p className="mb-8 max-w-3xl body-copy">
          ™ indicates trademark status. Proprietary describes institutional ownership of know-how or platforms. Patent
          status is described only where explicit documentation supports it.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {platforms.map((platform) => (
            <article key={platform.id} className="institutional-panel">
              <ContentStatus status={platform.status} />
              <strong className="mt-4 block font-serif text-2xl text-ink">{platform.name}</strong>
              <small className="mt-2 block body-copy">{platform.subtitle}</small>
              <p className="mt-3 body-copy">{platform.summary}</p>
              <TextLink href={platform.href} className="mt-4">
                View platform
              </TextLink>
            </article>
          ))}
        </div>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Follow the platform work."
        links={[
          { href: "/platforms", label: "Scientific platforms" },
          { href: "/labs", label: "ORIGINA Labs™", variant: "secondary" },
        ]}
      />
    </>
  );
}
