import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Web Development, SEO & Digital Marketing Insights",
  description: "Expert insights on web development, SEO strategies, AI integration, and digital marketing. Tips and guides to help businesses grow online in Aurangabad and beyond.",
  keywords: ["tech blog", "web development tips", "SEO strategies", "digital marketing insights", "AI guides", "business technology", "Aurangabad tech blog"],
  alternates: {
    canonical: "https://ksoftsolution.com/blog",
  },
  openGraph: {
    title: "Blog | KSoft Solution",
    description: "Expert insights on web development, SEO strategies, and digital marketing.",
    url: "https://ksoftsolution.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | KSoft Solution",
    description: "Expert insights on web development, SEO strategies, and digital marketing.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
