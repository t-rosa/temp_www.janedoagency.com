import { Discover } from "@/components/concept/discover";
import { Hero } from "@/components/concept/hero";
import { Join } from "@/components/concept/join";
import { Poles } from "@/components/concept/poles";

export const metadata = {
  title: "Jane Do - Concept",
};

export default function ConceptPage() {
  return (
    <>
      <Hero />
      <Discover />
      <Poles />
      <Join />
    </>
  );
}
