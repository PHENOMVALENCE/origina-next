import { enquirySubjectOptions } from "@/lib/content/contact";

export const enquirySubjectKeys = Object.keys(enquirySubjectOptions) as Array<
  keyof typeof enquirySubjectOptions
>;

export type EnquirySubject = (typeof enquirySubjectKeys)[number];

export const enquiryStatuses = ["new", "in_progress", "replied", "archived"] as const;
export const enquiryPriorities = ["low", "normal", "high"] as const;

export const sentReferencePattern = /^ORI-[0-9]{8}-[A-F0-9]{4}$/;

export type EnquiryFieldValues = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
};

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryFieldValues | "form", string>>;

export function parseEnquiryFormData(formData: FormData): EnquiryFieldValues {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "")
      .trim()
      .toLowerCase(),
    phone: String(formData.get("phone") ?? "").trim(),
    organization: String(formData.get("organization") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
}

export function validateEnquiry(values: EnquiryFieldValues): EnquiryFieldErrors {
  const errors: EnquiryFieldErrors = {};

  if (values.name.length < 2 || values.name.length > 100) {
    errors.name = "Enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || values.email.length > 190) {
    errors.email = "Enter a valid email address.";
  }

  if (values.phone !== "" && (values.phone.length > 40 || !/^[0-9+()\-\s.]+$/.test(values.phone))) {
    errors.phone = "Enter a valid phone number.";
  }

  if (values.organization.length > 150) {
    errors.organization = "Keep the organisation name under 150 characters.";
  }

  if (!enquirySubjectKeys.includes(values.subject as EnquirySubject)) {
    errors.subject = "Choose an enquiry type.";
  }

  if (values.message.length < 30 || values.message.length > 5000) {
    errors.message = "Write between 30 and 5,000 characters.";
  }

  return errors;
}

export function isValidSentReference(reference: string): boolean {
  return sentReferencePattern.test(reference);
}
