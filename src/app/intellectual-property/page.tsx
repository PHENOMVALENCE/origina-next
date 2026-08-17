import type { Metadata } from "next";
import { DetailList } from "@/components/DetailList";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StatusBadge } from "@/components/StatusBadge";
import { platforms } from "@/lib/content/divisions";
import { ipTypes } from "@/lib/content/science";

export const metadata: Metadata = {
  title: "Intellectual Property — ORIGINA™",
  description:
    "Ideas become institutional assets. ORIGINA's innovation architecture identifies and protects formulations, platforms, technologies, and research outputs.",
};

export default function IntellectualPropertyPage() {
  return (
    <>
      <PageHero
        crumb="Intellectual Property"
        kicker="Innovation architecture"
        title={
          <>
            Ideas become
            <br />
            <em className="not-italic text-gold-light">institutional assets.</em>
          </>
        }
        intro="ORIGINA's innovation architecture can identify and protect formulations, compositions, delivery systems, technologies, manufacturing processes, analytical methods, scientific platforms, trademarks, designs, and research outputs."
      />

      <Section>
        <DetailList items={ipTypes} />
      </Section>

      <Section tone="cream" title="Platform IP">
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {platforms.map((platform) => (
            <div key={platform.name} className="border border-border-subtle p-8">
              <StatusBadge status={platform.status} />
              <strong className="mt-4 block font-serif text-2xl">{platform.name}</strong>
              <small className="mt-2 block text-sm text-stone">{platform.subtitle}</small>
            </div>
          ))}
        </div>
      </Section>

      <PageCta
        links={[
          { href: "/divisions/b-melanox", label: "BMX-24™ platform" },
          { href: "/labs", label: "ORIGINA Labs™", variant: "secondary" },
        ]}
      />
    </>
  );
}
