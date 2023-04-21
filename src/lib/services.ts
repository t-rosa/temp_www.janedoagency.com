import socialMedia from "@/images/services/social-media.svg";
import socialMediaLabel from "@/images/services/social-media-label.svg";

import communication from "@/images/services/communication.svg";
import communicationLabel from "@/images/services/communication-label.svg";

import brandValues from "@/images/services/brand-values.svg";
import brandValuesLabel from "@/images/services/brand-values-label.svg";

import consulting from "@/images/services/consulting.svg";
import consultingLabel from "@/images/services/consulting-label.svg";

export interface Service {
  id: number;
  label: string;
  href: string;
  image: string;
  imageLabel: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    label: "Social media",
    href: "/services#social-media",
    image: socialMedia,
    imageLabel: socialMediaLabel,
  },
  {
    id: 2,
    label: "Communication",
    href: "/services#communication",
    image: communication,
    imageLabel: communicationLabel,
  },
  {
    id: 3,
    label: "Brand values",
    href: "/services#brand-values",
    image: brandValues,
    imageLabel: brandValuesLabel,
  },
  {
    id: 4,
    label: "Consulting",
    href: "/services#consulting",
    image: consulting,
    imageLabel: consultingLabel,
  },
];
