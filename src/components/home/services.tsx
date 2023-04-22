"use client";

import { SERVICES, type Service } from "@/lib/services";

import Image from "next/image";
import Link from "next/link";

export function Services() {
  return (
    <div
      className="
        grid place-items-center overflow-x-hidden border-y bg-zinc-600/10 lg:-mb-32 lg:min-h-[calc(100vh/1.5)]
      "
    >
      <ul
        className="
          my-auto grid w-full place-items-center gap-24 overflow-hidden py-24 sm:grid-cols-2 xl:grid-cols-4
        "
      >
        {SERVICES.map((service) => (
          <Service key={service.label} service={service} />
        ))}
      </ul>
    </div>
  );
}

const Service = ({ service }: { service: Service }) => {
  return (
    <li data-id={service.id} key={service.label}>
      <Link
        href={service.href}
        className="
          relative grid place-items-center overflow-hidden rounded-full border p-2 duration-300 
          before:absolute before:-inset-1 before:right-full before:-z-10 before:skew-x-12 
          before:bg-gradient-to-r before:from-violet/10 before:to-rose/60 before:duration-300 
          hover:scale-110 hover:border-gold 
          lg:hover:before:-right-1
        "
      >
        <Image
          src={service.imageLabel}
          alt={service.label}
          className="pointer-events-none col-span-full row-span-full h-56 w-56 animate-spin-slow object-cover"
        />

        <div className="pointer-events-none col-span-full row-span-full rounded-full border border-[#6b225f] p-14">
          <Image
            src={service.image}
            alt={service.label}
            className="h-16 w-16 object-cover"
          />
        </div>
      </Link>
    </li>
  );
};
