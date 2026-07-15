"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

// Shows the whole photo, uncropped, no matter its aspect ratio — a blurred
// copy of the same photo fills the space around it instead of an ugly crop
// or empty bars. Standard technique for arbitrary user photos in a fixed
// container. The Ken Burns zoom only touches the blurred backdrop layer, so
// the real photo is never cropped by the animation.
function HeroSlide({
  src,
  alt,
  animate,
  priority,
}: {
  src: string;
  alt: string;
  animate?: boolean;
  priority?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className={cn("absolute inset-0", animate && "kenburns")}>
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="scale-110 object-cover blur-2xl"
          aria-hidden
          draggable={false}
        />
      </div>
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}

export function HeroCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <HeroSlide src={images[0]} alt={alt} animate priority />
      </div>
    );
  }

  return <RotatingHero images={images} alt={alt} />;
}

function RotatingHero({ images, alt }: { images: string[]; alt: string }) {
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
            <HeroSlide
              src={src}
              alt={`${alt} — ${i + 1}`}
              animate={i === selected}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

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
    </div>
  );
}
