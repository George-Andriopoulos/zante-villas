import type { L10n, Locale } from "@/lib/i18n";
import type { IconName } from "@/lib/icons";

export type InfoRow = {
  label: L10n;
  value: string;
  copyable?: boolean;
  href?: string;
};

export type Place = {
  name: string;
  tagline: L10n;
  description?: L10n;
  image?: string;
  mapUrl?: string;
  menuUrl?: string;
  distance?: L10n;
};

export type Contact = {
  label: L10n;
  value: string;
  kind: "tel" | "whatsapp" | "email";
};

export type Block =
  | { type: "text"; title?: L10n; body: L10n }
  | { type: "notice"; tone?: "info" | "warning"; body: L10n }
  | { type: "info"; title?: L10n; rows: InfoRow[] }
  | { type: "steps"; title?: L10n; items: L10n[] }
  | { type: "places"; items: Place[] }
  | { type: "contacts"; items: Contact[] };

export type Section = {
  slug: string;
  icon: IconName;
  title: L10n;
  intro?: L10n;
  blocks: Block[];
};

export type VillaCta =
  | { kind: "whatsapp"; icon: IconName; label: L10n }
  | { kind: "checkin"; icon: IconName; label: L10n }
  | { kind: "link"; icon: IconName; label: L10n; href: string };

export type Villa = {
  slug: string;
  name: string;
  tagline: L10n;
  heroImages: string[];
  defaultLocale: Locale;
  location: { area: L10n; lat: number; lon: number };
  host: {
    name: string;
    photo?: string;
    note: L10n;
    phone: string;
    whatsapp: string;
    email?: string;
  };
  social?: { instagram?: string; facebook?: string };
  ctas: VillaCta[];
  sections: Section[];
  footer?: { address?: L10n };
};
