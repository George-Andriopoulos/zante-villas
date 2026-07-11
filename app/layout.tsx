import type { Metadata } from "next";
import { Commissioner, Literata } from "next/font/google";

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
  title: { default: "Xenios", template: "%s · Xenios" },
  description: "Digital guest guides for villas — by PixelZakynthos.",
};

const themeInit = `(function(){try{var t=localStorage.getItem("xenios-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} font-sans`}>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
