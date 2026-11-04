"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

type ServiceRecoveryProps = {
  service: Service;
};

export default function ServiceRecovery({ service }: ServiceRecoveryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!service.recovery.length) return null;

  const active = service.recovery[activeIndex] ?? service.recovery[0];

  return (
    <ServiceSection id="recovery" tone="dark">
      <Reveal>
        <SectionHeading
          eyebrow="Recovery"
          title="Recovery Timeline"
          description="Typical milestones — your plan may differ based on the procedure and your health."
          align="left"
          light
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="-mx-1 overflow-x-auto px-1">
          <div className="flex w-max gap-2">
            {service.recovery.map((tab, index) => (
              <button
                key={tab.period}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-pill px-4 py-2 text-sm font-medium transition",
                  activeIndex === index
                    ? "bg-gold text-teal-950"
                    : "bg-white/10 text-cream/80 hover:bg-white/15",
                )}
              >
                {tab.period}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-5 max-w-[70ch] text-sm leading-[1.7] text-cream/75 md:text-base">
          {active.summary}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Activity", value: active.activity },
            { label: "Diet", value: active.diet },
            { label: "Care", value: active.care },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-card border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-cream/80 md:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {(service.dos.length || service.donts.length) && (
        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {service.dos.length ? (
              <div className="rounded-card border border-white/10 bg-white/5 p-5 md:p-6">
                <h3 className="font-serif text-xl text-cream">Do</h3>
                <ul className="mt-4 space-y-2">
                  {service.dos.map((item) => (
                    <li key={item} className="text-sm leading-[1.7] text-cream/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {service.donts.length ? (
              <div className="rounded-card border border-gold/25 bg-gold/10 p-5 md:p-6">
                <h3 className="font-serif text-xl text-cream">Don&apos;t</h3>
                <ul className="mt-4 space-y-2">
                  {service.donts.map((item) => (
                    <li key={item} className="text-sm leading-[1.7] text-cream/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Reveal>
      )}
    </ServiceSection>
  );
}
