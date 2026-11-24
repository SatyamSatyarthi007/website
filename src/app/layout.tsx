import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BRAND_CONFIG } from "@/lib/config";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_CONFIG.url),
  title: {
    default: `${BRAND_CONFIG.name} · ${BRAND_CONFIG.tagline}`,
    template: `%s · ${BRAND_CONFIG.name}`,
  },
  description: BRAND_CONFIG.description,
  keywords: [
    "bespoke watches",
    "high jewelry rings",
    "bespoke leather watch straps",
    "high watchmaking",
    "geneva studio",
    "hand saddle stitch",
    "tourbillon",
    "solitaire diamond",
  ],
  authors: [{ name: BRAND_CONFIG.fullName }],
  creator: BRAND_CONFIG.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND_CONFIG.url,
    title: `${BRAND_CONFIG.name} · ${BRAND_CONFIG.tagline}`,
    description: BRAND_CONFIG.description,
    siteName: BRAND_CONFIG.fullName,
    images: [
      {
        url: "/images/brand/hero-montage.jpg",
        width: 1200,
        height: 675,
        alt: `${BRAND_CONFIG.name} Luxury Collection`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_CONFIG.name} · ${BRAND_CONFIG.tagline}`,
    description: BRAND_CONFIG.description,
    images: ["/images/brand/hero-montage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: BRAND_CONFIG.fullName,
    description: BRAND_CONFIG.description,
    url: BRAND_CONFIG.url,
    telephone: BRAND_CONFIG.concierge.phone,
    email: BRAND_CONFIG.concierge.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_CONFIG.concierge.addresses[0].address,
      addressLocality: BRAND_CONFIG.concierge.addresses[0].city,
      addressCountry: "CH",
    },
    currenciesAccepted: "USD, EUR, CHF, GBP",
    openingHours: "Mo-Sa 10:00-18:00 By Appointment Only",
  };

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakartaSans.variable} bg-[#09090b] text-[#f4efe6] antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col selection:bg-[#c5a880]/30 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
