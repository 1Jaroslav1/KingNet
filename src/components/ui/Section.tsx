import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}: Props) {
  const aligned =
    align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="container-page">
        {(eyebrow || title || description) && (
          <header
            className={`mb-12 flex max-w-3xl flex-col gap-4 ${aligned}`}
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--color-fg-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse-glow" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-[var(--color-fg-muted)]">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
