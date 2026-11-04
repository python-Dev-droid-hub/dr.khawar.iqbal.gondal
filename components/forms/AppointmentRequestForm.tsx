"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Loader2,
  MessageCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import {
  appointmentDefaultValues,
  appointmentSchema,
  buildAppointmentWhatsAppMessage,
  type AppointmentFormValues,
} from "@/lib/appointment-schema";
import { hospitals } from "@/data/hospitals";
import { doctor } from "@/data/doctor";
import { cn, whatsappLink } from "@/lib/utils";

type AppointmentRequestFormProps = {
  idPrefix?: string;
  submitLabel?: string;
  className?: string;
  showIntro?: boolean;
};

type SuccessPayload = {
  name: string;
  phone: string;
  hospital: string;
  date: string;
  message: string;
};

export default function AppointmentRequestForm({
  idPrefix = "appointment",
  submitLabel = "Submit Request",
  className,
  showIntro = true,
}: AppointmentRequestFormProps) {
  const reduceMotion = useReducedMotion();
  const [serverError, setServerError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<SuccessPayload | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: appointmentDefaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as {
        success?: boolean;
        error?: string;
        data?: SuccessPayload;
        fieldErrors?: Record<string, string[]>;
      };

      if (!response.ok || !payload.success) {
        setServerError(
          payload.error ||
            "Unable to send your request. Please try again or use WhatsApp.",
        );
        return;
      }

      const data = payload.data ?? {
        name: values.name,
        phone: values.phone,
        hospital: values.hospital,
        date: values.date,
        message: values.message || "",
      };

      setSuccessData(data);
      reset(appointmentDefaultValues);
    } catch {
      setServerError(
        "Network error. Check your connection or message us on WhatsApp.",
      );
    }
  });

  const whatsappHref = successData
    ? whatsappLink(
        doctor.whatsapp,
        buildAppointmentWhatsAppMessage(successData),
      )
    : whatsappLink(
        doctor.whatsapp,
        `Assalamu Alaikum, I would like to book a consultation with ${doctor.name}.`,
      );

  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait">
        {successData ? (
          <motion.div
            key="success"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            className="rounded-2xl border border-gold/30 bg-gradient-to-br from-cream to-cream-dark/80 p-6 text-center md:p-8"
            role="status"
          >
            <motion.span
              initial={reduceMotion ? false : { scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold-dark"
            >
              <CheckCircle2 className="h-8 w-8" aria-hidden />
            </motion.span>
            <h3 className="font-serif text-2xl text-heading">
              Request received
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Thank you, {successData.name}. The clinic will confirm your
              preferred slot soon. For a faster reply, message the same details
              on WhatsApp.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                href={whatsappHref}
                variant="gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Message us on WhatsApp
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setSuccessData(null)}
              >
                Send another request
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            className="flex w-full flex-col"
            noValidate
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {showIntro ? (
              <div className="mb-6 flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                  <CalendarDays className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-heading md:text-2xl">
                    Appointment request
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Shifa Hospital (weekdays) · Tarar Hospital (weekends)
                  </p>
                </div>
              </div>
            ) : null}

            <div
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
              aria-hidden
            >
              <label htmlFor={`${idPrefix}-website`}>Website</label>
              <input
                id={`${idPrefix}-website`}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Full name"
                htmlFor={`${idPrefix}-name`}
                error={errors.name?.message}
              >
                <input
                  id={`${idPrefix}-name`}
                  autoComplete="name"
                  className={inputClass(errors.name?.message)}
                  placeholder="Your full name"
                  {...register("name")}
                />
              </Field>

              <Field
                label="Phone"
                htmlFor={`${idPrefix}-phone`}
                error={errors.phone?.message}
              >
                <input
                  id={`${idPrefix}-phone`}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  className={inputClass(errors.phone?.message)}
                  placeholder="03XX XXXXXXX"
                  {...register("phone")}
                />
              </Field>

              <Field
                label="Preferred hospital"
                htmlFor={`${idPrefix}-hospital`}
                error={errors.hospital?.message}
              >
                <div className="relative">
                  <select
                    id={`${idPrefix}-hospital`}
                    className={cn(
                      inputClass(errors.hospital?.message),
                      "appearance-none pr-10",
                    )}
                    {...register("hospital")}
                  >
                    <option value="" disabled>
                      Select a location
                    </option>
                    {hospitals.map((hospital) => (
                      <option
                        key={hospital.id}
                        value={`${hospital.name}, ${hospital.city}`}
                      >
                        {hospital.name} — {hospital.city}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-teal-950/40">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Field>

              <Field
                label="Preferred date"
                htmlFor={`${idPrefix}-date`}
                error={errors.date?.message}
              >
                <input
                  id={`${idPrefix}-date`}
                  type="date"
                  className={inputClass(errors.date?.message)}
                  {...register("date")}
                />
              </Field>

              <Field
                label="Message (optional)"
                htmlFor={`${idPrefix}-message`}
                error={errors.message?.message}
                className="sm:col-span-2"
              >
                <textarea
                  id={`${idPrefix}-message`}
                  rows={3}
                  className={cn(
                    inputClass(errors.message?.message),
                    "min-h-[84px] resize-none",
                  )}
                  placeholder="Brief symptoms or preferred time of day"
                  {...register("message")}
                />
              </Field>
            </div>

            {serverError ? (
              <p
                className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700"
                role="alert"
              >
                {serverError}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                variant="gold"
                size="md"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  <>
                    {submitLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </>
                )}
              </Button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 text-sm font-medium text-teal-900/70 transition hover:text-teal-950"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden />
                Or WhatsApp directly
              </a>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-white/90 px-3.5 py-2.5 text-sm text-teal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition placeholder:text-teal-950/35",
    "focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20",
    error
      ? "border-red-400 focus:border-red-500 focus:ring-red-200/60"
      : "border-teal-950/10 hover:border-teal-950/20",
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("block text-sm", className)}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[0.8rem] font-semibold tracking-wide text-teal-950"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
