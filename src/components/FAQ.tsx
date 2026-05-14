"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Section } from "./ui/Section";
import { faq } from "@/lib/faq";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="Питання та відповіді"
      title="Коротко про головне"
      description="Не знайшли відповіді? Зателефонуйте — ми справді відповідаємо живими голосами."
    >
      <div className="mx-auto max-w-3xl divide-y divide-[var(--color-border)] rounded-3xl border border-[var(--color-border)] bg-white/[0.02]">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-lg font-medium">
                  {item.q}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-[var(--color-fg-muted)] transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-white" : ""
                  }`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <p className="px-6 pb-6 leading-relaxed text-[var(--color-fg-muted)]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
