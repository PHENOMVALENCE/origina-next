export function Quote({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <blockquote
      className={`border-l-2 border-gold py-1 pl-4 font-serif text-lg italic ${light ? "text-ivory" : "text-graphite"}`}
    >
      {children}
    </blockquote>
  );
}
