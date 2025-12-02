import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Our Work - Web Development & Design Projects",
  description: "Explore our portfolio of successful projects including SaaS platforms, corporate websites, e-commerce stores, and educational portals. See how we help businesses grow digitally.",
  keywords: ["portfolio", "case studies", "web development projects", "client work", "SaaS development", "e-commerce projects", "corporate websites"],
  alternates: {
    canonical: "https://ksoftsolution.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | KSoft Solution",
    description: "A collection of our successful projects - from SaaS platforms to corporate portals.",
    url: "https://ksoftsolution.com/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | KSoft Solution",
    description: "A collection of our successful projects - from SaaS platforms to corporate portals.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
