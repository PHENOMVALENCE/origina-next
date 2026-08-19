"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getDb } from "@/db";
import { enquiries } from "@/db/schema";
import { sendEnquiryNotification } from "@/lib/enquiries/notify";
import { countRecentEnquiries, hashClientIp } from "@/lib/enquiries/rate-limit";
import { createEnquiryReference } from "@/lib/enquiries/reference";
import {
  type EnquiryFieldErrors,
  type EnquiryFieldValues,
  parseEnquiryFormData,
  validateEnquiry,
} from "@/lib/enquiries/validation";

export type EnquiryActionState = {
  errors?: EnquiryFieldErrors;
  values?: EnquiryFieldValues;
};

export async function submitEnquiry(
  _prevState: EnquiryActionState,
  formData: FormData,
): Promise<EnquiryActionState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot !== "") {
    return {
      errors: { form: "Your message could not be submitted." },
      values: parseEnquiryFormData(formData),
    };
  }

  const values = parseEnquiryFormData(formData);
  const errors = validateEnquiry(values);
  if (Object.keys(errors).length > 0) {
    return { errors, values };
  }

  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || headerStore.get("x-real-ip") || "unknown";
  const ipHash = hashClientIp(ip);
  const userAgent = (headerStore.get("user-agent") ?? "").slice(0, 500);

  if (!process.env.DATABASE_URL) {
    return {
      errors: { form: "Enquiry submission is temporarily unavailable. Please email info@origina.co." },
      values,
    };
  }

  try {
    if ((await countRecentEnquiries(ipHash)) >= 3) {
      return {
        errors: { form: "Please wait a few minutes before sending another message." },
        values,
      };
    }

    const reference = await createEnquiryReference();
    const db = getDb();

    await db.insert(enquiries).values({
      reference,
      name: values.name,
      email: values.email,
      phone: values.phone,
      organization: values.organization,
      subject: values.subject,
      message: values.message,
      ipHash,
      userAgent,
    });

    await sendEnquiryNotification({
      reference,
      subject: values.subject,
      name: values.name,
      email: values.email,
    });

    redirect(`/contact?sent=${encodeURIComponent(reference)}#enquiry-form`);
  } catch (error) {
    if (error instanceof Error && "digest" in error && String(error.digest).startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    return {
      errors: { form: "Your message could not be submitted. Please try again shortly." },
      values,
    };
  }
}
