import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import hero_jpg from "@/images/concept/hero.jpg";
import hero_webp from "@/images/concept/hero.webp";
import expert_jpg from "@/images/concept/expert.jpg";
import expert_webp from "@/images/concept/expert.webp";
import brand_values_jpg from "@/images/concept/brand-values.jpg";
import brand_values_webp from "@/images/concept/brand-values.webp";

export default function ConceptPage() {
  return (
    <>
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

      <section
        id="discover"
        className="relative flex justify-center border md:justify-end"
      >
        <div
          className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 border border-red-500  py-24 text-center
            md:mr-24 md:grid-rows-none md:place-content-center md:gap-6 md:text-end 
            lg:mr-32
            xl:mr-40
            2xl:mr-48
          "
        >
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Expertise <br /> de projets
          </h2>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Compétences, conseils et <br /> analyse de votre image afin de
            <br /> vous proposer une idée précise <br /> de votre future
            communication.
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 -z-10 w-full mix-blend-lighten
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

      <section
        className="
          grid w-full place-items-center gap-12 border border-red-500  py-24 text-center
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
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto_auto] gap-12 border border-red-500  py-24 text-center
            md:ml-24 md:grid-rows-none md:place-content-center md:gap-6 md:text-start
            lg:ml-32
            xl:ml-40
            2xl:ml-48
          "
        >
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Bâtir <br />
            ensemble
          </h2>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Chez Jane Do l&apos;écoute, la <br /> proximité et
            l&apos;inclusivité sont <br />
            les mots d&apos;ordre pour chacun <br /> des projets que nous <br />
            entreprenons ensemble.
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
            pointer-events-none absolute inset-y-0 -z-10 w-full mix-blend-lighten 
            md:right-0 md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
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
            className="object-cover opacity-30 md:rounded-t-full lg:opacity-90"
          />
          <div className="absolute -inset-1 bg-gradient-to-t from-background via-transparent to-background md:rounded-t-full" />
        </picture>
      </section>
    </>
  );
}
