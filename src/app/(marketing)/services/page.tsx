import { Join } from "@/components/services/join";
import { BrandValues } from "@/components/services/brand-values";
import { Communication } from "@/components/services/communication";
import { Consulting } from "@/components/services/consulting";
import { Hero } from "@/components/services/hero";
import { SocialMedia } from "@/components/services/social-media";

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
