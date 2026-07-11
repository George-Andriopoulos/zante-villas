"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function HeroCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 22 }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full touch-pan-y">
        {images.map((src, i) => (
          <div key={src} className="relative h-full min-w-0 flex-[0_0_100%]">
            <div className={cn("h-full w-full", i === selected && "kenburns")}>
              <Image
                src={src}
                alt={`${alt} — ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="pointer-events-none absolute right-5 bottom-5 z-[3] flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Photo ${i + 1}`}
              className={cn(
                "pointer-events-auto h-1.5 rounded-full transition-all",
                i === selected ? "w-5 bg-white" : "w-1.5 bg-white/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
