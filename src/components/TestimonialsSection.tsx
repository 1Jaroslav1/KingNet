import { Quote, Star } from "lucide-react";
import { Section } from "./ui/Section";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
  accent: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Олена Гриценко",
    role: "Дизайнер-фрілансер",
    location: "Дунаївці",
    initials: "ОГ",
    accent: "linear-gradient(135deg,#5b8cff,#22d3a8)",
    rating: 5,
    text:
      "Працюю з 4К-відео та хмарними бібліотеками — KingNet тримає гігабіт і не «здихає» ввечері, коли всі вмикають Netflix. За рік жодного серйозного збою.",
  },
  {
    name: "Андрій Поліщук",
    role: "Стрімер на Twitch",
    location: "смт Смотрич",
    initials: "АП",
    accent: "linear-gradient(135deg,#b96bff,#5b8cff)",
    rating: 5,
    text:
      "Раніше стрімив на 720p бо канал «плив». Поставили оптику — їду 1080p60 без жодного дропу. Пінг у 3 мс — це просто інший рівень.",
  },
  {
    name: "Сім'я Коваленків",
    role: "Двоє дорослих, троє дітей",
    location: "с. Маків",
    initials: "СК",
    accent: "linear-gradient(135deg,#22d3a8,#5b8cff)",
    rating: 5,
    text:
      "У нас три телевізори, ноутбук на роботі, телефон в кожного — і всі одночасно. До KingNet це була катастрофа. Тепер ніхто не свариться за Wi-Fi.",
  },
  {
    name: "Ігор Шевчук",
    role: "Власник СТО",
    location: "Дунаївці",
    initials: "ІШ",
    accent: "linear-gradient(135deg,#ff9d6b,#b96bff)",
    rating: 5,
    text:
      "Підключили виділений канал для діагностичного ПЗ і камер. Інженер приїхав того ж дня, договір нормальний, рахунки прозорі. Жодних сюрпризів.",
  },
  {
    name: "Марія Дзюба",
    role: "Викладач, дистанційні уроки",
    location: "с. Лисець",
    initials: "МД",
    accent: "linear-gradient(135deg,#5b8cff,#b96bff)",
    rating: 5,
    text:
      "У селі ніхто не вірив, що буде нормальний інтернет. Радіоканал 5 ГГц — і я веду уроки в Zoom без «заморозок». Діти бачать мене, я бачу їх.",
  },
  {
    name: "Тарас Левченко",
    role: "Розробник",
    location: "Дунаївці",
    initials: "ТЛ",
    accent: "linear-gradient(135deg,#22d3a8,#b96bff)",
    rating: 5,
    text:
      "Працюю з Києвом по VPN, пушу великі образи в Docker registry. Симетрична швидкість — це те, чого нема в більшості провайдерів. Тут є.",
  },
];

export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      eyebrow="Відгуки клієнтів"
      title={
        <>
          Що кажуть ті, хто <span className="text-gradient">вже з нами</span>
        </>
      }
      description="Понад 3 200 родин і бізнесів Дунаєвецької громади довірили нам своє з'єднання зі світом. Ось декілька з них."
    >
      <div className="mb-10 flex flex-wrap items-center gap-6 rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-6 md:p-7">
        <div className="flex items-center gap-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-[#FFD66B] text-[#FFD66B]"
                strokeWidth={1}
              />
            ))}
          </div>
          <span className="font-display text-2xl font-semibold">4,9 / 5</span>
        </div>
        <div className="text-sm text-[var(--color-fg-muted)]">
          <span className="text-white">412 відгуків</span> за останні 12 місяців ·{" "}
          <span className="text-white">98%</span> клієнтів рекомендують нас сусідам
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="group relative flex flex-col gap-5 rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:bg-white/[0.04] md:p-7"
          >
            <Quote
              className="absolute right-5 top-5 h-8 w-8 text-[var(--color-primary)] opacity-15"
              strokeWidth={2.4}
            />

            <div className="flex items-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-[#FFD66B] text-[#FFD66B]"
                  strokeWidth={1}
                />
              ))}
            </div>

            <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
              «{t.text}»
            </p>

            <div className="mt-auto flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-semibold text-black"
                style={{ background: t.accent }}
                aria-hidden
              >
                {t.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate font-medium text-white">{t.name}</p>
                <p className="truncate text-xs text-[var(--color-fg-subtle)]">
                  {t.role} · {t.location}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
