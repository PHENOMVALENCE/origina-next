export function Quote({ children, light, large }: { children: React.ReactNode; light?: boolean; large?: boolean }) {
  return (
    <blockquote
      className={`border-l-2 border-gold py-1 pl-4 font-serif italic sm:pl-5 ${
        large ? "text-lg sm:text-xl lg:text-2xl" : "text-base sm:text-lg"
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
