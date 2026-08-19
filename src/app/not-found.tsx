import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Page not found — ORIGINA",
  description: "The page you requested could not be found.",
});

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-noir px-6 py-32 text-center text-ivory">
      <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-gold">404</p>
      <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
        Page not
        <br />
        <em className="not-italic text-gold-light">found.</em>
      </h1>
      <p className="mt-6 max-w-md text-stone">
        The page you requested may have moved or no longer exists. Return to the institutional home
        or contact Origina directly.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-ivory/35 px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ivory hover:border-gold hover:text-gold"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
