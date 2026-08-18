export const enquirySubjectOptions: Record<string, string> = {
  scientific: "Scientific Collaboration",
  manufacturing: "Manufacturing & Development",
  investment: "Investment",
  brand: "Brand & Commercial",
  media: "Media & Education",
  institutional: "Institutional (general)",
  research: "Research",
  partnership: "Partnership",
  talent: "Talent & careers",
  other: "Other",
};

export const contactDirectory = [
  {
    index: "01",
    subject: "scientific",
    title: "Scientific Collaboration",
    description: "Research partnerships, academic collaboration, clinical research.",
  },
  {
    index: "02",
    subject: "manufacturing",
    title: "Manufacturing & Development",
    description: "Formulation development, scale-up, manufacturing partnerships.",
  },
  {
    index: "03",
    subject: "investment",
    title: "Investment",
    description: "ORIGINA Ventures, strategic capital, institutional partnerships.",
  },
  {
    index: "04",
    subject: "brand",
    title: "Brand & Commercial",
    description: "Distribution, retail, licensing, partnerships.",
  },
  {
    index: "05",
    subject: "media",
    title: "Media & Education",
    description: "Skin Safari, scientific communication, interviews, documentary.",
  },
] as const;

export const messageGuide = [
  "Introduce yourself and your organisation.",
  "State the division or subject your enquiry concerns.",
  "Explain the opportunity, problem, or proposed relationship.",
  "Include the timing and the next step you are requesting.",
];

export const contactMeta = [
  { label: "Location", value: "Dar es Salaam, Tanzania" },
  { label: "Response", value: "Business enquiries by email" },
  { label: "Working language", value: "English" },
] as const;
