import Link from "next/link";
import { UserToggleButton } from "@/components/admin/UserToggleButton";
import { formatUserDate, listAllUsers } from "@/lib/auth/admin-users";
import { requireRoleUser } from "@/lib/auth/guards";
import { formatUserRole } from "@/lib/auth/roles";

export default async function AdminUsersPage() {
  const actor = await requireRoleUser(["owner", "admin"]);
  const users = await listAllUsers();

  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h2>Administrative team</h2>
          <p className="mb-0 text-muted">Owners and admins manage users; editors manage site content.</p>
        </div>
        <Link className="btn-admin" href="/admin/users/new">
          Add user
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <strong>{user.name}</strong>
                  <br />
                  {user.email}
                </td>
                <td>{formatUserRole(user.role)}</td>
                <td>
                  <span className={`badge-status ${user.active ? "" : "draft"}`}>
                    {user.active ? "Active" : "Disabled"}
                  </span>
                </td>
                <td>{formatUserDate(user.createdAt)}</td>
                <td>
                  <div className="action-row">
                    <Link className="btn-icon" href={`/admin/users/${user.id}`} aria-label={`Edit ${user.name}`}>
                      →
                    </Link>
                    {user.id !== actor.id ? (
                      <UserToggleButton userId={user.id} active={user.active} />
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
