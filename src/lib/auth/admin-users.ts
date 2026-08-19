import { desc, eq, asc } from "drizzle-orm";
import { getDb } from "@/db";
import { auditLog, users } from "@/db/schema";
import type { UserRole } from "@/db/schema";
import { hashPassword } from "@/lib/auth/password";

export async function listAuditEvents(limit = 200) {
  const db = getDb();
  return db
    .select({
      id: auditLog.id,
      event: auditLog.event,
      context: auditLog.context,
      createdAt: auditLog.createdAt,
      userName: users.name,
    })
    .from(auditLog)
    .leftJoin(users, eq(auditLog.userId, users.id))
    .orderBy(desc(auditLog.createdAt))
    .limit(limit);
}

export function formatAuditContext(context: string): string {
  if (!context) return "—";
  try {
    const parsed = JSON.parse(context) as Record<string, unknown>;
    const entries = Object.entries(parsed);
    if (entries.length === 0) return "—";
    return entries.map(([key, value]) => `${key}: ${String(value)}`).join(" · ");
  } catch {
    return context;
  }
}

export async function listAllUsers() {
  const db = getDb();
  return db.select().from(users).orderBy(desc(users.active), asc(users.createdAt));
}

export async function getUserById(id: number) {
  const db = getDb();
  const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return user ?? null;
}

export async function toggleUserActive(userId: number): Promise<boolean | null> {
  const user = await getUserById(userId);
  if (!user) {
    return null;
  }

  const db = getDb();
  await db
    .update(users)
    .set({ active: !user.active, updatedAt: new Date() })
    .where(eq(users.id, userId));

  return !user.active;
}

export function validateUserInput(input: {
  name: string;
  email: string;
  role: string;
  password: string;
  isNew: boolean;
}): string | null {
  if (!input.name.trim()) {
    return "Enter a full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    return "Enter a valid email address.";
  }

  if (!["owner", "admin", "editor"].includes(input.role)) {
    return "Invalid role.";
  }

  if (input.isNew && input.password.length < 10) {
    return "Provide a password of at least 10 characters for new users.";
  }

  if (!input.isNew && input.password.length > 0 && input.password.length < 10) {
    return "New passwords must be at least 10 characters.";
  }

  return null;
}

export async function saveAdminUser({
  id,
  name,
  email,
  role,
  password,
}: {
  id?: number;
  name: string;
  email: string;
  role: UserRole;
  password: string;
}): Promise<number> {
  const db = getDb();
  const now = new Date();
  const normalizedEmail = email.toLowerCase();

  if (id) {
    const updates: {
      name: string;
      email: string;
      role: UserRole;
      updatedAt: Date;
      passwordHash?: string;
    } = {
      name,
      email: normalizedEmail,
      role,
      updatedAt: now,
    };

    if (password) {
      updates.passwordHash = await hashPassword(password);
    }

    await db.update(users).set(updates).where(eq(users.id, id));
    return id;
  }

  const [created] = await db
    .insert(users)
    .values({
      name,
      email: normalizedEmail,
      role,
      passwordHash: await hashPassword(password),
    })
    .returning({ id: users.id });

  return created.id;
}

export function formatUserDate(value: Date): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(value);
}

export function formatAuditDate(value: Date): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}
