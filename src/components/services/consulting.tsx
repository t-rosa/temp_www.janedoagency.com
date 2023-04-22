"use client";

import Image from "next/image";
import consulting_jpg from "@/images/services/consulting.jpg";
import consulting_webp from "@/images/services/consulting.webp";
import { Highlighter } from "../highlighter";
import { useInView } from "react-intersection-observer";

export function Consulting() {
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
          className="flex self-start opacity-0 data-in-view:animate-title-slide-right md:self-auto"
        >
          <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
            04
          </div>
          <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
            Consulting
          </h2>
        </div>
        <p
          data-in-view={inView}
          className="text-lg font-light leading-7 opacity-0 data-in-view:animate-text-slide-down lg:text-xl xl:text-2xl"
        >
          Besoin d&apos;un&nbsp;
          <Highlighter direction="right" inView={inView}>
            avis extérieur
          </Highlighter>
          ? <br /> Le but est de vous donner une <br /> vision claire de votre
          stratégie.
        </p>
      </div>
      <picture
        className="
            pointer-events-none absolute inset-y-0 w-full mix-blend-lighten
            md:right-0 md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
      >
        <source srcSet={consulting_webp.src} type="image/webp" />
        <Image
          src={consulting_jpg}
          alt="Cadreur"
          sizes="(min-width: 768px) 30rem, (min-width: 1280px) 34rem, (min-width: 1536px) 38rem, 100vw"
          fill
          priority
          placeholder="blur"
          className="object-cover opacity-30 md:rounded-full lg:opacity-90"
        />
        <div className="absolute -inset-1 bg-gradient-to-t from-background via-transparent to-background md:rounded-t-full" />
      </picture>
    </section>
  );
}
