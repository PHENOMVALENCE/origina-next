import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentStatus } from "@/components/ContentStatus";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { TextLink } from "@/components/ui/TextLink";
import { createPageMetadata } from "@/lib/metadata";
import { roadmapItems } from "@/lib/content/future";

type FutureDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return roadmapItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: FutureDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = roadmapItems.find((entry) => entry.id === id);
  if (!item) return {};

  return createPageMetadata({
    title: `${item.title} — Future ORIGINA`,
    description: item.description,
    path: `/future/${item.id}`,
  });
}

export default async function FutureDetailPage({ params }: FutureDetailPageProps) {
  const { id } = await params;
  const item = roadmapItems.find((entry) => entry.id === id);
  if (!item) notFound();

  return (
    <>
      <PageHero
        variant="light"
        crumb={item.title}
        parent={{ label: "Future", href: "/future" }}
        kicker="ORIGINA / Future"
        title={item.unnamed ? <>What has not yet been named.</> : item.title}
        intro={item.description}
      />

      <Section eyebrow={item.label} title={item.unnamed ? "Open possibility" : "Institutional horizon"}>
        <ContentStatus status="future" />
        <p className="mt-6 max-w-3xl body-copy">{item.description}</p>
        <p className="mt-4 scientific-metadata">{item.footnote}</p>

        {item.focusAreas?.length ? (
          <div className="mt-10">
            <ScientificLabel className="mb-4 block">Focus areas · Framework intentions</ScientificLabel>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {item.focusAreas.map((area) => (
                <li key={area} className="institutional-panel text-sm text-ink">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {item.unnamed ? (
          <p className="mt-10 max-w-2xl font-serif text-2xl text-ink">
            The most important division of ORIGINA may not exist today.
          </p>
        ) : null}
      </Section>

      <PageCta
        eyebrow="Institutional horizon"
        title="Return to the full roadmap."
        links={[
          { href: "/future", label: "Future ORIGINA" },
          { href: "/contact", label: "Enquire with ORIGINA", variant: "secondary" },
        ]}
      />

      <div className="site-container pb-8">
        <TextLink href="/future">← Back to institutional horizon</TextLink>
      </div>
    </>
  );
}
