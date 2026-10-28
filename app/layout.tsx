// Felles layout for alle sidene

import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Spoonful | Discover Delicious Recipes",
  description:
    "Explore delicious recipes, discover new flavors, and find inspiration for your next meal.",
};

/**
 * Definerer felles layout for alle sidene i Spoonful.
 * @param children - Innholdet fra siden som vises.
 * @returns HTML-strukturen med Header, hovedinnhold og Footer.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
