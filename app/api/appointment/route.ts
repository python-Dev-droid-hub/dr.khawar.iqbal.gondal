import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  appointmentSchema,
  normalizePakistaniPhone,
} from "@/lib/appointment-schema";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { doctor } from "@/data/doctor";

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = rateLimit({
      key: `appointment:${ip}`,
      limit: MAX_REQUESTS,
      windowMs: WINDOW_MS,
    });

    if (!limited.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many requests. Please wait a few minutes before trying again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.ceil((limited.resetAt - Date.now()) / 1000),
            ),
          },
        },
      );
    }

    const body = await request.json();
    const parsed = appointmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Please check the form fields and try again.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = {
      ...parsed.data,
      phone: normalizePakistaniPhone(parsed.data.phone),
      message: parsed.data.message || "",
    };

    if (data.website) {
      // Silent success for bots that fill the honeypot.
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured. Please try WhatsApp instead.",
        },
        { status: 500 },
      );
    }

    const from =
      process.env.APPOINTMENT_FROM_EMAIL || "onboarding@resend.dev";
    const to =
      process.env.APPOINTMENT_TO_EMAIL ||
      process.env.APPOINTMENT_FROM_EMAIL ||
      doctor.email;

    const resend = new Resend(apiKey);
    const subject = `Appointment request — ${data.name}`;
    const text = [
      `New appointment request for ${doctor.name}`,
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Preferred hospital: ${data.hospital}`,
      `Preferred date: ${data.date}`,
      `Message: ${data.message || "—"}`,
      "",
      `Submitted from IP: ${ip}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: `Dr Khawar Clinic <${from}>`,
      to: [to],
      replyTo: undefined,
      subject,
      text,
      html: `
        <h2>New appointment request</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Preferred hospital:</strong> ${escapeHtml(data.hospital)}</p>
        <p><strong>Preferred date:</strong> ${escapeHtml(data.date)}</p>
        <p><strong>Message:</strong> ${escapeHtml(data.message || "—")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Unable to send your request right now. Please try WhatsApp.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        name: data.name,
        phone: data.phone,
        hospital: data.hospital,
        date: data.date,
        message: data.message || "",
      },
    });
  } catch (error) {
    console.error("Appointment API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again or message on WhatsApp.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
