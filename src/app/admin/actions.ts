"use server";

import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getDb } from "@/db";
import { enquiries, users } from "@/db/schema";
import type { PublicationStatus, PublicationType } from "@/db/schema";
import { passwordNeedsRehash, hashPassword, verifyPassword } from "@/lib/auth/password";
import { getSession, type SessionUser } from "@/lib/auth/session";
import { auditEvent, findUserByEmail, updateUserPasswordHash, userCount } from "@/lib/auth/users";
import {
  beginTwoFactorLogin,
} from "@/app/admin/user-actions";
import { isTwoFactorRequired } from "@/lib/auth/email";
import {
  savePublication,
  validatePublicationInput,
} from "@/lib/publications/admin";

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

  if (isTwoFactorRequired()) {
    await beginTwoFactorLogin(sessionUser);
  }

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

export type PublicationActionState = {
  error?: string;
  success?: string;
};

export async function savePublicationAction(
  publicationId: number,
  _prev: PublicationActionState,
  formData: FormData,
): Promise<PublicationActionState> {
  const session = await getSession();
  if (!session.user) {
    redirect("/admin/login");
  }

  const input = {
    type: String(formData.get("type") ?? "institutional"),
    slug: String(formData.get("slug") ?? "")
      .trim()
      .toLowerCase(),
    title: String(formData.get("title") ?? "").trim(),
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    body: String(formData.get("body") ?? "").trim(),
    status: String(formData.get("status") ?? "draft"),
  };

  const validationError = validatePublicationInput(input);
  if (validationError) {
    return { error: validationError };
  }

  try {
    await savePublication({
      id: publicationId > 0 ? publicationId : undefined,
      type: input.type as PublicationType,
      slug: input.slug,
      title: input.title,
      excerpt: input.excerpt,
      body: input.body,
      status: input.status as PublicationStatus,
      updatedBy: session.user.id,
    });

    await auditEvent("publication.saved", { slug: input.slug }, session.user.id);
    redirect("/admin/publications");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save publication.";
    if (message.includes("unique") || message.includes("duplicate")) {
      return { error: "That slug is already in use." };
    }
    return { error: message };
  }
}
