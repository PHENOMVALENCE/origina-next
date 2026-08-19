export async function sendAuthEmail(
  recipient: string,
  subject: string,
  body: string,
): Promise<"sent" | "skipped" | "failed"> {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
    return "skipped";
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return "skipped";
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Origina Admin <no-reply@origina.co>",
        to: [recipient],
        subject,
        text: body,
      }),
    });

    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}

export function isTwoFactorRequired(): boolean {
  return process.env.ORIGINA_REQUIRE_2FA === "1";
}
