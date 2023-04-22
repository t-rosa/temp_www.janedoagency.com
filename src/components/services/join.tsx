import { buttonVariants } from "@/components/ui/button";
import join_jpg from "@/images/home/join.jpg";
import join_webp from "@/images/home/join.webp";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Join() {
  return (
    <section className="relative flex justify-center md:justify-end">
      <div
        className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto] gap-12 border border-red-500  py-24 text-center
            md:mr-24 md:grid-rows-none md:place-content-center md:gap-6 md:text-end 
            lg:mr-32
            xl:mr-40
            2xl:mr-48 
          "
      >
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Rejoindre <br /> l&apos;aventure
        </h2>
        <p className="text-xl font-light leading-7 xl:text-2xl 2xl:text-3xl">
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
  );
}
