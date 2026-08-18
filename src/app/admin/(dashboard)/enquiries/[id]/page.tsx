import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryWorkflowForm } from "@/components/admin/EnquiryWorkflowForm";
import { getActiveUsers } from "@/lib/auth/users";
import { formatEnquiryStatus, getEnquiryById } from "@/lib/enquiries/admin";
import { enquirySubjectLabel } from "@/lib/enquiries/labels";

type EnquiryDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminEnquiryDetailPage({ params }: EnquiryDetailPageProps) {
  const { id } = await params;
  const enquiryId = Number(id);
  if (!Number.isInteger(enquiryId) || enquiryId <= 0) {
    notFound();
  }

  const row = await getEnquiryById(enquiryId);
  if (!row) {
    notFound();
  }

  const enquiry = row.enquiry;
  const admins = await getActiveUsers();
  const mailSubject = encodeURIComponent(`Re: ${enquiry.reference}`);

  return (
    <>
      <div className="enquiry-toolbar">
        <Link className="btn-admin secondary" href="/admin/enquiries">
          ← Back to inbox
        </Link>
        <span className={`badge-status status-${enquiry.status}`}>{formatEnquiryStatus(enquiry.status)}</span>
      </div>

      <div className="enquiry-detail-grid">
        <section className="panel enquiry-message">
          <div className="enquiry-heading">
            <div>
              <span>{enquiry.reference}</span>
              <h2>{enquirySubjectLabel(enquiry.subject)} enquiry</h2>
            </div>
            <time dateTime={enquiry.submittedAt.toISOString()}>
              {enquiry.submittedAt.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              ·{" "}
              {enquiry.submittedAt.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </time>
          </div>

          <div className="sender-grid">
            <div>
              <span>From</span>
              <strong>{enquiry.name}</strong>
            </div>
            <div>
              <span>Email</span>
              <a href={`mailto:${enquiry.email}?subject=${mailSubject}`}>{enquiry.email}</a>
            </div>
            <div>
              <span>Organisation</span>
              <strong>{enquiry.organization || "Not provided"}</strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>{enquiry.phone || "Not provided"}</strong>
            </div>
          </div>

          <div className="message-body">{enquiry.message}</div>

          <a className="btn-admin" href={`mailto:${enquiry.email}?subject=${mailSubject}`}>
            Reply by email ↗
          </a>
        </section>

        <aside className="panel enquiry-workflow">
          <h2>Workflow</h2>
          <EnquiryWorkflowForm
            enquiryId={enquiry.id}
            status={enquiry.status}
            priority={enquiry.priority}
            adminNotes={enquiry.adminNotes}
            assignedTo={enquiry.assignedTo}
            admins={admins}
          />
        </aside>
      </div>
    </>
  );
}
