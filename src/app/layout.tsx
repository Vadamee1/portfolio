import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { inter } from "@/config/fonts";
import Script from "next/script";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "David Hernández",
  description: "Portfolio",
  icons: "/images/metaicon.png",
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
          <main className="min-h-screen bg-[url('/images/Space.jpg')] bg-cover">
            <Navbar />
            {children}
          </main>
        </Providers>
        <Script src="https://unpkg.com/typewriter-effect@latest/dist/core.js" />
      </body>
    </html>
  );
}
