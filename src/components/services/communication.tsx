"use client";

import Image from "next/image";
import communication_jpg from "@/images/services/communication.jpg";
import communication_webp from "@/images/services/communication.webp";
import { Highlighter } from "../highlighter";
import { useInView } from "react-intersection-observer";

export function Communication() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="relative flex justify-center md:justify-start">
      <div
        className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 py-24 text-center
            md:ml-24 md:grid-rows-none md:content-center md:gap-6 md:text-start 
            lg:ml-32
            xl:ml-40
            2xl:ml-48 
          "
      >
        <div
          ref={ref}
          data-in-view={inView}
          className="flex self-start justify-self-center opacity-0 data-in-view:animate-title-slide-right md:self-auto"
        >
          <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
            02
          </div>
          <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
            Communication
          </h2>
        </div>
        <p
          data-in-view={inView}
          className="text-lg font-light leading-7 opacity-0 data-in-view:animate-text-slide-down lg:text-xl xl:text-2xl"
        >
          <Highlighter direction="right" inView={inView}>
            Élaborons votre communication
          </Highlighter>
          <br /> Jane Do vous permet
          <br /> d&apos;accéder à son réseau.
        </p>
      </div>
      <picture
        className="
            pointer-events-none absolute inset-y-0 w-full mix-blend-lighten
            md:right-0 md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
      >
        <source srcSet={communication_webp.src} type="image/webp" />
        <Image
          src={communication_jpg}
          alt="Cadreur"
          sizes="(min-width: 768px) 30rem, (min-width: 1280px) 34rem, (min-width: 1536px) 38rem, 100vw"
          fill
          priority
          placeholder="blur"
          className="object-cover opacity-30 md:rounded-full lg:opacity-90"
        />
        <div className="absolute -inset-1 bg-gradient-to-t from-background via-transparent to-background md:rounded-full" />
      </picture>
    </section>
  );
}
