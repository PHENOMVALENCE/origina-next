import { createHash } from "node:crypto";
import { count, eq, asc } from "drizzle-orm";
import { headers } from "next/headers";
import { getDb } from "@/db";
import { auditLog, users } from "@/db/schema";

export function hashAuditIp(ip: string): string {
  return createHash("sha256").update(`${ip}|origina-audit`).digest("hex");
}

export async function getRequestIp(): Promise<string> {
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || headerStore.get("x-real-ip") || "unknown";
}

export async function auditEvent(
  event: string,
  context: Record<string, unknown> = {},
  userId?: number | null,
): Promise<void> {
  if (!process.env.DATABASE_URL) {
    return;
  }

  const db = getDb();
  const ip = await getRequestIp();

  await db.insert(auditLog).values({
    userId: userId ?? null,
    event,
    context: JSON.stringify(context),
    ipHash: hashAuditIp(ip),
  });
}

export async function userCount(): Promise<number> {
  const db = getDb();
  const [result] = await db.select({ total: count() }).from(users);
  return Number(result?.total ?? 0);
}

export async function getActiveUsers() {
  const db = getDb();
  return db
    .select({ id: users.id, name: users.name, role: users.role })
    .from(users)
    .where(eq(users.active, true))
    .orderBy(asc(users.name));
}

export async function findUserByEmail(email: string) {
  const db = getDb();
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email.toLowerCase()))
    .limit(1);
  return user ?? null;
}

export async function updateUserPasswordHash(userId: number, passwordHash: string) {
  const db = getDb();
  await db.update(users).set({ passwordHash, updatedAt: new Date() }).where(eq(users.id, userId));
}
