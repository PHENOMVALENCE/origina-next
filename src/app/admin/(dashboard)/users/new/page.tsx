import Link from "next/link";
import { UserForm } from "@/components/admin/UserForm";
import { requireRoleUser } from "@/lib/auth/guards";

export default async function NewUserPage() {
  const actor = await requireRoleUser(["owner", "admin"]);

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>Add admin user</h2>
        <Link className="btn-admin secondary" href="/admin/users">
          Back
        </Link>
      </div>
      <UserForm canAssignOwner={actor.role === "owner"} />
    </section>
  );
}
