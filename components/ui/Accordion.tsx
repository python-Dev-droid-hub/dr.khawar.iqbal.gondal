"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  defaultOpenId?: string | null;
  allowMultiple?: boolean;
};

export default function Accordion({
  items,
  className,
  defaultOpenId,
  allowMultiple = false,
}: AccordionProps) {
  const initial = defaultOpenId === undefined ? items[0]?.id ?? null : defaultOpenId;
  const [openIds, setOpenIds] = useState<string[]>(initial ? [initial] : []);

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const isOpen = current.includes(id);
      if (allowMultiple) {
        return isOpen ? current.filter((item) => item !== id) : [...current, id];
      }
      return isOpen ? [] : [id];
    });
  };

  return (
    <div className={cn("divide-y divide-teal-950/10", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span className="font-serif text-lg text-heading md:text-xl">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-8 text-sm leading-relaxed text-muted md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
