import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RadialGradient } from "@/components/radial-gradient";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <RadialGradient />
      <Header />
      <main className="min-h-[calc(100vh-5rem)] pt-20">{children}</main>
      <Footer />
    </div>
  );
}
