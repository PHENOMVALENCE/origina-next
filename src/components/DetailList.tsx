export function DetailList({
  items,
  tone = "light",
}: {
  items: readonly { title: string; text?: string }[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className={`border-t ${isDark ? "border-gold/25" : "border-border-subtle"}`}>
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`grid gap-4 border-b py-6 last:border-b-0 sm:grid-cols-[4rem_1fr] ${
            isDark ? "border-gold/15" : "border-border-subtle"
          }`}
        >
          <span className={`font-serif text-2xl ${isDark ? "text-gold" : "text-oxblood"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className={`font-serif text-xl sm:text-2xl ${isDark ? "text-ivory" : "text-graphite"}`}>
              {item.title}
            </h3>
            {item.text ? (
              <p className={`mt-2 text-[0.9375rem] leading-relaxed ${isDark ? "text-stone" : "text-graphite/85"}`}>
                {item.text}
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
