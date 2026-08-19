import { redirect } from "next/navigation";
import { getCurrentUser, type SessionUser } from "@/lib/auth/session";
import { hasRole } from "@/lib/auth/roles";
import type { UserRole } from "@/db/schema";

export async function requireAuthUser(): Promise<SessionUser> {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/admin/login");
  }
  return user;
}

export async function requireRoleUser(roles: UserRole[]): Promise<SessionUser> {
  const user = await requireAuthUser();
  if (!hasRole(user, roles)) {
    redirect("/admin");
  }
  return user;
}
