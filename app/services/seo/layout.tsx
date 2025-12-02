import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & GEO Optimization Services | Rank #1 on Google & AI Search",
  description: "Comprehensive SEO services including Technical SEO, Local SEO, and GEO (Generative Engine Optimization) for AI search visibility. Rank #1 on Google and appear in ChatGPT answers.",
  keywords: ["SEO services", "local SEO", "technical SEO", "GEO optimization", "AI search optimization", "Google ranking", "link building", "SEO audit", "Aurangabad SEO"],
  alternates: {
    canonical: "https://ksoftsolution.com/services/seo",
  },
  openGraph: {
    title: "SEO & GEO Optimization Services | KSoft Solution",
    description: "Rank #1 on Google AND appear in ChatGPT answers. Future-proof your SEO strategy today.",
    url: "https://ksoftsolution.com/services/seo",
    type: "website",
    images: [
      {
        url: "/generated_images/seo_and_analytics_growth_graph_visualization.png",
        width: 1200,
        height: 630,
        alt: "SEO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & GEO Optimization Services | KSoft Solution",
    description: "Rank #1 on Google AND appear in ChatGPT answers. Future-proof your SEO strategy today.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO & GEO Optimization Services",
  description: "Comprehensive SEO services including Technical SEO, Local SEO, and GEO (Generative Engine Optimization) for AI search visibility.",
  provider: {
    "@type": "Organization",
    name: "KSoft Solution",
    url: "https://ksoftsolution.com",
  },
  serviceType: "Search Engine Optimization",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical SEO Audit",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local SEO Optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GEO (Generative Engine Optimization)",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ksoftsolution.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://ksoftsolution.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "SEO & GEO",
      item: "https://ksoftsolution.com/services/seo",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to see SEO results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a long-term investment. Typically, you'll see initial improvements within 3-4 months, with significant results in 6-12 months. Local SEO often shows faster results, sometimes within 2-3 months."
      }
    },
    {
      "@type": "Question",
      name: "What is GEO (Generative Engine Optimization)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO is optimization for AI-powered search engines like ChatGPT, Perplexity, and Google's AI Overviews. It involves creating structured, authoritative content that AI models can understand and cite, optimizing for conversational queries."
      }
    },
    {
      "@type": "Question",
      name: "Do you guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No ethical SEO agency can guarantee specific rankings, as Google's algorithm considers 200+ factors beyond anyone's control. What we guarantee is implementing proven SEO best practices, transparent reporting, and continuous improvement."
      }
    },
    {
      "@type": "Question",
      name: "How much does SEO cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO costs vary based on scope and competition. Local SEO packages start around ₹15,000/month. National or e-commerce SEO ranges from ₹30,000 to ₹75,000/month. Enterprise SEO for highly competitive industries can be ₹1,00,000+/month."
      }
    },
    {
      "@type": "Question",
      name: "What's included in your Local SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Local SEO includes Google Business Profile optimization, local citation building, local keyword optimization, review management strategy, local content creation, and local link building."
      }
    }
  ]
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
