"use client";

import { useEffect, useRef, useState } from "react";

type Node = {
  id: number;
  lat: number;
  lon: number;
  size: number;
  pulse: number;
};

const NODES: Node[] = [
  { id: 1, lat: 48, lon: 26, size: 1.6, pulse: 0 },
  { id: 2, lat: 50, lon: 30, size: 1.2, pulse: 0.4 },
  { id: 3, lat: 49, lon: 24, size: 1.0, pulse: 0.8 },
  { id: 4, lat: 46, lon: 30, size: 1.0, pulse: 1.2 },
  { id: 5, lat: 52, lon: 21, size: 0.9, pulse: 1.6 },
  { id: 6, lat: 40, lon: 28, size: 1.1, pulse: 2.0 },
  { id: 7, lat: 55, lon: 37, size: 0.9, pulse: 2.4 },
  { id: 8, lat: 35, lon: 18, size: 0.8, pulse: 2.8 },
  { id: 9, lat: 60, lon: 10, size: 0.9, pulse: 0.2 },
  { id: 10, lat: 30, lon: 0, size: 0.8, pulse: 1.0 },
  { id: 11, lat: 20, lon: 40, size: 0.9, pulse: 1.5 },
  { id: 12, lat: -10, lon: -20, size: 0.8, pulse: 2.2 },
  { id: 13, lat: 65, lon: -20, size: 0.8, pulse: 0.6 },
  { id: 14, lat: 10, lon: 80, size: 0.9, pulse: 1.8 },
];

const CONNECTIONS: [number, number][] = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 7],
  [4, 6],
  [5, 9],
  [3, 8],
  [6, 11],
  [7, 9],
  [10, 8],
  [1, 11],
  [9, 13],
  [11, 14],
];

const R = 110;

function project(lat: number, lon: number, rotY: number, rotX: number) {
  const φ = (lat * Math.PI) / 180;
  const λ = ((lon + rotY) * Math.PI) / 180;
  const cosX = Math.cos((rotX * Math.PI) / 180);
  const sinX = Math.sin((rotX * Math.PI) / 180);

  const x0 = R * Math.cos(φ) * Math.sin(λ);
  const y0 = R * Math.sin(φ);
  const z0 = R * Math.cos(φ) * Math.cos(λ);

  const y = y0 * cosX - z0 * sinX;
  const z = y0 * sinX + z0 * cosX;

  return { x: x0, y, z };
}

