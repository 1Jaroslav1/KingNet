import Link from "next/link";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:scale-[1.02] hover:bg-white/95 shadow-[0_8px_30px_-8px_rgba(255,255,255,0.4)]",
  secondary:
    "border border-[var(--color-border-strong)] bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.06]",
  ghost:
    "text-[var(--color-fg-muted)] hover:text-white",
};

type CommonProps = {
  variant?: Variant;
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
};

const sizeStyles = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
} as const;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]";

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & { href: string } & ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      href={href}
      className={`${base} ${sizeStyles[size]} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={`${base} ${sizeStyles[size]} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
