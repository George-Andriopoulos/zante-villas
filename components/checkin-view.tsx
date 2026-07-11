"use client";

import type { Villa } from "@/content/types";
import { upper } from "@/lib/utils";

import { CheckinForm } from "./checkin-form";
import { useLocale } from "./providers";
import { TopBar } from "./top-bar";

export function CheckinPageView({ villa }: { villa: Villa }) {
  const { locale } = useLocale();
  return (
    <>
      <TopBar backHref={`/${villa.slug}`} />
      <div className="mx-auto w-full px-4 pt-6 lg:max-w-2xl lg:px-6">
        <p className="text-muted text-[11px] tracking-[0.2em]">
          {upper(villa.name, locale)}
        </p>
        <h1 className="font-display mt-1 text-3xl leading-tight italic">
          Check-in
        </h1>
        <div className="mt-6">
          <CheckinForm villa={villa} />
        </div>
      </div>
    </>
  );
}
