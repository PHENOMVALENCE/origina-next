import Link from "next/link";

const biologyPillars = [
  {
    name: "Biology First™",
    text: "Every innovation begins by understanding living systems.",
  },
  {
    name: "Systems Thinking™",
    text: "Pigmentation, inflammation, barrier function, ageing, cellular processes and environmental exposure interact.",
  },
  {
    name: "Platform Innovation™",
    text: "Develop scientific platforms capable of supporting multiple products, protocols and applications.",
  },
];

const responsibleScienceStatements = [
  "A scientific hypothesis is not a clinical result.",
  "A promising formulation is not automatically a proven treatment.",
  "A laboratory mechanism is not automatically evidence of human clinical efficacy.",
];

const labsFunctions = [
  { num: "01", title: "Biological Research" },
  { num: "02", title: "Formulation Science" },
  { num: "03", title: "Analytical Development" },
  { num: "04", title: "Safety & Quality" },
  { num: "05", title: "Clinical Evaluation" },
  { num: "06", title: "Intellectual Property" },
  { num: "07", title: "Manufacturing Translation" },
];

const developmentPathway = [
  "Biological hypothesis",
  "Literature & evidence review",
  "Target / pathway selection",
  "Ingredient & technology selection",
  "Formulation development",
  "Stability & compatibility assessment",
  "Microbiological / safety evaluation",
  "Analytical & quality testing",
  "Regulatory classification",
  "Human evaluation where appropriate",
  "Manufacturing scale-up",
  "Regulatory submission / registration",
  "Post-market monitoring",
];

const divisions = [
  { name: "B-Melanox™", role: "Pigmentation Science", status: "ACTIVE", href: "/divisions/b-melanox" },
  { name: "BettyWorld", role: "Everyday Dermatological Skincare", status: "ACTIVE", href: "/divisions/bettyworld" },
  { name: "BValence™", role: "Ageing & Longevity Biology", status: "RESEARCH", href: "/divisions/bvalence" },
  { name: "DIVINE™", role: "Luxury Makeup Science", status: "EMERGING", href: "/divisions/divine" },
  { name: "NOVIA™", role: "Luxury Body Care", status: "ACTIVE", href: "/divisions/novia" },
  { name: "Skin Safari™", role: "Education · Media · Scientific Communication", status: "EMERGING", href: "/divisions/skin-safari" },
];

const evidenceLevels = [
  "Hypothesis",
  "In-vitro",
  "Ex-vivo",
  "Formulation testing",
  "Instrumental / biophysical testing",
];

