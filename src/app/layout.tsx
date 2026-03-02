import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { siteData } from "@/lib/site-data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteData.name} | ${siteData.tagline}`,
    template: `%s | ${siteData.name}`,
  },
  description:
    "Authentic Eastern European cuisine in Newton Centre, MA. Classic recipes, quality ingredients, and warm hospitality. Dine in, takeout, delivery, and catering.",
  keywords: [
    "Russian restaurant",
    "Eastern European food",
    "Newton Centre",
    "Newton MA",
    "Georgian cuisine",
    "catering",
    "borscht",
    "stroganoff",
  ],
  openGraph: {
    title: siteData.name,
    description: siteData.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-white font-sans antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
