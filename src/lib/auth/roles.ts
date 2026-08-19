import type { UserRole } from "@/db/schema";

export type SessionUser = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
};

export const roleLabels: Record<UserRole, string> = {
  owner: "Owner",
  admin: "Admin",
  editor: "Editor",
};

export function formatUserRole(role: string): string {
  return roleLabels[role as UserRole] ?? role;
}

export function hasRole(user: SessionUser, roles: UserRole[]): boolean {
  return roles.includes(user.role);
}
