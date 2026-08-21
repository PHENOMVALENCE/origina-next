import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/Quote";
import { Section } from "@/components/Section";
import { EditorialImage } from "@/components/SplitSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { createPageMetadata } from "@/lib/metadata";
import { contactDirectory, contactMeta, messageGuide } from "@/lib/content/contact";
import { contactDataNotice } from "@/lib/content/privacy";
import { isValidSentReference } from "@/lib/enquiries/validation";
import { founderImages } from "@/lib/content/images";

export const metadata: Metadata = createPageMetadata({
  title: "Contact ORIGINA™ — Build with ORIGINA",
  description:
    "Enquire with ORIGINA: scientific collaboration, manufacturing, investment, brand partnerships, and media.",
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ subject?: string; sent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { subject = "", sent = "" } = await searchParams;
  const sentReference = isValidSentReference(sent) ? sent : "";

  return (
    <>
      <PageHero
        variant="gradient"
        crumb="Contact"
        kicker="Build with ORIGINA"
        title={
          <>
            Build with
            <br />
            <span className="text-crimson">ORIGINA.</span>
          </>
        }
        intro="Scientific collaboration, manufacturing development, investment, brand partnerships, and scientific communication."
        image={founderImages.conversation}
      />

      <section className="bg-graphite pb-16 pt-4 sm:pb-24">
        <div className="site-container">
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-stone">
            Choose the enquiry pathway that matches your intent. Each route opens the form with the appropriate category
            pre-selected.
          </p>
          <p className="mb-6 max-w-2xl border-l-2 border-crimson/40 pl-4 text-sm leading-relaxed text-stone sm:mb-8">
            {contactDataNotice}
          </p>
          <div className="grid grid-cols-1 border-l border-crimson/25 sm:grid-cols-2 lg:grid-cols-4">
            {contactDirectory.map((item) => (
              <Link
                key={item.subject}
                href={`/contact?subject=${item.subject}#enquiry-form`}
                className="group flex min-h-[200px] flex-col border-b border-r border-crimson/20 p-5 text-ivory transition-colors active:bg-noir/40 sm:min-h-[240px] sm:p-6 lg:min-h-[280px] lg:p-8 hover:border-crimson/45 hover:bg-noir/40"
              >
                <span className="text-[0.75rem] uppercase tracking-[0.16em] text-crimson">{item.index}</span>
                <h2 className="mt-auto font-serif text-xl transition-colors group-hover:text-crimson sm:text-2xl lg:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone sm:mt-3">{item.description}</p>
                <span className="mt-4 text-sm text-crimson sm:mt-5 lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100">
                  Select category →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section id="enquiry-form" tone="ivory" eyebrow="Enquire with ORIGINA" title="Start with substance.">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="lead-serif">
              Tell us who you are, what you are building, and why the conversation matters.
            </p>
            <p className="mt-4 body-copy">
              Your message is stored securely in the Origina administration system for review by the institutional
              team. You will receive a reference number on submission.
            </p>
          </div>
          <div className="lg:col-span-7">
            <EnquiryForm defaultSubject={subject} sentReference={sentReference} />
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Write to us</Eyebrow>
            <h2 className="section-title">
              A direct line
              <br />
              <span className="text-crimson">to Origina.</span>
            </h2>
            <p className="lead-serif">Every serious enquiry is read with care.</p>
            <a
              href="mailto:info@origina.co"
              className="mt-6 flex min-h-11 items-center justify-between border-b border-form-border py-4 font-serif text-xl text-crimson transition-colors hover:text-crimson sm:mt-8 sm:py-6 sm:text-2xl lg:text-3xl"
            >
              info@origina.co
              <span aria-hidden="true">↗</span>
            </a>
            <dl className="mt-8">
              {contactMeta.map((item) => (
                <div key={item.label} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[130px_1fr]">
                  <dt className="text-[0.75rem] uppercase tracking-[0.12em] text-stone">{item.label}</dt>
                  <dd className="font-serif text-lg">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <EditorialImage
            image={founderImages.conversation}
            variant="portrait"
            tone="none"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Section>

      <Section tone="ivory" eyebrow="01 · Message guide" title="A useful first message.">
        <div className="grid gap-10 lg:grid-cols-12">
          <p className="lead-serif lg:col-span-5">Help us understand the substance of the conversation from the beginning.</p>
          <ol className="border-t border-rule lg:col-span-7">
            {messageGuide.map((tip, index) => (
              <li key={tip} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-rule py-4 sm:grid-cols-[3rem_1fr] sm:gap-4 sm:py-5">
                <span className="font-serif text-lg text-crimson sm:text-xl">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-serif text-lg text-ink sm:text-xl">{tip}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <QuoteBand>
        Serious ideas deserve
        <br />a serious conversation.
      </QuoteBand>

      <section className="bg-noir py-12 text-center sm:py-16">
        <div className="site-container">
          <a href="mailto:info@origina.co" className="btn-primary w-full sm:w-auto">
            Compose an email
          </a>
        </div>
      </section>
    </>
  );
}
