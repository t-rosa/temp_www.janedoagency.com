import facebook from "@/images/social/facebook.svg";
import instagram from "@/images/social/instagram.svg";
import linkedin from "@/images/social/linkedin.svg";
import tiktok from "@/images/social/tiktok.svg";
import twitter from "@/images/social/twitter.svg";
import youtube from "@/images/social/youtube.svg";

export interface Social {
  label: string;
  href: string;
  image: any;
}

export const SOCIALS: Social[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/JaneDoAgency",
    image: facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/janedoagency/",
    image: instagram,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/company/jane-do-music/about/",
    image: linkedin,
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@janedoagency",
    image: tiktok,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/jane_do_agency",
    image: twitter,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCTUWe0j646_xD5af1hyfAHQ",
    image: youtube,
  },
];
