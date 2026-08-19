import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser, hasRole } from "@/lib/auth/session";
import { getAverageMetric, getPageViewCount, getTopPages } from "@/lib/metrics/admin";

export default async function AdminAnalyticsPage() {
  const user = await getCurrentUser();
  if (!user || !hasRole(user, ["owner", "admin"])) {
    redirect("/admin");
  }

  const [topPages, pageViews, loadTiming, lcpTiming] = await Promise.all([
    getTopPages(),
    getPageViewCount(),
    getAverageMetric("load_ms"),
    getAverageMetric("lcp_ms"),
  ]);

  return (
    <>
      <div className="metric-grid">
        <div className="metric-card">
          <span>Page views (30d)</span>
          <strong>{pageViews}</strong>
        </div>
        <div className="metric-card">
          <span>Avg load time (7d)</span>
          <strong>{loadTiming.samples > 0 ? `${loadTiming.average} ms` : "—"}</strong>
        </div>
        <div className="metric-card">
          <span>Avg LCP (7d)</span>
          <strong>{lcpTiming.samples > 0 ? `${lcpTiming.average} ms` : "—"}</strong>
        </div>
      </div>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Top pages</h2>
            <p className="mb-0 text-muted">Most viewed routes over the last 30 days.</p>
          </div>
          <Link className="btn-admin secondary" href="/updates" target="_blank">
            View updates page
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Path</th>
                <th>Page views</th>
              </tr>
            </thead>
            <tbody>
              {topPages.length === 0 ? (
                <tr>
                  <td colSpan={2} className="empty">
                    No analytics recorded yet.
                  </td>
                </tr>
              ) : (
                topPages.map((row) => (
                  <tr key={row.path}>
                    <td>
                      <span className="content-slug">{row.path}</span>
                    </td>
                    <td>{Number(row.total)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
