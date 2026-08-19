import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { siteMetricNames } from "@/db/schema";
import { recordSiteMetric } from "@/lib/metrics/admin";
import { hashVisitor } from "@/lib/metrics/visitor";

type MetricPayload = {
  path?: string;
  metric?: string;
  value?: number;
};

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return new NextResponse(null, { status: 204 });
  }

  let payload: MetricPayload;
  try {
    payload = (await request.json()) as MetricPayload;
  } catch {
    return new NextResponse(null, { status: 422 });
  }

  const path = String(payload.path ?? "").slice(0, 160);
  const metric = String(payload.metric ?? "");
  const value = Number(payload.value ?? 1);

  if (
    !path.startsWith("/") ||
    !siteMetricNames.includes(metric as (typeof siteMetricNames)[number]) ||
    value < 0 ||
    value > 120_000
  ) {
    return new NextResponse(null, { status: 422 });
  }

  try {
    getDb();
    await recordSiteMetric({
      path,
      metric,
      value,
      visitorHash: hashVisitor(getClientIp(request)),
    });
  } catch {
    return new NextResponse(null, { status: 503 });
  }

  return new NextResponse(null, { status: 204 });
}
