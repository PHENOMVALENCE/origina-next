import { contentStatusLabels, type ContentStatus } from "@/lib/content/status";

export function ContentStatus({ status }: { status: ContentStatus }) {
  return (
    <span className={`content-status content-status--${status}`} data-status={status}>
      {contentStatusLabels[status]}
    </span>
  );
}
