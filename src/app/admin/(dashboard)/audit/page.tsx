import Link from "next/link";
import { formatAuditContext, formatAuditDate, listAuditEvents } from "@/lib/auth/admin-users";
import { requireRoleUser } from "@/lib/auth/guards";

export default async function AdminAuditPage() {
  await requireRoleUser(["owner", "admin"]);
  const events = await listAuditEvents();

  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h2>Authentication activity</h2>
          <p className="mb-0 text-muted">The latest 200 security events. IP addresses are irreversibly hashed.</p>
        </div>
        <Link className="btn-admin secondary" href="/admin">
          Back
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>User</th>
              <th>Context</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan={4} className="empty">
                  No audit events recorded yet.
                </td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event.id}>
                  <td>{formatAuditDate(event.createdAt)}</td>
                  <td>
                    <span className="content-slug">{event.event}</span>
                  </td>
                  <td>{event.userName ?? "Guest"}</td>
                  <td>{formatAuditContext(event.context)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
