import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/AuthForms";
import { getCurrentUser } from "@/lib/auth/session";
import { userCount } from "@/lib/auth/users";

export const metadata: Metadata = {
  title: "Origina Admin Sign In",
};

type LoginPageProps = {
  searchParams: Promise<{ setup?: string; reset?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  if (await getCurrentUser()) {
    redirect("/admin");
  }

  if (process.env.DATABASE_URL) {
    if ((await userCount()) === 0) {
      redirect("/admin/setup");
    }
  }

  const { setup, reset } = await searchParams;

  return (
    <main className="login-card">
      <div className="login-logo">
        <Image src="/img/brand/origina-mark.png" alt="Origina" width={40} height={40} />
      </div>
      <h1>Origina Admin</h1>
      <p>Manage the institution&apos;s public content and team.</p>
      <LoginForm setupComplete={setup === "1"} resetComplete={reset === "1"} />
      <Link className="mt-4 block text-center text-sm text-[#766b61]" href="/">
        Return to website
      </Link>
    </main>
  );
}
