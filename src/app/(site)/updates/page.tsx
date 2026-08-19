import type { Metadata } from "next";
import { listPublishedPublications, formatPublicationDate, formatPublicationType } from "@/lib/publications/admin";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";

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
        crumb="Updates"
        kicker="Knowledge & progress"
        title={
          <>
            Origina
            <br />
            <em className="not-italic text-gold-light">updates.</em>
          </>
        }
        intro="News, research records, and institutional field notes."
      />

      <Section tone="cream">
        <div className="flex flex-col gap-8">
          {items.length === 0 ? (
            <p className="text-lg text-graphite/85">The publication archive is being prepared.</p>
          ) : (
            items.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 border-b border-border-subtle pb-8 last:border-b-0 lg:grid-cols-[8rem_1fr_6rem]"
              >
                <span className="text-[0.66rem] uppercase tracking-[0.18em] text-gold">
                  {formatPublicationType(item.type)}
                </span>
                <div>
                  <h2 className="font-serif text-3xl leading-tight text-noir">{item.title}</h2>
                  {item.excerpt ? <p className="mt-3 text-graphite/85">{item.excerpt}</p> : null}
                  {item.body ? (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-[0.72rem] uppercase tracking-[0.14em] text-gold">
                        Read publication
                      </summary>
                      <p className="mt-4 whitespace-pre-wrap text-graphite/85">{item.body}</p>
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
