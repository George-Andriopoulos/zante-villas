import { notFound } from "next/navigation";

import { VillaHome } from "@/components/villa-home";
import { villas } from "@/content/villas";

export default async function Page({
  params,
}: {
  params: Promise<{ villa: string }>;
}) {
  const { villa } = await params;
  const v = villas[villa];
  if (!v) notFound();
  return <VillaHome villa={v} />;
}
