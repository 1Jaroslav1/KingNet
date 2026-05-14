import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Документи",
  description:
    "Публічний договір, регламент якості послуг, форми заяв та інші документи KingNet.",
};

const docs = [
  {
    title: "Публічний договір про надання послуг",
    description:
      "Основні умови співпраці між абонентом та KingNet: предмет, права та обов'язки сторін, порядок розрахунків.",
    href: "#",
  },
  {
    title: "Регламент якості послуг",
    description:
      "Параметри з'єднання, час реакції на звернення, порядок перерахунків при перебоях.",
    href: "#",
  },
  {
    title: "Заява про припинення / зміну тарифу",
    description:
      "Шаблон заяви для офлайн-візиту до офісу або відправки на email.",
    href: "#",
  },
  {
    title: "Політика обробки персональних даних",
    description:
      "Як ми збираємо, зберігаємо й захищаємо ваші персональні дані.",
    href: "#",
  },
];

export default function DokumentyPage() {
  return (
    <Section
      eyebrow="Документи"
      title={
        <>
          Усе прозоро — <span className="text-gradient">читайте перед стартом</span>
        </>
      }
      description="Ми не приховуємо дрібний шрифт. Усі документи доступні для завантаження, а у разі питань — телефонуйте нам."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {docs.map((d) => (
          <li key={d.title}>
            <a
              href={d.href}
              className="group flex h-full gap-5 rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:bg-white/[0.04]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[var(--color-border)] bg-white/[0.03] text-[var(--color-primary)]">
                <FileText className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
                  {d.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)]">
                  Завантажити PDF
                  <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
