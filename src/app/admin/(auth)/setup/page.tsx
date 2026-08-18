import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { SetupForm } from "@/components/admin/AuthForms";
import { userCount } from "@/lib/auth/users";

export const metadata: Metadata = {
  title: "Set up Origina Admin",
};

export default async function AdminSetupPage() {
  if (!process.env.DATABASE_URL) {
    redirect("/admin/login");
  }

  if ((await userCount()) > 0) {
    redirect("/admin/login");
  }

  return (
    <main className="login-card">
      <div className="login-logo">
        <Image src="/img/brand/origina-mark.png" alt="Origina" width={40} height={40} />
      </div>
      <h1>Create the owner account</h1>
      <p>This first account controls users and site content.</p>
      <SetupForm />
    </main>
  );
}
