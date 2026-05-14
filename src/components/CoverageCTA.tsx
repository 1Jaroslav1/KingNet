import { ButtonLink } from "./ui/Button";
import { MapPin } from "lucide-react";

export function CoverageCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="glass glow-border relative overflow-hidden rounded-[32px] p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(185,107,255,0.25), transparent 60%)",
            }}
          />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-widest text-[var(--color-fg-muted)]">
                <MapPin className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                Карта покриття
              </span>
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Перевірте свою адресу
                <br />
                <span className="text-gradient">за 30 секунд</span>
              </h2>
              <p className="max-w-md text-[var(--color-fg-muted)]">
                Дунаївці у повному покритті оптикою. Понад 40 населених
                пунктів району вже доступні через Wi-Fi 5 ГГц — і список росте
                щомісяця.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/pokryttia" size="lg">
                  Відкрити карту
                </ButtonLink>
                <ButtonLink
                  href="/kontakty#zayavka"
                  variant="secondary"
                  size="lg"
                >
                  Запитати оператора
                </ButtonLink>
              </div>
            </div>

            <div
              aria-hidden
              className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
            >
              <MapPattern />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-black/50 px-4 py-3 backdrop-blur">
                <Pulse color="#5b8cff" />
                <span className="text-sm">Активні точки доступу: 42</span>
                <span className="ml-auto text-xs text-[var(--color-fg-muted)]">
                  оновлено сьогодні
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pulse({ color }: { color: string }) {
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
        style={{ background: color }}
      />
      <span
        className="relative inline-flex h-2.5 w-2.5 rounded-full"
        style={{ background: color }}
      />
    </span>
  );
}

function MapPattern() {
  // Decorative SVG: stylised network of nodes for the coverage card.
  const nodes = [
    [25, 30], [55, 20], [82, 40], [40, 55], [70, 65], [20, 75],
    [55, 80], [85, 78], [10, 50], [50, 38], [65, 30], [33, 18],
  ] as const;
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(91,140,255,0.18)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <linearGradient id="line" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#5b8cff" />
          <stop offset="100%" stopColor="#b96bff" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#bg)" />
      {nodes.map(([x, y], i) =>
        nodes.slice(i + 1).map(([x2, y2], j) => {
          const d = Math.hypot(x - x2, y - y2);
          if (d > 28) return null;
          return (
            <line
              key={`${i}-${j}`}
              x1={x}
              y1={y}
              x2={x2}
              y2={y2}
              stroke="url(#line)"
              strokeWidth={0.18}
              opacity={0.55}
            />
          );
        })
      )}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={1.4} fill="#fff" />
          <circle cx={x} cy={y} r={3} fill="#5b8cff" opacity={0.18} />
        </g>
      ))}
    </svg>
  );
}
