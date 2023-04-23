import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "block",
});

export const metadata = {
  title: "Jane Do",
  description:
    "Jane Do est une agence de communication spécialisée dans l’industrie musicale et le développement de la communication artistique.Que ce soit sur vos réseaux ou auprès des professionnels, nous concevons une stratégie adaptée à vos moyens Nos services sont les suivants: Communication: Pochettes, Publications sur les réseaux sociaux(RS), Bannières RS, Flyers, Cartes de visite, Affiches… Communication digitale: Gestion des RS, Stratégie de communication, Calendrier de publication, Campagne AdsRelations Presse: Dossier & Communiqué de presse, Organisation d’événements, Gestion et envoi d’e- mailsBooking & Démarchage : Recherche et démarchage auprès des bookeurs et des salles pour les premières partiesMarketing hors média: Street marketing (distribution de flyers, stickers…), Réflexion évènementielle de votre projet Interviews & Podcast : Promotion de votre musique et de vos projets: Interviews sur les RS, Podcasts en streaming.Jane Do, c’est une équipe qui vous offre ses compétences à 360. De la communication, à la vidéo en passant par la gestion de vos stratégies médias, nous voulons vous offrir la possibilité de déléguer n’importe quelle partie de votre projet.Nos valeurs comme L’écoute, la proximité avec les artistes, l’inclusivité et la personnalisation seront les mots d’ordre pour chacun des projets que vous nous confiez!",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" className="overflow-x-hidden scroll-smooth bg-background">
      <body className={poppins.className}>
        {children}
        <TailwindIndicator />
        <Toaster />
      </body>
    </html>
  );
}
