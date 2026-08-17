export function EvidenceLadder({
  levels,
  tone = "light",
}: {
  levels: readonly { id: string; label: string }[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <ol className={`flex flex-col gap-2 border-t pt-6 ${isDark ? "border-gold/20" : "border-border-subtle"}`}>
      {levels.map((level, index) => (
        <li
          key={level.id}
          className={`flex items-center gap-4 text-sm ${isDark ? "text-ivory/85" : "text-graphite/90"}`}
        >
          <span
            className={`grid h-7 w-7 place-content-center rounded-full border text-xs ${
              isDark ? "border-gold/40 text-gold" : "border-gold/50 text-gold"
            }`}
          >
            {index + 1}
          </span>
          {level.label}
        </li>
      ))}
    </ol>
  );
}
