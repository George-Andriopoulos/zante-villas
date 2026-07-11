import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Locale } from "@/lib/i18n";

type PrefsState = {
  locale: Locale | null;
  dark: boolean | null;
  setLocale: (locale: Locale) => void;
  setDark: (dark: boolean) => void;
};

export const usePrefsStore = create<PrefsState>()(
  persist(
    (set) => ({
      locale: null,
      dark: null,
      setLocale: (locale) => set({ locale }),
      setDark: (dark) => set({ dark }),
    }),
    {
      name: "zv-prefs",
      skipHydration: true,
    }
  )
);
