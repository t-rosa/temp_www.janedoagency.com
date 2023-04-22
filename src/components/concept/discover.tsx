"use client";

import expert_jpg from "@/images/concept/expert.jpg";
import expert_webp from "@/images/concept/expert.webp";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Highlighter } from "../highlighter";

export function Discover() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="discover"
      className="relative flex justify-center md:justify-end"
    >
      <div
        className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 py-24 text-center
            md:mr-24 md:grid-rows-none md:place-content-center md:gap-6 md:text-end 
            lg:mr-32
            xl:mr-40
            2xl:mr-48
          "
      >
        <h2
          ref={ref}
          data-in-view={inView}
          className="-translate-x-full scroll-m-20 text-4xl font-extrabold tracking-tight opacity-0 data-in-view:animate-title-slide-left md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
        >
          Expertise <br /> de projets
        </h2>
        <p
          data-in-view={inView}
          className="-translate-y-full text-xl font-light leading-7 opacity-0 data-in-view:animate-text-slide-down xl:text-2xl 2xl:text-3xl"
        >
          Compétences, conseils et <br /> analyse de votre image afin de
          <br /> vous
          <Highlighter direction="left" inView={inView}>
            proposer une idée
          </Highlighter>
          précise <br /> de votre future communication.
        </p>
      </div>
      <picture
        className="
            pointer-events-none absolute inset-y-0 w-full mix-blend-lighten
            md:left-0 md:-mb-24 md:w-[30rem]
            xl:w-[34rem] 
            2xl:w-[38rem]
          "
      >
        <source srcSet={expert_webp.src} type="image/webp" />
        <Image
          src={expert_jpg}
          alt="Expert"
          sizes="(min-width: 768px) 30rem, (min-width: 1280px) 34rem, (min-width: 1536px) 38rem, 100vw"
          fill
          priority
          placeholder="blur"
          className="object-cover opacity-30 md:rounded-b-full lg:opacity-90"
        />
        <div className="absolute -inset-1 bg-gradient-to-t from-background via-transparent to-background md:rounded-b-full" />
      </picture>
    </section>
  );
}
