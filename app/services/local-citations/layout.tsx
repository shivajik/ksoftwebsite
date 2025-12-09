import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Citation Building Service | NAP Consistency & Directory Listings",
  description: "Professional local citation building service to improve your local SEO. Get accurate NAP listings on high-authority directories, Google Maps visibility, and improved local search rankings.",
  keywords: ["local citations", "citation building", "NAP consistency", "local SEO", "business directories", "Google Maps ranking", "local business listings", "citation service India"],
  alternates: {
    canonical: "https://ksoftsolution.com/services/local-citations",
  },
  openGraph: {
    title: "Local Citation Building Service | KSoft Solution",
    description: "Boost your local SEO with accurate citations across high-authority directories. Improve Google Maps visibility and local rankings.",
    url: "https://ksoftsolution.com/services/local-citations",
    type: "website",
    images: [
      {
        url: "/generated_images/business_directory_citation_network.png",
        width: 1200,
        height: 630,
        alt: "Local Citation Building Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Citation Building Service | KSoft Solution",
    description: "Boost your local SEO with accurate citations across high-authority directories.",
  },
};

export default function LocalCitationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
