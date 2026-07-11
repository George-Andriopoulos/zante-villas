"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { LOCALES, type Locale } from "@/lib/i18n";

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
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("xenios-locale");
      if (saved && LOCALES.some((l) => l.code === saved)) {
        setLocaleState(saved as Locale);
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(l: Locale) {
    setLocaleState(l);
    try {
      localStorage.setItem("xenios-locale", l);
    } catch {}
  }

  return (
    <LocaleCtx.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleCtx.Provider>
  );
}
