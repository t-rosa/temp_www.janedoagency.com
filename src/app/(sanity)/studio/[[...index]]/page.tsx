"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/lib/sanity/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
