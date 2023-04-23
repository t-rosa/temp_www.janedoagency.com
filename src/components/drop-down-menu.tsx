import vinyl_png from "@/images/vinyl/vinyl.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
  open: boolean;
  close: () => void;
  pathname: string;
  currentVinylLabel: any;
}

export function DropDownMenu(props: Props) {
  return (
    <nav
      data-open={props.open}
      className="invisible fixed -top-full z-20 grid min-h-full w-full bg-black duration-500 data-open:visible data-open:translate-y-full data-open:delay-0 lg:grid-cols-[55%_45%] lg:delay-500"
    >
      <ul className="mt-20 grid border-r border-foreground bg-black text-2xl xl:text-4xl">
        <li className="relative overflow-hidden border-b border-muted-foreground/50 ">
          <Link
            href="/"
            onClick={props.close}
            data-current={props.pathname === "/"}
            className="
              flex h-full w-full items-center justify-center gap-3
              before:absolute before:-inset-0 before:right-full before:z-10 before:-translate-x-5
              before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50 before:duration-500 hover:before:-right-12 data-current:before:-right-12
              lg:justify-start lg:pl-16 
              xl:pl-24 
              2xl:pl-32
            "
          >
            <div className="z-10 border-b text-sm font-light text-muted-foreground">
              01.
            </div>
            <div className="z-10">Accueil</div>
          </Link>
        </li>
        <li className="relative overflow-hidden border-b border-muted-foreground/50">
          <Link
            href="/concept"
            onClick={props.close}
            data-current={props.pathname === "/concept"}
            className="
              flex h-full w-full items-center justify-center gap-3
              before:absolute before:-inset-0 before:right-full before:z-10 before:-translate-x-5
              before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50 before:duration-500 hover:before:-right-12 data-current:before:-right-12
              lg:justify-start lg:pl-16 
              xl:pl-24 
              2xl:pl-32
            "
          >
            <div className="z-10 border-b text-sm font-light text-muted-foreground">
              02.
            </div>
            <div className="z-10">Concept</div>
          </Link>
        </li>
        <li className="relative overflow-hidden border-b border-muted-foreground/50">
          <Link
            href="/services"
            onClick={props.close}
            data-current={props.pathname === "/services"}
            className="
              flex h-full w-full items-center justify-center gap-3
              before:absolute before:-inset-0 before:right-full before:z-10 before:-translate-x-5
              before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50 before:duration-500 hover:before:-right-12 data-current:before:-right-12
              lg:justify-start lg:pl-16 
              xl:pl-24 
              2xl:pl-32
            "
          >
            <div className="z-10 border-b text-sm font-light text-muted-foreground">
              03.
            </div>
            <div className="z-10">Services</div>
          </Link>
        </li>
        <li className="relative overflow-hidden border-b border-muted-foreground/50">
          <Link
            href="/news"
            onClick={props.close}
            data-current={props.pathname === "/news"}
            className="
              flex h-full w-full items-center justify-center gap-3
              before:absolute before:-inset-0 before:right-full before:z-10 before:-translate-x-5
              before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50 before:duration-500 hover:before:-right-12 data-current:before:-right-12
              lg:justify-start lg:pl-16 
              xl:pl-24 
              2xl:pl-32
            "
          >
            <div className="z-10 border-b text-sm font-light text-muted-foreground">
              04.
            </div>
            <div className="z-10">News</div>
          </Link>
        </li>
        <li className="relative overflow-hidden">
          <Link
            href="/contact"
            onClick={props.close}
            data-current={props.pathname === "/contact"}
            className="
              flex h-full w-full items-center justify-center gap-3 border-b border-muted-foreground/50 
              before:absolute before:-inset-0 before:right-full before:z-10 before:-translate-x-5
              before:-skew-x-12 before:bg-gradient-to-r before:from-violet/50 before:to-rose/50 before:duration-500 hover:before:-right-12 data-current:before:-right-12
              lg:justify-start lg:pl-16 
              xl:pl-24 
              2xl:pl-32
            "
          >
            <div className="z-10 border-b text-sm font-light text-muted-foreground">
              05.
            </div>
            <div className="z-10">Contact</div>
          </Link>
        </li>
      </ul>
      <aside
        data-open={props.open}
        className="-z-10 hidden -translate-x-full duration-500 data-open:-translate-x-1/2 data-open:delay-500 lg:mt-20 lg:grid lg:place-items-center"
      >
        <Image
          src={vinyl_png}
          data-open={props.open}
          alt="Vinyl"
          fill
          priority
          placeholder="blur"
          className="pointer-events-none hidden animate-spin-slow rounded-full object-contain lg:block"
        />
        <Image
          src={props.currentVinylLabel}
          data-open={props.open}
          alt="Vinyl Label"
          fill
          priority
          className="pointer-events-none hidden animate-spin-slow rounded-full object-contain lg:block"
        />
      </aside>
    </nav>
  );
}
