import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ResetPasswordForm } from "@/components/admin/AuthForms";

export const metadata: Metadata = {
  title: "Choose password — Origina Admin",
};

type ResetPasswordPageProps = {
  searchParams: Promise<{ token?: string }>;
};

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const { token = "" } = await searchParams;

  return (
    <main className="login-card">
      <div className="login-logo">
        <Image src="/img/brand/origina-mark.png" alt="Origina" width={40} height={40} />
      </div>
      <h1>Choose a new password</h1>
      {token ? (
        <ResetPasswordForm token={token} />
      ) : (
        <div className="alert alert-danger" role="alert">
          This reset link is invalid. Request a new one from the sign-in page.
        </div>
      )}
      <Link className="mt-4 block text-center text-sm text-[#766b61]" href="/admin/login">
        Back to sign in
      </Link>
    </main>
  );
}
