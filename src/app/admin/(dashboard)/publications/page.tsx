import Link from "next/link";
import { formatPublicationType, listAllPublications } from "@/lib/publications/admin";

export default async function AdminPublicationsPage() {
  const items = await listAllPublications();

  return (
    <section className="panel">
      <div className="panel-head">
        <div>
          <h2>News, research & updates</h2>
          <p className="mb-0 text-muted">Draft and publish structured institutional records.</p>
        </div>
        <Link className="btn-admin" href="/admin/publications/new">
          Add publication
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Status</th>
              <th>Editor</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="empty">
                  No publications yet.
                </td>
              </tr>
            ) : (
              items.map(({ publication, editorName }) => (
                <tr key={publication.id}>
                  <td>{formatPublicationType(publication.type)}</td>
                  <td>
                    <strong>{publication.title}</strong>
                    <br />
                    <span className="content-slug">{publication.slug}</span>
                  </td>
                  <td>
                    <span className={`badge-status ${publication.status === "draft" ? "draft" : ""}`}>
                      {publication.status}
                    </span>
                  </td>
                  <td>{editorName ?? "System"}</td>
                  <td>
                    <Link
                      className="btn-icon"
                      href={`/admin/publications/${publication.id}`}
                      aria-label={`Edit ${publication.title}`}
                    >
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
  );
}
