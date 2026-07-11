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
      <div className="mx-auto w-full px-4 pt-6 lg:max-w-3xl lg:px-6">
        <p className="text-muted text-[11px] tracking-[0.2em]">
          {upper(`${villa.name} · ${t(ui.guide, locale)}`, locale)}
        </p>
        <h1 className="font-display mt-1 text-3xl leading-tight italic">
          {t(section.title, locale)}
        </h1>
        {section.intro && (
          <p className="text-muted mt-2 text-[15px] leading-relaxed">
            {t(section.intro, locale)}
          </p>
        )}
        <div className="mt-6">
          <Blocks
            blocks={section.blocks}
            villaSlug={villa.slug}
            sectionSlug={section.slug}
          />
        </div>
      </div>
    </>
  );
}
