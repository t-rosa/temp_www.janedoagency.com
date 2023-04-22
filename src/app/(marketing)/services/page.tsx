import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import hero_jpg from "@/images/services/hero.jpg";
import hero_webp from "@/images/services/hero.webp";
import social_media_jpg from "@/images/services/social-media.jpg";
import social_media_webp from "@/images/services/social-media.webp";
import communication_jpg from "@/images/services/communication.jpg";
import communication_webp from "@/images/services/communication.webp";
import brand_values_jpg from "@/images/concept/brand-values.jpg";
import brand_values_webp from "@/images/concept/brand-values.webp";
import consulting_jpg from "@/images/services/consulting.jpg";
import consulting_webp from "@/images/services/consulting.webp";
import join_jpg from "@/images/home/join.jpg";
import join_webp from "@/images/home/join.webp";

export default function ServicePage() {
  return (
    <>
      <section className="relative flex justify-center md:justify-start">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] max-w-xs grid-rows-[1fr_auto_auto] gap-12 border border-red-500 px-8 py-24 text-center
            md:ml-8 md:max-w-sm md:grid-rows-none md:place-content-center md:gap-6 md:text-start 
            lg:ml-16 lg:max-w-md
            xl:ml-24 xl:max-w-lg
            2xl:ml-32
          "
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Vous avez de l&apos;ambition ?
          </h1>
          <p className="leading-7 lg:text-xl xl:text-2xl">
            Jane Do vous propose différents services adaptée pour développer vos
            projets !
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
            md:-mb-5 md:w-[36rem] xl:w-[40rem] 2xl:w-[44rem]
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

      <section className="relative flex justify-center border md:justify-end">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] max-w-xs grid-rows-[1fr_auto] justify-items-center gap-12 border border-red-500 px-8 py-24 text-center
            md:mr-8 md:max-w-md md:grid-rows-none md:place-content-center md:gap-6 md:text-end 
            lg:mr-16 lg:max-w-lg
            xl:mr-24 
            2xl:mr-32
          "
        >
          <div className="flex items-center self-start md:place-self-end">
            <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              01
            </div>
            <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Social Media
            </h2>
          </div>
          <p className="leading-7 lg:text-lg">
            Création, planification, gestion et optimisation de vos réseaux.
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 left-0 -z-10 h-auto w-screen mix-blend-lighten 
            md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
        >
          <source srcSet={social_media_webp.src} type="image/webp" />
          <Image
            src={social_media_jpg}
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

      <section className="relative flex justify-center border md:justify-start">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] max-w-xs grid-rows-[1fr_auto] justify-items-center gap-12 border border-red-500 px-4 py-24 text-center md:ml-8
            md:max-w-md md:grid-rows-none md:place-content-center md:gap-6 md:px-8 md:text-start 
            lg:ml-16 lg:max-w-lg
            xl:ml-24 
            2xl:ml-32
          "
        >
          <div className="flex items-center self-start md:place-self-start">
            <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              02
            </div>
            <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Communication
            </h2>
          </div>
          <p className="px-4 leading-7 md:px-0 lg:text-lg">
            Élaborer votre communication, Jane Do vous permet d’accéder à son
            réseau.
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 right-0 -z-10 h-auto w-screen mix-blend-lighten 
            md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
        >
          <source srcSet={communication_webp.src} type="image/webp" />
          <Image
            src={communication_jpg}
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

      <section className="relative flex justify-center border md:justify-end">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] max-w-xs grid-rows-[1fr_auto] justify-items-center gap-12 border border-red-500 px-4 py-24 text-center
            md:mr-8 md:max-w-md md:grid-rows-none md:place-content-center md:gap-6 md:text-end 
            lg:mr-16 lg:max-w-lg
            xl:mr-24 
            2xl:mr-32
          "
        >
          <div className="flex items-center self-start md:place-self-end">
            <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              03
            </div>
            <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Brand Values
            </h2>
          </div>
          <p className="px-4 leading-7 md:px-0 lg:text-lg">
            Charte graphique, logo une identité forte pour faire adhérer vos
            cibles à votre univers !
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 left-0 -z-10 h-auto w-screen 
            mix-blend-lighten md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
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

      <section className="relative flex justify-center border md:justify-start">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] max-w-xs grid-rows-[1fr_auto] justify-items-center gap-12 border border-red-500 px-4 py-24 text-center md:ml-8
            md:max-w-md md:grid-rows-none md:place-content-center md:gap-6 md:px-8 md:text-start 
            lg:ml-16 lg:max-w-lg
            xl:ml-24 
            2xl:ml-32
          "
        >
          <div className="flex items-center self-start md:place-self-start">
            <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              04
            </div>
            <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Consulting
            </h2>
          </div>
          <p className="px-4 leading-7 md:px-0 lg:text-lg">
            Besoin d’un avis extérieur ? Le but est de vous donner une vision
            claire de votre stratégie.
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 right-0 -z-10 h-auto w-screen mix-blend-lighten 
            md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
        >
          <source srcSet={consulting_webp.src} type="image/webp" />
          <Image
            src={consulting_jpg}
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

      <section className="relative flex justify-center border md:justify-end">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] max-w-[19.6rem] grid-rows-[1fr_auto] gap-12 border border-red-500 px-8 py-24 text-center
            md:mr-8 md:max-w-sm md:grid-rows-none md:place-content-center md:gap-6 md:text-end 
            lg:mr-16 lg:max-w-md
            xl:mr-24 
            2xl:mr-32
          "
        >
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Rejoindre l&apos;aventure
          </h2>
          <p className="text-xl leading-7 [text-wrap:balance] xl:text-2xl">
            Vous avez des questions, des demandes ou un projet à nous faire
            découvrir ?
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "gradiant", size: "xl" }),
              "w-fit justify-self-center md:justify-self-end"
            )}
          >
            Contactez-nous
          </Link>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 left-0 -z-10 h-auto w-screen mix-blend-lighten 
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
