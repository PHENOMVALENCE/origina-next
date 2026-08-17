import { enquirySubjectOptions } from "@/lib/content/contact";

type EnquiryNotification = {
  reference: string;
  subject: string;
  name: string;
  email: string;
};

export async function sendEnquiryNotification(enquiry: EnquiryNotification): Promise<"sent" | "skipped" | "failed"> {
  const recipient = process.env.ORIGINA_NOTIFY_EMAIL?.trim() ?? "";
  if (!recipient || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
    return "skipped";
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return "skipped";
  }

  const type = enquirySubjectOptions[enquiry.subject as keyof typeof enquirySubjectOptions] ?? enquiry.subject;
  const body = [
    "A new enquiry has been received.",
    "",
    `Reference: ${enquiry.reference}`,
    `Type: ${type}`,
    `From: ${enquiry.name} <${enquiry.email}>`,
    "",
    "Sign in to the Origina admin inbox to review it.",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Origina Website <no-reply@origina.co>",
        to: [recipient],
        subject: `New Origina enquiry ${enquiry.reference}`,
        text: body,
      }),
    });

    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
