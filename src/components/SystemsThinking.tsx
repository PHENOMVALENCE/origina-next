import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { systemsThinking } from "@/lib/content/science";

/** Interconnected biological systems — conceptual, not causal. */
export function SystemsThinking() {
  return (
    <div className="systems-thinking" aria-label="Interconnected biological systems">
      <ScientificLabel className="mb-4 block">Systems thinking · Conceptual model</ScientificLabel>
      {systemsThinking.map((term, index) => (
        <div key={term} className="systems-thinking__node">
          <p className="font-serif text-xl text-graphite sm:text-2xl">{term}</p>
          {index < systemsThinking.length - 1 ? (
            <span className="systems-thinking__connector" aria-hidden="true">
              ↕
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
