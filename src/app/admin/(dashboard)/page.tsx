import Link from "next/link";
import { count, eq } from "drizzle-orm";
import { getAverageMetric, getPageViewCount } from "@/lib/metrics/admin";
import { getDb } from "@/db";
import { users } from "@/db/schema";
import { formatEnquiryStatus, getEnquiryStatusCounts, getRecentEnquiries } from "@/lib/enquiries/admin";
import { enquirySubjectLabel } from "@/lib/enquiries/labels";
import { listAllPublications } from "@/lib/publications/admin";

export default async function AdminOverviewPage() {
  const db = getDb();
  const enquiryCounts = await getEnquiryStatusCounts();
  const recentEnquiries = await getRecentEnquiries(5);
  const publications = await listAllPublications();
  const pageViews = await getPageViewCount();
  const loadTiming = await getAverageMetric("load_ms");
  const [activeUsers] = await db
    .select({ total: count() })
    .from(users)
    .where(eq(users.active, true));

  const publishedCount = publications.filter((item) => item.publication.status === "published").length;

  return (
    <>
      <div className="metric-grid">
        <div className="metric-card">
          <span>New enquiries</span>
          <strong>{enquiryCounts.new}</strong>
        </div>
        <div className="metric-card">
          <span>In progress</span>
          <strong>{enquiryCounts.in_progress}</strong>
        </div>
        <div className="metric-card">
          <span>Published updates</span>
          <strong>{publishedCount}</strong>
        </div>
        <div className="metric-card">
          <span>Page views (30d)</span>
          <strong>{pageViews}</strong>
        </div>
        <div className="metric-card">
          <span>Active admin users</span>
          <strong>{Number(activeUsers?.total ?? 0)}</strong>
        </div>
        <div className="metric-card">
          <span>Avg load (7d)</span>
          <strong>{loadTiming.samples > 0 ? `${loadTiming.average} ms` : "—"}</strong>
        </div>
      </div>

      <section className="panel">
        <div className="panel-head">
          <h2>Latest enquiries</h2>
          <Link className="btn-admin" href="/admin/enquiries">
            Open inbox
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>From</th>
                <th>Subject</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {recentEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="empty">
                    No enquiries received yet.
                  </td>
                </tr>
              ) : (
                recentEnquiries.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="content-slug">{item.reference}</span>
                    </td>
                    <td>
                      <strong>{item.name}</strong>
                      <br />
                      <span className="text-muted">{item.email}</span>
                    </td>
                    <td>{enquirySubjectLabel(item.subject)}</td>
                    <td>
                      <span className={`badge-status status-${item.status}`}>
                        {formatEnquiryStatus(item.status)}
                      </span>
                    </td>
                    <td>
                      <Link className="btn-icon" href={`/admin/enquiries/${item.id}`} aria-label={`Open ${item.reference}`}>
                        →
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <h2>Admin modules</h2>
        <p className="mb-4">
          Enquiries, publications, analytics, user management, and audit logging are available.
          Homepage content editing remains planned for a later phase.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link className="btn-admin" href="/admin/enquiries">
            Enquiries inbox
          </Link>
          <Link className="btn-admin secondary" href="/admin/publications">
            Publications
          </Link>
          <Link className="btn-admin secondary" href="/admin/analytics">
            Analytics
          </Link>
          <Link className="btn-admin secondary" href="/admin/users">
            Users
          </Link>
          <Link className="btn-admin secondary" href="/admin/audit">
            Audit log
          </Link>
        </div>
      </section>
    </>
  );
}
