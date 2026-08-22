import type { Metadata } from "next";
import { ContentStatus } from "@/components/ContentStatus";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { TextLink } from "@/components/ui/TextLink";
import { createPageMetadata } from "@/lib/metadata";
import { platforms } from "@/lib/content/platforms";

export const metadata: Metadata = createPageMetadata({
  title: "Scientific Platforms — ORIGINA",
  description:
    "Proprietary scientific platforms developed within ORIGINA Labs, including BMX-24™ and BRP-1™.",
  path: "/platforms",
});

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        variant="light"
        crumb="Platforms"
        kicker="ORIGINA / Platforms"
        title={
          <>
            Proprietary science
            <br />
            <span className="text-crimson">platforms.</span>
          </>
        }
        intro="Scientific platforms support multiple products, protocols, and future applications. ™ indicates trademark status — not patent status unless explicitly documented."
      />

      <Section eyebrow="Platform architecture" title="Platforms emerge from ORIGINA Labs.">
        <div className="space-y-4">
          {platforms.map((platform, index) => (
            <article key={platform.id} className="institutional-panel">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <ScientificLabel>
                  Platform {String(index + 1).padStart(2, "0")} / {platform.name}
                </ScientificLabel>
                <ContentStatus status={platform.status} />
              </div>
              <h2 className="mt-4 font-serif text-3xl text-ink">{platform.name}</h2>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-stone">{platform.subtitle}</p>
              <p className="mt-4 max-w-3xl body-copy">{platform.summary}</p>
              <p className="mt-2 scientific-metadata">Division: {platform.division}</p>
              <TextLink href={platform.href} className="mt-6">
                View platform context
              </TextLink>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sunk" eyebrow="IP distinction" title="Proprietary is not patented.">
        <p className="max-w-3xl body-copy">
          ORIGINA distinguishes proprietary platforms, trademarked names, patent applications, and granted patents.
          Platform descriptions use conservative language unless documentation supports a stronger status.
        </p>
        <TextLink href="/intellectual-property" className="mt-6">
          Read intellectual property architecture
        </TextLink>
      </Section>
    </>
  );
}
