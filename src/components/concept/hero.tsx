import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import hero_jpg from "@/images/concept/hero.jpg";
import hero_webp from "@/images/concept/hero.webp";

export function Hero() {
  return (
    <section className="relative flex justify-center md:justify-start">
      <div
        className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto_auto] gap-12 border border-red-500  py-24 text-center
            md:ml-24 md:grid-rows-none md:place-content-center md:gap-6 md:text-start 
            lg:ml-32
            xl:ml-40
            2xl:ml-48 
          "
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
          L&apos;essence <br />
          de Jane Do
        </h1>
        <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
          La volonté de Jane Do c&apos;est <br /> de vous aider dans le <br />
          développement de votre <br /> univers artistique.
        </p>
        <a
          href="#discover"
          className={cn(
            buttonVariants({ variant: "gradiant", size: "xl" }),
            "w-fit justify-self-center md:justify-self-start"
          )}
        >
          Découvrir
        </a>
      </div>
      <picture
        className="pointer-events-none absolute inset-y-0 -z-10 w-full mix-blend-lighten 
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
