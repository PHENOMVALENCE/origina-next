import { getIronSession, type SessionOptions } from "iron-session";
import { cookies } from "next/headers";
import type { SessionUser } from "@/lib/auth/roles";

export type { SessionUser } from "@/lib/auth/roles";
export { hasRole } from "@/lib/auth/roles";

export type SessionData = {
  user?: SessionUser;
  pending2fa?: {
    user: SessionUser;
    token: string;
    codeHash: string;
  };
};

function getSessionPassword(): string {
  const secret = process.env.SESSION_SECRET?.trim();
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET must be set to at least 32 characters");
  }
  return secret;
}

export function getSessionOptions(): SessionOptions {
  return {
    password: getSessionPassword(),
    cookieName: "origina_admin",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    },
  };
}

export async function getSession() {
  return getIronSession<SessionData>(await cookies(), getSessionOptions());
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  const session = await getSession();
  return session.user ?? null;
}
