import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Про нас",
  description:
    "KingNet — локальний інтернет-провайдер у Дунаївцях. Будуємо власну оптику і даємо зв'язок там, де його немає.",
};

const milestones = [
  { year: "2010", text: "Перша лінія в кількох будинках Дунаївців" },
  { year: "2014", text: "Розгортання повноцінної міської оптичної мережі" },
  { year: "2018", text: "Перші радіоточки 5 ГГц у селах району" },
  { year: "2022", text: "Перехід на GPON, гігабітні тарифи для всіх" },
  { year: "Сьогодні", text: "Понад 3 000 родин і десятки бізнесів з нами" },
];

export default function ProNasPage() {
  return (
    <>
      <Section
        eyebrow="Про нас"
        title={
          <>
            Локальний провайдер, який <br />
            <span className="text-gradient">любить свою справу</span>
          </>
        }
        description="Ми починали як невелика команда зв'язківців у Дунаївцях. Сьогодні KingNet — це власна оптична мережа, десятки точок 5 ГГц і тисячі задоволених сімей."
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5 text-[var(--color-fg-muted)]">
            <p>
              Ми віримо у просту ідею: той, хто дає клієнту кращу якість за
              чесну ціну, неминуче стає лідером у своїй ніші. Тому весь наш
              фокус — не на маркетингових обіцянках, а на тому, щоб інтернет
              у вашій оселі дійсно працював. Без скарг, без затримок, без
              обхідних шляхів.
            </p>
            <p>
              Ми не перепродуємо канал великих операторів. Ми будуємо власну
              мережу, обслуговуємо її своїми руками і відповідаємо за неї
              перед своїми сусідами — буквально.
            </p>
            <p>
              Якщо у вас раптом зник інтернет — ви не потрапляєте до
              call-центру у Києві. Ви телефонуєте людині, яка живе за два
              квартали від вас і знає вашу вулицю по імені.
            </p>
          </div>

          <ol className="space-y-4">
            {milestones.map((m) => (
              <li
                key={m.year}
                className="flex gap-5 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-5"
              >
                <span className="font-display text-2xl font-semibold text-gradient w-24 shrink-0">
                  {m.year}
                </span>
                <span className="text-[var(--color-fg-muted)]">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
