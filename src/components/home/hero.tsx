import { Highlighter } from "@/components/highlighter";
import { buttonVariants } from "@/components/ui/button";
import hero_jpg from "@/images/home/hero.jpg";
import hero_webp from "@/images/home/hero.webp";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        <h1 className="-translate-x-full animate-title-slide-right scroll-m-20 text-4xl font-extrabold tracking-tight opacity-0 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Partagez <br />
          votre voix
        </h1>
        <p className="-translate-y-full animate-text-slide-down text-xl font-light leading-7 opacity-0 xl:text-2xl 2xl:text-3xl">
          <Highlighter direction="right" inView={true}>
            Découvrez nos services
          </Highlighter>
          <br />à travers notre site internet ainsi
          <br /> que nos différents réseaux.
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
            pointer-events-none absolute inset-y-0  z-10 w-full
            mix-blend-lighten md:right-0 md:-mb-24 md:w-[36rem] lg:w-[44rem]
          "
      >
        <source srcSet={hero_webp.src} type="image/webp" />
        <Image
          src={hero_jpg}
          alt="Chanteuse"
          sizes="(min-width: 768px) 36rem, (min-width: 1024px) 44rem, 100vw"
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
