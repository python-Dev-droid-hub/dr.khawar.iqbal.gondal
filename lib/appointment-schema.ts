import { z } from "zod";

/** Accepts 03XXXXXXXXX, +923XXXXXXXXX, 923XXXXXXXXX, or spaced/dashed variants. */
export const pakistaniPhoneRegex = /^(?:\+?92|0)?3\d{9}$/;

export function normalizePakistaniPhone(phone: string) {
  return phone.replace(/[\s()-]/g, "");
}

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .refine(
      (value) => pakistaniPhoneRegex.test(normalizePakistaniPhone(value)),
      {
        message: "Enter a valid Pakistani mobile number (e.g. 03XX XXXXXXX).",
      },
    ),
  hospital: z.string().trim().min(1, "Select a preferred hospital."),
  date: z.string().trim().min(1, "Choose a preferred date."),
  message: z
    .string()
    .trim()
    .max(500, "Please keep your message under 500 characters.")
    .optional()
    .or(z.literal("")),
  /** Honeypot — must stay empty. */
  website: z.string().max(0, "Invalid submission.").optional().or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const appointmentDefaultValues: AppointmentFormValues = {
  name: "",
  phone: "",
  hospital: "",
  date: "",
  message: "",
  website: "",
};

export function buildAppointmentWhatsAppMessage(data: {
  name: string;
  phone: string;
  hospital: string;
  date: string;
  message?: string;
}) {
  return [
    "Assalamu Alaikum, I would like to book a consultation.",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Preferred hospital: ${data.hospital}`,
    `Preferred date: ${data.date}`,
    data.message ? `Message: ${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
