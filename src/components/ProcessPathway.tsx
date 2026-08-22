/**
 * Groups the (fixed-order) development pathway into the four phases the
 * pipeline actually moves through, rather than one flat 13-cell grid.
 * Grouping is by index range — the underlying step copy is untouched.
 */
const developmentPhases = [
  { label: "Discovery", from: 0, to: 3 },
  { label: "Development", from: 3, to: 6 },
  { label: "Validation", from: 6, to: 10 },
  { label: "Translation", from: 10, to: 13 },
] as const;

export function ProcessPathway({ steps }: { steps: readonly string[] }) {
  return (
    <div>
      {developmentPhases.map((phase) => {
        const phaseSteps = steps.slice(phase.from, phase.to);
        if (phaseSteps.length === 0) return null;

        return (
          <div key={phase.label} className="border-t border-rule pt-6 first:border-t-0 first:pt-0 sm:pt-7">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-crimson">{phase.label}</p>
            <ol className="mt-3 grid grid-cols-1 border-t border-l border-rule sm:grid-cols-2 lg:grid-cols-4">
              {phaseSteps.map((step, i) => {
                const index = phase.from + i;
                return (
                  <li
                    key={step}
                    className="flex min-h-22 flex-col justify-between border-r border-b border-rule p-4 sm:min-h-26 lg:min-h-28"
                  >
                    <span className="font-serif text-xl text-crimson sm:text-2xl">{String(index + 1).padStart(2, "0")}</span>
                    <span className="mt-2 text-[0.8125rem] leading-snug text-ink-soft sm:mt-3">{step}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}
