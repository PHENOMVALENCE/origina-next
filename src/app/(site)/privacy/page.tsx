import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy — ORIGINA™",
  description: "ORIGINA privacy policy and data protection information for website visitors and enquiry contacts.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumb="Privacy"
        title="Privacy Policy"
        intro="How ORIGINA handles personal data collected through this website."
      />

      <Section>
        <div className="legal-prose">
          <div>
            <h2>Data we collect</h2>
            <p>
              Contact form submissions collect name, email, optional organization and phone, enquiry category, and
              message content. Cookie-free analytics may collect anonymized page metrics.
            </p>
          </div>
          <div>
            <h2>Purpose</h2>
            <p>
              Data is used to respond to enquiries and improve the website. Contact forms are not used for clinical
              participant data or sensitive health records.
            </p>
          </div>
          <div>
            <h2>Your rights</h2>
            <p>
              You may request access, correction, or deletion of enquiry data by contacting{" "}
              <a href="mailto:info@origina.co">info@origina.co</a>.
            </p>
          </div>
          <div>
            <h2>Research participants</h2>
            <p>
              Future regulated clinical research workflows will remain separate from general website contact. Research
              participant privacy information will be provided where applicable.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
