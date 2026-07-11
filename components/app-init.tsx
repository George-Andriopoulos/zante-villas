"use client";

import { useEffect } from "react";

import { usePrefsStore } from "@/lib/store";

export function AppInit() {
  useEffect(() => {
    usePrefsStore.persist.rehydrate();

    if (usePrefsStore.getState().dark === null) {
      usePrefsStore.setState({
        dark: document.documentElement.classList.contains("dark"),
      });
    }
  }, []);

  const dark = usePrefsStore((s) => s.dark);

  useEffect(() => {
    if (dark === null) return;
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return null;
}
