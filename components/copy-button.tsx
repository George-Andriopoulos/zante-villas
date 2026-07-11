"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { t, ui } from "@/lib/i18n";

import { useLocale } from "./providers";

export function CopyButton({ value }: { value: string }) {
  const { locale } = useLocale();
  const [done, setDone] = useState(false);

  function copy() {
    navigator.clipboard.writeText(value).then(() => {
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    });
  }

  return (
    <button
      onClick={copy}
      className='inline-flex items-center gap-1.5 rounded-full border border-line bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent transition active:scale-95'>
      {done ? <Check size={13} /> : <Copy size={13} />}
      {done ? t(ui.copied, locale) : t(ui.copy, locale)}
    </button>
  );
}
