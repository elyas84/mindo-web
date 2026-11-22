"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export type AppScreen = {
  src: string;
  title: string;
  alt: string;
  caption: string;
};

const controlClass =
  "static top-auto right-auto bottom-auto left-auto translate-x-0 translate-y-0";

export function ScreenGallery({ screens }: { screens: readonly AppScreen[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const update = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", update);
    api.on("reInit", update);
    const frame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(frame);
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  const visible = screens[current];

  return (
    <Carousel
      aria-label="Mindo app screens"
      className="mt-8"
      opts={{ align: "start", loop: true }}
      setApi={setApi}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted" aria-live="polite">
          {visible ? `${visible.title}, ${current + 1} of ${screens.length}` : null}
        </p>
        <div className="flex gap-2">
          <CarouselPrevious className={controlClass} />
          <CarouselNext className={controlClass} />
        </div>
      </div>
      <CarouselContent>
        {screens.map((screen) => (
          <CarouselItem key={screen.src} className="sm:basis-1/2 lg:basis-1/3">
            <figure className="h-full">
              <Image
                src={screen.src}
                alt={screen.alt}
                width={471}
                height={1024}
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-3">
                <span className="block text-sm font-semibold">{screen.title}</span>
                <span className="mt-1 block text-sm leading-6 text-muted">
                  {screen.caption}
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
