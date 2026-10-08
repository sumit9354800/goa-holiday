import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import WhatsAppConversionTracker from "@/components/analytics/WhatsAppConversionTracker";

export const metadata: Metadata = {
  title: "India Travel Safari | Premium Goa Holiday",
  description:
    "Experience a premium 5 nights and 6 days Goa holiday with India Travel Safari.",
  icons: {
    icon: "/icons/favicon.png",
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

        {/* Google Ads WhatsApp Conversion Tracker */}
        <WhatsAppConversionTracker />

        {children}
      </body>
    </html>
  );
}