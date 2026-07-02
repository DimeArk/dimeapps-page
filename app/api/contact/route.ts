import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // If BREVO_API_KEY is set, use Brevo to send the email
    const BREVO_KEY = process.env.BREVO_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "mails2arka@gmail.com";

    if (BREVO_KEY) {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": BREVO_KEY,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "Dime Apps", email: "apps.dime@gmail.com" },
          to: [{ email: TO_EMAIL }],
          replyTo: { email, name },
          subject: `New message from ${name}`,
          textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          htmlContent: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><br><p>${message.replace(/\n/g, "<br>")}</p>`,
        }),
      });

      if (!res.ok) {
        console.error("Brevo error:", await res.text());
        return NextResponse.json({ error: "Email send failed" }, { status: 500 });
      }
    } else {
      // Log for now when no email provider is configured
      console.log("Contact form submission:", { name, email, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
