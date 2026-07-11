"use client";

import Link from "next/link";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { LOCALES, t, ui } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { useLocale } from "./providers";

const chip =
  "grid size-9 place-items-center rounded-full border border-line/70 bg-paper/70 backdrop-blur transition active:scale-95";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("xenios-theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label='Toggle dark mode'
      className={chip}>
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className='flex rounded-full border border-line/70 bg-paper/70 p-0.5 backdrop-blur'>
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium transition",
            locale === l.code ? "bg-ink text-paper" : "text-muted",
          )}>
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
          : "sticky top-0 border-b border-line/60 bg-paper/85 backdrop-blur",
      )}>
      {backHref ? (
        <Link
          href={backHref}
          aria-label={t(ui.back, locale)}
          className={chip}>
          <ArrowLeft size={17} />
        </Link>
      ) : (
        <span />
      )}
      <div className='flex items-center gap-2'>
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </div>
  );
}
