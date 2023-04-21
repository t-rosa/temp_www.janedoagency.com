import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { SOCIALS } from "@/lib/socials";
import { TERMS } from "@/lib/terms";
import jane_do_svg from "@/images/jane-do.svg";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex h-20 items-center justify-between border-b">
        <nav className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="
            ml-8 block h-16 w-16 rounded-full border-4
            lg:ml-16
            xl:ml-24
            2xl:ml-32
            "
          />
          <ul className="mr-16 hidden gap-6 text-xl lg:flex xl:mr-24 2xl:mr-32">
            <li>
              <Link href="/">
                <div className="text-sm text-muted-foreground">01.</div>
                <div>Accueil</div>
              </Link>
            </li>
            <li>
              <Link href="/concept">
                <div className="text-sm text-muted-foreground">02.</div>
                <div>Concept</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="text-sm text-muted-foreground">03.</div>
                <div>Services</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="text-sm text-muted-foreground">04.</div>
                <div>News</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="text-sm text-muted-foreground">05.</div>
                <div>Contact</div>
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          className="grid h-full rounded-none border-l hover:bg-none"
        >
          <div className="col-span-full row-span-full h-px w-24 -translate-y-2 bg-primary" />
          <div className="col-span-full row-span-full h-px w-24 translate-y-2 bg-primary" />
        </Button>
      </header>
      <main className="min-h-[calc(100vh-5rem)]">{children}</main>
      <footer
        id="footer"
        className="
          relative flex flex-col items-center gap-12 border-t px-8 py-12 text-center
          md:grid md:place-items-center md:text-start
        "
      >
        <nav className="space-y-3">
          <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Services
          </h2>
          <ul>
            {SERVICES.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="space-y-3 md:self-start">
          <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Conditions générales
          </h2>
          <ul>
            {TERMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul className="grid grid-cols-3 gap-3">
            {SOCIALS.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <Image
                    src={item.image.src}
                    width={48}
                    height={48}
                    alt={item.label}
                    className="h-12 w-12 scale-100 duration-150 hover:scale-125"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#main" aria-label="Remonter en haut" className="">
          <Image
            src={jane_do_svg}
            alt="Pictrogramme"
            className="transition-transform duration-500 hover:rotate-[360deg] hover:ease-in-out"
          />
        </a>
        <p className="col-span-2 text-gray-300 lg:col-span-4">
          &copy; Jane Do - Tous droits réservés
        </p>
      </footer>
    </>
  );
}
