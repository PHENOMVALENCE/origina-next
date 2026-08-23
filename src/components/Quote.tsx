/**
 * Pull quote set inside a column of text.
 * `light` renders it for a dark ground (division layer or dark punctuation).
 */
export function Quote({
  children,
  light,
  large,
  attribution,
}: {
  children: React.ReactNode;
  light?: boolean;
  large?: boolean;
  attribution?: string;
}) {
  return (
    <figure className="my-2">
      <blockquote
        className={`pull-quote ${light ? "pull-quote--dark" : ""} ${
          large ? "sm:text-[2rem]" : ""
        }`}
      >
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className={`mt-3 pl-6 text-[0.75rem] uppercase tracking-[0.16em] ${light ? "text-stone" : "text-stone-deep"}`}>
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Full-width quote band — used to mark a turn in the argument.
 * Defaults to the institutional (light) register.
 */
export function QuoteBand({
  children,
  attribution,
  dark = false,
}: {
  children: React.ReactNode;
  attribution?: string;
  dark?: boolean;
}) {
  return (
    <section className={`quote-band ${dark ? "quote-band--dark" : ""}`}>
      <div className="site-container">
        <blockquote>{children}</blockquote>
        {attribution ? <p className="quote-attribution">{attribution}</p> : null}
      </div>
    </section>
  );
}
