"use client";

import { useEffect } from "react";

import { usePrefsStore } from "@/lib/store";

// Rehydrates the persisted store on the client once (skipHydration means the
// server never touches localStorage). The very first paint's dark class is
// already handled by the blocking inline script in app/layout.tsx — this
// keeps <html>'s class in sync with the store for every change after that.
export function AppInit() {
  useEffect(() => {
    usePrefsStore.persist.rehydrate();
  }, []);

  const dark = usePrefsStore((s) => s.dark);

  useEffect(() => {
    if (dark === null) return;
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return null;
}
