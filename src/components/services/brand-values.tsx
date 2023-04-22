"use client";

import Image from "next/image";
import brand_values_jpg from "@/images/concept/brand-values.jpg";
import brand_values_webp from "@/images/concept/brand-values.webp";
import { Highlighter } from "../highlighter";
import { useInView } from "react-intersection-observer";

export function BrandValues() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="relative flex justify-center md:justify-end">
      <div
        className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 py-24 text-center
            md:mr-24 md:grid-rows-none md:content-center md:gap-6 md:text-end 
            lg:mr-32
            xl:mr-40
            2xl:mr-48 
          "
      >
        <div
          ref={ref}
          data-in-view={inView}
          className="flex self-start opacity-0 data-in-view:animate-title-slide-left md:self-auto"
        >
          <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
            03
          </div>
          <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
            Brand Values
          </h2>
        </div>
        <p
          data-in-view={inView}
          className="text-lg font-light leading-7 opacity-0 data-in-view:animate-text-slide-down lg:text-xl xl:text-2xl"
        >
          Charte graphique, logo une <br />
          <Highlighter direction="left" inView={inView}>
            identité forte
          </Highlighter>
          pour faire adhérer
          <br /> vos cibles à votre univers !
        </p>
      </div>
      <picture
        className="
            pointer-events-none absolute inset-y-0 w-full overflow-x-hidden
            mix-blend-lighten md:left-0 md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
      >
        <source srcSet={brand_values_webp.src} type="image/webp" />
        <Image
          src={brand_values_jpg}
          alt="Chanteur"
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
