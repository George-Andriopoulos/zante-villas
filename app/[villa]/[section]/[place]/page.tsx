import { notFound } from "next/navigation";

import type { Place } from "@/content/types";
import { villas } from "@/content/villas";
import { PlaceView } from "@/components/place-view";

function findPlace(villaSlug: string, sectionSlug: string, placeSlug: string) {
  const v = villas[villaSlug];
  const s = v?.sections.find((x) => x.slug === sectionSlug);
  if (!v || !s) return null;
  for (const block of s.blocks) {
    if (block.type === "places") {
      const p = block.items.find((x) => x.slug === placeSlug && x.details);
      if (p)
        return {
          villa: v,
          section: s,
          place: p as Required<Pick<Place, "details">> & Place,
        };
    }
  }
  return null;
}

export function generateStaticParams() {
  return Object.entries(villas).flatMap(([villaSlug, v]) =>
    v.sections.flatMap((s) =>
      s.blocks.flatMap((b) =>
        b.type === "places"
          ? b.items
              .filter((p) => p.slug && p.details)
              .map((p) => ({
                villa: villaSlug,
                section: s.slug,
                place: p.slug!,
              }))
          : []
      )
    )
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ villa: string; section: string; place: string }>;
}) {
  const { villa, section, place } = await params;
  const found = findPlace(villa, section, place);
  if (!found) notFound();
  return (
    <PlaceView
      villa={found.villa}
      section={found.section}
      place={found.place}
    />
  );
}
