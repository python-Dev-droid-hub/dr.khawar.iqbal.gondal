"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/services/detail/StaticReveal";
import ServiceSection from "@/components/services/detail/ServiceSection";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

type ServicePreparationProps = {
  service: Service;
};

export default function ServicePreparation({ service }: ServicePreparationProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  if (!service.preparation.length) return null;

  return (
    <ServiceSection id="preparation" tone="cream">
      <Reveal>
        <SectionHeading
          eyebrow="Preparation"
          title="Preparing for Surgery"
          description="Use this checklist as a guide. Your clinic team will confirm what applies to you."
          align="left"
          className="mb-10 max-w-3xl"
        />
      </Reveal>

      <div className="space-y-6">
        {service.preparation.map((group) => (
          <Reveal key={group.title}>
            <div className="rounded-card border border-teal-950/8 bg-white/80 p-5 shadow-soft md:p-6">
              <h3 className="font-serif text-xl text-heading">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => {
                  const id = `${group.title}-${item}`;
                  const isOn = Boolean(checked[id]);
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() =>
                          setChecked((prev) => ({
                            ...prev,
                            [id]: !prev[id],
                          }))
                        }
                        className={cn(
                          "flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition",
                          isOn
                            ? "border-gold/40 bg-gold/10"
                            : "border-teal-950/8 bg-cream/60 hover:border-gold/30",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
                            isOn
                              ? "border-gold bg-gold text-teal-950"
                              : "border-teal-950/20 bg-white",
                          )}
                        >
                          {isOn ? (
                            <Check className="h-3.5 w-3.5" aria-hidden />
                          ) : null}
                        </span>
                        <span className="text-sm font-semibold text-heading">
                          {item}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </ServiceSection>
  );
}
