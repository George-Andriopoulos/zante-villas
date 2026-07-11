"use client";

import { FacebookIcon, InstagramIcon } from "./social-icons";

import type { Villa } from "@/content/types";
import { t, ui } from "@/lib/i18n";
import { iconMap } from "@/lib/icons";

import { useLocale } from "./providers";
import { useWaHref, WhatsAppIcon } from "./whatsapp";

function Cta({ villa, cta }: { villa: Villa; cta: Villa["ctas"][number] }) {
  const { locale } = useLocale();
  const wa = useWaHref(villa.host.whatsapp, villa.name);
  const isWa = cta.kind === "whatsapp";
  const href = isWa ? wa : cta.href;
  const Icon = iconMap[cta.icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium transition active:scale-95"
    >
      {isWa ? (
        <WhatsAppIcon className="text-wa size-5" />
      ) : (
        <Icon size={20} strokeWidth={1.5} className="text-accent" />
      )}
      {t(cta.label, locale)}
    </a>
  );
}

export function BottomBar({ villa }: { villa: Villa }) {
  if (!villa.ctas.length) return null;
  return (
    <nav className="border-line bg-paper/90 fixed inset-x-0 bottom-0 z-30 border-t backdrop-blur">
      <div className="mx-auto grid max-w-lg auto-cols-fr grid-flow-col pb-[max(env(safe-area-inset-bottom),0.25rem)]">
        {villa.ctas.map((cta, i) => (
          <Cta key={i} villa={villa} cta={cta} />
        ))}
      </div>
    </nav>
  );
}

export function Footer({ villa }: { villa: Villa }) {
  const { locale } = useLocale();
  return (
    <footer className="border-line mt-12 border-t px-4 pt-8 pb-8 text-center">
      {villa.social && (
        <div className="mb-5 flex justify-center gap-3">
          {villa.social.instagram && (
            <a
              href={villa.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="border-line text-muted grid size-10 place-items-center rounded-full border transition active:scale-95"
            >
              <InstagramIcon size={17} />
            </a>
          )}
          {villa.social.facebook && (
            <a
              href={villa.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="border-line text-muted grid size-10 place-items-center rounded-full border transition active:scale-95"
            >
              <FacebookIcon size={17} />
            </a>
          )}
        </div>
      )}
      {villa.footer?.address && (
        <p className="text-muted text-sm">{t(villa.footer.address, locale)}</p>
      )}
      <p className="text-muted mt-1 text-sm">{villa.host.phone}</p>
      <p className="text-muted mt-6 text-xs">
        {t(ui.guideBy, locale)}{" "}
        <a
          href="https://pixelzakynthos.com" /* TODO: your real link */
          className="text-accent font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          PixelZakynthos
        </a>
      </p>
    </footer>
  );
}
