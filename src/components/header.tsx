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

  function toggle() {
    setOpen(!open);
  }

  return (
    <>
      <DropDownMenu
        open={open}
        close={close}
        pathname={pathname}
        currentVinylLabel={currentVinylLabel}
      />
      <header className="fixed z-20 flex h-20 w-full items-center justify-between border-b bg-opacity-10 backdrop-blur-sm">
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
              <Link href="/" className="[&:hover>#menu-label::before]:-right-1">
                <div className="text-sm font-light text-foreground">01.</div>
                <div
                  data-current={pathname === "/"}
                  id="menu-label"
                  className="
                    relative inline-block before:absolute before:-inset-0 
                    before:right-full before:-z-10 before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50
                    before:duration-300 data-current:before:-right-1"
                >
                  Accueil
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/concept"
                className="[&:hover>#menu-label::before]:-right-1"
              >
                <div className="text-sm font-light text-foreground">02.</div>
                <div
                  data-current={pathname === "/concept"}
                  id="menu-label"
                  className="
                    relative inline-block before:absolute before:-inset-0 
                    before:right-full before:-z-10 before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50
                    before:duration-300 data-current:before:-right-1"
                >
                  Concept
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="[&:hover>#menu-label::before]:-right-1"
              >
                <div className="text-sm font-light text-foreground">03.</div>
                <div
                  data-current={pathname === "/services"}
                  id="menu-label"
                  className="
                    relative inline-block before:absolute before:-inset-0 
                    before:right-full before:-z-10 before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50
                    before:duration-300 data-current:before:-right-1"
                >
                  Services
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="[&:hover>#menu-label::before]:-right-1"
              >
                <div className="text-sm font-light text-foreground">04.</div>
                <div
                  data-current={pathname === "/news"}
                  id="menu-label"
                  className="
                    relative inline-block before:absolute before:-inset-0 
                    before:right-full before:-z-10 before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50
                    before:duration-300 data-current:before:-right-1"
                >
                  News
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="[&:hover>#menu-label::before]:-right-1"
              >
                <div className="text-sm font-light text-foreground">05.</div>
                <div
                  data-current={pathname === "/contact"}
                  id="menu-label"
                  className="
                    relative inline-block before:absolute before:-inset-0 
                    before:right-full before:-z-10 before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50
                    before:duration-300 data-current:before:-right-1"
                >
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          className="flex h-full w-44 flex-col gap-3 rounded-none border-l active:scale-100"
          aria-label="Ouvrir le menu"
          onClick={toggle}
        >
          <div
            data-open={open}
            className="h-px w-28 bg-foreground duration-300 data-open:translate-y-5"
          />
          <div
            data-open={open}
            className="h-px w-28 bg-foreground duration-300 data-open:-translate-y-5"
          />
        </Button>
      </header>
    </>
  );
}
