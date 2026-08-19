import { Eyebrow } from "@/components/ui/Eyebrow";

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
  intro,
  center,
  id,
  children,
}: {
  tone?: SectionTone;
  eyebrow?: string;
  title?: string;
  intro?: string;
  center?: boolean;
  id?: string;
  children: React.ReactNode;
}) {
  const isDark = tone === "noir" || tone === "oxblood" || tone === "graphite";

  return (
    <section id={id} className={sectionTones[tone]}>
      <div className={`site-container section-shell ${center ? "text-center" : ""}`}>
        {eyebrow ? (
          <Eyebrow plain tone={isDark ? "dark" : "default"} className={center ? "justify-center" : ""}>
            {eyebrow}
          </Eyebrow>
        ) : null}
        {title ? (
          <h2 className={`section-title ${isDark ? "text-ivory" : ""} ${center ? "mx-auto" : ""}`}>{title}</h2>
        ) : null}
        {intro ? (
          <p
            className={`${center ? "mx-auto" : ""} mb-10 max-w-2xl text-[0.9375rem] leading-relaxed ${
              isDark ? "text-stone" : "text-graphite/85"
            }`}
          >
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
