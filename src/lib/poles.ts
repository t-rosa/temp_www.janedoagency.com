import audioVisuel from "@/images/concept/video.svg";
import audioVisuelLabel from "@/images/concept/audio-visuel-label.svg";
import communication from "@/images/concept/communication.svg";
import communicationLabel from "@/images/concept/communication-label.svg";
import creaDesign from "@/images/concept/crea-design.svg";
import creaDesignLabel from "@/images/concept/crea-design-label.svg";
import informatique from "@/images/concept/informatique.svg";
import informatiqueLabel from "@/images/concept/informatique-label.svg";

export interface Pole {
  id: number;
  label: string;
  image: any;
  imageLabel: any;
}

export const POLES: Pole[] = [
  {
    id: 1,
    label: "Pôle audiovisuel",
    image: audioVisuel,
    imageLabel: audioVisuelLabel,
  },
  {
    id: 2,
    label: "Pôle communication",
    image: communication,
    imageLabel: communicationLabel,
  },
  {
    id: 3,
    label: "Pôle créa design",
    image: creaDesign,
    imageLabel: creaDesignLabel,
  },
  {
    id: 4,
    label: "Pôle informatique",
    image: informatique,
    imageLabel: informatiqueLabel,
  },
];
