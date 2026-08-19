/** Institutional photography registry — alt text and captions for consistent reuse. */

export const founderImages = {
  portraitClinical: {
    src: "/img/founder/founder-01.jpeg",
    alt: "Dr. Elizabeth Consoli in her clinical environment",
    caption: "Scientific direction · Dar es Salaam",
  },
  professionalEvent: {
    src: "/img/founder/founder-02.jpeg",
    alt: "Dr. Elizabeth Consoli at a professional event",
    caption: "Institutional presence",
  },
  recognition: {
    src: "/img/founder/founder-03.jpeg",
    alt: "Dr. Elizabeth Consoli receiving recognition from dermatology peers",
    caption: "Science · Community · Recognition",
  },
  community: {
    src: "/img/founder/founder-04.jpeg",
    alt: "Dr. Elizabeth Consoli sharing a community event moment",
    caption: "Presence · Community",
  },
  formulation: {
    src: "/img/founder/founder-05.jpeg",
    alt: "Dr. Elizabeth Consoli discussing skin-care formulation",
    caption: "Knowledge in practice",
  },
  exchange: {
    src: "/img/founder/founder-06.jpeg",
    alt: "Dr. Elizabeth Consoli exchanging ideas with a professional community",
    caption: "Ideas advance through exchange",
  },
  lifestyle: {
    src: "/img/founder/founder-07.jpeg",
    alt: "Dr. Elizabeth Consoli representing ORIGINA institutional science",
    caption: "Institutional science",
  },
  multidisciplinary: {
    src: "/img/founder/founder-08.jpeg",
    alt: "Dr. Elizabeth Consoli with a multidisciplinary professional community",
    caption: "Expertise grows through community",
  },
  conversation: {
    src: "/img/founder/founder-09.jpeg",
    alt: "Dr. Elizabeth Consoli in professional conversation",
    caption: "Begin with a conversation",
  },
} as const;

export const productImages = {
  pigmentCorrector: {
    src: "/img/products/bmelanox-01.jpeg",
    alt: "B-Melanox Night Intensive Pigment Corrector product",
    caption: "B-Melanox · Platform expression",
  },
  lifestyleOne: {
    src: "/img/products/bmelanox-03.jpeg",
    alt: "Personal-care product in an active lifestyle setting",
    caption: "Formulation in context",
  },
  lifestyleTwo: {
    src: "/img/products/bmelanox-04.jpeg",
    alt: "B-Melanox product detail photograph",
    caption: "Product dossier",
  },
  detail: {
    src: "/img/products/bmelanox-06.jpeg",
    alt: "B-Melanox formulation detail",
    caption: "Pigmentation science",
  },
  portable: {
    src: "/img/products/bmelanox-09.jpeg",
    alt: "Portable personal-care product presentation",
    caption: "Designed for daily use",
  },
} as const;

export type ImageAsset = { src: string; alt: string; caption?: string };

export const divisionImages: Record<string, ImageAsset> = {
  labs: founderImages.recognition,
  "b-melanox": productImages.pigmentCorrector,
  bettyworld: founderImages.formulation,
  bvalence: founderImages.portraitClinical,
  divine: productImages.lifestyleOne,
  novia: founderImages.lifestyle,
  "skin-safari": founderImages.community,
};
