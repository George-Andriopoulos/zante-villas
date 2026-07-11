import { notFound } from "next/navigation";

import { villas } from "@/content/villas";
import { CheckinPageView } from "@/components/checkin-view";

export function generateStaticParams() {
  return Object.keys(villas).map((villa) => ({ villa }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ villa: string }>;
}) {
  const { villa } = await params;
  const v = villas[villa];
  if (!v) notFound();
  return <CheckinPageView villa={v} />;
}
