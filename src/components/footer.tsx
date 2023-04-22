import jane_do_svg from "@/images/jane-do.svg";
import { SERVICES } from "@/lib/services";
import { SOCIALS } from "@/lib/socials";
import { TERMS } from "@/lib/terms";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="footer"
      className="
          relative flex flex-col items-center gap-12 border-t bg-background px-8 py-12 text-center
          md:grid md:place-items-center md:text-start
        "
    >
      <nav className="space-y-3">
        <h2 className="w-fit scroll-m-20 border-b text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Services
        </h2>
        <ul>
          {SERVICES.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="hover:text-gold">
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
              <Link href={item.href} className="hover:text-gold">
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
  );
}
