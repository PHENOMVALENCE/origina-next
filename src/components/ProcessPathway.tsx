export function ProcessPathway({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-0 border border-border-subtle lg:grid-cols-7">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex min-h-[7rem] flex-col justify-between border-b border-border-subtle p-4 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
        >
          <span className="font-serif text-2xl text-gold">{String(index + 1).padStart(2, "0")}</span>
          <span className="mt-3 text-[0.8125rem] leading-snug text-graphite/90">{step}</span>
        </li>
      ))}
    </ol>
  );
}
