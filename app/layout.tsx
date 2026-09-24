import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TARGAR — Payment Infrastructure for Nigeria's Markets",
    template: "%s — TARGAR",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "TARGAR — Payment Infrastructure for Nigeria's Markets",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "TARGAR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TARGAR" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TARGAR — Payment Infrastructure for Nigeria's Markets",
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TARGAR",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/icon-pink.png`,
    sameAs: siteConfig.social.map((s) => s.href),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      contactType: "customer support",
    },
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TARGAR",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android",
    offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
    url: siteConfig.playStoreUrl,
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
