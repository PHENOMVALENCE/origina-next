import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Section tones.
 *
 * Institution layer (default): `paper` and `sunk`. These carry most of the site.
 * Punctuation: `noir`, `crimson`, `graphite` — used at most once or twice per
 * page to mark a turn in the argument, never as the default ground.
 *
 * `ivory` / `cream` / `oxblood` are retained as aliases so existing pages keep
 * working; they resolve to the institutional equivalents.
 */
export const sectionTones = {
  paper: "bg-paper text-ink",
  sunk: "bg-paper-sunk text-ink",
  noir: "bg-noir text-ivory",
  crimson: "bg-crimson text-ivory",
  graphite: "bg-graphite text-ivory",
} as const;

export type SectionTone = keyof typeof sectionTones;

const DARK_TONES = new Set<SectionTone>(["noir", "crimson", "graphite"]);

export function Section({
  tone = "paper",
  eyebrow,
  index,
  title,
  intro,
  center,
  split = false,
  id,
  divider = false,
  children,
}: {
  tone?: SectionTone;
  eyebrow?: string;
  /** Ordinal shown above the title, e.g. "02". Institutional section numbering. */
  index?: string;
  title?: string;
  intro?: string;
  center?: boolean;
  /**
   * Asymmetric editorial header: title left, intro right on large screens.
   * Ignored when `center` is set. Only takes effect when both title and intro
   * are present.
   */
  split?: boolean;
  id?: string;
  /** Draw a hairline above the section content. */
  divider?: boolean;
  children: React.ReactNode;
}) {
  const isDark = DARK_TONES.has(tone);
  const useSplit = split && !center && Boolean(title) && Boolean(intro);

  const indexEl = index ? (
    <span className={`section-index ${isDark ? "section-index--dark" : ""} ${center ? "mx-auto" : ""}`}>{index}</span>
  ) : null;

  const eyebrowEl = eyebrow ? (
    <Eyebrow plain tone={isDark ? "dark" : "default"} className={center ? "justify-center" : ""}>
      {eyebrow}
    </Eyebrow>
  ) : null;

  const titleEl = title ? (
    <h2 className={`section-title ${useSplit ? "mb-0" : ""} ${isDark ? "text-ivory" : ""} ${center ? "mx-auto" : ""}`}>
      {title}
    </h2>
  ) : null;

  const introEl = intro ? (
    <p className={`section-intro ${useSplit ? "mb-0 max-w-none" : ""} ${center ? "mx-auto" : ""} ${isDark ? "text-muted-dark" : ""}`}>
      {intro}
    </p>
  ) : null;

  return (
    <section id={id} className={sectionTones[tone]}>
      <div className={`site-container section-shell ${center ? "text-center" : ""}`}>
        {divider ? <hr className={`mb-12 ${isDark ? "bg-white/15" : "rule"}`} /> : null}

        {useSplit ? (
          <div className="section-header-split mb-12 sm:mb-14">
            <div className="section-header-split__title">
              {indexEl}
              {eyebrowEl}
              {titleEl}
            </div>
            <div className="section-header-split__intro">{introEl}</div>
          </div>
        ) : (
          <>
            {indexEl}
            {eyebrowEl}
            {titleEl}
            {introEl}
          </>
        )}

        {children}
      </div>
    </section>
  );
}
