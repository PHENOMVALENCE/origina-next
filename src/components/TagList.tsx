export function TagList({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="tag-chip">
          {item}
        </span>
      ))}
    </div>
  );
}
