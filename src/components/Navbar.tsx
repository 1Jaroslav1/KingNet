"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[rgba(7,8,15,0.75)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <LogoMark />
          <span>
            King<span className="text-gradient">Net</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active
                    ? "text-white"
                    : "text-[var(--color-fg-muted)] hover:text-white"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-white/10" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.contact.phonePrimaryHref}
            className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-2 text-sm text-white/90 transition-colors hover:border-[var(--color-border-strong)] hover:text-white md:inline-flex"
          >
            <Phone className="h-4 w-4 text-[var(--color-primary)]" />
            <span>{site.contact.phonePrimary}</span>
          </a>
          <Link
            href="/kontakty#zayavka"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Підключитись
          </Link>
          <button
            type="button"
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-page pb-6 pt-2">
            <nav className="flex flex-col gap-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-base ${
                      active
                        ? "bg-white/[0.06] text-white"
                        : "text-[var(--color-fg-muted)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 flex flex-col gap-2 border-t border-[var(--color-border)] pt-3">
                <a
                  href={site.contact.phonePrimaryHref}
                  className="flex items-center gap-2 px-4 py-2 text-white"
                >
                  <Phone className="h-4 w-4 text-[var(--color-primary)]" />
                  {site.contact.phonePrimary}
                </a>
                <Link
                  href="/kontakty#zayavka"
                  className="rounded-xl bg-white px-4 py-3 text-center font-medium text-black"
                >
                  Підключитись
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <span
      aria-hidden
      className="grid h-8 w-8 place-items-center rounded-lg"
      style={{ background: "var(--gradient-primary)" }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 4v16" />
        <path d="M5 12l9-8" />
        <path d="M5 12l9 8" />
        <path d="M14 4l5 16" />
      </svg>
    </span>
  );
}
