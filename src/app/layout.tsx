import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}