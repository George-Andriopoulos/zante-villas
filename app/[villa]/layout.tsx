import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LocaleProvider } from "@/components/providers";
import { BottomBar, Footer } from "@/components/villa-chrome";
import { villas } from "@/content/villas";

type Props = {
  params: Promise<{ villa: string }>;
  children: React.ReactNode;
};

export function generateStaticParams() {
  return Object.keys(villas).map((villa) => ({ villa }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { villa } = await params;
  const v = villas[villa];
  if (!v) return {};
  return { title: v.name, description: v.tagline.en };
}

export default async function VillaLayout({ params, children }: Props) {
  const { villa } = await params;
  const v = villas[villa];
  if (!v) notFound();

  return (
    <LocaleProvider defaultLocale={v.defaultLocale}>
      <div className='mx-auto min-h-dvh max-w-lg pb-24'>
        {children}
        <Footer villa={v} />
      </div>
      <BottomBar villa={v} />
    </LocaleProvider>
  );
}
