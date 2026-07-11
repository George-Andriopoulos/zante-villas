"use client";

import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSun,
  Snowflake,
  Sun,
  Sunset,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { t, ui, type L10n, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function wmo(code: number): { I: LucideIcon; label: L10n } {
  if (code === 0) return { I: Sun, label: { en: "Clear", el: "Αίθριος" } };
  if (code <= 2)
    return { I: CloudSun, label: { en: "Partly cloudy", el: "Λίγα σύννεφα" } };
  if (code === 3)
    return { I: Cloud, label: { en: "Overcast", el: "Συννεφιά" } };
  if (code <= 48) return { I: CloudFog, label: { en: "Fog", el: "Ομίχλη" } };
  if (code <= 57)
    return { I: CloudDrizzle, label: { en: "Drizzle", el: "Ψιχάλα" } };
  if (code <= 67) return { I: CloudRain, label: { en: "Rain", el: "Βροχή" } };
  if (code <= 77) return { I: Snowflake, label: { en: "Snow", el: "Χιόνι" } };
  if (code <= 86)
    return { I: CloudRain, label: { en: "Showers", el: "Μπόρες" } };
  return { I: CloudLightning, label: { en: "Thunderstorm", el: "Καταιγίδα" } };
}

type Data = {
  temp: number;
  code: number;
  sunset: string;
  sea: number | null;
  days: { date: string; code: number; max: number; min: number }[];
};

export function TodayCard({
  lat,
  lon,
  area,
  locale,
  className,
}: {
  lat: number;
  lon: number;
  area: L10n;
  locale: Locale;
  className?: string;
}) {
  const [data, setData] = useState<Data | null | "error">(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunset&timezone=auto&forecast_days=7`
        );
        const j = await res.json();

        let sea: number | null = null;
        try {
          const m = await fetch(
            `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=sea_surface_temperature&timezone=auto`
          );
          const mj = await m.json();
          sea = mj?.current?.sea_surface_temperature ?? null;
        } catch {}

        if (ignore) return;
        setData({
          temp: Math.round(j.current.temperature_2m),
          code: j.current.weather_code,
          sunset: String(j.daily.sunset[0]).slice(11, 16),
          sea: sea === null ? null : Math.round(sea),
          days: j.daily.time.map((date: string, i: number) => ({
            date,
            code: j.daily.weather_code[i],
            max: Math.round(j.daily.temperature_2m_max[i]),
            min: Math.round(j.daily.temperature_2m_min[i]),
          })),
        });
      } catch {
        if (!ignore) setData("error");
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [lat, lon]);

  if (data === "error") return null;

  if (!data) {
    return (
      <div
        className={cn(
          "border-line bg-card mx-4 mt-4 h-44 animate-pulse rounded-2xl border lg:mx-0 lg:mt-0",
          className
        )}
      />
    );
  }

  const now = wmo(data.code);
  const dayName = (d: string) =>
    new Date(d).toLocaleDateString(locale === "el" ? "el-GR" : "en-GB", {
      weekday: "short",
    });

  return (
    <div
      className={cn(
        "border-line bg-card mx-4 mt-4 rounded-2xl border p-4 lg:mx-0 lg:mt-0",
        className
      )}
    >
      <p className="text-muted text-[11px] tracking-[0.16em]">
        {(t(ui.today, locale) + " · " + t(area, locale)).toLocaleUpperCase(
          locale === "el" ? "el-GR" : "en-GB"
        )}
      </p>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <now.I size={34} strokeWidth={1.25} className="text-accent" />
          <div>
            <p className="font-display text-3xl leading-none">{data.temp}°</p>
            <p className="text-muted mt-1 text-sm">{t(now.label, locale)}</p>
          </div>
        </div>
        <div className="text-muted space-y-1.5 text-sm">
          {data.sea !== null && (
            <p className="flex items-center justify-end gap-1.5">
              <Waves size={15} /> {t(ui.sea, locale)} {data.sea}°
            </p>
          )}
          <p className="flex items-center justify-end gap-1.5">
            <Sunset size={15} /> {t(ui.sunset, locale)} {data.sunset}
          </p>
        </div>
      </div>

      <div className="border-line mt-4 grid grid-cols-7 gap-1 border-t pt-3 text-center">
        {data.days.map((d) => {
          const w = wmo(d.code);
          return (
            <div key={d.date} className="space-y-1">
              <p className="text-muted text-[11px]">{dayName(d.date)}</p>
              <w.I
                size={16}
                strokeWidth={1.5}
                className="text-accent mx-auto"
              />
              <p className="text-xs font-medium">{d.max}°</p>
              <p className="text-muted text-[11px]">{d.min}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