export function InteractiveGlobe() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [t, setT] = useState(0);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setT((prev) => prev + 0.25);
      setMouse((m) => ({
        x: m.x + (targetRef.current.x - m.x) * 0.08,
        y: m.y + (targetRef.current.y - m.y) * 0.08,
      }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      targetRef.current = {
        x: Math.max(-1.2, Math.min(1.2, dx * 2)),
        y: Math.max(-1.2, Math.min(1.2, dy * 2)),
      };
    };
    const onLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const rotY = t * 0.6 + mouse.x * 45;
  const rotX = -mouse.y * 25;

  const projected = NODES.map((n) => ({
    node: n,
    p: project(n.lat, n.lon, rotY, rotX),
  }));

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      aria-hidden
    >
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(91,140,255,0.45), transparent 60%), radial-gradient(circle at 70% 70%, rgba(185,107,255,0.35), transparent 60%)",
          transform: `translate(${mouse.x * 14}px, ${mouse.y * 14}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <svg
        viewBox="-150 -150 300 300"
        className="relative h-full w-full"
        style={{
          filter: "drop-shadow(0 20px 40px rgba(91,140,255,0.25))",
        }}
      >
        <defs>
          <radialGradient id="globeFill" cx="35%" cy="35%" r="75%">
            <stop offset="0%" stopColor="rgba(91,140,255,0.18)" />
            <stop offset="55%" stopColor="rgba(23,26,54,0.65)" />
            <stop offset="100%" stopColor="rgba(7,8,15,0.95)" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5b8cff" />
            <stop offset="100%" stopColor="#b96bff" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="40%" stopColor="#7aa3ff" />
            <stop offset="100%" stopColor="rgba(91,140,255,0)" />
          </radialGradient>
          <radialGradient id="hubGlow">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="35%" stopColor="#b96bff" />
            <stop offset="100%" stopColor="rgba(185,107,255,0)" />
          </radialGradient>
        </defs>

        <circle cx="0" cy="0" r={R} fill="url(#globeFill)" />
        <circle
          cx="0"
          cy="0"
          r={R}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1"
        />

        {/* latitude rings */}
        {[-60, -30, 0, 30, 60].map((lat) => {
          const φ = (lat * Math.PI) / 180;
          const rx = R * Math.cos(φ);
          const cosX = Math.cos((rotX * Math.PI) / 180);
          const sinX = Math.sin((rotX * Math.PI) / 180);
          const ry = Math.abs(rx * cosX);
          const cy = R * Math.sin(φ) * cosX;
          const opacity = 0.18 + Math.abs(cosX) * 0.18;
          return (
            <ellipse
              key={`lat-${lat}`}
              cx="0"
              cy={-cy + R * Math.sin(φ) * sinX * 0}
              rx={rx}
              ry={ry}
              fill="none"
              stroke="rgba(122,163,255,0.35)"
              strokeWidth="0.6"
              opacity={opacity}
              transform={`translate(0 ${-R * Math.sin(φ) * sinX})`}
            />
          );
        })}

        {/* meridians */}
        {[0, 30, 60, 90, 120, 150].map((lon) => {
          const path: string[] = [];
          for (let lat = -90; lat <= 90; lat += 6) {
            const { x, y, z } = project(lat, lon, rotY, rotX);
            if (z >= -10) {
              path.push(`${path.length === 0 ? "M" : "L"}${x.toFixed(2)} ${(-y).toFixed(2)}`);
            } else if (path.length > 0) {
              break;
            }
          }
          return (
            <path
              key={`mer-${lon}`}
              d={path.join(" ")}
              fill="none"
              stroke="rgba(122,163,255,0.22)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* connections */}
        {CONNECTIONS.map(([a, b], i) => {
          const A = projected.find((p) => p.node.id === a);
          const B = projected.find((p) => p.node.id === b);
          if (!A || !B) return null;
          const visible = A.p.z > -20 && B.p.z > -20;
          if (!visible) return null;
          const avgZ = (A.p.z + B.p.z) / 2;
          const op = 0.15 + Math.max(0, avgZ / R) * 0.55;
          return (
            <line
              key={`c-${i}`}
              x1={A.p.x}
              y1={-A.p.y}
              x2={B.p.x}
              y2={-B.p.y}
              stroke="url(#lineGrad)"
              strokeWidth="0.8"
              opacity={op}
            />
          );
        })}

        {/* nodes */}
        {projected
          .sort((a, b) => a.p.z - b.p.z)
          .map(({ node, p }) => {
            const visible = p.z > -30;
            if (!visible) return null;
            const depth = (p.z + R) / (2 * R);
            const pulse = 0.5 + 0.5 * Math.sin(t * 0.05 + node.pulse);
            const r = node.size * (1.5 + depth * 2.5);
            const isHub = node.id === 1;
            return (
              <g key={node.id}>
                <circle
                  cx={p.x}
                  cy={-p.y}
                  r={r * (2.5 + pulse * 1.5)}
                  fill={isHub ? "url(#hubGlow)" : "url(#nodeGlow)"}
                  opacity={0.35 + depth * 0.4}
                />
                <circle
                  cx={p.x}
                  cy={-p.y}
                  r={r}
                  fill={isHub ? "#fff" : "#cfdcff"}
                  opacity={0.6 + depth * 0.4}
                />
                {isHub && (
                  <circle
                    cx={p.x}
                    cy={-p.y}
                    r={r * (3 + pulse * 4)}
                    fill="none"
                    stroke="#b96bff"
                    strokeWidth="0.6"
                    opacity={0.5 - pulse * 0.4}
                  />
                )}
              </g>
            );
          })}

        {/* highlight overlay */}
        <circle
          cx={-40 + mouse.x * 30}
          cy={-40 + mouse.y * 30}
          r="55"
          fill="rgba(255,255,255,0.05)"
          style={{ pointerEvents: "none" }}
        />
      </svg>

      {/* orbiting label */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 md:block"
        style={{ transform: `translate(-50%, -50%) rotate(${t * 0.4}deg)` }}
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/80 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[var(--color-fg-muted)] backdrop-blur">
          Дунаївці · HUB
        </div>
      </div>
    </div>
  );
}
