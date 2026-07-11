"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import type { Villa } from "@/content/types";
import { t, ui } from "@/lib/i18n";
import { iconMap } from "@/lib/icons";
import { cn, upper } from "@/lib/utils";

import { HeroCarousel } from "./hero-carousel";
import { useLocale } from "./providers";
import { TopBar } from "./top-bar";
import { TodayCard } from "./weather";
import { useWaHref, WhatsAppIcon } from "./whatsapp";

function HostNote({ villa, className }: { villa: Villa; className?: string }) {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const wa = useWaHref(villa.host.whatsapp, villa.name);

  return (
    <div
      className={cn(
        "border-line bg-card rounded-2xl border p-5 shadow-[0_16px_32px_-20px_rgb(0_0_0/0.45)]",
        className
      )}
    >
      <p
        className={cn(
          "text-muted text-[15px] leading-relaxed",
          !open && "line-clamp-4"
        )}
      >
        {t(villa.host.note, locale)}
      </p>
      <button
        onClick={() => setOpen(!open)}
        className="text-accent mt-2 inline-flex items-center gap-1 text-sm font-medium"
      >
        {open ? t(ui.readLess, locale) : t(ui.readMore, locale)}
        <ChevronDown
          size={15}
          className={cn("transition", open && "rotate-180")}
        />
      </button>

      <div className="border-line mt-4 flex items-center gap-3 border-t pt-4">
        {villa.host.photo && (
          <Image
            src={villa.host.photo}
            alt={villa.host.name}
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-muted text-xs">{t(ui.yourHost, locale)}</p>
          <p className="truncate text-[15px] font-medium">{villa.host.name}</p>
        </div>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="bg-wa/15 text-wa grid size-10 place-items-center rounded-full transition active:scale-95"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
}

export function VillaHome({ villa }: { villa: Villa }) {
  const { locale } = useLocale();

  return (
    <>
      <div className="relative lg:px-6 lg:pt-4">
        <TopBar overlay />
        <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9] lg:overflow-hidden lg:rounded-3xl">
          <HeroCarousel images={villa.heroImages} alt={villa.name} />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-black/5 to-black/25" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] p-5 pb-14 text-white">
            <p className="fade-up text-[11px] tracking-[0.2em] text-white/80">
              {upper(t(villa.location.area, locale), locale)}
            </p>
            <h1
              className="fade-up font-display mt-1 text-4xl leading-tight text-balance italic lg:text-5xl"
              style={{ animationDelay: "90ms" }}
            >
              {villa.name}
            </h1>
            <p
              className="fade-up mt-1.5 max-w-[36ch] text-sm leading-relaxed text-white/85"
              style={{ animationDelay: "180ms" }}
            >
              {t(villa.tagline, locale)}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-4 lg:px-6">
        <div
          className="fade-up relative z-10 mx-4 -mt-10 lg:mx-0 lg:-mt-14"
          style={{ animationDelay: "220ms" }}
        >
          <HostNote villa={villa} />
        </div>
        <div className="lg:relative lg:z-10 lg:-mt-14">
          <TodayCard
            lat={villa.location.lat}
            lon={villa.location.lon}
            area={villa.location.area}
            locale={locale}
          />
        </div>
      </div>

      <section className="px-4 pt-8 lg:px-6">
        <p className="text-muted text-[11px] tracking-[0.2em]">
          {upper(t(ui.guide, locale), locale)}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {villa.sections.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                key={s.slug}
                href={`/${villa.slug}/${s.slug}`}
                className="fade-up border-line bg-card hover:border-accent/50 flex min-h-28 flex-col justify-between rounded-2xl border p-4 transition active:scale-[.98] lg:min-h-32 lg:p-5"
                style={{ animationDelay: `${260 + i * 55}ms` }}
              >
                <Icon size={24} strokeWidth={1.25} className="text-accent" />
                <span className="text-[15px] leading-snug font-medium">
                  {t(s.title, locale)}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
