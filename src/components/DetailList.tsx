export function DetailList({
  items,
  tone = "light",
}: {
  items: readonly { title: string; text?: string }[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className={`border-t ${isDark ? "border-gold/20" : "border-border-subtle"}`}>
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`flex gap-6 py-4 ${isDark ? "border-b border-gold/15" : "border-b border-border-subtle"}`}
        >
          <span className={isDark ? "text-gold" : "text-oxblood"}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className={`font-serif text-xl ${isDark ? "text-ivory" : "text-graphite"}`}>{item.title}</h3>
            {item.text && (
              <p className={`mt-2 text-sm ${isDark ? "text-stone" : "text-graphite/85"}`}>{item.text}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
