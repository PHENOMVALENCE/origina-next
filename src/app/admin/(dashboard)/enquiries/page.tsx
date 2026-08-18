import Link from "next/link";
import {
  enquiryStatusLabels,
  formatEnquiryStatus,
  getEnquiryStatusCounts,
  listEnquiries,
} from "@/lib/enquiries/admin";
import { enquirySubjectLabel } from "@/lib/enquiries/labels";

type EnquiriesPageProps = {
  searchParams: Promise<{ status?: string; q?: string; page?: string }>;
};

export default async function AdminEnquiriesPage({ searchParams }: EnquiriesPageProps) {
  const params = await searchParams;
  const status = params.status ?? "";
  const query = params.q?.trim() ?? "";
  const page = Number(params.page ?? "1");
  const counts = await getEnquiryStatusCounts();
  const { rows, total, pages, currentPage } = await listEnquiries({ status, query, page });

  function pageHref(nextPage: number) {
    const search = new URLSearchParams();
    if (status) search.set("status", status);
    if (query) search.set("q", query);
    search.set("page", String(nextPage));
    return `/admin/enquiries?${search.toString()}`;
  }

  return (
    <>
      <div className="metric-grid enquiry-metrics">
        {(Object.entries(enquiryStatusLabels) as Array<[keyof typeof enquiryStatusLabels, string]>).map(
          ([key, label]) => (
            <Link key={key} className="metric-card" href={`/admin/enquiries?status=${key}`}>
              <span>{label}</span>
              <strong>{counts[key]}</strong>
            </Link>
          ),
        )}
      </div>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h2>Enquiry inbox</h2>
            <p className="mb-0 text-muted">
              {total} message{total === 1 ? "" : "s"} in this view
            </p>
          </div>
        </div>

        <form className="inbox-filters" method="get">
          <div>
            <label className="form-label" htmlFor="q">
              Search
            </label>
            <input
              className="form-control"
              id="q"
              name="q"
              defaultValue={query}
              placeholder="Reference, name, email, organisation..."
            />
          </div>
          <div>
            <label className="form-label" htmlFor="status">
              Status
            </label>
            <select className="form-select" id="status" name="status" defaultValue={status}>
              <option value="">All statuses</option>
              {(Object.entries(enquiryStatusLabels) as Array<[string, string]>).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <button className="btn-admin" type="submit">
            Apply filters
          </button>
          {status || query ? (
            <Link className="btn-admin secondary" href="/admin/enquiries">
              Clear
            </Link>
          ) : null}
        </form>

        <div className="table-responsive">
          <table className="table enquiry-table">
            <thead>
              <tr>
                <th>Received</th>
                <th>From</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Assigned</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="empty">
                    No enquiries match this view.
                  </td>
                </tr>
              ) : (
                rows.map((item) => (
                  <tr key={item.id} className={item.status === "new" ? "is-new" : undefined}>
                    <td>
                      <strong>{item.submittedAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</strong>
                      <br />
                      <span className="content-slug">
                        {item.submittedAt.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} · {item.reference}
                      </span>
                    </td>
                    <td>
                      <strong>{item.name}</strong>
                      <br />
                      <span className="text-muted">{item.email}</span>
                    </td>
                    <td>
                      {enquirySubjectLabel(item.subject)}
                      <br />
                      <span className="message-preview">
                        {item.message.length > 82 ? `${item.message.slice(0, 82)}…` : item.message}
                      </span>
                    </td>
                    <td>
                      <span className={`badge-status status-${item.status}`}>
                        {formatEnquiryStatus(item.status)}
                      </span>
                      {item.priority === "high" ? <span className="priority-high">High</span> : null}
                    </td>
                    <td>{item.assignedName ?? "Unassigned"}</td>
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

        {pages > 1 ? (
          <nav className="admin-pagination" aria-label="Enquiry pages">
            {Array.from({ length: pages }, (_, index) => index + 1).map((pageNumber) => (
              <Link
                key={pageNumber}
                className={pageNumber === currentPage ? "active" : undefined}
                href={pageHref(pageNumber)}
              >
                {pageNumber}
              </Link>
            ))}
          </nav>
        ) : null}
      </section>
    </>
  );
}
