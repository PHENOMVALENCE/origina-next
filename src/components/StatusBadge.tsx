import { statusLabels, type DivisionStatus } from "@/lib/content/divisions";

export function StatusBadge({ status }: { status: DivisionStatus }) {
  return (
    <span className="w-fit rounded-full border border-gold/40 px-2.5 py-0.5 text-[0.55rem] uppercase tracking-[0.15em] text-oxblood">
      {statusLabels[status]}
    </span>
  );
}
