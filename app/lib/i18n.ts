export type Locale = "en" | "el";
// Add more later: extend this union + LOCALES + translate content. Nothing else changes.

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "el", label: "ΕΛ" },
];

// English is the required fallback for every string.
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
  waGreeting: {
    en: "Hello! I am a guest at",
    el: "Γεια σας! Είμαι επισκέπτης στη",
  },
  guideBy: { en: "Guide by", el: "Οδηγός από" },
} satisfies Record<string, L10n>;
