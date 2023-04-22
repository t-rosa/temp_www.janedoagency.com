import currentVinylLabel from "@/images/vinyl/home.svg";
import vinyl_png from "@/images/vinyl/vinyl.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
  isOpen: boolean;
}

export function DropDownMenu(props: Props) {
  return (
    <nav
      data-is-open={props.isOpen}
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
  );
}
