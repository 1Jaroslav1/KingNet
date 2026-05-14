import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { TariffCard } from "@/components/TariffCard";
import { tariffs } from "@/lib/tariffs";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Тарифи",
  description:
    "Тарифи KingNet: оптоволокно до 1 Гбіт/с та Wi-Fi 5 ГГц. Безлімітний трафік, чесні ціни, локальна підтримка.",
};

export default function TaryfyPage() {
  const fiber = tariffs.filter((t) => t.type === "fiber");
  const wifi = tariffs.filter((t) => t.type === "wifi");
  return (
    <>
      <Section
        eyebrow="Тарифи"
        title={
          <>
            Виберіть швидкість, а решту{" "}
            <span className="text-gradient">зробимо ми</span>
          </>
        }
        description="Усі тарифи безлімітні. Жодних обмежень за обсягом трафіку чи зменшення швидкості ввечері. Платите рівно за те, що бачите тут."
      >
        <div>
          <h3 className="font-display text-xl font-semibold text-white">
            Оптоволокно
          </h3>
          <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
            Симетрична швидкість, низький пінг, готовий для гри і стрімінгу.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {fiber.map((t) => (
              <TariffCard key={t.id} tariff={t} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-white">
            Wi-Fi 5 ГГц
          </h3>
          <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
            Радіоканал для приватного сектору й сіл, куди ще не дотягнулась
            оптика.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {wifi.map((t) => (
              <TariffCard key={t.id} tariff={t} />
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-[var(--color-fg-subtle)]">
          Вартість одноразового підключення: 1400 грн (безкоштовно при річній
          оплаті оптоволоконних тарифів «Дім» та «Гігабіт»). Деталі — у
          публічному договорі на сторінці «Документи».
        </p>
      </Section>
      <ContactCTA />
    </>
  );
}
