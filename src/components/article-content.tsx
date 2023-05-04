"use client";

import { PortableText } from "@portabletext/react";

export function ArticleContent({ content }: { content: any }) {
  return (
    <div className={`prose prose-invert mx-auto max-w-4xl lg:prose-xl`}>
      <PortableText value={content} />
    </div>
  );
}
