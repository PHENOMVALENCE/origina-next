export function ProcessPathway({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid gap-3 border-t border-border-subtle pt-6 sm:grid-cols-2">
      {steps.map((step, index) => (
        <li key={step} className="flex items-baseline gap-3 text-sm text-graphite/90">
          <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
          {step}
        </li>
      ))}
    </ol>
  );
}
