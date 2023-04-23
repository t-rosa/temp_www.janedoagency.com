"use client";

import Date from "@/components/ui/date";
import client from "@/lib/sanity/sanity.client";
import { urlForImage } from "@/lib/sanity/sanity.image";
import type { Article } from "@/lib/sanity/sanity.queries";
import { PortableText } from "@portabletext/react";
import { FileAudio } from "lucide-react";
import { groq } from "next-sanity";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default async function Article({ params }: { params: any }) {
  const article = await client!.fetch(
    groq`*[_type=="article" && slug.current==$slug][0] {
      _id,
      title,
      content,
      coverImage,
      audio {
        asset->{
          url
        }
      },
      date,
      "slug":slug.current
    }`,
    {
      slug: params.slug,
    }
  );

  return (
    <article className="relative mx-auto max-w-4xl px-8 py-24">
      <div className="text-zinc-400">
        Publié le <Date dateString={article.date} />
      </div>
      <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight lg:text-5xl">
        <Balancer>{article.title}</Balancer>
      </h1>
      <Image
        height={800}
        width={2000}
        alt={`Image de couverture pour la news : ${article.title}`}
        src={urlForImage(article.coverImage).height(800).width(2000).url()}
        priority
        className="my-8 border border-zinc-700 bg-zinc-900 transition-colors group-hover:border-accent"
      />
      {article.audio?.asset.url && (
        <div className="mb-8 flex flex-col items-center justify-between gap-6 border-b-2 border-gray-500 px-6 pb-8 lg:flex-row lg:px-0">
          <div className="flex justify-center gap-3 lg:items-center">
            <FileAudio size={58} strokeWidth={1} className="hidden lg:block" />
            <div className="text-[clamp(18px,5vw,23px)]">
              Envie d’écouter cet article ?
            </div>
          </div>
          <audio controls className="w-full lg:w-1/2">
            <source src={article.audio.asset.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
      <div className={`prose prose-invert mx-auto max-w-4xl lg:prose-xl`}>
        <PortableText value={article.content} />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const articles = await client!.fetch(
    groq`*[_type=="article" && defined(slug.current)] | order(date desc) {
      _id,
      name,
      title,
      audio {
        asset->{
          url
        }
      },
      date,
      coverImage,
      "slug": slug.current,
      "author": author->{name, image},
    }`
  );

  return articles.map((article: Article) => ({ slug: article.slug }));
}

export const revalidate = 10;
