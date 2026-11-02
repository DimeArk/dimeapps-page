import { NextRequest, NextResponse } from "next/server";

const esc = (v: unknown) =>
  String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // If BREVO_API_KEY is set, use Brevo to send the email
    const BREVO_KEY = process.env.BREVO_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "apps.dime@gmail.com";

    if (BREVO_KEY) {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": BREVO_KEY,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          // Must be a Brevo-authenticated domain: gmail.com senders relayed through Brevo fail DMARC.
          sender: { name: "Dimeapps website", email: process.env.CONTACT_FROM_EMAIL || "hello@vizalyze.app" },
          to: [{ email: TO_EMAIL }],
          replyTo: { email, name },
          subject: `New message from ${name}`,
          textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          htmlContent: `<p><strong>Name:</strong> ${esc(name)}</p><p><strong>Email:</strong> ${esc(email)}</p><br><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
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
