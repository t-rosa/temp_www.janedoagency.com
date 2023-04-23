import { Hero } from "@/components/home/hero";
import { Discover } from "@/components/home/discover";
import { Services } from "@/components/home/services";
import { Join } from "@/components/home/join";

export const metadata = {
  title: "Jane Do - Accueil",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Discover />
      <Services />
      <Join />
    </>
  );
}
