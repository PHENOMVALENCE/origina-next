export function DisclaimerBand({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-y border-border-subtle bg-surface-muted py-8">
      <div className="site-container">
        <p className="max-w-3xl text-[0.875rem] leading-relaxed text-graphite/85">{children}</p>
      </div>
    </section>
  );
}
