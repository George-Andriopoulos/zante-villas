import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Locale } from "./i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Hard rule carried from Zante-menu: NEVER CSS text-transform:uppercase on Greek.
// toLocaleUpperCase("el-GR") correctly drops the tonos (ά → Α).
export function upper(s: string, locale: Locale) {
  return locale === "el" ? s.toLocaleUpperCase("el-GR") : s.toUpperCase();
}

export function waLink(phone: string, text?: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}
