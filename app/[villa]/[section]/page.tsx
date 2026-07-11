import { notFound } from "next/navigation";

import { SectionView } from "@/components/section-view";
import { villas } from "@/content/villas";

export function generateStaticParams() {
  return Object.entries(villas).flatMap(([slug, v]) =>
    v.sections.map((s) => ({ villa: slug, section: s.slug })),
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ villa: string; section: string }>;
}) {
  const { villa, section } = await params;
  const v = villas[villa];
  const s = v?.sections.find((x) => x.slug === section);
  if (!v || !s) notFound();
  return (
    <SectionView
      villa={v}
      section={s}
    />
  );
}
