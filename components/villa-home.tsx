"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import type { Villa } from "@/content/types";
import { t, ui } from "@/lib/i18n";
import { iconMap } from "@/lib/icons";
import { cn, upper } from "@/lib/utils";

import { useLocale } from "./providers";
import { TopBar } from "./top-bar";
import { TodayCard } from "./weather";
import { useWaHref, WhatsAppIcon } from "./whatsapp";

function HostNote({ villa }: { villa: Villa }) {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const wa = useWaHref(villa.host.whatsapp, villa.name);

  return (
    <div className='relative z-10 mx-4 -mt-10 rounded-2xl border border-line bg-card p-5 shadow-[0_16px_32px_-20px_rgb(0_0_0/0.45)]'>
      <p
        className={cn(
          "text-[15px] leading-relaxed text-muted",
          !open && "line-clamp-4",
        )}>
        {t(villa.host.note, locale)}
      </p>
      <button
        onClick={() => setOpen(!open)}
        className='mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent'>
        {open ? t(ui.readLess, locale) : t(ui.readMore, locale)}
        <ChevronDown
          size={15}
          className={cn("transition", open && "rotate-180")}
        />
      </button>

      <div className='mt-4 flex items-center gap-3 border-t border-line pt-4'>
        {villa.host.photo && (
          <Image
            src={villa.host.photo}
            alt={villa.host.name}
            width={44}
            height={44}
            className='rounded-full object-cover'
          />
        )}
        <div className='min-w-0 flex-1'>
          <p className='text-xs text-muted'>{t(ui.yourHost, locale)}</p>
          <p className='truncate text-[15px] font-medium'>{villa.host.name}</p>
        </div>
        <a
          href={wa}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
          className='grid size-10 place-items-center rounded-full bg-wa/15 text-wa transition active:scale-95'>
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
      <div className='relative'>
        <TopBar overlay />
        <div className='relative aspect-[4/5]'>
          <Image
            src={villa.heroImage}
            alt={villa.name}
            fill
            priority
            sizes='(max-width: 512px) 100vw, 512px'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/25' />
          <div className='absolute inset-x-0 bottom-0 p-5 pb-14 text-white'>
            <p className='text-[11px] tracking-[0.2em] text-white/80'>
              {upper(t(villa.location.area, locale), locale)}
            </p>
            <h1 className='mt-1 font-display text-4xl italic leading-tight text-balance'>
              {villa.name}
            </h1>
            <p className='mt-1.5 max-w-[36ch] text-sm leading-relaxed text-white/85'>
              {t(villa.tagline, locale)}
            </p>
          </div>
        </div>
      </div>

      <HostNote villa={villa} />

      <TodayCard
        lat={villa.location.lat}
        lon={villa.location.lon}
        area={villa.location.area}
        locale={locale}
      />

      <section className='px-4 pt-8'>
        <p className='text-[11px] tracking-[0.2em] text-muted'>
          {upper(t(ui.guide, locale), locale)}
        </p>
        <div className='mt-3 grid grid-cols-2 gap-3'>
          {villa.sections.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                key={s.slug}
                href={`/${villa.slug}/${s.slug}`}
                className='flex min-h-28 flex-col justify-between rounded-2xl border border-line bg-card p-4 transition active:scale-[.98]'>
                <Icon
                  size={24}
                  strokeWidth={1.25}
                  className='text-accent'
                />
                <span className='text-[15px] font-medium leading-snug'>
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
