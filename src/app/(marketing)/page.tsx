import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        id="hero"
        className="flex justify-center border-4 md:justify-start"
      >
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
            Partagez votre voix
          </h1>
          <p className="leading-7 lg:text-lg">
            Découvrez nos services à travers notre site internet ainsi que nos
            différents réseaux.
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
        id="discover"
        className="flex justify-center border md:justify-end"
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
            Découvrez Jane Do
          </h1>
          <p className="leading-7 lg:text-lg">
            Ensemble nous élaborons votre image artistique via une communication
            adaptée.
          </p>
        </div>
      </section>

      <section
        id="services"
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

      <section
        id="join"
        className="flex justify-center border md:justify-start"
      >
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
              "w-fit justify-self-center md:justify-self-start"
            )}
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </>
  );
}
