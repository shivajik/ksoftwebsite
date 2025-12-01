import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ksoftsolution.com"),
  title: {
    default: "KSoft Solution | Digital Agency & Software Development",
    template: "%s | KSoft Solution",
  },
  description: "KSoft Solution is a premier digital agency specializing in modern web development, AI integration, and SEO strategies. Transform your business today.",
  keywords: ["web development", "SEO", "AI integration", "digital marketing", "Aurangabad", "software development"],
  authors: [{ name: "KSoft Solution" }],
  creator: "KSoft Solution",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ksoftsolution.com",
    siteName: "KSoft Solution",
    title: "KSoft Solution | Digital Agency",
    description: "Expert software solutions, web design, and digital marketing services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KSoft Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSoft Solution",
    description: "Expert software solutions, web design, and digital marketing services.",
    creator: "@ksoftsolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-7E66EELMY7",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KSoft Solution",
  description: "Digital agency providing web development, SEO, and AI solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "T-16, Software Technology Parks of India, Chikhalthana MIDC",
    addressLocality: "Chhatrapati Sambhaji Nagar",
    postalCode: "431008",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  telephone: "+91-976-541-2319",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
