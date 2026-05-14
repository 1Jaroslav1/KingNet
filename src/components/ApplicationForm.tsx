"use client";

import { useState } from "react";
import { tariffs } from "@/lib/tariffs";
import { CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulated submission — wire to a real endpoint when backend is ready.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    (e.currentTarget as HTMLFormElement).reset();
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-success)]/15 text-[var(--color-success)]">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="font-display text-2xl font-semibold">
          Заявку прийнято
        </h3>
        <p className="text-[var(--color-fg-muted)]">
          Дякуємо! Зателефонуємо вам впродовж години у робочий час.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
        >
          Залишити ще одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-3xl border border-[var(--color-border)] bg-white/[0.02] p-7 md:p-8"
    >
      <h3 className="font-display text-2xl font-semibold">
        Заявка на підключення
      </h3>

      <Field label="Ваше ім'я" name="name" required placeholder="Олексій" />
      <Field
        label="Телефон"
        name="phone"
        type="tel"
        required
        placeholder="+380 __ ___ __ __"
      />
      <Field
        label="Адреса підключення"
        name="address"
        required
        placeholder="м. Дунаївці, вул. Шевченка, 70А, кв. 4"
      />

      <div className="space-y-2">
        <label
          htmlFor="tariff"
          className="block text-sm text-[var(--color-fg-muted)]"
        >
          Тариф (необов'язково)
        </label>
        <select
          id="tariff"
          name="tariff"
          defaultValue=""
          className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 text-white outline-none transition-colors focus:border-[var(--color-primary)]"
        >
          <option value="">— Хай порадить оператор —</option>
          {tariffs.map((t) => (
            <option key={t.id} value={t.id}>
              {t.type === "fiber" ? "Оптика" : "Wi-Fi"} · {t.name} ·{" "}
              {t.speed} Мбіт/с — {t.price} грн
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="comment"
          className="block text-sm text-[var(--color-fg-muted)]"
        >
          Коментар
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={3}
          placeholder="Зручний час дзвінка, особливості адреси…"
          className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-white outline-none transition-colors focus:border-[var(--color-primary)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white font-medium text-black transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        {status === "sending" ? "Відправляємо…" : "Відправити заявку"}
      </button>

      <p className="text-xs text-[var(--color-fg-subtle)]">
        Натискаючи «Відправити», ви погоджуєтесь з обробкою персональних даних
        згідно з умовами публічного договору.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm text-[var(--color-fg-muted)]"
      >
        {label}
        {required && <span className="ml-1 text-[var(--color-danger)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 text-white outline-none transition-colors placeholder:text-[var(--color-fg-subtle)] focus:border-[var(--color-primary)]"
      />
    </div>
  );
}
