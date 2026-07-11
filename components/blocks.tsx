"use client";

import Image from "next/image";
import { Mail, MapPin, Phone, UtensilsCrossed } from "lucide-react";

import type { Block, Contact, Place } from "@/content/types";
import { t, ui } from "@/lib/i18n";
import { cn, waLink } from "@/lib/utils";

import { CopyButton } from "./copy-button";
import { useLocale } from "./providers";
import { WhatsAppIcon } from "./whatsapp";

function PlaceCard({ place }: { place: Place }) {
  const { locale } = useLocale();
  return (
    <article className='overflow-hidden rounded-2xl border border-line bg-card'>
      {place.image && (
        <div className='relative aspect-[16/10]'>
          <Image
            src={place.image}
            alt={place.name}
            fill
            sizes='(max-width: 512px) 100vw, 512px'
            className='object-cover'
          />
        </div>
      )}
      <div className='p-4'>
        <div className='flex items-baseline justify-between gap-2'>
          <h3 className='text-[17px] font-medium'>{place.name}</h3>
          {place.distance && (
            <span className='shrink-0 text-xs text-muted'>
              {t(place.distance, locale)}
            </span>
          )}
        </div>
        <p className='mt-0.5 text-sm text-accent'>{t(place.tagline, locale)}</p>
        {place.description && (
          <p className='mt-2 text-sm leading-relaxed text-muted'>
            {t(place.description, locale)}
          </p>
        )}
        {(place.mapUrl || place.menuUrl) && (
          <div className='mt-3 flex gap-2'>
            {place.mapUrl && (
              <a
                href={place.mapUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium transition active:scale-95'>
                <MapPin size={13} /> {t(ui.map, locale)}
              </a>
            )}
            {place.menuUrl && (
              <a
                href={place.menuUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 rounded-full border border-line bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent transition active:scale-95'>
                <UtensilsCrossed size={13} /> {t(ui.menu, locale)}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function ContactRow({ c }: { c: Contact }) {
  const { locale } = useLocale();
  const href =
    c.kind === "tel"
      ? `tel:${c.value.replace(/\s/g, "")}`
      : c.kind === "email"
        ? `mailto:${c.value}`
        : waLink(c.value);
  const Icon =
    c.kind === "tel" ? Phone : c.kind === "email" ? Mail : WhatsAppIcon;

  return (
    <a
      href={href}
      className='flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 transition active:scale-[.99]'>
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-full",
          c.kind === "whatsapp"
            ? "bg-wa/15 text-wa"
            : "bg-accent-soft text-accent",
        )}>
        <Icon className='size-4' />
      </span>
      <span className='min-w-0'>
        <span className='block truncate text-sm font-medium'>
          {t(c.label, locale)}
        </span>
        <span className='block text-xs text-muted'>{c.value}</span>
      </span>
    </a>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  const { locale } = useLocale();

  return (
    <div className='space-y-5'>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "text":
            return (
              <div key={i}>
                {b.title && (
                  <h3 className='mb-1 text-[15px] font-medium'>
                    {t(b.title, locale)}
                  </h3>
                )}
                <p className='text-[15px] leading-relaxed text-muted'>
                  {t(b.body, locale)}
                </p>
              </div>
            );

          case "notice":
            return (
              <div
                key={i}
                className={cn(
                  "rounded-r-2xl border-l-2 py-3 pl-4 pr-3 text-sm leading-relaxed",
                  b.tone === "warning"
                    ? "border-amber-600/70 bg-amber-500/10"
                    : "border-accent bg-accent-soft",
                )}>
                {t(b.body, locale)}
              </div>
            );

          case "info":
            return (
              <div
                key={i}
                className='rounded-2xl border border-line bg-card px-4'>
                {b.title && (
                  <p className='border-b border-line pt-3 pb-2 text-[15px] font-medium'>
                    {t(b.title, locale)}
                  </p>
                )}
                {b.rows.map((r, ri) => (
                  <div
                    key={ri}
                    className='flex items-center justify-between gap-3 border-b border-line py-3 last:border-0'>
                    <span className='text-sm text-muted'>
                      {t(r.label, locale)}
                    </span>
                    <span className='flex items-center gap-2 text-right text-sm font-medium'>
                      {r.href ? (
                        <a
                          href={r.href}
                          target={
                            r.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel='noopener noreferrer'
                          className='text-accent underline underline-offset-2'>
                          {r.value}
                        </a>
                      ) : (
                        r.value
                      )}
                      {r.copyable && <CopyButton value={r.value} />}
                    </span>
                  </div>
                ))}
              </div>
            );

          case "steps":
            return (
              <div key={i}>
                {b.title && (
                  <h3 className='mb-2 text-[15px] font-medium'>
                    {t(b.title, locale)}
                  </h3>
                )}
                <ol className='space-y-2.5'>
                  {b.items.map((s, si) => (
                    <li
                      key={si}
                      className='flex gap-3'>
                      <span className='mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-medium text-accent'>
                        {si + 1}
                      </span>
                      <span className='text-[15px] leading-relaxed text-muted'>
                        {t(s, locale)}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            );

          case "places":
            return (
              <div
                key={i}
                className='space-y-4'>
                {b.items.map((p) => (
                  <PlaceCard
                    key={p.name}
                    place={p}
                  />
                ))}
              </div>
            );

          case "contacts":
            return (
              <div
                key={i}
                className='space-y-2.5'>
                {b.items.map((c, ci) => (
                  <ContactRow
                    key={ci}
                    c={c}
                  />
                ))}
              </div>
            );
        }
      })}
    </div>
  );
}
