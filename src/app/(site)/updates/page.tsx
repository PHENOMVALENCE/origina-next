import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";
import { listPublishedPublications, formatPublicationDate, formatPublicationType } from "@/lib/publications/admin";

export const metadata: Metadata = createPageMetadata({
  title: "Origina Updates",
  description: "News, research publications, and institutional updates from ORIGINA.",
  path: "/updates",
});

export const dynamic = "force-dynamic";

export default async function UpdatesPage() {
  let items: Awaited<ReturnType<typeof listPublishedPublications>> = [];

  if (process.env.DATABASE_URL) {
    try {
      items = await listPublishedPublications();
    } catch {
      items = [];
    }
  }

  return (
    <>
      <PageHero
        variant="light"
        crumb="Updates"
        kicker="Knowledge & progress"
        title={
          <>
            Origina
            <br />
            <span className="text-crimson">updates.</span>
          </>
        }
        intro="News, research records, and institutional field notes."
      />

      <Section tone="sunk" eyebrow="Archive" title="Publications">
        <div className="flex flex-col gap-8">
          {items.length === 0 ? (
            <p className="lead-serif text-2xl sm:text-3xl">The publication archive is being prepared.</p>
          ) : (
            items.map((item) => (
              <article key={item.id} className="publication-item">
                <span className="text-[0.75rem] uppercase tracking-[0.18em] text-crimson">
                  {formatPublicationType(item.type)}
                </span>
                <div>
                  <h2 className="font-serif text-3xl leading-tight text-noir">{item.title}</h2>
                  {item.excerpt ? <p className="mt-3 body-copy">{item.excerpt}</p> : null}
                  {item.body ? (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-[0.72rem] uppercase tracking-[0.14em] text-crimson">
                        Read publication
                      </summary>
                      <p className="mt-4 whitespace-pre-wrap body-copy">{item.body}</p>
                    </details>
                  ) : null}
                </div>
                {item.publishedAt ? (
                  <time
                    dateTime={item.publishedAt.toISOString()}
                    className="text-[0.72rem] uppercase tracking-[0.12em] text-stone"
                  >
                    {formatPublicationDate(item.publishedAt)}
                  </time>
                ) : null}
              </article>
            ))
          )}
        </div>
      </Section>
    </>
  );
}
