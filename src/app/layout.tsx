
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import WhatsAppConversionTracker from "@/components/analytics/WhatsAppConversionTracker";

export const metadata: Metadata = {
  title: "Goa Holiday Packages | 5 Nights & 6 Days | India Travel Safari",

  description:
    "Explore Goa with India Travel Safari's 5 nights and 6 days holiday packages. Choose Standard or Premium stays, Goa sightseeing, water sports, sunset dinner cruise and private transfers.",

  keywords: [
    "Goa holiday packages",
    "Goa tour packages",
    "Goa travel packages",
    "5 nights 6 days Goa package",
    "6 days Goa tour package",
    "premium Goa holiday package",
    "Goa honeymoon package",
    "Goa family holiday package",
    "North Goa sightseeing",
    "South Goa sightseeing",
    "Dudhsagar waterfall tour",
    "Goa water sports package",
    "Goa sunset dinner cruise",
    "Goa hotel packages",
    "3 star hotel Goa package",
    "4 star hotel Goa package",
    "Goa airport transfers",
    "India Travel Safari",
  ],

  applicationName: "India Travel Safari",

  category: "travel",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icons/favicon.png",
  },

  openGraph: {
    title: "Goa Holiday Packages | India Travel Safari",
    description:
      "Discover Goa with a 5 nights and 6 days holiday featuring premium stays, sightseeing, water sports and unforgettable sunset experiences.",
    type: "website",
    siteName: "India Travel Safari",
    images: [
      {
        url: "/images/hero-goa.webp",
        alt: "Goa holiday experience with India Travel Safari",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Goa Holiday Packages | India Travel Safari",
    description:
      "Plan your 5 nights and 6 days Goa holiday with Standard and Premium package options.",
    images: ["/images/hero-goa.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >{`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({
              'gtm.start': new Date().getTime(),
              event:'gtm.js'
            });

            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';

            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PK2P6G8X');
        `}</Script>
        {/* End Google Tag Manager */}

        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PK2P6G8X"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        {/* End Google Tag Manager noscript */}

        {/* WhatsApp Conversion Tracker */}
        <WhatsAppConversionTracker />

        {children}
      </body>
    </html>
  );
}
