import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/site";
import { RevealObserver } from "./site-components";
import "./globals.css";

// Free stand-ins for AQuest's Neue Haas Grotesk Display and Schnyder Light,
// self-hosted by next/font. globals.css reads them through --font-sans / --font-serif.
const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter-tight",
  display: "swap"
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MomentumX | Digital & AI Transformation in the Middle East",
    template: "%s | MomentumX"
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_AE",
    url: "/",
    title: "MomentumX | Digital & AI Transformation in the Middle East",
    description: SITE_DESCRIPTION,
    images: [{ url: "/opengraph-image", alt: "MomentumX — digital & AI transformation" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MomentumX | Digital & AI Transformation in the Middle East",
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Organization details for search engines; keep in step with the footer.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/icon.svg`,
              description: SITE_DESCRIPTION,
              email: "hello@momentumxme.com",
              telephone: "+971 4 569 3033",
              address: {
                "@type": "PostalAddress",
                streetAddress: "605, Tower A, Empire Heights, Business Bay",
                addressLocality: "Dubai",
                addressCountry: "AE"
              }
            })
          }}
        />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
