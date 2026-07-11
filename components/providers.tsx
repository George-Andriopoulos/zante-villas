"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

import { LOCALES, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "zv-locale";
const listeners = new Set<() => void>();

function readStored(): Locale | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && LOCALES.some((l) => l.code === saved)
      ? (saved as Locale)
      : null;
  } catch {
    return null;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function writeStored(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {}
  listeners.forEach((l) => l());
}

const LocaleCtx = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({ locale: "en", setLocale: () => {} });

export function useLocale() {
  return useContext(LocaleCtx);
}

export function LocaleProvider({
  defaultLocale,
  children,
}: {
  defaultLocale: Locale;
  children: React.ReactNode;
}) {
  const locale = useSyncExternalStore(
    subscribe,
    () => readStored() ?? defaultLocale,
    () => defaultLocale
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleCtx.Provider value={{ locale, setLocale: writeStored }}>
      {children}
    </LocaleCtx.Provider>
  );
}
