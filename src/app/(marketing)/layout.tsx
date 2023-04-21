import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header className="h-20 border-b">header</header>
      <main className="min-h-[calc(100vh-5rem)]">{children}</main>
      <footer className="h-20 border-t">footer</footer>
    </div>
  );
}
