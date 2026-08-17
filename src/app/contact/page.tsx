import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { contactDirectory, contactMeta, messageGuide } from "@/lib/content/contact";
import { isValidSentReference } from "@/lib/enquiries/validation";

export const metadata: Metadata = {
  title: "Contact ORIGINA™ — Build with ORIGINA",
  description:
    "Enquire with ORIGINA: scientific collaboration, manufacturing, investment, brand partnerships, and media.",
};

type ContactPageProps = {
  searchParams: Promise<{ subject?: string; sent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { subject = "", sent = "" } = await searchParams;
  const sentReference = isValidSentReference(sent) ? sent : "";

  return (
    <>
      <section className="bg-[radial-gradient(circle_at_80%_40%,rgba(181,146,74,0.16),transparent_30%)] bg-noir pt-32 pb-20 text-ivory lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <p className="mb-6 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.15em] text-stone">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span>/</span>
            Contact
          </p>
          <p className="mb-4 text-[0.66rem] uppercase tracking-[0.2em] text-gold">Build with ORIGINA</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Build with
            <br />
            <em className="not-italic text-gold-light">ORIGINA.</em>
          </h1>
          <p className="mt-6 max-w-xl text-[#b7aca0]">
            Scientific collaboration, manufacturing development, investment, brand partnerships, and
            scientific communication.
          </p>
        </div>
      </section>

      <section className="bg-graphite pb-28">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <div className="grid border-l border-gold/25 sm:grid-cols-2 lg:grid-cols-4">
            {contactDirectory.map((item) => (
              <Link
                key={item.subject}
                href={`/contact?subject=${item.subject}#enquiry-form`}
                className="group flex min-h-[350px] flex-col border-b border-r border-gold/25 p-8 text-ivory transition hover:-translate-y-2 hover:bg-gold hover:text-noir"
              >
                <span className="text-[0.55rem] tracking-[0.15em]">{item.index}</span>
                <h2 className="mt-auto font-serif text-3xl">{item.title}</h2>
                <p className="mt-2 text-xs">{item.description}</p>
                <span className="mt-4 text-lg" aria-hidden="true">
                  ↓
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry-form" className="bg-ivory py-20 lg:py-32">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-gold">Send an enquiry</p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Start with
                <br />
                <em className="not-italic text-gold">substance.</em>
              </h2>
              <p className="mt-4 font-serif text-2xl text-graphite">
                Tell us who you are, what you are building, and why the conversation matters.
              </p>
              <p className="mt-4 max-w-md text-sm text-graphite/85">
                Your message is stored securely in the Origina administration system for review by the
                institutional team.
              </p>
            </div>
            <div className="lg:col-span-7">
              <EnquiryForm defaultSubject={subject} sentReference={sentReference} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-(--content-max) gap-10 px-6 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="mb-2 text-[0.66rem] uppercase tracking-[0.2em] text-gold">Write to us</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              A direct line
              <br />
              <em className="not-italic text-gold">to Origina.</em>
            </h2>
            <p className="mt-4 font-serif text-2xl text-graphite">Every serious enquiry is read with care.</p>
            <a
              href="mailto:info@origina.co"
              className="mt-8 flex items-center justify-between border-b border-[#cfc3b6] py-6 font-serif text-2xl text-oxblood hover:text-gold sm:text-3xl"
            >
              info@origina.co
              <span aria-hidden="true">↗</span>
            </a>
            <div className="mt-8">
              {contactMeta.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 border-b border-[#d7cdc0] py-4 sm:grid-cols-[130px_1fr]"
                >
                  <span className="text-[0.55rem] uppercase tracking-[0.12em] text-[#7a6f65]">
                    {item.label}
                  </span>
                  <strong className="font-serif text-lg font-normal">{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[650px] overflow-hidden rounded-sm">
            <Image
              src="/img/founder/founder-09.jpeg"
              alt="Dr. Elizabeth Consoli greeting a dermatology professional"
              fill
              className="object-cover"
            />
            <figcaption className="mt-2 text-xs text-stone">Begin with a conversation</figcaption>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-3 text-[0.66rem] uppercase tracking-[0.2em] text-gold">01</p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                A useful first
                <br />
                <em className="not-italic text-gold">message.</em>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-serif text-2xl text-graphite">
                Help us understand the substance of the conversation from the beginning.
              </p>
              <div className="mt-8 border-t border-[#cfc3b6]">
                {messageGuide.map((tip, index) => (
                  <div
                    key={tip}
                    className="grid grid-cols-[40px_1fr] gap-4 border-b border-[#cfc3b6] py-5"
                  >
                    <span className="text-[0.55rem] text-gold">{String(index + 1).padStart(2, "0")}</span>
                    <p className="font-serif text-xl">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-noir py-24 text-center text-ivory">
        <div className="mx-auto max-w-(--content-max) px-6 lg:px-16">
          <div className="mx-auto mb-12 grid h-[110px] w-[100px] place-items-center rounded-full border border-gold">
            <Image src="/img/brand/origina-mark.png" alt="" width={48} height={48} />
          </div>
          <blockquote className="mx-auto max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Serious ideas deserve
            <br />a serious conversation.
          </blockquote>
          <a
            href="mailto:info@origina.co"
            className="mt-10 inline-block rounded-full bg-gold px-6 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-noir hover:bg-gold-light"
          >
            Compose an email
          </a>
        </div>
      </section>
    </>
  );
}
