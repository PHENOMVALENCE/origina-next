import Link from "next/link";

export function PageHero({
  crumb,
  kicker,
  title,
  intro,
}: {
  crumb: string;
  kicker: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="bg-noir pt-32 pb-20 text-ivory lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
        <p className="mb-6 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.15em] text-stone">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span>/</span>
          {crumb}
        </p>
        <p className="mb-4 text-[0.66rem] uppercase tracking-[0.2em] text-gold">{kicker}</p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">{title}</h1>
        {intro ? <p className="mt-6 max-w-xl text-[#b7aca0]">{intro}</p> : null}
      </div>
    </section>
  );
}
