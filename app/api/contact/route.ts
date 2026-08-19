import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const interest = String(body.interest ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Honeypot field (optional bot trap — see ContactForm.tsx "company" field)
    if (body.company) {
      // Silently pretend success to bots
      return NextResponse.json({ ok: true });
    }

    const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO_EMAIL } = process.env;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const toAddress = CONTACT_TO_EMAIL || GMAIL_USER;

    await transporter.sendMail({
      from: `"Infinix Website" <${GMAIL_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New enquiry from ${name}${interest ? ` — ${interest}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        interest ? `Interested in: ${interest}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #222;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${interest ? `<p><strong>Interested in:</strong> ${escapeHtml(interest)}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
