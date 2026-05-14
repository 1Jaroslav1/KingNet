import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { ApplicationForm } from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Зв'яжіться з KingNet: телефон, Viber, email і адреса офісу у Дунаївцях. Залиште заявку на підключення.",
};

export default function KontaktyPage() {
  return (
    <Section
      eyebrow="Контакти"
      title={
        <>
          Поруч і на зв'язку — <span className="text-gradient">завжди</span>
        </>
      }
      description="Зателефонуйте, напишіть у Viber або залиште заявку нижче. Перетелефонуємо впродовж години у робочий час."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <ContactItem
            icon={<Phone className="h-5 w-5" />}
            title="Телефони"
            lines={[
              { text: site.contact.phonePrimary, href: site.contact.phonePrimaryHref },
              { text: site.contact.phoneSecondary, href: site.contact.phoneSecondaryHref },
            ]}
          />
          <ContactItem
            icon={<MessageCircle className="h-5 w-5" />}
            title="Viber / Telegram"
            lines={[
              { text: "Viber +380 97 073 8857", href: "viber://chat?number=%2B380970738857" },
            ]}
          />
          <ContactItem
            icon={<Mail className="h-5 w-5" />}
            title="Email"
            lines={[{ text: site.contact.email, href: site.contact.emailHref }]}
          />
          <ContactItem
            icon={<MapPin className="h-5 w-5" />}
            title="Офіс"
            lines={[{ text: site.contact.address }]}
          />
          <ContactItem
            icon={<Clock className="h-5 w-5" />}
            title="Графік"
            lines={[{ text: site.contact.workingHours }]}
          />
        </div>

        <div id="zayavka" className="lg:col-span-3">
          <ApplicationForm />
        </div>
      </div>
    </Section>
  );
}

function ContactItem({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: { text: string; href?: string }[];
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-[var(--color-primary)]">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-[var(--color-fg-subtle)]">
          {title}
        </p>
        <div className="mt-1 space-y-0.5">
          {lines.map((l) =>
            l.href ? (
              <a
                key={l.text}
                href={l.href}
                className="block text-white hover:text-[var(--color-primary-hover)]"
              >
                {l.text}
              </a>
            ) : (
              <p key={l.text} className="text-white">
                {l.text}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
