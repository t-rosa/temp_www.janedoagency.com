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
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto_auto] gap-12 border border-red-500  py-24 text-center
            md:ml-8 md:grid-rows-none md:content-center md:gap-6 md:text-start 
            lg:ml-16
            xl:ml-24
            2xl:ml-32
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

      <section className="relative flex justify-center md:justify-end">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 border border-red-500  py-24 text-center
            md:mr-8 md:grid-rows-none md:content-center md:gap-6 md:text-end 
            lg:mr-16
            xl:mr-24 
            2xl:mr-32
          "
        >
          <div className="flex self-start md:self-auto">
            <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              01
            </div>
            <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Social Media
            </h2>
          </div>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Création, planification, gestion <br /> et optimisation de vos
            réseaux.
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 -z-10 w-full mix-blend-lighten
            md:left-0 md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
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
      <section className="relative flex justify-center md:justify-start">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 border border-red-500  py-24 text-center
            md:ml-8 md:grid-rows-none md:content-center md:gap-6 md:text-start 
            lg:ml-16
            xl:ml-24 
            2xl:ml-32
          "
        >
          <div className="flex self-start md:self-auto">
            <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              02
            </div>
            <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Communication
            </h2>
          </div>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Création, planification, gestion <br /> et optimisation de vos
            réseaux.
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 -z-10 w-full mix-blend-lighten
            md:right-0 md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
        >
          <source srcSet={communication_webp.src} type="image/webp" />
          <Image
            src={communication_jpg}
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

      <section className="relative flex justify-center md:justify-end">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 border border-red-500  py-24 text-center
            md:mr-8 md:grid-rows-none md:content-center md:gap-6 md:text-end 
            lg:mr-16
            xl:mr-24 
            2xl:mr-32
          "
        >
          <div className="flex self-start md:self-auto">
            <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              03
            </div>
            <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Brand Values
            </h2>
          </div>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Charte graphique, logo une <br /> identité forte pour faire adhérer
            <br /> vos cibles à votre univers !
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 -z-10 w-full overflow-x-hidden
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

      <section className="relative flex justify-center md:justify-start">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 border border-red-500  py-24 text-center
            md:ml-8 md:grid-rows-none md:content-center md:gap-6 md:text-start 
            lg:ml-16
            xl:ml-24 
            2xl:ml-32
          "
        >
          <div className="flex self-start md:self-auto">
            <div className="scroll-m-20 border p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              04
            </div>
            <h2 className="scroll-m-20 border border-l-0 p-6 text-xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Consulting
            </h2>
          </div>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Besoin d&apos;un avis extérieur ? <br /> Le but est de vous donner
            une <br /> vision claire de votre stratégie.
          </p>
        </div>
        <picture
          className="
            pointer-events-none absolute inset-y-0 -z-10 w-full mix-blend-lighten
            md:right-0 md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
        >
          <source srcSet={consulting_webp.src} type="image/webp" />
          <Image
            src={consulting_jpg}
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

      <section className="relative flex justify-center md:justify-end">
        <div
          className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 border border-red-500  py-24 text-center
            md:mr-8 md:grid-rows-none md:place-content-center md:gap-6 md:text-end 
            lg:mr-16
            xl:mr-24 
            2xl:mr-32
          "
        >
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Rejoindre <br /> l&apos;aventure
          </h2>
          <p className="text-lg leading-7 lg:text-xl xl:text-2xl">
            Vous avez des questions, des <br /> demandes ou un projet à nous{" "}
            <br />
            faire découvrir ?
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
            pointer-events-none absolute inset-y-0 -z-10 w-full mix-blend-lighten 
            md:left-0 md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
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
