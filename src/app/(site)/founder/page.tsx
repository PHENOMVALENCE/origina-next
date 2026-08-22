import type { Metadata } from "next";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { Quote } from "@/components/Quote";
import { Section } from "@/components/Section";
import { MediaFigure, PhotoGrid, SplitSection } from "@/components/SplitSection";
import { LeadCopy } from "@/components/ui/LeadCopy";
import { createPageMetadata } from "@/lib/metadata";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "Dr. Elizabeth Consoli — Founder of ORIGINA™",
  description:
    "Dr. Elizabeth Consoli, MD, MBChB — Medical Doctor, Cosmetic Formulation Scientist, and Founder of ORIGINA™.",
  path: "/founder",
});

const roles = [
  "Founder & Director — ORIGINA™",
  "Founder / Scientific Director — ORIGINA Labs™",
  "Creator — BMX-24™ platform",
  "Focus — Skin of colour, formulation science and biological systems",
];

export default function FounderPage() {
  return (
    <>
      <PageHero
        variant="light"
        crumb="Founder"
        kicker="Institutional leadership"
        title={
          <>
            Dr. Elizabeth
            <br />
            <span className="text-crimson">Consoli.</span>
          </>
        }
        intro="MD, MBChB · Medical Doctor · Cosmetic Formulation Scientist · Founder of ORIGINA™"
        image={founderImages.portraitClinical}
      />

      <Section tone="paper" eyebrow="01 · Roles">
        <SplitSection>
          <MediaFigure
            src={founderImages.portraitClinical.src}
            alt={founderImages.portraitClinical.alt}
            caption={founderImages.portraitClinical.caption}
          />
          <div>
            <h2 className="section-title">Institutional roles</h2>
            <ul className="space-y-3 body-copy">
              {roles.map((role) => (
                <li key={role} className="border-b border-rule pb-3 last:border-b-0">
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </SplitSection>
      </Section>

      <Section
        tone="sunk"
        eyebrow="02 · Origin"
        title="Scientific platforms from Africa."
        intro="Dr. Elizabeth Consoli founded ORIGINA around a conviction that scientific innovation does not need to originate elsewhere to be globally relevant."
      >
        <LeadCopy>
          Her early work sits at the intersection of medicine, dermatology, formulation science, and the needs of skin
          of colour.
        </LeadCopy>
        <p className="mt-4 max-w-2xl body-copy">
          That initial focus expands into a broader institutional vision: build scientific platforms from Africa capable
          of serving global populations.
        </p>
        <div className="mt-6">
          <Quote>Build scientific platforms from Africa capable of serving global populations.</Quote>
        </div>
      </Section>

      <Section tone="paper" eyebrow="03 · Mandate">
        <SplitSection reverse>
          <PhotoGrid
            images={[founderImages.professionalEvent, { ...founderImages.conversation, offset: true }]}
          />
          <div>
            <h2 className="section-title">
              Reinforce the institution,
              <br />
              <span className="text-crimson">not celebrity.</span>
            </h2>
            <p className="body-copy">
              The founder establishes the intellectual culture; the institution is designed to carry it forward.
            </p>
          </div>
        </SplitSection>
      </Section>

      <PageCta
        eyebrow="Continue"
        title="Explore the institution she is building."
        links={[
          { href: "/about", label: "The institution" },
          { href: "/labs", label: "ORIGINA Labs™", variant: "secondary" },
        ]}
      />
    </>
  );
}
