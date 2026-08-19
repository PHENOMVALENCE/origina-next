import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ForgotPasswordForm } from "@/components/admin/AuthForms";

export const metadata: Metadata = {
  title: "Reset password — Origina Admin",
};

export default function ForgotPasswordPage() {
  return (
    <main className="login-card">
      <div className="login-logo">
        <Image src="/img/brand/origina-mark.png" alt="Origina" width={40} height={40} />
      </div>
      <h1>Reset password</h1>
      <ForgotPasswordForm />
      <Link className="mt-4 block text-center text-sm text-[#766b61]" href="/admin/login">
        Back to sign in
      </Link>
    </main>
  );
}
