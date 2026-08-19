import { ScientificLabel } from "@/components/ui/ScientificLabel";
import { labsFunctions } from "@/lib/content/science";

/** Seven institutional R&D capabilities — ORIGINA Labs */
export function LabsCapabilities() {
  return (
    <div className="border-t border-gold/25">
      {labsFunctions.map((item) => (
        <article
          key={item.num}
          className="grid gap-4 border-b border-gold/15 py-6 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:gap-6"
        >
          <ScientificLabel tone="gold" className="text-gold">
            {item.num}
          </ScientificLabel>
          <div>
            <h3 className="font-serif text-xl text-ivory sm:text-2xl">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
