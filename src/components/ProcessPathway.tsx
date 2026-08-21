export function ProcessPathway({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="grid grid-cols-1 gap-0 border border-rule sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
      {steps.map((step, index) => (
        <li
          key={step}
          className="flex min-h-[5.5rem] flex-col justify-between border-b border-rule p-4 sm:min-h-[6.5rem] lg:min-h-[7rem] lg:border-r lg:last:border-r-0 xl:border-b-0"
        >
          <span className="font-serif text-xl text-crimson sm:text-2xl">{String(index + 1).padStart(2, "0")}</span>
          <span className="mt-2 text-[0.8125rem] leading-snug text-ink-soft sm:mt-3">{step}</span>
        </li>
      ))}
    </ol>
  );
}
