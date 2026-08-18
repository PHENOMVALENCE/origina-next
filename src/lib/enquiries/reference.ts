import { randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { enquiries } from "@/db/schema";

export async function createEnquiryReference(): Promise<string> {
  const db = getDb();
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");

  for (let attempt = 0; attempt < 8; attempt += 1) {
    const suffix = randomBytes(2).toString("hex").toUpperCase();
    const reference = `ORI-${datePart}-${suffix}`;

    const existing = await db
      .select({ reference: enquiries.reference })
      .from(enquiries)
      .where(eq(enquiries.reference, reference))
      .limit(1);

    if (existing.length === 0) {
      return reference;
    }
  }

  throw new Error("Unable to generate a unique enquiry reference");
}
