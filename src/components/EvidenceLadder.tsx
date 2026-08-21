export function EvidenceLadder({
  levels,
  tone = "light",
}: {
  levels: readonly { id: string; label: string }[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <ol className={`flex flex-col gap-0 border-t ${isDark ? "border-gold/25" : "border-rule"}`}>
      {levels.map((level, index) => (
        <li
          key={level.id}
          className={`grid grid-cols-[2.5rem_1fr] items-center gap-3 border-b py-3 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-4 sm:py-4 ${
            isDark ? "border-gold/15 text-ivory/90" : "border-rule text-ink-soft"
          }`}
        >
          <span
            className={`grid h-9 w-9 place-content-center rounded-full border font-serif text-sm ${
              isDark ? "border-gold/45 text-gold" : "border-crimson/50 text-crimson"
            }`}
          >
            {index + 1}
          </span>
          <span className="text-[0.9375rem] leading-snug">{level.label}</span>
        </li>
      ))}
    </ol>
  );
}
