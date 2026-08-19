export function ScientificLabel({
  children,
  tone = "default",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "default" | "dark" | "gold";
  className?: string;
}) {
  const toneClass =
    tone === "dark" ? "text-stone" : tone === "gold" ? "text-gold" : "text-graphite/70";

  return (
    <span className={`scientific-label ${toneClass} ${className}`.trim()}>{children}</span>
  );
}
