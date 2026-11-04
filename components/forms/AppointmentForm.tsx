"use client";

import AppointmentRequestForm from "@/components/forms/AppointmentRequestForm";

export default function AppointmentForm() {
  return (
    <AppointmentRequestForm
      idPrefix="book-appointment"
      submitLabel="Submit Request"
    />
  );
}
