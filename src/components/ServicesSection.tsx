import { Cable, Radio, HeadphonesIcon, Building2 } from "lucide-react";
import { Section } from "./ui/Section";

const services = [
  {
    icon: Cable,
    title: "Оптоволокно до квартири",
    desc: "GPON-мережа з симетричною швидкістю до 1 Гбіт/с — для дому, де гра, стрім і робота не змагаються за канал.",
  },
  {
    icon: Radio,
    title: "Wi-Fi 5 ГГц у селах",
    desc: "Радіоканал там, де оптика ще не дійшла. Стабільне з'єднання навіть у віддалених куточках Дунаєвецької громади.",
  },
  {
    icon: HeadphonesIcon,
    title: "Підтримка 7 днів на тиждень",
    desc: "Локальна команда, яка відповідає швидко і говорить людською мовою — без скриптів і нескінченного очікування.",
  },
  {
    icon: Building2,
    title: "Рішення для бізнесу",
    desc: "Виділені канали, статичні IP, SLA та відповідальний інженер для офісів, магазинів і закладів.",
  },
];

export function ServicesSection() {
  return (
    <Section
      id="services"
      eyebrow="Що ми робимо"
      title={
        <>
          Інтернет, зібраний з{" "}
          <span className="text-gradient">правильних компонентів</span>
        </>
      }
      description="Власна інфраструктура, локальна команда і чесні умови. Ми не перепродуємо чужий канал — ми будуємо свій."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group relative flex flex-col gap-4 rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:bg-white/[0.04]"
          >
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white/[0.03] text-[var(--color-primary)] transition-colors group-hover:text-white"
              aria-hidden
            >
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
              {desc}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