export default function Home() {
  return (
    <>
      {/* 00 · Hero */}
      <section className="relative grid min-h-[92vh] grid-cols-1 overflow-hidden bg-noir text-ivory lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col justify-center px-6 pt-32 pb-16 lg:px-16 lg:pt-40">
          <p className="mb-6 text-[0.66rem] uppercase tracking-[0.32em] text-gold">
            ORIGINA™ · Biology First™ · Dar es Salaam, Tanzania
          </p>
          <h1 className="font-serif text-6xl leading-[0.9] sm:text-7xl lg:text-[6.5rem]">Beginning in Africa.</h1>
          <p className="mt-2 font-serif text-4xl text-gold-light sm:text-5xl">Serving the world.</p>
          <p className="mt-6 max-w-xl text-[#b7aca0]">
            A multi-divisional innovation institution built at the intersection of biology, clinical
            science, technology, and human wellbeing.
          </p>
          <p className="mt-3 text-sm text-stone">Founded in Africa. Designed without limits. Built for the world.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir transition-colors hover:bg-gold-light"
            >
              Explore ORIGINA
            </Link>
            <Link
              href="/labs"
              className="rounded-full border border-ivory/35 px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              Enter ORIGINA Labs™
            </Link>
          </div>
          <div className="mt-16 flex gap-10 border-t border-gold/20 pt-8">
            <Fact value="2024" label="Established" />
            <Fact value="DSM" label="Tanzania" />
            <Fact value="∞" label="Possibility" />
          </div>
        </div>
        <div className="relative hidden items-center justify-center bg-[radial-gradient(circle_at_center,rgba(181,146,74,0.12),transparent_55%),linear-gradient(145deg,#241d19,#100d0b)] lg:flex">
          <span className="font-serif text-[16rem] leading-none text-gold/90">O</span>
        </div>
      </section>

      {/* 01 · Institutional thesis */}
      <Section tone="ivory" eyebrow="01 · Institutional thesis" title="We begin with biology.">
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="font-serif text-2xl leading-snug text-graphite sm:text-3xl">
            Human biology is interconnected. Pigmentation interacts with inflammation. Barrier
            function interacts with environmental exposure. Ageing interacts with cellular
            signalling.
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-graphite/90">
            <p>
              Extracellular matrix integrity matters. Metabolic stress influences biological
              systems. Understand the biological system before attempting to change it.
            </p>
            <p>
              Skin of colour is ORIGINA&rsquo;s first scientific specialization because those
              populations have historically been underrepresented within aspects of dermatological
              research, clinical evidence, product development, and aesthetic science.
            </p>
            <Quote>It is our starting point, not our limitation.</Quote>
            <p>
              ORIGINA expands toward dermatology, biotechnology, regenerative technologies,
              nutritional science, medical devices, and future biological and technological fields.
            </p>
            <Link href="/biology-first" className="inline-block text-[0.65rem] uppercase tracking-[0.16em] text-oxblood">
              Explore Biology First™ →
            </Link>
          </div>
        </div>
      </Section>

      {/* 02 · Biology First */}
      <Section tone="cream" eyebrow="02 · Biology First™" title="A philosophical framework for innovation.">
        <div className="grid gap-8 border-t border-border-subtle pt-8 sm:grid-cols-3">
          {biologyPillars.map((pillar) => (
            <article key={pillar.name}>
              <h3 className="font-serif text-2xl">{pillar.name}</h3>
              <p className="mt-2 text-sm text-graphite/85">{pillar.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 space-y-4 bg-noir p-8 text-ivory lg:p-12">
          {responsibleScienceStatements.map((statement) => (
            <blockquote key={statement} className="font-serif text-xl italic text-ivory/90">
              &ldquo;{statement}&rdquo;
            </blockquote>
          ))}
        </div>
      </Section>

      {/* 03 · Institutional architecture */}
      <Section eyebrow="03 · Institutional architecture" title="A scientific institution — not a single brand.">
        <p className="mb-10 max-w-2xl text-sm text-graphite/85">
          ORIGINA connects research → formulation → IP → clinical evaluation → products → education
          → future ventures. Products are outputs of the institution. Brands are expressions of the
          institution.
        </p>
        <div className="rounded-lg border border-border-subtle p-8 text-center text-sm text-stone">
          Institutional architecture diagram — ORIGINA™ → ORIGINA Labs™ → Platforms → Divisions
        </div>
      </Section>

      {/* 04 · Scientific position */}
      <Section tone="noir" eyebrow="04 · Scientific position" title="Skin of colour is where we begin.">
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="font-serif text-2xl text-ivory/95">
            What changes when human biology is studied from the perspective of melanin-rich skin?
          </p>
          <div className="space-y-4 text-sm text-stone">
            <p>
              Research considerations include pigmentation, post-inflammatory hyperpigmentation,
              melasma, barrier dysfunction, photoageing, inflammation, formulation design, and
              clinical evaluation.
            </p>
            <Quote light>Skin colour is an important biological and clinical consideration — not a single biological category.</Quote>
            <p>Population-aware and evidence-based formulation rather than simplistic one-formula thinking.</p>
            <Link href="/science" className="inline-block text-[0.65rem] uppercase tracking-[0.16em] text-gold">
              Examine the scientific position →
            </Link>
          </div>
        </div>
      </Section>

      {/* 05 · ORIGINA Labs */}
      <Section tone="ivory" eyebrow="05 · ORIGINA Labs™" title="The scientific engine of ORIGINA.">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-serif text-xl text-graphite">Research · Formulation · Clinical Science · IP · Manufacturing Development</p>
            <p className="mt-4 text-sm text-graphite/85">
              ORIGINA Labs is not called a laboratory merely for visual branding. It is ORIGINA&rsquo;s
              institutional R&amp;D function.
            </p>
            <Link href="/labs" className="mt-4 inline-block text-[0.65rem] uppercase tracking-[0.16em] text-oxblood">
              Enter the Labs →
            </Link>
          </div>
          <div className="border-t border-gold/25">
            {labsFunctions.map((fn) => (
              <div key={fn.num} className="flex gap-6 border-b border-gold/15 py-4 font-serif text-xl">
                <span className="text-gold">{fn.num}</span>
                {fn.title}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06 · Development framework */}
      <Section tone="cream" eyebrow="06 · Development framework" title="From hypothesis to product.">
        <ol className="grid gap-3 border-t border-border-subtle pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {developmentPathway.map((step, index) => (
            <li key={step} className="flex items-baseline gap-3 text-sm text-graphite/90">
              <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
        <Link href="/science#framework" className="mt-8 inline-block text-center text-[0.65rem] uppercase tracking-[0.16em] text-oxblood">
          Examine the full framework →
        </Link>
      </Section>

      {/* 07 · Platforms */}
      <Section tone="oxblood" eyebrow="07 · Platforms" title="BMX-24™">
        <p className="font-serif text-xl text-ivory/95">Proprietary Pigment Regulation Platform</p>
        <p className="mt-4 max-w-xl text-sm text-ivory/80">
          Developed as a proprietary pigment-regulation platform originating from research into
          non-hydroquinone approaches to hyperpigmentation in skin of colour.
        </p>
        <Link href="/divisions/b-melanox" className="mt-4 inline-block text-[0.65rem] uppercase tracking-[0.16em] text-gold-light">
          Follow the platform →
        </Link>
      </Section>

      {/* 08 · Divisions */}
      <Section tone="ivory" eyebrow="08 · Divisions" title="Distinct expressions. Shared institution.">
        <div className="grid gap-px overflow-hidden rounded-lg border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division) => (
            <Link
              key={division.name}
              href={division.href}
              className="flex flex-col gap-2 bg-ivory p-6 transition-colors hover:bg-cream"
            >
              <span className="w-fit rounded-full border border-gold/40 px-2.5 py-0.5 text-[0.55rem] uppercase tracking-[0.15em] text-oxblood">
                {division.status}
              </span>
              <strong className="font-serif text-xl">{division.name}</strong>
              <small className="text-xs text-stone">{division.role}</small>
            </Link>
          ))}
        </div>
      </Section>

      {/* 09 · Evidence & quality */}
      <Section tone="noir" eyebrow="09 · Evidence & quality" title="Evidence has levels. Quality is designed in.">
        <p className="mb-8 max-w-xl text-sm text-stone">
          ORIGINA is ambitious scientifically and conservative in claims. The strength of a claim
          must correspond to the strength of the evidence.
        </p>
        <ol className="flex flex-col gap-2 border-t border-gold/20 pt-6">
          {evidenceLevels.map((level, index) => (
            <li key={level} className="flex items-center gap-4 text-sm text-ivory/85">
              <span className="grid h-7 w-7 place-content-center rounded-full border border-gold/40 text-xs text-gold">
                {index + 1}
              </span>
              {level}
            </li>
          ))}
        </ol>
        <Link href="/science/evidence" className="mt-8 inline-block text-[0.65rem] uppercase tracking-[0.16em] text-gold">
          Understand the evidence →
        </Link>
      </Section>

      {/* 10 · Responsible science */}
      <Section tone="cream" eyebrow="10 · Responsible science" title="Ambition without scientific inflation." center>
        <p className="mx-auto max-w-2xl font-serif text-xl text-graphite/90">
          If the evidence is preliminary, we call it preliminary. If the evidence is strong, we show
          it. If we do not know, we say we do not know.
        </p>
        <Link
          href="/science/responsible-science"
          className="mt-6 inline-block rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
        >
          Read the institutional doctrine
        </Link>
      </Section>

      {/* 15 · Contact */}
      <Section tone="graphite" eyebrow="15 · Contact" title="Build with ORIGINA." center>
        <p className="mx-auto max-w-xl text-sm text-ivory/80">
          Research partnerships, manufacturing development, investment, brand partnerships, and
          scientific communication.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
        >
          Enquire with ORIGINA
        </Link>
      </Section>
    </>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong className="block font-serif text-3xl text-gold">{value}</strong>
      <span className="text-[0.6rem] uppercase tracking-[0.18em] text-stone">{label}</span>
    </div>
  );
}

function Quote({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <blockquote
      className={`border-l-2 border-gold py-1 pl-4 font-serif text-lg italic ${light ? "text-ivory" : "text-graphite"}`}
    >
      {children}
    </blockquote>
  );
}

const tones = {
  ivory: "bg-ivory text-graphite",
  cream: "bg-cream text-graphite",
  noir: "bg-noir text-ivory",
  oxblood: "bg-gradient-to-br from-[#420b0e] to-oxblood text-ivory",
  graphite: "bg-graphite text-ivory",
} as const;

function Section({
  tone = "ivory",
  eyebrow,
  title,
  center,
  children,
}: {
  tone?: keyof typeof tones;
  eyebrow: string;
  title: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={tones[tone]}>
      <div className={`mx-auto max-w-(--content-max) px-6 py-20 lg:px-16 lg:py-28 ${center ? "text-center" : ""}`}>
        <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h2 className="mb-10 font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
