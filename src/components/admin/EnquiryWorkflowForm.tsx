"use client";

import { useActionState } from "react";
import { updateEnquiryWorkflow, type EnquiryWorkflowState } from "@/app/admin/actions";

type AdminUser = {
  id: number;
  name: string;
  role: string;
};

export function EnquiryWorkflowForm({
  enquiryId,
  status,
  priority,
  adminNotes,
  assignedTo,
  admins,
}: {
  enquiryId: number;
  status: string;
  priority: string;
  adminNotes: string;
  assignedTo: number | null;
  admins: AdminUser[];
}) {
  const boundAction = updateEnquiryWorkflow.bind(null, enquiryId);
  const [state, formAction, isPending] = useActionState(boundAction, {} as EnquiryWorkflowState);

  return (
    <>
      {state.success ? (
        <div className="alert alert-success" role="status">
          {state.success}
        </div>
      ) : null}
      {state.error ? (
        <div className="alert alert-danger" role="alert">
          {state.error}
        </div>
      ) : null}
      <form action={formAction}>
        <div className="form-field">
          <label className="form-label" htmlFor="status">
            Status
          </label>
          <select className="form-select" id="status" name="status" defaultValue={status}>
            <option value="new">New</option>
            <option value="in_progress">In progress</option>
            <option value="replied">Replied</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="priority">
            Priority
          </label>
          <select className="form-select" id="priority" name="priority" defaultValue={priority}>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="assigned_to">
            Assigned to
          </label>
          <select className="form-select" id="assigned_to" name="assigned_to" defaultValue={assignedTo ?? 0}>
            <option value="0">Unassigned</option>
            {admins.map((admin) => (
              <option key={admin.id} value={admin.id}>
                {admin.name} · {admin.role}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="admin_notes">
            Internal notes
          </label>
          <textarea
            className="form-control"
            id="admin_notes"
            name="admin_notes"
            maxLength={5000}
            defaultValue={adminNotes}
          />
          <small className="text-muted">Visible only to authenticated administrators.</small>
        </div>
        <button className="btn-admin" type="submit" disabled={isPending} style={{ width: "100%" }}>
          {isPending ? "Saving…" : "Save workflow"}
        </button>
      </form>
    </>
  );
}
