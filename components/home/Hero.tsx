"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Award,
  Home,
  Stethoscope,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { doctor } from "@/data/doctor";
import { useCanParallax } from "@/hooks/useCanParallax";
import { whatsappLink } from "@/lib/utils";

const trustItems = [
  { id: "ht1", line1: "1000+", line2: "Surgeries", icon: "surgeries" },
  { id: "ht2", line1: "Years of", line2: "Experience", icon: "experience" },
  { id: "ht3", line1: "Same-Day", line2: "Discharge", icon: "discharge" },
] as const;

const trustIcons = {
  surgeries: Stethoscope,
  experience: Award,
  discharge: Home,
} as const;

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.79 14.24c-.24.68-1.42 1.3-1.97 1.38-.5.08-1.14.11-1.84-.12-.42-.13-.97-.32-1.67-.62-2.94-1.27-4.85-4.23-5-4.42-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.28.29-.12.57.16.28.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.09 1.66.78 1.95.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

function useParallax(depthPx: number, enabled: boolean) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });
  const tx = useTransform(springX, (v) => (enabled ? v * depthPx * 2 : 0));
  const ty = useTransform(springY, (v) => (enabled ? v * depthPx * 2 : 0));
  return { x, y, tx, ty };
}

export default function Hero() {
  const { canParallax, reduceMotion } = useCanParallax();
  const floatEnabled = !reduceMotion;
  const stageRef = useRef<HTMLDivElement>(null);

  const sceneLayer = useParallax(16, canParallax);
  const doctorLayer = useParallax(8, canParallax);
  const layers = [sceneLayer, doctorLayer];

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!canParallax || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    for (const layer of layers) {
      layer.x.set(px);
      layer.y.set(py);
    }
  };

  const onMouseLeave = () => {
    for (const layer of layers) {
      layer.x.set(0);
      layer.y.set(0);
    }
  };

  return (
    <section className="dark-section relative z-0 !overflow-visible">
      <h1 className="sr-only">
        {doctor.tagline} — {doctor.name}, Laparoscopic &amp; General Surgeon in
        Gujrat and Mandi Bahauddin
      </h1>
      <svg
        className="pointer-events-none absolute inset-x-0 top-10 hidden h-[65%] w-full opacity-35 lg:block"
        viewBox="0 0 1200 700"
        fill="none"
        aria-hidden
        preserveAspectRatio="none"
      >
        <path
          d="M520 40 C720 100, 880 220, 960 360 C1020 470, 1040 560, 980 640"
          stroke="url(#heroGoldCurve)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="heroGoldCurve" x1="520" y1="40" x2="980" y2="640">
            <stop stopColor="rgb(var(--gold-light))" stopOpacity="0.08" />
            <stop offset="0.5" stopColor="rgb(var(--gold))" stopOpacity="0.6" />
            <stop offset="1" stopColor="rgb(var(--gold-dark))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* ========== MOBILE / TABLET (< lg): mockup — text left, scene+doctor right ========== */}
      <div className="relative mx-auto w-full max-w-[1440px] overflow-visible px-4 sm:px-6 md:px-8 lg:hidden">
        <div className="relative min-h-[460px] pt-20 sm:min-h-[520px] sm:pt-24 md:min-h-[560px]">
          {/* Medical scene — behind doctor */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[18%] left-[28%] right-[-8%] z-10 w-auto opacity-90 sm:top-[16%] sm:left-[32%] sm:right-[-4%] sm:opacity-95"
          >
            <Image
              src={doctor.hero.medicalScene.src}
              alt={doctor.hero.medicalScene.alt}
              title={doctor.hero.medicalScene.alt}
              width={1024}
              height={682}
              className="h-auto w-full scale-110 object-contain object-right drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)] sm:scale-105"
              sizes="60vw"
              priority
            />
          </div>

          {/* Doctor — on top of medical scene; lower half under consultation cards */}
          <div className="pointer-events-none absolute bottom-8 left-[52%] right-[-14%] z-20 flex h-[95%] max-h-[540px] items-end justify-end sm:bottom-10 sm:left-[54%] sm:right-[-10%] sm:max-h-[620px] md:max-h-[660px]">
            <div
              className="absolute bottom-[12%] right-[8%] h-[45%] w-[85%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(20_80_90/0.5)_0%,transparent_70%)] blur-2xl"
              aria-hidden
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={doctor.portrait.src}
              alt={doctor.portrait.alt}
              className="relative -mb-28 block h-full w-full object-contain object-bottom drop-shadow-[0_28px_44px_rgba(0,0,0,0.5)] sm:-mb-32 md:-mb-36"
            />
          </div>

          {/* Text + CTAs — left side, clear of imagery */}
          <div className="relative z-30 w-[54%] max-w-[17.5rem] pb-8 pt-1 sm:w-[52%] sm:max-w-[22rem] sm:pb-10">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light sm:mb-3 sm:text-[11px] sm:tracking-[0.22em]">
              Laparoscopic &amp; General Surgery
            </p>

            <p className="font-serif text-[1.7rem] leading-[1.08] text-cream min-[380px]:text-[1.9rem] min-[420px]:text-[2.1rem] sm:text-[2.45rem] md:text-[2.7rem]">
              <span className="block">Precision Surgery.</span>
              <span className="mt-0.5 block text-cream">Faster Recovery.</span>
            </p>

            <p className="mt-2.5 text-[13px] leading-relaxed text-cream/75 min-[400px]:text-sm sm:mt-3.5 sm:text-base">
              Minimally invasive laparoscopic care with advanced techniques.
            </p>

            <div className="mt-3.5 flex max-w-[15.5rem] flex-col gap-2.5 sm:mt-5 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-3">
              <Button href="/book" variant="gold" size="sm" className="w-full justify-center sm:w-auto">
                Book Appointment
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                href={whatsappLink(
                  doctor.whatsapp,
                  `Assalamu Alaikum, I would like to speak with ${doctor.name}.`,
                )}
                variant="outline"
                onDark
                size="sm"
                className="w-full justify-center sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ========== DESKTOP (lg+): 3-column stage ========== */}
      <div
        ref={stageRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative mx-auto hidden w-full max-w-[1440px] grid-cols-[34%_42%_24%] items-end gap-0 px-12 pb-0 pt-28 lg:grid lg:min-h-[640px]"
      >
        <div className="relative z-30 max-w-[560px] self-center pb-20">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cream/90">
            Laparoscopic &amp; General Surgery
            <span
              className="h-px w-14 bg-gradient-to-r from-cream/45 to-transparent"
              aria-hidden
            />
          </p>

          {/* Visual twin of mobile H1 — CSS-hidden mobile H1 stays the document outline on small screens */}
          <p className="font-serif text-[2.9rem] leading-[1.1] text-cream xl:text-[3.2rem]">
            <span className="block">Precision Surgery.</span>
            <span className="mt-1 block text-gold-light">Faster Recovery.</span>
          </p>

          <p className="mt-5 max-w-[480px] text-lg leading-relaxed text-cream/75">
            {doctor.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/book" variant="gold">
              Book Appointment
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href={whatsappLink(
                doctor.whatsapp,
                `Assalamu Alaikum, I would like to speak with ${doctor.name}.`,
              )}
              variant="outline"
              onDark
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>

          <ul className="mt-8 grid max-w-[480px] grid-cols-3 divide-x divide-white/15">
            {trustItems.map((item) => {
              const Icon = trustIcons[item.icon];
              return (
                <li
                  key={item.id}
                  className="flex min-w-0 items-center gap-2 px-2.5 first:pl-0 last:pr-0"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <Icon className="h-2.5 w-2.5" aria-hidden />
                  </span>
                  <span className="min-w-0 whitespace-nowrap leading-tight">
                    <span className="block text-xs font-semibold text-cream">
                      {item.line1}
                    </span>
                    <span className="block text-[10px] text-cream/70">
                      {item.line2}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Medical scene behind copy + CTAs */}
        <div className="relative z-10 mb-0 w-full self-end lg:-mb-6 lg:-translate-x-10 lg:-translate-y-16 xl:-translate-x-14 xl:-translate-y-20">
          <motion.div
            className="relative w-[112%] origin-center scale-110"
            style={{ x: sceneLayer.tx, y: sceneLayer.ty }}
          >
            <motion.div
              animate={floatEnabled ? { y: [0, -10, 0] } : undefined}
              transition={
                floatEnabled
                  ? { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                  : undefined
              }
              className="relative"
            >
              <div
                className="pointer-events-none absolute inset-[-8%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(20_100_110/0.28)_0%,transparent_68%)] blur-xl"
                aria-hidden
              />
              <Image
                src={doctor.hero.medicalScene.src}
                alt={doctor.hero.medicalScene.alt}
                title={doctor.hero.medicalScene.alt}
                width={1024}
                height={682}
                className="relative h-auto w-full object-contain object-bottom drop-shadow-[0_24px_48px_rgba(201,161,91,0.2)]"
                sizes="45vw"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-20 flex h-[min(680px,92vh)] w-full items-end justify-end self-end lg:-mb-8 lg:translate-x-3 lg:-translate-y-2 xl:translate-x-5 xl:-translate-y-3">
          <div
            className="pointer-events-none absolute bottom-0 right-[5%] h-[55%] w-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(20_80_90/0.5)_0%,transparent_70%)] blur-2xl"
            aria-hidden
          />
          <motion.div
            className="relative flex h-full w-full items-end justify-end"
            style={{ x: doctorLayer.tx, y: doctorLayer.ty }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={doctor.portrait.src}
              alt={doctor.portrait.alt}
              className="block h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_28px_48px_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
