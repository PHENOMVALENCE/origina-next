/**
 * Brand layer resolution.
 *
 * ORIGINA presents two visual registers:
 *
 *   "institution" — light paper ground, crimson accent. The institution speaking
 *     in its own voice: the homepage, about, science, labs, evidence, future.
 *
 *   "division" — noir ground, gold accent. A product or division speaking in its
 *     own voice: B-Melanox, Novia, DIVINE, BValence, Skin Safari, BettyWorld.
 *
 * The `/divisions` index itself is institutional — it is the institution
 * describing its portfolio. Only the individual division pages go dark.
 *
 * See docs/DESIGN.md for the full rationale.
 */
export type BrandLayer = "institution" | "division";

export function layerForPath(pathname: string): BrandLayer {
  // "/divisions" is institutional; "/divisions/<slug>" is a division.
  if (/^\/divisions\/[^/]+/.test(pathname)) return "division";
  return "institution";
}

export function isDivisionLayer(pathname: string): boolean {
  return layerForPath(pathname) === "division";
}
