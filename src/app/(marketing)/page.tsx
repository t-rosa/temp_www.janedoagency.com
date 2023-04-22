import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import hero_jpg from "@/images/home/hero.jpg";
import hero_webp from "@/images/home/hero.webp";
import discover_jpg from "@/images/home/discover.jpg";
import discover_webp from "@/images/home/discover.webp";
import join_jpg from "@/images/home/join.jpg";
import join_webp from "@/images/home/join.webp";

export default function HomePage() {
  return (
    <>
      <section className="relative flex justify-center border-4 md:justify-start">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto_auto] gap-12 border border-red-500 px-8 py-24 text-center
            md:ml-8 md:grid-rows-none md:place-content-center md:gap-6 md:text-start 
            lg:ml-16
            xl:ml-24
            2xl:ml-32
          "
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Partagez <br />
            votre voix
          </h1>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Découvrez nos services à <br /> travers notre site internet ainsi
            <br /> que nos différents réseaux.
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
            pointer-events-none absolute inset-y-0 right-0 -z-10 w-screen mix-blend-lighten 
            md:-mb-24 md:w-[36rem] lg:w-[44rem]
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

      <section
        id="discover"
        className="relative flex justify-center border md:justify-end"
      >
        <div
          className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 border border-red-500 px-8 py-24 text-center
            md:mr-8 md:grid-rows-none md:place-content-center md:gap-6 md:text-end 
            lg:mr-16
            xl:mr-24 
            2xl:mr-32
          "
        >
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Découvrez <br />
            Jane Do
          </h2>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Ensemble nous élaborons votre <br />
            image artistique via une <br /> communication adaptée.
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 left-0 -z-10 h-auto w-screen mix-blend-lighten 
            md:-mb-24 md:w-[30rem] 
            xl:w-[34rem] 
            2xl:w-[38rem]
          "
        >
          <source srcSet={discover_webp.src} type="image/webp" />
          <Image
            src={discover_jpg}
            alt="Micro"
            sizes="(min-width: 768px) 30rem, (min-width: 1280px) 34rem, (min-width: 1536px) 38rem, 100vw"
            fill
            priority
            placeholder="blur"
            className="object-cover opacity-30 md:rounded-b-full lg:opacity-90"
          />
          <div className="absolute -inset-1 bg-gradient-to-t from-transparent to-background md:rounded-b-full" />
        </picture>
      </section>

      <section
        className="
          grid w-full place-items-center gap-12 border border-red-500 px-8 py-24 text-center
          md:grid-cols-2
          lg:grid-cols-4 lg:px-16
          xl:px-24
          2xl:px-32
        "
      >
        <div className="h-56 w-56 rounded-full border" />
        <div className="h-56 w-56 rounded-full border" />
        <div className="h-56 w-56 rounded-full border" />
        <div className="h-56 w-56 rounded-full border" />
      </section>

      <section className="relative flex justify-center border md:justify-start">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto_auto] gap-12 border border-red-500 px-8 py-24 text-center
            md:ml-8 md:grid-rows-none md:place-content-center md:gap-6 md:text-start
            lg:ml-16
            xl:ml-24 
            2xl:ml-32
          "
        >
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Rejoindre <br />
            l&apos;aventure
          </h2>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Vous avez des questions, des <br /> demandes ou un projet ? Nous{" "}
            <br /> concevons votre stratégie.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "gradiant", size: "xl" }),
              "w-fit justify-self-center md:justify-self-start"
            )}
          >
            Contactez-nous
          </Link>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 right-0 -z-10 h-auto w-screen mix-blend-lighten 
            md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
        >
          <source srcSet={join_webp.src} type="image/webp" />
          <Image
            src={join_jpg}
            alt="Chanteur"
            sizes="(min-width: 768px) 30rem, (min-width: 1280px) 34rem, (min-width: 1536px) 38rem, 100vw"
            fill
            priority
            placeholder="blur"
            className="object-cover opacity-30 md:rounded-t-full lg:opacity-90"
          />
          <div className="absolute -inset-1 bg-gradient-to-t from-background via-transparent to-background md:rounded-t-full" />
        </picture>
      </section>
    </>
  );
}
