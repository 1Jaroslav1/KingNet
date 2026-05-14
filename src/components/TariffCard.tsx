import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Tariff } from "@/lib/tariffs";

export function TariffCard({ tariff }: { tariff: Tariff }) {
  const popular = tariff.popular;
  return (
    <article
      className={`relative flex h-full flex-col gap-6 rounded-3xl p-6 md:p-7 ${
        popular
          ? "glow-border bg-[radial-gradient(120%_120%_at_0%_0%,rgba(91,140,255,0.18),rgba(15,18,40,0.6))]"
          : "border border-[var(--color-border)] bg-white/[0.02]"
      }`}
    >
      {popular && tariff.badge && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest text-black"
          style={{ background: "var(--gradient-primary)" }}
        >
          {tariff.badge}
        </span>
      )}

      <header className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--color-fg-subtle)]">
            {tariff.type === "fiber" ? "Оптоволокно" : "Wi-Fi 5 ГГц"}
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold">
            {tariff.name}
          </h3>
        </div>
        <div className="text-right">
          <p className="font-display text-4xl font-bold leading-none">
            {tariff.speed}
            <span className="ml-1 text-sm font-normal text-[var(--color-fg-muted)]">
              Мбіт/с
            </span>
          </p>
        </div>
      </header>

      <div className="flex items-baseline gap-2 border-y border-[var(--color-border)] py-5">
        <span className="font-display text-5xl font-bold tracking-tight">
          {tariff.price}
        </span>
        <span className="text-sm text-[var(--color-fg-muted)]">грн / міс</span>
      </div>

      <ul className="flex flex-1 flex-col gap-3 text-sm">
        {tariff.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Check className="h-3 w-3 text-black" strokeWidth={3} />
            </span>
            <span className="text-[var(--color-fg-muted)]">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/kontakty?tariff=${tariff.id}#zayavka`}
        className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
          popular
            ? "bg-white text-black hover:scale-[1.02]"
            : "border border-[var(--color-border-strong)] text-white hover:bg-white/[0.06]"
        }`}
      >
        Підключити
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
