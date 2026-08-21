export type PrivacySection = {
  title: string;
  paragraphs: readonly string[];
};

export const privacySections: PrivacySection[] = [
  {
    title: "Scope",
    paragraphs: [
      "This policy applies to personal data collected through the ORIGINA public website, enquiry forms, and privacy-conscious analytics.",
      "It does not replace dedicated research-participant privacy information where regulated clinical research is conducted.",
    ],
  },
  {
    title: "Data we collect",
    paragraphs: [
      "Contact form submissions may include name, email, optional organization and phone, enquiry category, and message content.",
      "Privacy-conscious analytics may collect anonymized page metrics (path, referrer category, device class) without third-party advertising cookies.",
    ],
  },
  {
    title: "Purpose",
    paragraphs: [
      "Data is used to respond to institutional enquiries, manage research and partnership conversations, and improve the website.",
      "General contact forms must not be used to submit clinical participant data, detailed medical histories, or other sensitive health records.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "ORIGINA aims to minimize non-essential cookies. Session requirements for administration are separate from public marketing contact.",
      "If cookie-based tools are introduced in future, this policy will be updated before deployment.",
    ],
  },
  {
    title: "Research participants",
    paragraphs: [
      "Regulated clinical research workflows remain separate from general website contact.",
      "Where research participant information is collected, dedicated privacy notices, consent mechanisms, and ethics-reviewed processes will apply.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "You may request access, correction, or deletion of enquiry data held through the contact system.",
      "Contact info@origina.co with your enquiry reference where available.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "Enquiry data is stored in ORIGINA's administration system with access limited to authorized institutional users.",
      "No system can guarantee absolute security; ORIGINA applies proportionate technical and organizational measures.",
    ],
  },
  {
    title: "Updates",
    paragraphs: [
      "This policy may be updated as ORIGINA's digital architecture, regulatory context, or research programmes evolve.",
      "Material changes will be reflected on this page.",
    ],
  },
];

export const contactDataNotice =
  "This form is for institutional enquiries only. Do not submit clinical trial participant data, detailed medical records, or other sensitive health information through this channel.";
