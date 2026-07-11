"use client";

import type { Section, Villa } from "@/content/types";
import { t, ui } from "@/lib/i18n";
import { upper } from "@/lib/utils";

import { Blocks } from "./blocks";
import { useLocale } from "./providers";
import { TopBar } from "./top-bar";

export function SectionView({
  villa,
  section,
}: {
  villa: Villa;
  section: Section;
}) {
  const { locale } = useLocale();
  return (
    <>
      <TopBar backHref={`/${villa.slug}`} />
      <div className='px-4 pt-6'>
        <p className='text-[11px] tracking-[0.2em] text-muted'>
          {upper(`${villa.name} · ${t(ui.guide, locale)}`, locale)}
        </p>
        <h1 className='mt-1 font-display text-3xl italic leading-tight'>
          {t(section.title, locale)}
        </h1>
        {section.intro && (
          <p className='mt-2 text-[15px] leading-relaxed text-muted'>
            {t(section.intro, locale)}
          </p>
        )}
        <div className='mt-6'>
          <Blocks blocks={section.blocks} />
        </div>
      </div>
    </>
  );
}
