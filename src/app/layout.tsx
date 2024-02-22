import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { inter } from "@/config/fonts";

export const metadata: Metadata = {
  title: "David Hernández",
  description: "Portfolio",
  icons: "/images/metaicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <main style={{height: "100%", minHeight: "100vh"}} className="bg-[url('/images/Space.jpg')] bg-cover">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
