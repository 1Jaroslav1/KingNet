import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { posts } from "@/lib/posts";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Акції та новини",
  description:
    "Свіжі акції, новини й корисні поради від KingNet: розширення покриття, гігабітні пропозиції та як видавити максимум з домашнього Wi-Fi.",
};

export default function AktsiyiPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <Section
      eyebrow="Акції · Новини · Поради"
      title={
        <>
          Що нового у{" "}
          <span className="text-gradient">KingNet</span>
        </>
      }
      description="Тут ми ділимось акціями, новинами про мережу і короткими порадами, як зробити домашній інтернет ще приємнішим."
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/aktsiyi/${p.slug}`}
              className="group flex h-full flex-col gap-4 rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-[var(--color-border)] bg-white/[0.03] px-2.5 py-1 text-xs text-[var(--color-fg-muted)]">
                  {p.category}
                </span>
                <time className="text-xs text-[var(--color-fg-subtle)]">
                  {formatDate(p.date)}
                </time>
              </div>
              <h3 className="font-display text-xl font-semibold leading-tight">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--color-fg-muted)]">
                {p.excerpt}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)]">
                Читати далі
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
