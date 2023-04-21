// import client from '@/lib/sanity.client'
// import { urlForImage } from '@/lib/sanity.image'
// import { groq } from 'next-sanity'
import Image from "next/image";
import Link from "next/link";
// import Date from '@/components/ui/date'

export const metadata = {
  title: "Jane Do - News",
};

export default async function NewsPage() {
  // const posts = await client!.fetch(
  //   groq`*[_type=="article" && defined(slug.current)] | order(date desc) {
  //     _id,
  //     name,
  //     title,
  //     date,
  //     coverImage,
  //     "slug": slug.current,
  //     "author": author->{name, image},
  //   }`
  // )

  return (
    <section>
      <h1 className="scroll-m-20 py-24 text-center text-4xl font-extrabold tracking-tight lg:text-6xl">
        News
      </h1>
      <div className="grid place-items-center gap-12 pb-24 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-96 w-80 border-4" />
        <div className="h-96 w-80 border-4" />
        <div className="h-96 w-80 border-4" />
        <div className="h-96 w-80 border-4" />
        <div className="h-96 w-80 border-4" />
        <div className="h-96 w-80 border-4" />
        <div className="h-96 w-80 border-4" />
        <div className="h-96 w-80 border-4" />
        <div className="h-96 w-80 border-4" />
      </div>
    </section>
  );
}

export const revalidate = 10;
