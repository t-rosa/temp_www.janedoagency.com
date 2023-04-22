import { buttonVariants } from "@/components/ui/button";
import hero_jpg from "@/images/services/hero.jpg";
import hero_webp from "@/images/services/hero.webp";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex justify-center md:justify-start">
      <div
        className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto_auto] gap-12 border border-red-500  py-24 text-center
            md:ml-24 md:grid-rows-none md:content-center md:gap-6 md:text-start 
            lg:ml-32
            xl:ml-40
            2xl:ml-48 
          "
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
          Vous avez <br />
          des projets ?
        </h1>
        <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
          Jane Do vous propose <br /> différents services adaptée pour <br />{" "}
          développer vos projets !
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
        className="
            pointer-events-none absolute inset-y-0 -z-10 w-full mix-blend-lighten 
            md:right-0 md:-mb-5 md:w-[36rem] xl:w-[40rem] 2xl:w-[44rem]
          "
      >
        <source srcSet={hero_webp.src} type="image/webp" />
        <Image
          src={hero_jpg}
          alt="Chanteuse"
          sizes="(min-width: 768px) 36rem, (min-width: 1280px) 40rem, (min-width: 1536px) 44rem, 100vw"
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
