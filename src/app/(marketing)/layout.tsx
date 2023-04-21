import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex h-20 items-center justify-between border-b">
        <nav className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="
            ml-8 block h-16 w-16 rounded-full border-4
            lg:ml-16
            xl:ml-24
            2xl:ml-32
            "
          />
          <ul className="mr-16 hidden gap-6 text-xl lg:flex xl:mr-24 2xl:mr-32">
            <li>
              <Link href="/">
                <div className="text-sm text-muted-foreground">01.</div>
                <div>Accueil</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="text-sm text-muted-foreground">02.</div>
                <div>Concept</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="text-sm text-muted-foreground">03.</div>
                <div>Services</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="text-sm text-muted-foreground">04.</div>
                <div>News</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="text-sm text-muted-foreground">05.</div>
                <div>Contact</div>
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          className="grid h-full rounded-none border-l hover:bg-none"
        >
          <div className="col-span-full row-span-full h-px w-24 -translate-y-2 bg-primary" />
          <div className="col-span-full row-span-full h-px w-24 translate-y-2 bg-primary" />
        </Button>
      </header>
      <main className="min-h-[calc(100vh-5rem)]">{children}</main>
      <footer className="h-20 border-t">footer</footer>
    </>
  );
}
