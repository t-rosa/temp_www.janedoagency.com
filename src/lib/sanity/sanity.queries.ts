import { groq } from "next-sanity";
import client from "@/lib/sanity/sanity.client";

export interface Author {
  name?: string;
  image?: any;
}

export interface Article {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  author?: Author;
  slug?: string;
  content?: any;
}

export const getArticles = groq`*[_type=="article" && defined(slug.current)] | order(date desc) {
      _id,
      name,
      title,
      date,
      coverImage,
      "slug": slug.current,
      "author": author->{name, image},
    }`;

export const fetchArticle = async (querySlug: string) => {
  const query = groq`
    *[_type=="article" && slug.current == "${querySlug}"][0]{
      _id,
      title,
      content,
      coverImage,
      date,
      slug,
      audio {
        asset->{
          url
        }
      }
    }
`;

  const article = await client!.fetch(query);
  return article;
};

export const fetchArticleByDate = async () => {
  const query = groq`*[_type=="article" && defined(slug.current)] | order(date desc) {
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
    }`;

  const article = await client!.fetch(query);
  return article;
};
