import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Page not found — ORIGINA",
  description: "The page you requested could not be found.",
});

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-noir px-6 py-32 text-center text-ivory">
      <Eyebrow tone="dark" plain className="justify-center">
        404
      </Eyebrow>
      <h1 className="display-title mt-2">
        Page not
        <br />
        <span className="text-gold-light">found.</span>
      </h1>
      <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed muted-on-dark">
        The page you requested may have moved or no longer exists. Return to the institutional home or contact
        Origina directly.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href="/">Home</Button>
        <Button href="/contact" variant="secondary">
          Contact
        </Button>
      </div>
    </section>
  );
}
