export const sectionTones = {
  ivory: "bg-ivory text-graphite",
  cream: "bg-cream text-graphite",
  noir: "bg-noir text-ivory",
  oxblood: "bg-gradient-to-br from-[#420b0e] to-oxblood text-ivory",
  graphite: "bg-graphite text-ivory",
} as const;

export type SectionTone = keyof typeof sectionTones;

export function Section({
  tone = "ivory",
  eyebrow,
  title,
  center,
  id,
  children,
}: {
  tone?: SectionTone;
  eyebrow?: string;
  title?: string;
  center?: boolean;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={sectionTones[tone]}>
      <div className={`mx-auto max-w-(--content-max) px-6 py-20 lg:px-16 lg:py-28 ${center ? "text-center" : ""}`}>
        {eyebrow && <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
        {title && <h2 className="mb-10 font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
