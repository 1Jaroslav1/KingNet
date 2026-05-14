import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-display text-7xl font-bold text-gradient md:text-9xl">
        404
      </p>
      <h1 className="font-display text-2xl font-semibold md:text-4xl">
        Сторінку не знайдено
      </h1>
      <p className="max-w-md text-[var(--color-fg-muted)]">
        Можливо, посилання застаріло, а можливо — ми її ще не побудували. У
        будь-якому випадку, повертаємось на головну.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        На головну
      </Link>
    </section>
  );
}
