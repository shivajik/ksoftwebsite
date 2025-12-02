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
    default: "KSoft Solution | Digital Agency & Software Development in Aurangabad",
    template: "%s | KSoft Solution",
  },
  description: "KSoft Solution is a premier digital agency in Chhatrapati Sambhaji Nagar (Aurangabad) specializing in web development, AI integration, SEO, and digital marketing. Transform your business with our expert solutions.",
  keywords: ["web development", "SEO", "AI integration", "digital marketing", "Aurangabad", "Chhatrapati Sambhaji Nagar", "software development", "web design"],
  authors: [{ name: "KSoft Solution" }],
  creator: "KSoft Solution",
  publisher: "KSoft Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ksoftsolution.com",
    siteName: "KSoft Solution",
    title: "KSoft Solution | Digital Agency & Software Development",
    description: "Expert web development, AI integration, SEO, and digital marketing services in Aurangabad. Transform your business today.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KSoft Solution - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSoft Solution | Digital Agency",
    description: "Expert web development, AI integration, SEO, and digital marketing services.",
    creator: "@ksoftsolution",
    site: "@ksoftsolution",
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
  alternates: {
    canonical: "https://ksoftsolution.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ksoftsolution.com/#organization",
  name: "KSoft Solution",
  url: "https://ksoftsolution.com",
  logo: {
    "@type": "ImageObject",
    url: "https://ksoftsolution.com/og-image.png",
    width: 1200,
    height: 630,
  },
  description: "KSoft Solution is a digital agency and software development company specializing in web development, AI integration, SEO, and digital marketing services.",
  email: "info@ksoftsolution.com",
  telephone: "+91-976-541-2319",
  address: {
    "@type": "PostalAddress",
    streetAddress: "T-16, Software Technology Parks of India, Chikhalthana MIDC",
    addressLocality: "Chhatrapati Sambhaji Nagar",
    addressRegion: "Maharashtra",
    postalCode: "431008",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/ksoftsolutionaurangabad/",
    "https://twitter.com/ksoftsolution",
    "https://www.instagram.com/ksoftsolution/",
    "https://www.linkedin.com/company/ksoftsolution/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-976-541-2319",
      contactType: "sales",
      email: "sales@ksoftsolution.com",
      availableLanguage: ["English", "Hindi", "Marathi"],
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-976-541-2319",
      contactType: "customer support",
      email: "info@ksoftsolution.com",
      availableLanguage: ["English", "Hindi", "Marathi"],
      areaServed: "IN",
    },
  ],
  foundingDate: "2020",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 5,
    maxValue: 15,
  },
  slogan: "We Build Digital Growth Engines",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ksoftsolution.com/#localbusiness",
  name: "KSoft Solution",
  image: "https://ksoftsolution.com/og-image.png",
  url: "https://ksoftsolution.com",
  telephone: "+91-976-541-2319",
  email: "info@ksoftsolution.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "T-16, Software Technology Parks of India, Chikhalthana MIDC",
    addressLocality: "Chhatrapati Sambhaji Nagar",
    addressRegion: "Maharashtra",
    postalCode: "431008",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.8763,
    longitude: 75.3433,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Chhatrapati Sambhaji Nagar",
      alternateName: "Aurangabad",
    },
    {
      "@type": "State",
      name: "Maharashtra",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          url: "https://ksoftsolution.com/services/web-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Integration",
          url: "https://ksoftsolution.com/services/ai-integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization",
          url: "https://ksoftsolution.com/services/seo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          url: "https://ksoftsolution.com/services/mobile-apps",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          url: "https://ksoftsolution.com/services/ui-ux-design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          url: "https://ksoftsolution.com/services/digital-marketing",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ksoftsolution.com/#website",
  url: "https://ksoftsolution.com",
  name: "KSoft Solution",
  description: "Digital agency and software development company in Aurangabad",
  publisher: {
    "@id": "https://ksoftsolution.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://ksoftsolution.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
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
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-medium"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
