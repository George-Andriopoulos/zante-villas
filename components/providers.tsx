"use client";

import { createContext, useContext } from "react";

import type { Locale } from "@/lib/i18n";
import { usePrefsStore } from "@/lib/store";

const DefaultLocaleCtx = createContext<Locale>("en");

// Holds exactly one thing: which locale a villa should show before the guest
// has picked one themselves. This is config, not state — the actual current
// locale (and the setter to change it) lives in the Zustand store, global,
// persisted, reactive.
export function LocaleProvider({
  defaultLocale,
  children,
}: {
  defaultLocale: Locale;
  children: React.ReactNode;
}) {
  return (
    <DefaultLocaleCtx.Provider value={defaultLocale}>
      {children}
    </DefaultLocaleCtx.Provider>
  );
}

export function useLocale() {
  const defaultLocale = useContext(DefaultLocaleCtx);
  const stored = usePrefsStore((s) => s.locale);
  const setLocale = usePrefsStore((s) => s.setLocale);
  return { locale: stored ?? defaultLocale, setLocale };
}
