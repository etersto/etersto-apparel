import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://etersto.com"),
  title: "Custom T-Shirt, Sweatshirt & Hoodie Manufacturer | Etersto Apparel",
  description:
    "Work with Etersto Apparel for custom T-shirts, sweatshirts and hoodies with private labels, OEM/ODM support, low MOQ, fast sampling and bulk production.",
  keywords: [
    "custom t-shirt manufacturer",
    "private label t-shirt manufacturer",
    "custom hoodie manufacturer",
    "custom sweatshirt manufacturer",
    "OEM apparel manufacturer",
    "low MOQ t-shirt factory"
  ],
  openGraph: {
    title: "Custom T-Shirt, Sweatshirt & Hoodie Manufacturer | Etersto Apparel",
    description:
      "Private label apparel manufacturing with fabric, fit, print, embroidery, labels and packaging customization.",
    url: "https://etersto.com",
    siteName: "Etersto Apparel",
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "https://etersto.com"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
