export function Quote({ children, light, large }: { children: React.ReactNode; light?: boolean; large?: boolean }) {
  return (
    <blockquote
      className={`border-l-2 border-gold py-1 pl-5 font-serif italic ${
        large ? "text-xl sm:text-2xl" : "text-lg"
      } ${light ? "text-ivory/92" : "text-graphite"}`}
    >
      {children}
    </blockquote>
  );
}

export function QuoteBand({ children }: { children: React.ReactNode }) {
  return (
    <section className="quote-band">
      <div className="site-container">
        <blockquote>{children}</blockquote>
      </div>
    </section>
  );
}
