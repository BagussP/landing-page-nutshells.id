"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import SocialMedia from "@/components/social-media";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const lato = Lato({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <title>Nutshells.id</title>
      </head>
      <body className={`${poppins.className}`}>
        {pathName !== "/schoolid/sabilussalam/privacy-policy" &&
          pathName !== "/schoolid/sabilussalam/term-conditions" && (
            <Navigation />
          )}
        {children}
        {pathName !== "/schoolid/sabilussalam/privacy-policy" &&
          pathName !== "/schoolid/sabilussalam/term-conditions" && (
            <SocialMedia />
          )}
        {pathName !== "/schoolid/sabilussalam/privacy-policy" &&
          pathName !== "/schoolid/sabilussalam/term-conditions" && <Footer />}
      </body>
    </html>
  );
}
