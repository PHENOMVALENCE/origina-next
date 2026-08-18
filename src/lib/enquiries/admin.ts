import { and, count, desc, eq, ilike, or, sql } from "drizzle-orm";
import { getDb } from "@/db";
import { enquiries, users } from "@/db/schema";

export const enquiryStatusLabels = {
  new: "New",
  in_progress: "In progress",
  replied: "Replied",
  archived: "Archived",
} as const;

export type EnquiryStatus = keyof typeof enquiryStatusLabels;

export async function getEnquiryStatusCounts(): Promise<Record<EnquiryStatus, number>> {
  const db = getDb();
  const statuses = Object.keys(enquiryStatusLabels) as EnquiryStatus[];
  const counts = Object.fromEntries(statuses.map((status) => [status, 0])) as Record<EnquiryStatus, number>;

  const rows = await db
    .select({ status: enquiries.status, total: count() })
    .from(enquiries)
    .groupBy(enquiries.status);

  for (const row of rows) {
    if (row.status in counts) {
      counts[row.status as EnquiryStatus] = Number(row.total);
    }
  }

  return counts;
}

export async function listEnquiries({
  status = "",
  query = "",
  page = 1,
  perPage = 20,
}: {
  status?: string;
  query?: string;
  page?: number;
  perPage?: number;
}) {
  const db = getDb();
  const filters = [];

  if (status) {
    filters.push(eq(enquiries.status, status));
  }

  if (query) {
    const term = `%${query}%`;
    filters.push(
      or(
        ilike(enquiries.reference, term),
        ilike(enquiries.name, term),
        ilike(enquiries.email, term),
        ilike(enquiries.organization, term),
        ilike(enquiries.message, term),
      ),
    );
  }

  const whereClause = filters.length > 0 ? and(...filters) : undefined;

  const [totalRow] = await db.select({ total: count() }).from(enquiries).where(whereClause);
  const total = Number(totalRow?.total ?? 0);
  const pages = Math.max(1, Math.ceil(total / perPage));
  const currentPage = Math.min(Math.max(page, 1), pages);
  const offset = (currentPage - 1) * perPage;

  const rows = await db
    .select({
      id: enquiries.id,
      reference: enquiries.reference,
      name: enquiries.name,
      email: enquiries.email,
      subject: enquiries.subject,
      message: enquiries.message,
      status: enquiries.status,
      priority: enquiries.priority,
      submittedAt: enquiries.submittedAt,
      assignedName: users.name,
    })
    .from(enquiries)
    .leftJoin(users, eq(enquiries.assignedTo, users.id))
    .where(whereClause)
    .orderBy(
      sql`CASE ${enquiries.status} WHEN 'new' THEN 0 WHEN 'in_progress' THEN 1 WHEN 'replied' THEN 2 ELSE 3 END`,
      desc(enquiries.submittedAt),
    )
    .limit(perPage)
    .offset(offset);

  return { rows, total, pages, currentPage };
}

export async function getEnquiryById(id: number) {
  const db = getDb();
  const [row] = await db
    .select({
      enquiry: enquiries,
      assignedName: users.name,
    })
    .from(enquiries)
    .leftJoin(users, eq(enquiries.assignedTo, users.id))
    .where(eq(enquiries.id, id))
    .limit(1);

  return row ?? null;
}

export async function getRecentEnquiries(limit = 5) {
  const db = getDb();
  return db.select().from(enquiries).orderBy(desc(enquiries.submittedAt)).limit(limit);
}

export function formatEnquiryStatus(status: string): string {
  return status.replaceAll("_", " ");
}
