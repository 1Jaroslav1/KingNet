import { Phone, MessageCircle } from "lucide-react";
import { ButtonLink } from "./ui/Button";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-[32px] border border-[var(--color-border-strong)] p-10 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(91,140,255,0.18) 0%, rgba(185,107,255,0.18) 100%), #0c0e1f",
          }}
        >
          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Готові підключитись?
            </h2>
            <p className="mt-4 text-lg text-[var(--color-fg-muted)]">
              Залиште заявку — оператор зателефонує впродовж години у робочий
              час і запропонує оптимальний тариф для вашої адреси.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/kontakty#zayavka" size="lg">
                Залишити заявку
              </ButtonLink>
              <a
                href={site.contact.phonePrimaryHref}
                className="inline-flex h-13 items-center gap-2 rounded-full border border-white/20 px-7 text-base text-white hover:bg-white/[0.06]"
              >
                <Phone className="h-4 w-4" />
                {site.contact.phonePrimary}
              </a>
              <a
                href={`viber://chat?number=%2B380970738857`}
                className="inline-flex h-13 items-center gap-2 rounded-full border border-white/20 px-7 text-base text-white hover:bg-white/[0.06]"
              >
                <MessageCircle className="h-4 w-4" />
                Viber
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
