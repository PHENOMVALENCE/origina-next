import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { getCurrentUser } from "@/lib/auth/session";
import { getEnquiryStatusCounts } from "@/lib/enquiries/admin";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!process.env.DATABASE_URL || !process.env.SESSION_SECRET) {
    redirect("/admin/login");
  }

  const user = await getCurrentUser();
  if (!user) {
    redirect("/admin/login");
  }

  const counts = await getEnquiryStatusCounts();

  return (
    <AdminShell user={user} newEnquiryCount={counts.new}>
      {children}
    </AdminShell>
  );
}
