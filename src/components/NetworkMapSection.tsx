import { MapPin, Radio, Server } from "lucide-react";
import { Section } from "./ui/Section";

type Point = {
  cx: number;
  cy: number;
  label: string;
  type: "hub" | "tower" | "node";
};

const POINTS: Point[] = [
  { cx: 380, cy: 240, label: "Дунаївці · HUB", type: "hub" },
  { cx: 280, cy: 180, label: "Смотрич", type: "tower" },
  { cx: 470, cy: 170, label: "Маків", type: "tower" },
  { cx: 540, cy: 290, label: "Голозубинці", type: "node" },
  { cx: 200, cy: 290, label: "Залісці", type: "node" },
  { cx: 330, cy: 340, label: "Лисець", type: "node" },
  { cx: 420, cy: 360, label: "Балин", type: "node" },
  { cx: 180, cy: 130, label: "Зеленче", type: "node" },
  { cx: 580, cy: 130, label: "Чаньків", type: "node" },
];

export function NetworkMapSection() {
  return (
    <Section
      id="network-map"
      eyebrow="Карта мережі"
      title={
        <>
          Понад <span className="text-gradient">85 км оптики</span> у Дунаєвецькій громаді
        </>
      }
      description="Наш дата-центр у Дунаївцях з'єднаний радіорелейними каналами та оптоволокном з кожним селом. Кожна точка на цій карті — це активний вузол мережі."
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-2">
            <svg
              viewBox="0 0 720 480"
              className="h-auto w-full"
              role="img"
              aria-label="Схематична карта мережі KingNet у Дунаєвецькій громаді"
            >
              <defs>
                <radialGradient id="mapBg" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="rgba(91,140,255,0.18)" />
                  <stop offset="70%" stopColor="rgba(17,20,42,0.6)" />
                  <stop offset="100%" stopColor="rgba(7,8,15,0.95)" />
                </radialGradient>
                <linearGradient id="lineGradMap" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5b8cff" />
                  <stop offset="100%" stopColor="#b96bff" />
                </linearGradient>
                <radialGradient id="hubGlowMap">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="40%" stopColor="#b96bff" />
                  <stop offset="100%" stopColor="rgba(185,107,255,0)" />
                </radialGradient>
                <radialGradient id="nodeGlowMap">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="40%" stopColor="#5b8cff" />
                  <stop offset="100%" stopColor="rgba(91,140,255,0)" />
                </radialGradient>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="0.6"
                  />
                </pattern>
              </defs>

              <rect width="720" height="480" fill="url(#mapBg)" />
              <rect width="720" height="480" fill="url(#grid)" />

              {/* abstract region outline */}
              <path
                d="M 90 110 Q 160 60 280 80 T 540 90 Q 640 120 640 200 T 620 360 Q 540 430 400 410 T 180 380 Q 80 320 90 240 Z"
                fill="rgba(91,140,255,0.05)"
                stroke="rgba(122,163,255,0.25)"
                strokeWidth="1.2"
                strokeDasharray="4 6"
              />

              {/* connections from hub */}
              {POINTS.filter((p) => p.type !== "hub").map((p, i) => {
                const hub = POINTS[0];
                return (
                  <g key={`l-${i}`}>
                    <line
                      x1={hub.cx}
                      y1={hub.cy}
                      x2={p.cx}
                      y2={p.cy}
                      stroke="url(#lineGradMap)"
                      strokeWidth="1.2"
                      opacity="0.55"
                    />
                    <circle r="3" fill="#7aa3ff">
                      <animateMotion
                        dur={`${3 + (i % 4)}s`}
                        repeatCount="indefinite"
                        path={`M ${hub.cx} ${hub.cy} L ${p.cx} ${p.cy}`}
                      />
                    </circle>
                  </g>
                );
              })}

              {/* points */}
              {POINTS.map((p) => {
                const isHub = p.type === "hub";
                const isTower = p.type === "tower";
                return (
                  <g key={p.label}>
                    <circle
                      cx={p.cx}
                      cy={p.cy}
                      r={isHub ? 26 : isTower ? 18 : 13}
                      fill={isHub ? "url(#hubGlowMap)" : "url(#nodeGlowMap)"}
                      opacity="0.75"
                    >
                      <animate
                        attributeName="r"
                        values={
                          isHub
                            ? "26;34;26"
                            : isTower
                            ? "18;24;18"
                            : "13;17;13"
                        }
                        dur="2.6s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.75;0.35;0.75"
                        dur="2.6s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx={p.cx}
                      cy={p.cy}
                      r={isHub ? 7 : isTower ? 5 : 4}
                      fill={isHub ? "#fff" : isTower ? "#cfdcff" : "#9ab5ff"}
                    />
                    <text
                      x={p.cx}
                      y={p.cy + (isHub ? 30 : 22)}
                      textAnchor="middle"
                      fontSize={isHub ? "13" : "11"}
                      fontWeight={isHub ? "600" : "400"}
                      fill={isHub ? "#fff" : "#cfdcff"}
                      fontFamily="system-ui, sans-serif"
                    >
                      {p.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-5">
          <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-5">
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Server className="h-5 w-5 text-black" strokeWidth={2.4} />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">Центральний вузол</p>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                Дата-центр у Дунаївцях з резервним живленням, двома незалежними
                ап-лінками та цілодобовим моніторингом.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[var(--color-border)] bg-white/[0.04] text-[var(--color-primary)]">
              <Radio className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">Радіоретранслятори</p>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                7 веж 5 ГГц з прямою видимістю до сіл, де ще немає оптики.
                Стабільність 99,9% навіть у негоду.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[var(--color-border)] bg-white/[0.04] text-[var(--color-accent)]">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">24 населених пункти</p>
              <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                Покриваємо Дунаївці та більшість сіл громади. Не бачите свого
                села? Залиште заявку — розглянемо точково.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
