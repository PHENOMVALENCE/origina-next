import { desc, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { publications, users } from "@/db/schema";
import type { PublicationStatus, PublicationType } from "@/db/schema";

export const publicationTypeLabels: Record<PublicationType, string> = {
  news: "News",
  research: "Research",
  institutional: "Institutional",
};

export async function listPublishedPublications() {
  const db = getDb();
  return db
    .select()
    .from(publications)
    .where(eq(publications.status, "published"))
    .orderBy(desc(publications.publishedAt), desc(publications.id));
}

export async function listAllPublications() {
  const db = getDb();
  return db
    .select({
      publication: publications,
      editorName: users.name,
    })
    .from(publications)
    .leftJoin(users, eq(publications.updatedBy, users.id))
    .orderBy(desc(publications.createdAt));
}

export async function getPublicationById(id: number) {
  const db = getDb();
  const [row] = await db.select().from(publications).where(eq(publications.id, id)).limit(1);
  return row ?? null;
}

export function formatPublicationType(type: string): string {
  return publicationTypeLabels[type as PublicationType] ?? type;
}

export function formatPublicationDate(value: Date | null): string {
  if (!value) return "";
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(value);
}

export function slugifyPublicationTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function validatePublicationInput(input: {
  type: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  status: string;
}): string | null {
  if (!input.title.trim()) {
    return "Provide a title.";
  }

  if (!/^[a-z0-9-]+$/.test(input.slug)) {
    return "Provide a valid slug using lowercase letters, numbers, and hyphens.";
  }

  if (!["news", "research", "institutional"].includes(input.type)) {
    return "Invalid publication type.";
  }

  if (!["draft", "published"].includes(input.status)) {
    return "Invalid publication status.";
  }

  return null;
}

export async function savePublication({
  id,
  type,
  slug,
  title,
  excerpt,
  body,
  status,
  updatedBy,
}: {
  id?: number;
  type: PublicationType;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  status: PublicationStatus;
  updatedBy: number;
}) {
  const db = getDb();
  const now = new Date();

  if (id) {
    const existing = await getPublicationById(id);
    if (!existing) {
      throw new Error("Publication not found.");
    }

    await db
      .update(publications)
      .set({
        type,
        slug,
        title,
        excerpt,
        body,
        status,
        publishedAt: status === "published" ? (existing.publishedAt ?? now) : null,
        updatedBy,
        updatedAt: now,
      })
      .where(eq(publications.id, id));

    return id;
  }

  const [created] = await db
    .insert(publications)
    .values({
      type,
      slug,
      title,
      excerpt,
      body,
      status,
      publishedAt: status === "published" ? now : null,
      updatedBy,
    })
    .returning({ id: publications.id });

  return created.id;
}
