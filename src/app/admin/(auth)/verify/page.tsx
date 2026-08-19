import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { VerifyTwoFactorForm } from "@/components/admin/AuthForms";
import { getSession } from "@/lib/auth/session";

export const metadata: Metadata = {
  title: "Verify sign in — Origina Admin",
};

export default async function VerifyTwoFactorPage() {
  const session = await getSession();
  if (!session.pending2fa) {
    redirect("/admin/login");
  }

  return (
    <main className="login-card">
      <div className="login-logo">
        <Image src="/img/brand/origina-mark.png" alt="Origina" width={40} height={40} />
      </div>
      <h1>Verify sign in</h1>
      <VerifyTwoFactorForm />
      <Link className="mt-4 block text-center text-sm text-[#766b61]" href="/admin/login">
        Back to sign in
      </Link>
    </main>
  );
}
