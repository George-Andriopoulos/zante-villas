"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import type { Villa } from "@/content/types";
import { t, type L10n } from "@/lib/i18n";
import {
  makeCheckinSchema,
  type CheckinInput,
  type CheckinOutput,
} from "@/lib/schemas/checkin";
import { cn, waLink } from "@/lib/utils";

import { useLocale } from "./providers";
import { WhatsAppIcon } from "./whatsapp";

const labels = {
  intro: {
    en: "Please fill in the details of one adult staying at the property. It is sent directly to your host on WhatsApp — nothing is stored anywhere else.",
    el: "Συμπληρώστε τα στοιχεία ενός ενήλικα που θα διαμείνει στο κατάλυμα. Αποστέλλεται απευθείας στον οικοδεσπότη σας στο WhatsApp — δεν αποθηκεύεται πουθενά αλλού.",
  },
  firstName: { en: "First name", el: "Όνομα" },
  lastName: { en: "Last name", el: "Επώνυμο" },
  email: { en: "Email", el: "Email" },
  phone: { en: "Phone (optional)", el: "Τηλέφωνο (προαιρετικό)" },
  document: { en: "ID or passport number", el: "Αρ. ταυτότητας ή διαβατηρίου" },
  afm: {
    en: "Tax ID / ΑΦΜ (only if you need an invoice)",
    el: "ΑΦΜ (μόνο αν χρειάζεστε τιμολόγιο)",
  },
  arrival: { en: "Arrival", el: "Άφιξη" },
  departure: { en: "Departure", el: "Αναχώρηση" },
  guests: { en: "Guests", el: "Άτομα" },
  consent: {
    en: "I consent to these details being shared with the host to complete guest registration.",
    el: "Συναινώ στην κοινοποίηση των στοιχείων στον οικοδεσπότη για την ολοκλήρωση της εγγραφής επισκέπτη.",
  },
  submit: { en: "Send via WhatsApp", el: "Αποστολή μέσω WhatsApp" },
  sentTitle: { en: "Opening WhatsApp…", el: "Άνοιγμα WhatsApp…" },
  sentBody: {
    en: "Your check-in details are ready to send. If WhatsApp didn't open, tap the button below.",
    el: "Τα στοιχεία σας είναι έτοιμα για αποστολή. Αν δεν άνοιξε το WhatsApp, πατήστε το κουμπί.",
  },
  openWa: { en: "Open WhatsApp", el: "Άνοιγμα WhatsApp" },
} satisfies Record<string, L10n>;

const field =
  "w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-[15px] outline-none transition focus:border-accent";
const label = "mb-1.5 block text-sm font-medium";
const error = "mt-1 text-xs text-red-600 dark:text-red-400";

export function CheckinForm({ villa }: { villa: Villa }) {
  const { locale } = useLocale();
  const [waHref, setWaHref] = useState<string | null>(null);
  const schema = useMemo(() => makeCheckinSchema(locale), [locale]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckinInput, unknown, CheckinOutput>({
    resolver: zodResolver(schema),
  });

  function onSubmit(v: CheckinOutput) {
    const lines = [
      `Check-in — ${villa.name}`,
      `${v.firstName} ${v.lastName}`,
      `Email: ${v.email}`,
      v.phone ? `Phone: ${v.phone}` : null,
      `ID/Passport: ${v.document}`,
      v.afm ? `AFM: ${v.afm}` : null,
      `Stay: ${v.arrival} → ${v.departure}`,
      `Guests: ${v.guests}`,
    ].filter(Boolean);

    // v1: hand off to the host on WhatsApp. Later, swap this for an API route
    // (Supabase / email) without touching the rest of the form.
    const href = waLink(villa.host.whatsapp, lines.join("\n"));
    setWaHref(href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  if (waHref) {
    return (
      <div className="border-line bg-card rounded-2xl border p-6 text-center">
        <div className="bg-accent-soft text-accent mx-auto mb-3 grid size-12 place-items-center rounded-full">
          <Check size={22} />
        </div>
        <h2 className="text-lg font-medium">{t(labels.sentTitle, locale)}</h2>
        <p className="text-muted mt-1.5 text-sm leading-relaxed">
          {t(labels.sentBody, locale)}
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-wa mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition active:scale-95"
        >
          <WhatsAppIcon className="size-4" /> {t(labels.openWa, locale)}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <p className="text-muted text-sm leading-relaxed">
        {t(labels.intro, locale)}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>{t(labels.firstName, locale)}</label>
          <input className={field} {...register("firstName")} />
          {errors.firstName && (
            <p className={error}>{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className={label}>{t(labels.lastName, locale)}</label>
          <input className={field} {...register("lastName")} />
          {errors.lastName && (
            <p className={error}>{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={label}>{t(labels.email, locale)}</label>
        <input type="email" className={field} {...register("email")} />
        {errors.email && <p className={error}>{errors.email.message}</p>}
      </div>

      <div>
        <label className={label}>{t(labels.phone, locale)}</label>
        <input type="tel" className={field} {...register("phone")} />
      </div>

      <div>
        <label className={label}>{t(labels.document, locale)}</label>
        <input className={field} {...register("document")} />
        {errors.document && <p className={error}>{errors.document.message}</p>}
      </div>

      <div>
        <label className={label}>{t(labels.afm, locale)}</label>
        <input className={field} {...register("afm")} />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div>
          <label className={label}>{t(labels.arrival, locale)}</label>
          <input type="date" className={field} {...register("arrival")} />
          {errors.arrival && <p className={error}>{errors.arrival.message}</p>}
        </div>
        <div>
          <label className={label}>{t(labels.departure, locale)}</label>
          <input type="date" className={field} {...register("departure")} />
          {errors.departure && (
            <p className={error}>{errors.departure.message}</p>
          )}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className={label}>{t(labels.guests, locale)}</label>
          <input
            type="number"
            min={1}
            defaultValue={2}
            className={field}
            {...register("guests")}
          />
          {errors.guests && <p className={error}>{errors.guests.message}</p>}
        </div>
      </div>

      <label className="border-line bg-card flex items-start gap-3 rounded-xl border p-3.5">
        <input
          type="checkbox"
          className="mt-0.5 size-4 accent-[var(--accent)]"
          {...register("consent")}
        />
        <span className="text-muted text-sm leading-relaxed">
          {t(labels.consent, locale)}
        </span>
      </label>
      {errors.consent && (
        <p className={cn(error, "!-mt-2")}>{errors.consent.message}</p>
      )}

      <button
        type="submit"
        className="bg-accent text-paper inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-medium transition active:scale-[.98]"
      >
        <WhatsAppIcon className="size-4" /> {t(labels.submit, locale)}
      </button>
    </form>
  );
}
