import type { Metadata } from "next";
import { Commissioner, Literata } from "next/font/google";

import { AppInit } from "@/components/app-init";

import "./globals.css";

const sans = Commissioner({
  subsets: ["latin", "greek"],
  variable: "--font-commissioner",
});

const display = Literata({
  subsets: ["latin", "greek"],
  style: ["normal", "italic"],
  variable: "--font-literata",
});

export const metadata: Metadata = {
  title: { default: "Zante Villas", template: "%s · Zante Villas" },
  description: "Digital guest guides for villas — by PixelZakynthos.",
};

const themeInit = `(function(){try{var raw=localStorage.getItem("zv-prefs");var dark=null;if(raw){var parsed=JSON.parse(raw);dark=parsed&&parsed.state?parsed.state.dark:null;}var wantsDark=dark===true||(dark===null&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(wantsDark){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <AppInit />
        {children}
      </body>
    </html>
  );
}
