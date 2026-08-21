export function DetailList({
  items,
  tone = "light",
}: {
  items: readonly { title: string; text?: string }[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className={`border-t ${isDark ? "border-gold/25" : "border-rule"}`}>
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`grid gap-3 border-b py-4 last:border-b-0 sm:grid-cols-[3.5rem_1fr] sm:gap-4 sm:py-6 ${
            isDark ? "border-gold/15" : "border-rule"
          }`}
        >
          <span className={`font-serif text-2xl ${isDark ? "text-gold" : "text-crimson"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className={`font-serif text-xl sm:text-2xl ${isDark ? "text-ivory" : "text-ink"}`}>
              {item.title}
            </h3>
            {item.text ? (
              <p className={`mt-2 text-[0.9375rem] leading-relaxed ${isDark ? "text-stone" : "text-ink-soft"}`}>
                {item.text}
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
