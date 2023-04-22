import Image from "next/image";
import communication_jpg from "@/images/services/communication.jpg";
import communication_webp from "@/images/services/communication.webp";

export function Communication() {
  return (
    <section className="relative flex justify-center md:justify-start">
      <div
        className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 border border-red-500  py-24 text-center
            md:ml-24 md:grid-rows-none md:content-center md:gap-6 md:text-start 
            lg:ml-32
            xl:ml-40
            2xl:ml-48 
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
        <p className="text-lg font-light leading-7 lg:text-xl xl:text-2xl">
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
  );
}
