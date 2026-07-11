export type Locale = "en" | "el";
// Add more later: extend this union + LOCALES + translate content. Nothing else changes.

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "el", label: "ΕΛ" },
];

export type L10n = { en: string } & Partial<Record<Locale, string>>;

export function t(x: L10n | undefined, locale: Locale): string {
  if (!x) return "";
  return x[locale] ?? x.en;
}

export const ui = {
  guide: { en: "Guide", el: "Οδηγός" },
  readMore: { en: "Read more", el: "Περισσότερα" },
  readLess: { en: "Read less", el: "Λιγότερα" },
  back: { en: "Back", el: "Πίσω" },
  copy: { en: "Copy", el: "Αντιγραφή" },
  copied: { en: "Copied", el: "Αντιγράφηκε" },
  yourHost: { en: "Your host", el: "Ο οικοδεσπότης σας" },
  today: { en: "Today", el: "Σήμερα" },
  sea: { en: "Sea", el: "Θάλασσα" },
  sunset: { en: "Sunset", el: "Δύση" },
  map: { en: "Map", el: "Χάρτης" },
  menu: { en: "Menu", el: "Μενού" },
  hours: { en: "Hours", el: "Ωράριο" },
  website: { en: "Website", el: "Ιστότοπος" },
  callLabel: { en: "Call", el: "Κλήση" },
  partner: { en: "Partner", el: "Συνεργάτης" },
  perkTitle: { en: "Guest perk", el: "Προνόμιο επισκέπτη" },
  waGreeting: {
    en: "Hello! I am a guest at",
    el: "Γεια σας! Είμαι επισκέπτης στη",
  },
  createdBy: { en: "Created by", el: "Δημιουργήθηκε από" },
} satisfies Record<string, L10n>;
