import { groq } from "next-sanity";

const articleFields = groq`
  _id,
  title,
  date,
  coverImage,
  "slug": slug.current,
  "author": author->{name, image},
`;

export const indexQuery = groq`
*[_type == "article"] | order(date desc, _updatedAt desc) {
  ${articleFields}
}`;

export const articleAndMoreStoriesQuery = groq`
{
  "article": *[_type == "article" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${articleFields}
  },
  "morearticles": *[_type == "article" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${articleFields}
  }
}`;

export const articleSlugsQuery = groq`
*[_type == "article" && defined(slug.current)][].slug.current
`;

export const articleBySlugQuery = groq`
*[_type == "article" && slug.current == $slug][0] {
  ${articleFields}
}
`;

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
