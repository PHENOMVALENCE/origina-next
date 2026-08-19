"use client";

import { useActionState } from "react";
import { saveAdminUserAction, type UserActionState } from "@/app/admin/user-actions";
import type { User } from "@/db/schema";

const roleOptions = [
  { value: "editor", label: "Editor" },
  { value: "admin", label: "Admin" },
  { value: "owner", label: "Owner" },
] as const;

export function UserForm({ user, canAssignOwner }: { user?: User; canAssignOwner: boolean }) {
  const boundAction = saveAdminUserAction.bind(null, user?.id ?? 0);
  const [state, formAction, isPending] = useActionState(boundAction, {} as UserActionState);

  return (
    <>
      {state.error ? (
        <div className="alert alert-danger" role="alert">
          {state.error}
        </div>
      ) : null}
      <form action={formAction}>
        <div className="form-field">
          <label className="form-label" htmlFor="name">
            Full name
          </label>
          <input className="form-control" id="name" name="name" defaultValue={user?.name ?? ""} required />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            defaultValue={user?.email ?? ""}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="role">
            Role
          </label>
          <select className="form-select" id="role" name="role" defaultValue={user?.role ?? "editor"}>
            {roleOptions.map((option) =>
              option.value === "owner" && !canAssignOwner ? null : (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ),
            )}
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="password">
            {user ? "New password (optional)" : "Password"}
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            name="password"
            minLength={user ? undefined : 10}
            required={!user}
          />
          {!user ? <small className="text-muted">At least 10 characters.</small> : null}
        </div>
        <button className="btn-admin" type="submit" disabled={isPending}>
          {isPending ? "Saving…" : "Save user"}
        </button>
      </form>
    </>
  );
}
