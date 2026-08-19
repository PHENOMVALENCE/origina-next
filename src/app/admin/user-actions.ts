"use server";

import { redirect } from "next/navigation";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import {
  getUserById,
  saveAdminUser,
  toggleUserActive,
  validateUserInput,
} from "@/lib/auth/admin-users";
import { sendAuthEmail } from "@/lib/auth/email";
import { requireRoleUser } from "@/lib/auth/guards";
import { getSession, type SessionUser } from "@/lib/auth/session";
import { consumeAuthToken, generateTwoFactorCode, issueAuthToken } from "@/lib/auth/tokens";
import { auditEvent, findUserByEmail, updateUserPasswordHash } from "@/lib/auth/users";
import { getSiteUrl } from "@/lib/site";
import type { UserRole } from "@/db/schema";

export type UserActionState = {
  error?: string;
  success?: string;
};

export async function saveAdminUserAction(
  userId: number,
  _prev: UserActionState,
  formData: FormData,
): Promise<UserActionState> {
  const actor = await requireRoleUser(["owner", "admin"]);

  const input = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    role: String(formData.get("role") ?? "editor"),
    password: String(formData.get("password") ?? ""),
    isNew: userId <= 0,
  };

  const validationError = validateUserInput(input);
  if (validationError) {
    return { error: validationError };
  }

  if (input.role === "owner" && actor.role !== "owner") {
    return { error: "Only owners can assign the owner role." };
  }

  if (userId > 0) {
    const existing = await getUserById(userId);
    if (!existing) {
      return { error: "User not found." };
    }

    if (existing.role === "owner" && actor.role !== "owner" && input.role !== "owner") {
      return { error: "Only owners can change owner accounts." };
    }
  }

  try {
    await saveAdminUser({
      id: userId > 0 ? userId : undefined,
      name: input.name,
      email: input.email,
      role: input.role as UserRole,
      password: input.password,
    });

    await auditEvent("user.saved", { email: input.email, role: input.role }, actor.id);
    redirect("/admin/users");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save user.";
    if (message.includes("unique") || message.includes("duplicate")) {
      return { error: "That email address is already in use." };
    }
    return { error: message };
  }
}

export async function toggleUserActiveAction(userId: number): Promise<void> {
  const actor = await requireRoleUser(["owner", "admin"]);

  if (userId === actor.id) {
    redirect("/admin/users");
  }

  const nextActive = await toggleUserActive(userId);
  if (nextActive === null) {
    redirect("/admin/users");
  }

  await auditEvent("user.toggled", { userId, active: nextActive }, actor.id);
  redirect("/admin/users");
}

export async function requestPasswordReset(
  _prev: UserActionState,
  formData: FormData,
): Promise<UserActionState> {
  if (!process.env.DATABASE_URL) {
    return { error: "Password reset is not configured yet." };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const user = await findUserByEmail(email);

  if (user?.active) {
    const token = await issueAuthToken(user.id, "reset", 30);
    const resetUrl = `${getSiteUrl()}/admin/reset-password?token=${token}`;
    await sendAuthEmail(
      user.email,
      "Reset your Origina admin password",
      `Open this link within 30 minutes:\n${resetUrl}`,
    );
    await auditEvent("auth.reset_requested", {}, user.id);
  }

  return { success: "If that account exists, a reset link has been sent." };
}

export async function resetPasswordAction(
  _prev: UserActionState,
  formData: FormData,
): Promise<UserActionState> {
  if (!process.env.DATABASE_URL) {
    return { error: "Password reset is not configured yet." };
  }

  const token = String(formData.get("token") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (password.length < 12) {
    return { error: "Use a valid reset link and a password of at least 12 characters." };
  }

  const userId = await consumeAuthToken(token, "reset");
  if (!userId) {
    return { error: "Use a valid reset link and a password of at least 12 characters." };
  }

  await updateUserPasswordHash(userId, await hashPassword(password));
  await auditEvent("auth.password_reset", {}, userId);

  redirect("/admin/login?reset=1");
}

export async function verifyTwoFactorAction(
  _prev: UserActionState,
  formData: FormData,
): Promise<UserActionState> {
  const session = await getSession();
  const pending = session.pending2fa;

  if (!pending) {
    redirect("/admin/login");
  }

  const code = String(formData.get("code") ?? "").trim();
  const userId = await consumeAuthToken(pending.token, "two_factor");

  if (!userId || !(await verifyPassword(code, pending.codeHash))) {
    await auditEvent("auth.two_factor_failed", {}, pending.user.id);
    return { error: "The code is invalid or expired." };
  }

  session.user = pending.user;
  delete session.pending2fa;
  await session.save();

  await auditEvent("auth.two_factor_passed", {}, pending.user.id);
  redirect("/admin");
}

export async function beginTwoFactorLogin(user: SessionUser): Promise<void> {
  const code = generateTwoFactorCode();
  const token = await issueAuthToken(user.id, "two_factor", 10);
  const session = await getSession();

  session.pending2fa = {
    user,
    token,
    codeHash: await hashPassword(code),
  };
  await session.save();

  await sendAuthEmail(
    user.email,
    "Your Origina sign-in code",
    `Your code is ${code}. It expires in 10 minutes.`,
  );
  await auditEvent("auth.two_factor_requested", {}, user.id);
  redirect("/admin/verify");
}
