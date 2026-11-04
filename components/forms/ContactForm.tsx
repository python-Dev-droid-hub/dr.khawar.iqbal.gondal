"use client";

import AppointmentRequestForm from "@/components/forms/AppointmentRequestForm";

export default function ContactForm() {
  return (
    <AppointmentRequestForm
      idPrefix="contact-appointment"
      submitLabel="Send Appointment Request"
    />
  );
}
