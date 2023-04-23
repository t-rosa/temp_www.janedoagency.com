import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";
import {
  type Article,
  indexQuery,
  articleBySlugQuery,
  articleSlugsQuery,
  articleAndMoreStoriesQuery,
} from "./sanity.queries";
import { createClient } from "next-sanity";

const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export default client;

export async function getAllArticles(): Promise<Article[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || [];
  }
  return [];
}

export async function getAllArticlesSlugs(): Promise<Pick<Article, "slug">[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(articleSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  if (client) {
    return (await client.fetch(articleBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getArticleAndMoreStories(
  slug: string,
  token?: string | null
) {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    });
    return await client.fetch(articleAndMoreStoriesQuery, { slug });
  }
  return { article: null, moreArticles: [] };
}
