import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { VechornytsiFlyerModal } from "@/components/VechornytsiFlyerModal";
import { siteData } from "@/lib/site-data";
import { ClickTracking } from "@/components/ClickTracking";

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
    "Eastern European restaurant",
    "Eastern European food",
    "Newton Centre",
    "Newton MA",
    "Russian restaurant",
    "Ukrainian restaurant",
    "catering",
    "borscht",
    "stroganoff",
  ],
  openGraph: {
    title: siteData.name,
    description: siteData.tagline,
  },
  verification: {
    google: "peJWv4ImyNxTPwwrfu9vmq8n0eaV8XlHOTPvYcZ9Rgo",
  },
  icons: {
    icon: "/images/Logo/favicon.svg",
    shortcut: "/images/Logo/favicon.svg",
    apple: "/images/Logo/favicon.svg",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Café St. Petersburg",
  url: siteData.siteUrl,
  telephone: "+1-617-467-3555",
  image: `${siteData.siteUrl}/images/food/blini-red-caviar.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "57-1 Union St",
    addressLocality: "Newton Centre",
    addressRegion: "MA",
    postalCode: "02459",
    addressCountry: "US",
  },
  servesCuisine: ["Russian", "Ukrainian", "Eastern European"],
  acceptsReservations: siteData.reservationUrl,
  menu: `${siteData.siteUrl}/menu`,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "17:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "17:00", closes: "01:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "01:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "22:00" },
  ],
  sameAs: [siteData.social.facebook, siteData.social.instagram, siteData.social.telegram],
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MP9DDKRX');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics 4 — Cafe St. Petersburg property */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DZF8W752Y2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DZF8W752Y2');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '857424075890445');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=857424075890445&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MP9DDKRX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <ClickTracking />
        <CartProvider>
          <VechornytsiFlyerModal />
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
