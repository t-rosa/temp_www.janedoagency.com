import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ServicePage() {
  return (
    <>
      <section className="flex justify-center md:justify-start">
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
            Vous avez de l&apos;ambition ?
          </h1>
          <p className="leading-7 lg:text-lg">
            Jane Do vous propose différents services adaptée pour vos projets !
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
      </section>

      <section
        id="social-media"
        className="flex justify-center border md:justify-end"
      >
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
            Créer, planifier, gérer et optimiser votre stratégie réseaux sociaux
            de A à Z.
          </p>
        </div>
      </section>

      <section
        id="communication"
        className="flex justify-center border md:justify-start"
      >
        <div
          className="
          grid min-h-[calc(100vh-5rem)] max-w-xs grid-rows-[1fr_auto] justify-items-center gap-12 border border-red-500 px-4 py-24 text-center md:ml-8
          md:max-w-md md:grid-rows-none md:place-content-center md:gap-6 md:px-8 md:text-start 
          lg:ml-16 lg:max-w-lg
          xl:ml-24 
          2xl:ml-32
          "
        >
          <div className="flex items-center self-start">
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
      </section>

      <section
        id="brand-values"
        className="flex justify-center border md:justify-end"
      >
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
      </section>

      <section
        id="consulting"
        className="flex justify-center border md:justify-start"
      >
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
      </section>

      <section id="join" className="flex justify-center border md:justify-end">
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
            Rejoindre l&apos;aventure
          </h1>
          <p className="leading-7 lg:text-lg">
            Vous avez des questions , des demandes ou un projet à nous faire
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
      </section>
    </>
  );
}
