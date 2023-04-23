import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

import authorType from "./author";

export default defineType({
  name: "article",
  title: "Article",
  icon: BookIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "author",
      title: "Autheur",
      type: "reference",
      to: [{ type: authorType.name }],
    }),
    defineField({
      name: "audio",
      title: "Audio",
      type: "file",
    }),
  ],
  orderings: [
    {
      title: "Dernier article",
      name: "latest",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
