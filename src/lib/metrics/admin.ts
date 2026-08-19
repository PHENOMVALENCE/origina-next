import { and, count, desc, eq, gte, sql } from "drizzle-orm";
import { getDb } from "@/db";
import { siteMetrics } from "@/db/schema";

export async function recordSiteMetric({
  path,
  metric,
  value,
  visitorHash,
}: {
  path: string;
  metric: string;
  value: number;
  visitorHash: string;
}) {
  const db = getDb();
  await db.insert(siteMetrics).values({
    path,
    metric,
    value,
    visitorHash,
  });
}

export async function getTopPages(days = 30, limit = 10) {
  const db = getDb();
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  return db
    .select({
      path: siteMetrics.path,
      total: count(),
    })
    .from(siteMetrics)
    .where(and(eq(siteMetrics.metric, "page_view"), gte(siteMetrics.createdAt, since)))
    .groupBy(siteMetrics.path)
    .orderBy(desc(count()))
    .limit(limit);
}

export async function getAverageMetric(metric: "load_ms" | "lcp_ms", days = 7) {
  const db = getDb();
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const [row] = await db
    .select({
      average: sql<number>`coalesce(avg(${siteMetrics.value}), 0)`,
      samples: count(),
    })
    .from(siteMetrics)
    .where(and(eq(siteMetrics.metric, metric), gte(siteMetrics.createdAt, since)));

  return {
    average: Math.round(Number(row?.average ?? 0)),
    samples: Number(row?.samples ?? 0),
  };
}

export async function getPageViewCount(days = 30) {
  const db = getDb();
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const [row] = await db
    .select({ total: count() })
    .from(siteMetrics)
    .where(and(eq(siteMetrics.metric, "page_view"), gte(siteMetrics.createdAt, since)));

  return Number(row?.total ?? 0);
}
