import { Join } from "@/components/services/join";
import { BrandValues } from "@/components/services/brand-values";
import { Communication } from "@/components/services/communication";
import { Consulting } from "@/components/services/consulting";
import { Hero } from "@/components/services/hero";
import { SocialMedia } from "@/components/services/social-media";

export const metadata = {
  title: "Jane Do - Services",
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <SocialMedia />
      <Communication />
      <BrandValues />
      <Consulting />
      <Join />
    </>
  );
}
