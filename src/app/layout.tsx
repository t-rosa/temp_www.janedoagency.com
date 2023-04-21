import { TailwindIndicator } from "@/components/tailwind-indicator";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Jane Do",
  description: "Jane Do Agency",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={poppins.className}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
