"use client";

import { toggleUserActiveAction } from "@/app/admin/user-actions";

export function UserToggleButton({ userId, active }: { userId: number; active: boolean }) {
  const action = toggleUserActiveAction.bind(null, userId);

  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!confirm("Change this user's status?")) {
          event.preventDefault();
        }
      }}
    >
      <button className={`btn-icon ${active ? "danger" : ""}`} type="submit" aria-label={active ? "Disable user" : "Enable user"}>
        {active ? "✕" : "✓"}
      </button>
    </form>
  );
}
