import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactCTA } from "@/components/ContactCTA";
import { Check, Radio, Cable } from "lucide-react";

export const metadata: Metadata = {
  title: "Карта покриття",
  description:
    "Перевірте, чи доступний оптоволоконний інтернет KingNet за вашою адресою у Дунаївцях та районі.",
};

const fiberStreets = [
  "Шевченка", "Франка", "Київська", "Михайлівська", "Грушевського",
  "Європейська", "Кам'янецька", "Велика Підгірна", "Лесі Українки",
  "Соборна", "Молодіжна", "Стуса",
];

const wifiVillages = [
  "Залісці", "Зеленче", "Ярова Слобідка", "Маків", "Чанькова",
  "Сприсівка", "Велика Кужелева", "Дем'янківці", "Слобідка-Чанькова",
  "Голозубинці", "Антонівка", "Гута Чугорська",
];

export default function PokryttiaPage() {
  return (
    <>
      <Section
        eyebrow="Карта покриття"
        title={
          <>
            Понад 50 населених пунктів{" "}
            <span className="text-gradient">уже з KingNet</span>
          </>
        }
        description="Дунаївці закриті оптикою повністю. Села району ми поступово під'єднуємо радіоканалом 5 ГГц — і список росте щомісяця."
      >
        <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)]">
          <iframe
            title="Карта покриття KingNet"
            src="https://www.openstreetmap.org/export/embed.html?bbox=26.7%2C48.78%2C27.05%2C48.96&amp;layer=mapnik&amp;marker=48.890%2C26.857"
            className="h-[420px] w-full md:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-7">
            <div className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Cable className="h-5 w-5 text-black" strokeWidth={2.4} />
              </span>
              <h3 className="font-display text-xl font-semibold">
                Оптоволокно у Дунаївцях
              </h3>
            </div>
            <ul className="mt-5 grid gap-2 text-sm text-[var(--color-fg-muted)] sm:grid-cols-2">
              {fiberStreets.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--color-success)]" />
                  вул. {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-[var(--color-fg-subtle)]">
              Це лише частина переліку — у місті покриття практично 100%.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-7">
            <div className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Radio className="h-5 w-5 text-black" strokeWidth={2.4} />
              </span>
              <h3 className="font-display text-xl font-semibold">
                Wi-Fi 5 ГГц у селах
              </h3>
            </div>
            <ul className="mt-5 grid gap-2 text-sm text-[var(--color-fg-muted)] sm:grid-cols-2">
              {wifiVillages.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--color-success)]" />
                  с. {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-[var(--color-fg-subtle)]">
              Не побачили свого села? Зателефонуйте — можливо, ми вже поруч.
            </p>
          </div>
        </div>
      </Section>
      <ContactCTA />
    </>
  );
}
