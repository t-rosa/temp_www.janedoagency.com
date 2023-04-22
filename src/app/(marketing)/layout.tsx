"use client";

import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { SOCIALS } from "@/lib/socials";
import { TERMS } from "@/lib/terms";
import jane_do_svg from "@/images/jane-do.svg";
import vinyl_png from "@/images/vinyl/vinyl.png";
import currentVinylLabel from "@/images/vinyl/home.svg";
import { RadialGradient } from "@/components/radial-gradient";

export default function RootLayout({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <RadialGradient />
      <nav
        data-is-open={isOpen}
        className="fixed z-10 grid h-full w-full translate-y-full bg-black data-[is-open='true']:translate-y-0 lg:grid-cols-[55%_45%]"
      >
        <ul className="mt-20 grid border-4 border-blue-500 bg-black text-2xl">
          <li>
            <Link
              href="/"
              className="flex h-full w-full items-center justify-center gap-3 border-b border-muted-foreground lg:justify-start lg:pl-16 xl:pl-24 2xl:pl-32"
            >
              <div className="text-sm text-muted-foreground">01.</div>
              <div>Accueil</div>
            </Link>
          </li>
          <li>
            <Link
              href="/concept"
              className="flex h-full w-full items-center justify-center gap-3 border-b border-muted-foreground lg:justify-start lg:pl-16 xl:pl-24 2xl:pl-32"
            >
              <div className="text-sm text-muted-foreground">02.</div>
              <div>Concept</div>
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="flex h-full w-full items-center justify-center gap-3 border-b border-muted-foreground lg:justify-start lg:pl-16 xl:pl-24 2xl:pl-32"
            >
              <div className="text-sm text-muted-foreground">03.</div>
              <div>Services</div>
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className="flex h-full w-full items-center justify-center gap-3 border-b border-muted-foreground lg:justify-start lg:pl-16 xl:pl-24 2xl:pl-32"
            >
              <div className="text-sm text-muted-foreground">04.</div>
              <div>News</div>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex h-full w-full items-center justify-center gap-3 lg:justify-start lg:pl-16 xl:pl-24 2xl:pl-32"
            >
              <div className="text-sm text-muted-foreground">05.</div>
              <div>Contact</div>
            </Link>
          </li>
        </ul>
        <aside className="-z-10 hidden -translate-x-1/2 lg:mt-20 lg:grid lg:place-items-center lg:border-4 lg:border-green-500">
          <Image
            src={vinyl_png}
            alt="Vinyl"
            fill
            priority
            placeholder="blur"
            className="animate-spin-service pointer-events-none z-50 hidden object-contain lg:block"
          />
          <Image
            src={currentVinylLabel}
            alt="Vinyl Label"
            fill
            priority
            className="animate-spin-service pointer-events-none z-50 hidden object-contain lg:block"
          />
        </aside>
      </nav>
      <header className="fixed z-10 flex h-20 w-full items-center justify-between border-b">
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
          <ul
            data-is-open={isOpen}
            className="mr-16 hidden gap-6 text-xl data-[is-open='true']:hidden lg:flex xl:mr-24 2xl:mr-32"
          >
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
              <Link href="/services">
                <div className="text-sm text-muted-foreground">03.</div>
                <div>Services</div>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <div className="text-sm text-muted-foreground">04.</div>
                <div>News</div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="text-sm text-muted-foreground">05.</div>
                <div>Contact</div>
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          className="grid h-full rounded-none border-l hover:bg-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="col-span-full row-span-full h-px w-24 -translate-y-2 bg-primary" />
          <div className="col-span-full row-span-full h-px w-24 translate-y-2 bg-primary" />
        </Button>
      </header>
      <main className="min-h-[calc(100vh-5rem)] pt-20">{children}</main>
      <footer
        id="footer"
        className="
          relative flex flex-col items-center gap-12 border-t bg-background px-8 py-12 text-center
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
    </div>
  );
}
