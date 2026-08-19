import { createHash, randomBytes } from "node:crypto";
import { and, eq, gt, isNull } from "drizzle-orm";
import { getDb } from "@/db";
import { authTokens } from "@/db/schema";
import type { AuthTokenPurpose } from "@/db/schema";

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function issueAuthToken(userId: number, purpose: AuthTokenPurpose, minutes: number): Promise<string> {
  const token = randomBytes(24).toString("hex");
  const expiresAt = new Date(Date.now() + minutes * 60 * 1000);
  const db = getDb();

  await db.insert(authTokens).values({
    userId,
    tokenHash: hashToken(token),
    purpose,
    expiresAt,
  });

  return token;
}

export async function consumeAuthToken(token: string, purpose: AuthTokenPurpose): Promise<number | null> {
  const db = getDb();
  const now = new Date();
  const tokenHash = hashToken(token);

  const [record] = await db
    .select()
    .from(authTokens)
    .where(
      and(
        eq(authTokens.tokenHash, tokenHash),
        eq(authTokens.purpose, purpose),
        isNull(authTokens.usedAt),
        gt(authTokens.expiresAt, now),
      ),
    )
    .limit(1);

  if (!record) {
    return null;
  }

  await db.update(authTokens).set({ usedAt: now }).where(eq(authTokens.id, record.id));
  return record.userId;
}

export async function invalidateAuthTokens(userId: number, purpose: AuthTokenPurpose): Promise<void> {
  const db = getDb();
  const now = new Date();

  await db
    .update(authTokens)
    .set({ usedAt: now })
    .where(and(eq(authTokens.userId, userId), eq(authTokens.purpose, purpose), isNull(authTokens.usedAt)));
}

export function generateTwoFactorCode(): string {
  return String(Math.floor(100_000 + Math.random() * 900_000));
}
