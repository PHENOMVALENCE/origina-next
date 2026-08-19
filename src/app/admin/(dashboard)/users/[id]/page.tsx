import Link from "next/link";
import { notFound } from "next/navigation";
import { UserForm } from "@/components/admin/UserForm";
import { getUserById } from "@/lib/auth/admin-users";
import { requireRoleUser } from "@/lib/auth/guards";

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const actor = await requireRoleUser(["owner", "admin"]);
  const { id } = await params;
  const userId = Number(id);

  if (!Number.isFinite(userId) || userId <= 0) {
    notFound();
  }

  const user = await getUserById(userId);
  if (!user) {
    notFound();
  }

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>Edit admin user</h2>
        <Link className="btn-admin secondary" href="/admin/users">
          Back
        </Link>
      </div>
      <UserForm user={user} canAssignOwner={actor.role === "owner"} />
    </section>
  );
}
