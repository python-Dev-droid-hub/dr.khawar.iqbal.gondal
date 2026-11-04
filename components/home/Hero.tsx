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
    <section className="dark-section relative !overflow-visible">
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

      {/* 3 columns: text | medical scene | doctor */}
      <div
        ref={stageRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-6 pb-0 pt-24 lg:min-h-[640px] lg:grid-cols-[34%_42%_24%] lg:items-end lg:gap-0 lg:px-12 lg:pt-28"
      >
        {/* LEFT — text */}
        <div className="relative z-20 max-w-[560px] pb-12 lg:self-center lg:pb-20">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/90 sm:text-xs sm:tracking-[0.24em]">
            Laparoscopic &amp; General Surgery
            <span
              className="hidden h-px w-14 bg-gradient-to-r from-cream/45 to-transparent sm:block"
              aria-hidden
            />
          </p>

          <h1 className="font-serif text-[2.1rem] leading-[1.1] sm:text-[2.6rem] lg:text-[2.9rem] xl:text-[3.2rem]">
            <span className="block text-cream">Precision Surgery.</span>
            <span className="mt-1 block text-gold-light">Faster Recovery.</span>
          </h1>

          <p className="mt-5 max-w-[480px] text-base leading-relaxed text-cream/75 md:text-lg">
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
                  className="flex min-w-0 items-center gap-1.5 px-1.5 first:pl-0 last:pr-0 sm:gap-2 sm:px-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
                    <Icon className="h-2.5 w-2.5" aria-hidden />
                  </span>
                  <span className="min-w-0 whitespace-nowrap leading-tight">
                    <span className="block text-[10px] font-semibold text-cream sm:text-xs">
                      {item.line1}
                    </span>
                    <span className="block text-[9px] text-cream/70 sm:text-[10px]">
                      {item.line2}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* MIDDLE — medical scene (above contact card; nudged up + left) */}
        <div className="relative z-30 mx-auto mb-0 w-full max-w-lg self-end lg:mx-0 lg:-mb-6 lg:-translate-x-24 lg:-translate-y-20 lg:max-w-none xl:-translate-x-28 xl:-translate-y-24">
          <motion.div
            className="relative mx-auto w-full origin-center scale-105 lg:w-[112%] lg:scale-110"
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
                width={1024}
                height={682}
                className="relative h-auto w-full object-contain object-bottom drop-shadow-[0_24px_48px_rgba(201,161,91,0.2)]"
                sizes="(min-width: 1024px) 45vw, 95vw"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT — full doctor, bottom flush with hero (meets contact card, no gap) */}
        <div className="relative z-30 mx-auto flex h-[500px] w-full max-w-[320px] items-end justify-center self-end sm:h-[560px] lg:mx-0 lg:-mb-14 lg:h-[min(680px,92vh)] lg:max-w-none lg:translate-x-3 lg:-translate-y-4 lg:justify-end xl:translate-x-5 xl:-translate-y-5">
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 h-[55%] w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(20_80_90/0.5)_0%,transparent_70%)] blur-2xl lg:left-auto lg:right-[5%] lg:translate-x-0"
            aria-hidden
          />
          <motion.div
            className="relative flex h-full w-full items-end justify-center lg:justify-end"
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
