import type { Metadata } from "next";
import Script from "next/script";
import { blogPosts } from "@/lib/blog-posts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ksoftsolution.com";

export const metadata: Metadata = {
  title: "Blog - Digital Marketing, SEO & Web Development Insights | KSoft Solution",
  description: "Expert insights on web development, SEO, AI integration, digital marketing, and business growth strategies. Learn from KSoft Solution's industry experts in Chhatrapati Sambhaji Nagar.",
  keywords: [
    "digital marketing blog",
    "SEO tips",
    "web development insights",
    "AI integration",
    "business growth",
    "Chhatrapati Sambhaji Nagar digital agency",
    "Chhatrapati Sambhaji Nagar",
    "GEO optimization",
    "AEO strategies",
    "LLM SEO"
  ],
  openGraph: {
    title: "Blog - Digital Marketing & Web Development Insights",
    description: "Expert insights on web development, SEO, AI integration, and digital marketing from KSoft Solution.",
    type: "website",
    siteName: "KSoft Solution",
    locale: "en_IN",
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: `${SITE_URL}/generated_images/seo_and_analytics_growth_graph_visualization.png`,
        width: 1200,
        height: 630,
        alt: "KSoft Solution Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Digital Marketing & Web Development Insights",
    description: "Expert insights from KSoft Solution on web development, SEO, and digital marketing.",
    images: [`${SITE_URL}/generated_images/seo_and_analytics_growth_graph_visualization.png`],
    creator: "@ksoftsolution",
    site: "@ksoftsolution",
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const categories = Array.from(new Set(blogPosts.map(p => p.category)));
  
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    mainEntityOfPage: `${SITE_URL}/blog`,
    name: "KSoft Solution Blog",
    description: "Expert insights on web development, SEO, AI integration, and digital marketing",
    url: `${SITE_URL}/blog`,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: "KSoft Solution",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    blogPost: blogPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: post.image,
      datePublished: new Date(post.date).toISOString(),
      author: {
        "@type": "Person",
        name: post.author,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/blog`,
    url: `${SITE_URL}/blog`,
    name: "KSoft Solution Blog",
    description: "Expert insights on digital marketing, web development, SEO, and AI integration",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "KSoft Solution",
    },
    about: categories.map(cat => ({
      "@type": "Thing",
      name: cat,
    })),
    numberOfItems: blogPosts.length,
    hasPart: blogPosts.slice(0, 5).map(post => ({
      "@type": "Article",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
    numberOfItems: blogPosts.length,
  };

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <Script
        id="blog-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="collection-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <Script
        id="item-list-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
      {children}
    </>
  );
}
