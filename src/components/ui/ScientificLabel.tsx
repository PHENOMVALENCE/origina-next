export function ScientificLabel({
  children,
  tone = "default",
  className = "",
}: {
  children: React.ReactNode;
  /**
   * default — muted ink, light grounds.
   * crimson — institutional accent.
   * dark    — muted stone, dark grounds.
   * gold    — division layer only.
   */
  tone?: "default" | "crimson" | "dark" | "gold";
  className?: string;
}) {
  const toneClass =
    tone === "dark"
      ? "text-stone"
      : tone === "gold"
        ? "text-gold"
        : tone === "crimson"
          ? "text-crimson"
          : "text-ink/70";

  return <span className={`scientific-label ${toneClass} ${className}`.trim()}>{children}</span>;
}
