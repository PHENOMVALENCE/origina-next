export function Eyebrow({
  children,
  plain = false,
  tone = "default",
  className = "",
}: {
  children: React.ReactNode;
  plain?: boolean;
  tone?: "default" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`eyebrow ${plain ? "eyebrow--plain" : ""} ${tone === "dark" ? "eyebrow--dark" : ""} ${className}`.trim()}
    >
      {children}
    </p>
  );
}
