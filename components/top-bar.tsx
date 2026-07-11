"use client";

import Link from "next/link";
import { ArrowLeft, Check, Moon, Share2, Sun } from "lucide-react";
import { useState } from "react";

import { LOCALES, t, ui } from "@/lib/i18n";
import { usePrefsStore } from "@/lib/store";
import { cn } from "@/lib/utils";

import { useLocale } from "./providers";

const chip =
  "grid size-9 place-items-center rounded-full border border-line/70 bg-paper/70 backdrop-blur transition active:scale-95";

function ThemeToggle() {
  const dark = usePrefsStore((s) => s.dark) ?? false;
  const setDark = usePrefsStore((s) => s.setDark);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className={chip}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const data = { title: document.title, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(data.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      } catch {}
    }
  }

  return (
    <button onClick={share} aria-label="Share" className={chip}>
      {copied ? <Check size={16} /> : <Share2 size={16} />}
    </button>
  );
}

function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="border-line/70 bg-paper/70 flex rounded-full border p-0.5 backdrop-blur">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium transition",
            locale === l.code ? "bg-ink text-paper" : "text-muted"
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export function TopBar({
  backHref,
  overlay = false,
}: {
  backHref?: string;
  overlay?: boolean;
}) {
  const { locale } = useLocale();
  return (
    <div
      className={cn(
        "z-20 flex items-center justify-between px-4 py-3",
        overlay
          ? "absolute inset-x-0 top-0"
          : "border-line/60 bg-paper/85 sticky top-0 border-b backdrop-blur"
      )}
    >
      {backHref ? (
        <Link href={backHref} aria-label={t(ui.back, locale)} className={chip}>
          <ArrowLeft size={17} />
        </Link>
      ) : (
        <span />
      )}
      <div className="flex items-center gap-2">
        <ShareButton />
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </div>
  );
}
