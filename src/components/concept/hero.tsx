import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import hero_jpg from "@/images/concept/hero.jpg";
import hero_webp from "@/images/concept/hero.webp";
import { Highlighter } from "../highlighter";

export function Hero() {
  return (
    <section className="relative flex justify-center md:justify-start">
      <div
        className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto_auto] gap-12 py-24 text-center
            md:ml-24 md:grid-rows-none md:place-content-center md:gap-6 md:text-start 
            lg:ml-32
            xl:ml-40
            2xl:ml-48 
          "
      >
        <h1
          className="
              animate-title-slide-right scroll-m-20 text-4xl font-extrabold tracking-tight opacity-0 
              md:text-5xl 
              lg:text-6xl 
              xl:text-7xl 
              2xl:text-8xl
            "
        >
          L&apos;essence <br />
          de Jane Do
        </h1>
        <p
          className="
            animate-text-slide-down text-xl font-light leading-7 opacity-0 
            xl:text-2xl 
            2xl:text-3xl
          "
        >
          La volonté de Jane Do c&apos;est <br /> de{" "}
          <Highlighter direction="right" inView={true}>
            vous aider
          </Highlighter>
          dans le <br />
          développement de votre <br /> univers artistique.
        </p>
        <a
          href="#discover"
          className={cn(
            buttonVariants({ variant: "gradiant", size: "xl" }),
            "w-fit animate-button-fade-in justify-self-center opacity-0 md:justify-self-start"
          )}
        >
          Découvrir
        </a>
      </div>
      <picture
        className="
          pointer-events-none absolute inset-y-0 w-full mix-blend-lighten 
          md:right-0 md:-mb-24 md:w-[30rem]
          xl:w-[34rem] 
          2xl:w-[38rem]
        "
      >
        <source srcSet={hero_webp.src} type="image/webp" />
        <Image
          src={hero_jpg}
          alt="Équipe"
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
