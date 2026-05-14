import { ArrowRight, Gauge, ShieldCheck, Wifi } from "lucide-react";
import { ButtonLink } from "./ui/Button";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-7 lg:col-span-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-fg-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] animate-pulse-glow" />
              Зараз підключаємо за 24 години
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              Інтернет, який <br />
              <span className="text-gradient">просто працює</span>.
              <br />
              Кожен день.
            </h1>

            <p className="max-w-xl text-lg text-[var(--color-fg-muted)] md:text-xl">
              Власна оптоволоконна мережа у Дунаївцях, Wi-Fi 5 ГГц у селах
              району та підтримка, яка відповідає не за 30 хвилин очікування,
              а за один гудок.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/taryfy" size="lg">
                Обрати тариф
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/pokryttia" variant="secondary" size="lg">
                Перевірити покриття
              </ButtonLink>
            </div>

            <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-6 md:max-w-lg">
              <Stat value="1 Гбіт" label="до" />
              <Stat value="99,9%" label="час безперебійної роботи" />
              <Stat value="<1 год" label="середня реакція підтримки" />
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <SpeedCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-semibold md:text-3xl">
        {value}
      </dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-[var(--color-fg-subtle)]">
        {label}
      </dd>
    </div>
  );
}

function SpeedCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[36px] bg-[radial-gradient(circle_at_30%_20%,rgba(91,140,255,0.35),transparent_60%)] blur-2xl" />

      <div className="glass glow-border relative rounded-[28px] p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--color-fg-subtle)]">
              Тестування швидкості
            </p>
            <p className="mt-1 font-display text-lg">Тариф «Гігабіт»</p>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
            <Gauge className="h-5 w-5 text-[var(--color-primary)]" />
          </span>
        </div>

        <div className="my-6 grid grid-cols-2 gap-4">
          <SpeedTile label="Завантаження" value="942" unit="Мбіт/с" />
          <SpeedTile label="Передача" value="938" unit="Мбіт/с" />
        </div>

        <div className="space-y-3">
          <Row icon={<Wifi className="h-4 w-4" />} label="Пінг" value="3 мс" />
          <Row
            icon={<ShieldCheck className="h-4 w-4" />}
            label="Стабільність"
            value="99,98%"
          />
        </div>

        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full w-[94%] rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
        </div>
        <p className="mt-2 text-xs text-[var(--color-fg-subtle)]">
          Середня завантаженість каналу за 24 години
        </p>
      </div>

      <div className="glass absolute -bottom-6 -left-6 hidden rounded-2xl p-4 md:block">
        <p className="text-xs text-[var(--color-fg-muted)]">Активних клієнтів</p>
        <p className="font-display text-2xl font-semibold">3 200+</p>
      </div>
    </div>
  );
}

function SpeedTile({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-4">
      <p className="text-xs text-[var(--color-fg-subtle)]">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold leading-none">
        {value}
        <span className="ml-1 text-sm font-normal text-[var(--color-fg-muted)]">
          {unit}
        </span>
      </p>
    </div>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 text-[var(--color-fg-muted)]">
        <span className="text-[var(--color-primary)]">{icon}</span>
        {label}
      </span>
      <span className="text-white">{value}</span>
    </div>
  );
}
