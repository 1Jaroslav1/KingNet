import { Section } from "./ui/Section";
import { TariffCard } from "./TariffCard";
import { tariffs } from "@/lib/tariffs";
import { ButtonLink } from "./ui/Button";

export function TariffsPreview() {
  const featured = tariffs.filter((t) => t.type === "fiber").slice(0, 3);
  return (
    <Section
      id="tariffs"
      eyebrow="Тарифи"
      title={
        <>
          Просто. Чесно. <span className="text-gradient">Безлімітно.</span>
        </>
      }
      description="Жодних прихованих умов чи зменшення швидкості після умовного гігабайта. Платіть тільки за швидкість, яка вам потрібна."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((t) => (
          <TariffCard key={t.id} tariff={t} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="/taryfy" variant="secondary">
          Усі тарифи, включно з Wi-Fi 5 ГГц
        </ButtonLink>
      </div>
    </Section>
  );
}
