"use server";

import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getDb } from "@/db";
import { enquiries, users } from "@/db/schema";
import { passwordNeedsRehash, hashPassword, verifyPassword } from "@/lib/auth/password";
import { getSession, type SessionUser } from "@/lib/auth/session";
import { auditEvent, findUserByEmail, updateUserPasswordHash, userCount } from "@/lib/auth/users";

export type AuthActionState = {
  error?: string;
  success?: string;
};

export async function setupOwnerAccount(_prev: AuthActionState, formData: FormData): Promise<AuthActionState> {
  if (!process.env.DATABASE_URL) {
    return { error: "Database is not configured." };
  }

  if ((await userCount()) > 0) {
    redirect("/admin/login");
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 10) {
    return { error: "Enter a name, valid email, and password of at least 10 characters." };
  }

  const db = getDb();
  await db.insert(users).values({
    name,
    email,
    passwordHash: await hashPassword(password),
    role: "owner",
  });

  redirect("/admin/login?setup=1");
}

export async function login(_prev: AuthActionState, formData: FormData): Promise<AuthActionState> {
  if (!process.env.DATABASE_URL || !process.env.SESSION_SECRET) {
    return { error: "Admin sign-in is not configured yet." };
  }

  if ((await userCount()) === 0) {
    redirect("/admin/setup");
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");
  const user = await findUserByEmail(email);

  if (!user || !user.active || !(await verifyPassword(password, user.passwordHash))) {
    await auditEvent("auth.login_failed", { email });
    return { error: "The email or password is incorrect." };
  }

  if (await passwordNeedsRehash(user.passwordHash)) {
    await updateUserPasswordHash(user.id, await hashPassword(password));
  }

  const sessionUser: SessionUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role as SessionUser["role"],
  };

  const session = await getSession();
  session.user = sessionUser;
  await session.save();

  await auditEvent("auth.login", {}, user.id);
  redirect("/admin");
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect("/admin/login");
}

export type EnquiryWorkflowState = {
  error?: string;
  success?: string;
};

const allowedStatuses = ["new", "in_progress", "replied", "archived"] as const;
const allowedPriorities = ["low", "normal", "high"] as const;

export async function updateEnquiryWorkflow(
  enquiryId: number,
  _prev: EnquiryWorkflowState,
  formData: FormData,
): Promise<EnquiryWorkflowState> {
  const session = await getSession();
  if (!session.user) {
    redirect("/admin/login");
  }

  const status = String(formData.get("status") ?? "new");
  const priority = String(formData.get("priority") ?? "normal");
  const adminNotes = String(formData.get("admin_notes") ?? "").trim();
  const assignedRaw = Number(formData.get("assigned_to") ?? 0);

  if (!allowedStatuses.includes(status as (typeof allowedStatuses)[number])) {
    return { error: "Invalid status." };
  }

  if (!allowedPriorities.includes(priority as (typeof allowedPriorities)[number])) {
    return { error: "Invalid priority." };
  }

  let assignedTo: number | null = assignedRaw > 0 ? assignedRaw : null;
  if (assignedTo) {
    const db = getDb();
    const [assignee] = await db
      .select({ id: users.id })
      .from(users)
      .where(and(eq(users.id, assignedTo), eq(users.active, true)))
      .limit(1);
    if (!assignee) {
      assignedTo = null;
    }
  }

  const db = getDb();
  await db
    .update(enquiries)
    .set({
      status,
      priority,
      adminNotes,
      assignedTo,
      updatedAt: new Date(),
    })
    .where(eq(enquiries.id, enquiryId));

  return { success: "Enquiry updated." };
}
