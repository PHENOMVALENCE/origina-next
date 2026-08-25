/**
 * Division color identity wrapper.
 *
 * Wraps a division page's content in a full-width element carrying
 * `data-division="<slug>"`. The matching `[data-division]` block in
 * `globals.css` re-points the division-layer tokens (`--color-noir` ground,
 * `--color-gold` accent, `--color-ivory` text, `--color-muted-dark`) to that
 * division's palette, so every existing `bg-noir` / `text-gold` / `btn-gold`
 * usage on the page retints automatically — no layout, typography, or
 * photography change. Divisions without a palette (Skin Safari, BValence) may
 * still be wrapped; with no matching CSS block they inherit the default
 * institutional gold/noir division treatment.
 *
 * The wrapper is a plain block element (full width, no max-width, no padding),
 * so it does not affect layout. The site header/footer live outside it and keep
 * the parent ORIGINA register.
 */
export function DivisionTheme({
  division,
  children,
}: {
  division: string;
  children: React.ReactNode;
}) {
  return <div data-division={division}>{children}</div>;
}
