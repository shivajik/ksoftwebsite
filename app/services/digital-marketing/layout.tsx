import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | PPC, Social Media & Email Marketing",
  description: "Full-service digital marketing including Google Ads, Meta Ads, social media marketing, email automation, and conversion rate optimization. Data-driven campaigns that maximize ROI.",
  keywords: ["digital marketing", "PPC advertising", "Google Ads", "social media marketing", "email marketing", "content marketing", "lead generation", "digital marketing Aurangabad"],
  alternates: {
    canonical: "https://ksoftsolution.com/services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services | KSoft Solution",
    description: "High-ROI PPC, Social Media, and Email campaigns that actually bring in leads.",
    url: "https://ksoftsolution.com/services/digital-marketing",
    type: "website",
    images: [
      {
        url: "/generated_images/digital_marketing_strategy_dashboard_and_growth.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | KSoft Solution",
    description: "High-ROI PPC, Social Media, and Email campaigns that actually bring in leads.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Services",
  description: "Full-service digital marketing including PPC advertising, social media marketing, email automation, and conversion rate optimization.",
  provider: {
    "@type": "Organization",
    name: "KSoft Solution",
    url: "https://ksoftsolution.com",
  },
  serviceType: "Digital Marketing",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PPC Advertising (Google & Meta Ads)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Email Marketing Automation",
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
      name: "Digital Marketing",
      item: "https://ksoftsolution.com/services/digital-marketing",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I budget for digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For small businesses, we recommend starting with ₹30,000-₹50,000/month (ad spend + management). Medium businesses typically invest ₹75,000-₹1,50,000/month. Start with a test budget, identify what works, then scale."
      }
    },
    {
      "@type": "Question",
      name: "How long before I see results from digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PPC advertising can deliver leads within days. Social media takes 2-3 months to build momentum. Email marketing shows results within weeks if you have an existing list. Overall, expect meaningful results within 1-3 months."
      }
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We work with businesses of all sizes. For small businesses, we create focused strategies that maximize impact within limited budgets."
      }
    },
    {
      "@type": "Question",
      name: "What's included in your monthly reports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our reports include campaign performance metrics, cost per acquisition, return on ad spend, audience insights, competitor analysis, content performance, and strategic recommendations."
      }
    },
    {
      "@type": "Question",
      name: "Can you guarantee specific results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We don't guarantee specific metrics because marketing depends on many variables. What we guarantee is strategic thinking, professional execution, transparent reporting, and continuous optimization."
      }
    }
  ]
};

export default function DigitalMarketingLayout({
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
