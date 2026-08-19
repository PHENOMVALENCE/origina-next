export function LeadCopy({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return <p className={`${light ? "lead-serif-light" : "lead-serif"} ${className}`.trim()}>{children}</p>;
}
