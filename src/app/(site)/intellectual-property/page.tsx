import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { createPageMetadata } from "@/lib/metadata";
import { platforms } from "@/lib/content/divisions";
import { ipTypes } from "@/lib/content/science";

export const metadata: Metadata = createPageMetadata({
  title: "Intellectual Property — ORIGINA™",
  description:
    "Ideas become institutional assets. ORIGINA's innovation architecture identifies and protects formulations, platforms, technologies, and research outputs.",
  path: "/intellectual-property",
});

export default function IntellectualPropertyPage() {
  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Intellectual Property"
        kicker="Innovation architecture"
        title={
          <>
            Ideas become
            <br />
            <span className="text-gold-light">institutional assets.</span>
          </>
        }
        intro="ORIGINA's innovation architecture can identify and protect formulations, compositions, delivery systems, technologies, manufacturing processes, analytical methods, scientific platforms, trademarks, designs, and research outputs."
      />

      <Section eyebrow="01 · IP types" title="What the institution protects.">
        <DetailList items={ipTypes} />
      </Section>

      <Section tone="cream" eyebrow="02 · Platforms" title="Platform IP">
        <div className="grid gap-4 sm:grid-cols-2">
          {platforms.map((platform) => (
            <article key={platform.name} className="institutional-card">
              <StatusBadge status={platform.status} />
              <strong className="mt-4 block font-serif text-2xl text-graphite">{platform.name}</strong>
              <small className="mt-2 block body-copy">{platform.subtitle}</small>
            </article>
          ))}
        </div>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Follow the platform work."
        links={[
          { href: "/divisions/b-melanox", label: "BMX-24™ platform" },
          { href: "/labs", label: "ORIGINA Labs™", variant: "secondary" },
        ]}
      />
    </>
  );
}
