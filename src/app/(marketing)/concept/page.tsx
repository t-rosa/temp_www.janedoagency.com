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
      <section className="relative flex justify-center border-4 md:justify-start">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] max-w-xs grid-rows-[1fr_auto_auto] gap-12 border border-red-500 px-8 py-24 text-center
            md:ml-8 md:grid-rows-none md:place-content-center md:gap-6 md:text-start 
            lg:ml-16 lg:max-w-sm
            xl:ml-24 
            2xl:ml-32
          "
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            L&apos;essence de Jane Do
          </h1>
          <p className="leading-7 lg:text-lg">
            La volonté de Jane Do c&apos;est de vous aider dans le développement
            de votre univers artistique.
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
          className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-screen mix-blend-lighten 
            md:-mb-24 md:w-[30rem] 
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
            grid min-h-[calc(100vh-5rem)] max-w-xs grid-rows-[1fr_auto] gap-12 border border-red-500 px-8 py-24 text-center
            md:mr-8 md:grid-rows-none md:place-content-center md:gap-6 md:text-end 
            lg:mr-16 lg:max-w-sm
            xl:mr-24 
            2xl:mr-32
          "
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Expertise de votre projet
          </h1>
          <p className="leading-7 lg:text-lg">
            Compétences, conseils et analyse de votre image afin de vous
            proposer une idée précise de votre future communication.
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
            grid min-h-[calc(100vh-5rem)] max-w-xs grid-rows-[1fr_auto_auto] gap-12 border border-red-500 px-8 py-24 text-center
            md:ml-8 md:grid-rows-none md:place-content-center md:gap-6 md:text-start 
            lg:ml-16 lg:max-w-sm
            xl:ml-24 
            2xl:ml-32
          "
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Bâtir ensemble
          </h1>
          <p className="leading-7 lg:text-lg">
            L&apos;écoute, la proximité et l&apos;inclusivité sont les mots
            d&apos;ordre pour chacun des projets que nous entreprenons.
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
