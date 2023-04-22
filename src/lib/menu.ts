import vinylContactLabel from "@/images/vinyl/contact.svg";
import vinylHomeLabel from "@/images/vinyl/home.svg";
import vinylNewsLabel from "@/images/vinyl/news.svg";
import vinylServicesLabel from "@/images/vinyl/services.svg";
import vinylConceptLabel from "@/images/vinyl/concept.svg";

export interface MenuItem {
  id: number;
  label: string;
  href: string;
  vinylLabel: any;
}

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: "Accueil",
    href: "/",
    vinylLabel: vinylHomeLabel,
  },
  {
    id: 2,
    label: "Concept",
    href: "/concept",
    vinylLabel: vinylConceptLabel,
  },
  {
    id: 3,
    label: "Services",
    href: "/services",
    vinylLabel: vinylServicesLabel,
  },
  {
    id: 4,
    label: "News",
    href: "/news",
    vinylLabel: vinylNewsLabel,
  },
  {
    id: 5,
    label: "Contact",
    href: "/contact",
    vinylLabel: vinylContactLabel,
  },
];

export default MENU;
