import { contentStatusLabels, type ContentStatus } from "@/lib/content/status";

export function ContentStatus({ status, dark = false }: { status: ContentStatus; dark?: boolean }) {
  return (
    <span
      className={`content-status content-status--${status} ${dark ? "content-status--dark" : ""}`.trim()}
      data-status={status}
    >
      {contentStatusLabels[status]}
    </span>
  );
}
