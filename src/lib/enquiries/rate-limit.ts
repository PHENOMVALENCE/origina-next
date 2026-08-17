import { createHash } from "node:crypto";
import { and, count, eq, gte } from "drizzle-orm";
import { getDb } from "@/db";
import { enquiries } from "@/db/schema";

export function hashClientIp(ip: string): string {
  return createHash("sha256").update(`${ip}|origina-enquiry`).digest("hex");
}

export async function countRecentEnquiries(ipHash: string, windowMinutes = 10): Promise<number> {
  const db = getDb();
  const since = new Date(Date.now() - windowMinutes * 60 * 1000);

  const [result] = await db
    .select({ total: count() })
    .from(enquiries)
    .where(and(eq(enquiries.ipHash, ipHash), gte(enquiries.submittedAt, since)));

  return Number(result?.total ?? 0);
}
