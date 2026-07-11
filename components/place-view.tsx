"use client";

import Image from "next/image";
import { Clock, Gift, Globe, MapPin, Phone, Sparkles } from "lucide-react";

import type { Place, Section, Villa } from "@/content/types";
import { t, ui } from "@/lib/i18n";
import { upper } from "@/lib/utils";

import { useLocale } from "./providers";
import { TopBar } from "./top-bar";

export function PlaceView({
  villa,
  section,
  place,
}: {
  villa: Villa;
  section: Section;
  place: Place;
}) {
  const { locale } = useLocale();
  const d = place.details;

  return (
    <>
      <div className="relative">
        <TopBar backHref={`/${villa.slug}/${section.slug}`} overlay />
        <div className="relative aspect-[16/11] lg:aspect-[21/9]">
          {place.image && (
            <Image
              src={place.image}
              alt={place.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              draggable={false}
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/30" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="fade-up text-[11px] tracking-[0.2em] text-white/80">
              {upper(t(section.title, locale), locale)}
            </p>
            <h1
              className="fade-up font-display mt-1 text-3xl leading-tight italic lg:text-4xl"
              style={{ animationDelay: "80ms" }}
            >
              {place.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full px-4 pt-5 lg:max-w-3xl lg:px-6">
        <div
          className="fade-up flex flex-wrap items-center gap-2"
          style={{ animationDelay: "140ms" }}
        >
          <p className="text-accent text-sm font-medium">
            {t(place.tagline, locale)}
          </p>
          {place.distance && (
            <span className="text-muted text-xs">
              · {t(place.distance, locale)}
            </span>
          )}
          {place.sponsored && (
            <span className="bg-accent-soft text-accent inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium">
              <Sparkles size={11} /> {t(ui.partner, locale)}
            </span>
          )}
        </div>

        {d?.perk && (
          <div
            className="fade-up border-accent/30 bg-accent-soft mt-4 flex items-start gap-3 rounded-2xl border p-4"
            style={{ animationDelay: "200ms" }}
          >
            <span className="bg-accent text-paper grid size-9 shrink-0 place-items-center rounded-full">
              <Gift size={16} />
            </span>
            <div>
              <p className="text-accent text-xs font-medium tracking-wide">
                {upper(t(ui.perkTitle, locale), locale)}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed">
                {t(d.perk, locale)}
              </p>
            </div>
          </div>
        )}

        {d?.body && (
          <div
            className="fade-up text-muted mt-5 text-[15px] leading-relaxed whitespace-pre-line"
            style={{ animationDelay: "260ms" }}
          >
            {t(d.body, locale)}
          </div>
        )}

        {d?.gallery && d.gallery.length > 0 && (
          <div
            className="fade-up -mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 lg:mx-0 lg:px-0"
            style={{ animationDelay: "320ms" }}
          >
            {d.gallery.map((src, i) => (
              <div
                key={src}
                className="border-line relative aspect-[4/3] w-72 shrink-0 snap-start overflow-hidden rounded-2xl border"
              >
                <Image
                  src={src}
                  alt={`${place.name} — ${i + 2}`}
                  fill
                  sizes="288px"
                  className="object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        )}

        {(d?.hours || d?.phone || d?.website) && (
          <div
            className="fade-up border-line bg-card mt-6 rounded-2xl border px-4"
            style={{ animationDelay: "380ms" }}
          >
            {d?.hours && (
              <div className="border-line flex items-center justify-between gap-3 border-b py-3 last:border-0">
                <span className="text-muted flex items-center gap-2 text-sm">
                  <Clock size={15} /> {t(ui.hours, locale)}
                </span>
                <span className="text-right text-sm font-medium">
                  {t(d.hours, locale)}
                </span>
              </div>
            )}
            {d?.phone && (
              <div className="border-line flex items-center justify-between gap-3 border-b py-3 last:border-0">
                <span className="text-muted flex items-center gap-2 text-sm">
                  <Phone size={15} /> {t(ui.callLabel, locale)}
                </span>
                <a
                  href={`tel:${d.phone.replace(/\s/g, "")}`}
                  className="text-accent text-sm font-medium"
                >
                  {d.phone}
                </a>
              </div>
            )}
            {d?.website && (
              <div className="border-line flex items-center justify-between gap-3 border-b py-3 last:border-0">
                <span className="text-muted flex items-center gap-2 text-sm">
                  <Globe size={15} /> {t(ui.website, locale)}
                </span>
                <a
                  href={d.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent max-w-[55%] truncate text-sm font-medium"
                >
                  {d.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>
        )}

        {place.mapUrl && (
          <a
            href={place.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up bg-accent text-paper mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-medium transition active:scale-[.98] lg:w-auto"
            style={{ animationDelay: "440ms" }}
          >
            <MapPin size={16} /> {t(ui.map, locale)}
          </a>
        )}
      </div>
    </>
  );
}
