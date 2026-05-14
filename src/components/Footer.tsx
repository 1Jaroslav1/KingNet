import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--color-border)] bg-[rgba(7,8,15,0.6)]">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <Link href="/" className="font-display text-xl font-bold">
            King<span className="text-gradient">Net</span>
          </Link>
          <p className="max-w-md text-sm text-[var(--color-fg-muted)]">
            Локальний інтернет-провайдер у Дунаївцях. Прокладаємо власну
            оптоволоконну мережу і ставимо радіоканали 5 ГГц там, куди не дотягує
            кабель — щоб швидкий інтернет був реальністю для кожної адреси.
          </p>
          <a
            href={site.portalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
          >
            Особистий кабінет
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
            Розділи
          </h3>
          <ul className="space-y-2 text-sm text-[var(--color-fg-muted)]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/dokumenty" className="hover:text-white">
                Документи
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
            Контакти
          </h3>
          <ul className="space-y-3 text-sm text-[var(--color-fg-muted)]">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <div>
                <a href={site.contact.phonePrimaryHref} className="block hover:text-white">
                  {site.contact.phonePrimary}
                </a>
                <a href={site.contact.phoneSecondaryHref} className="block hover:text-white">
                  {site.contact.phoneSecondary}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <a href={site.contact.emailHref} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <span>{site.contact.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-[var(--color-fg-subtle)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brand}. Усі права захищені.
          </p>
          <p>
            Зроблено з турботою про швидкість • Дунаївці, Україна
          </p>
        </div>
      </div>
    </footer>
  );
}
