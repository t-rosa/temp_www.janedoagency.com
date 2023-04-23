import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import authorType from "@/lib/sanity/schemas/author";
import articleType from "@/lib/sanity/schemas/article";
import { dataset, projectId } from "@/lib/sanity/sanity.api";

const title = process.env!.NEXT_PUBLIC_SANITY_PROJECT_TITLE;

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title,
  schema: {
    types: [authorType, articleType],
  },
  plugins: [deskTool(), unsplashImageAsset()],
});
