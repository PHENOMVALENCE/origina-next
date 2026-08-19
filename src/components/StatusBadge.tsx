import { statusLabels, type DivisionStatus } from "@/lib/content/divisions";

const statusStyles: Record<DivisionStatus, string> = {
  active: "border-sage/40 bg-sage-light text-sage",
  research: "border-gold/45 bg-gold/10 text-graphite",
  development: "border-gold/35 bg-cream text-graphite",
  emerging: "border-stone/40 bg-surface-muted text-graphite",
  planned: "border-stone/35 bg-ivory text-stone",
  future: "border-stone/30 bg-ivory text-stone",
  open: "border-gold/30 bg-ivory text-stone",
};

export function StatusBadge({ status }: { status: DivisionStatus }) {
  return (
    <span
      className={`inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.14em] ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}
