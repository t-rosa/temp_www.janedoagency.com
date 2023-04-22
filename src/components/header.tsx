"use client";

import { DropDownMenu } from "@/components/drop-down-menu";
import { Button } from "@/components/ui/button";
import jane_do_text_svg from "@/images/jane-do-text.svg";
import jane_do_svg from "@/images/jane-do.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MENU } from "@/lib/menu";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [currentVinylLabel, setCurrentVinylLabel] = useState(
    MENU[0].vinylLabel
  );

  useEffect(() => {
    MENU.forEach((item) => {
      if (item.href === pathname) {
        setTimeout(() => {
          setCurrentVinylLabel(item.vinylLabel);
        }, 500);
      }
    });
  }, [pathname]);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <DropDownMenu
        open={open}
        close={close}
        pathname={pathname}
        currentVinylLabel={currentVinylLabel}
      />
      <header className="fixed z-10 flex h-20 w-full items-center justify-between border-b bg-opacity-10 backdrop-blur-sm">
        <nav className="flex w-full items-center justify-between">
          <Link
            onClick={close}
            href="/"
            className="ml-8 flex items-center space-x-1 lg:ml-16 xl:ml-24 2xl:ml-32"
          >
            <Image
              src={jane_do_svg}
              alt="Pictrogramme"
              className="transition-transform duration-500 hover:rotate-[360deg] hover:ease-in-out"
            />
            <Image
              src={jane_do_text_svg}
              alt="Jane Do"
              className="hidden lg:block"
            />
          </Link>
          <ul
            data-open={open}
            className="mr-16 hidden gap-6 text-xl data-open:hidden lg:flex xl:mr-24 2xl:mr-32"
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
          onClick={() => setOpen(!open)}
        >
          <div className="col-span-full row-span-full h-px w-24 -translate-y-2 bg-primary" />
          <div className="col-span-full row-span-full h-px w-24 translate-y-2 bg-primary" />
        </Button>
      </header>
    </>
  );
}
