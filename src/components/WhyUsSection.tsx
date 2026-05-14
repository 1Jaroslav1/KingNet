import { Section } from "./ui/Section";
import { Zap, Heart, Wrench, Coins } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Власна оптика",
    text: "Не перепродаємо канал — будуємо мережу своїми руками. Менше посередників = менше точок поломки.",
  },
  {
    icon: Heart,
    title: "Локальна команда",
    text: "Ми ваші сусіди. Знаємо кожну вулицю, кожен двір — і відповідаємо за з'єднання, як за своє власне.",
  },
  {
    icon: Wrench,
    title: "Швидкий ремонт",
    text: "У більшості випадків виїжджаємо у день звернення. Запасне обладнання — на складі поруч.",
  },
  {
    icon: Coins,
    title: "Чесна ціна",
    text: "Тариф, який ви бачите на сайті — це той, що буде у договорі. Жодних «акційних» цін на перший місяць.",
  },
];

export function WhyUsSection() {
  return (
    <Section
      id="why"
      eyebrow="Чому ми"
      title={
        <>
          Маленький провайдер з <span className="text-gradient">великими стандартами</span>
        </>
      }
      description="Ми не намагаємось бути найбільшими — ми хочемо бути тими, кого ви рекомендуєте сусідам."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {reasons.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex gap-5 rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-6 md:p-8"
          >
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden
            >
              <Icon className="h-5 w-5 text-black" strokeWidth={2.4} />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
