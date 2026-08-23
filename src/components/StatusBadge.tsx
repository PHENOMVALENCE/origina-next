import { statusLabels, type DivisionStatus } from "@/lib/content/divisions";

/**
 * Division status. Squared, hairline-bordered, set at the 11px institutional
 * minimum. Sage marks what is operating; crimson marks what is in progress;
 * neutral stone marks what is only planned.
 */
const statusStyles: Record<DivisionStatus, string> = {
  active: "border-sage/45 bg-sage-light text-sage",
  research: "border-crimson/35 bg-crimson/5 text-crimson",
  development: "border-crimson/30 bg-crimson/5 text-crimson",
  emerging: "border-stone/45 bg-paper-sunk text-ink-soft",
  planned: "border-stone/40 bg-transparent text-stone-deep",
  future: "border-stone/35 bg-transparent text-stone-deep",
  open: "border-stone/35 bg-transparent text-stone-deep",
};

export function StatusBadge({ status }: { status: DivisionStatus }) {
  return (
    <span
      className={`inline-flex w-fit rounded-none border px-2.5 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.1em] ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}
