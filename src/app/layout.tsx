import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { VechornytsiFlyerModal } from "@/components/VechornytsiFlyerModal";
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
    "Eastern European restaurant",
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
  icons: {
    icon: "/images/Logo/favicon.svg",
    shortcut: "/images/Logo/favicon.svg",
    apple: "/images/Logo/favicon.svg",
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
      <head>
        {/* Google Analytics 4 (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8CSPX2NVQW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // GA4 Configuration for Restaurant
              gtag('config', 'G-8CSPX2NVQW', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
                custom_map: {
                  'dimension1': 'menu_category',
                  'dimension2': 'order_type',
                  'dimension3': 'event_type',
                  'dimension4': 'reservation_size'
                }
              });
              
              // Restaurant-specific events
              function trackMenuView(category) {
                gtag('event', 'view_item_list', {
                  'item_list_id': category,
                  'item_list_name': category + '_menu',
                  'content_type': 'menu'
                });
              }
              
              function trackReservation(partySize) {
                gtag('event', 'generate_lead', {
                  'event_category': 'reservation',
                  'event_label': 'opentable_booking',
                  'value': partySize * 50, // avg per person
                  'currency': 'USD',
                  'custom_parameters': {
                    'party_size': partySize
                  }
                });
              }
              
              function trackPhoneCall() {
                gtag('event', 'phone_call', {
                  'event_category': 'engagement',
                  'event_label': 'restaurant_inquiry',
                  'value': 75,
                  'currency': 'USD'
                });
              }
              
              function trackEventInquiry(eventType) {
                gtag('event', 'generate_lead', {
                  'event_category': 'private_events',
                  'event_label': eventType,
                  'value': 200,
                  'currency': 'USD'
                });
              }
              
              function trackOrderStart(orderType) {
                gtag('event', 'begin_checkout', {
                  'event_category': 'order',
                  'event_label': orderType, // 'dine_in', 'takeout', 'delivery'
                  'content_type': 'restaurant_order'
                });
              }
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
