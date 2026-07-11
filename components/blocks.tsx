"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import type { Block, Contact, Place } from "@/content/types";
import { t, ui } from "@/lib/i18n";
import { cn, waLink } from "@/lib/utils";

import { CopyButton } from "./copy-button";
import { useLocale } from "./providers";
import { WhatsAppIcon } from "./whatsapp";

function PlaceCard({ place, href }: { place: Place; href?: string }) {
  const { locale } = useLocale();

  const imageBlock = place.image && (
    <div className="relative aspect-[16/10]">
      <Image
        src={place.image}
        alt={place.name}
        fill
        sizes="(max-width: 512px) 100vw, 512px"
        className="object-cover"
        draggable={false}
      />
      {place.sponsored && (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
          <Sparkles size={11} /> {t(ui.partner, locale)}
        </span>
      )}
    </div>
  );

  return (
    <article className="border-line bg-card hover:border-accent/50 overflow-hidden rounded-2xl border transition">
      {href && imageBlock ? <Link href={href}>{imageBlock}</Link> : imageBlock}
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[17px] font-medium">
            {href ? <Link href={href}>{place.name}</Link> : place.name}
          </h3>
          {place.distance && (
            <span className="text-muted shrink-0 text-xs">
              {t(place.distance, locale)}
            </span>
          )}
        </div>
        <p className="text-accent mt-0.5 text-sm">{t(place.tagline, locale)}</p>
        {place.description && (
          <p className="text-muted mt-2 text-sm leading-relaxed">
            {t(place.description, locale)}
          </p>
        )}
        {(place.mapUrl || place.menuUrl || href) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {href && (
              <Link
                href={href}
                className="bg-accent text-paper inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition active:scale-95"
              >
                {t(ui.readMore, locale)} <ArrowRight size={13} />
              </Link>
            )}
            {place.mapUrl && (
              <a
                href={place.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-line inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition active:scale-95"
              >
                <MapPin size={13} /> {t(ui.map, locale)}
              </a>
            )}
            {place.menuUrl && (
              <a
                href={place.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-line bg-accent-soft text-accent inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition active:scale-95"
              >
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
      className="border-line bg-card flex items-center gap-3 rounded-2xl border px-4 py-3 transition active:scale-[.99]"
    >
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-full",
          c.kind === "whatsapp"
            ? "bg-wa/15 text-wa"
            : "bg-accent-soft text-accent"
        )}
      >
        <Icon className="size-4" />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-medium">
          {t(c.label, locale)}
        </span>
        <span className="text-muted block text-xs">{c.value}</span>
      </span>
    </a>
  );
}

export function Blocks({
  blocks,
  villaSlug,
  sectionSlug,
}: {
  blocks: Block[];
  villaSlug: string;
  sectionSlug: string;
}) {
  const { locale } = useLocale();

  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "text":
            return (
              <div key={i}>
                {b.title && (
                  <h3 className="mb-1 text-[15px] font-medium">
                    {t(b.title, locale)}
                  </h3>
                )}
                <p className="text-muted text-[15px] leading-relaxed">
                  {t(b.body, locale)}
                </p>
              </div>
            );

          case "notice":
            return (
              <div
                key={i}
                className={cn(
                  "rounded-r-2xl border-l-2 py-3 pr-3 pl-4 text-sm leading-relaxed",
                  b.tone === "warning"
                    ? "border-amber-600/70 bg-amber-500/10"
                    : "border-accent bg-accent-soft"
                )}
              >
                {t(b.body, locale)}
              </div>
            );

          case "info":
            return (
              <div
                key={i}
                className="border-line bg-card rounded-2xl border px-4"
              >
                {b.title && (
                  <p className="border-line border-b pt-3 pb-2 text-[15px] font-medium">
                    {t(b.title, locale)}
                  </p>
                )}
                {b.rows.map((r, ri) => (
                  <div
                    key={ri}
                    className="border-line flex items-center justify-between gap-3 border-b py-3 last:border-0"
                  >
                    <span className="text-muted text-sm">
                      {t(r.label, locale)}
                    </span>
                    <span className="flex items-center gap-2 text-right text-sm font-medium">
                      {r.href ? (
                        <a
                          href={r.href}
                          target={
                            r.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-accent underline underline-offset-2"
                        >
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
                  <h3 className="mb-2 text-[15px] font-medium">
                    {t(b.title, locale)}
                  </h3>
                )}
                <ol className="space-y-2.5">
                  {b.items.map((s, si) => (
                    <li key={si} className="flex gap-3">
                      <span className="bg-accent-soft text-accent mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-xs font-medium">
                        {si + 1}
                      </span>
                      <span className="text-muted text-[15px] leading-relaxed">
                        {t(s, locale)}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            );

          case "places":
            return (
              <div key={i} className="grid gap-4 sm:grid-cols-2">
                {b.items.map((p) => (
                  <PlaceCard
                    key={p.name}
                    place={p}
                    href={
                      p.slug && p.details
                        ? `/${villaSlug}/${sectionSlug}/${p.slug}`
                        : undefined
                    }
                  />
                ))}
              </div>
            );

          case "contacts":
            return (
              <div key={i} className="space-y-2.5">
                {b.items.map((c, ci) => (
                  <ContactRow key={ci} c={c} />
                ))}
              </div>
            );
        }
      })}
    </div>
  );
}
