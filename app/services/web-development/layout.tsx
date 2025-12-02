import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | Custom React & Next.js Development",
  description: "Enterprise-grade web development using React, Next.js, and Node.js. We build high-performance custom websites, SaaS platforms, and e-commerce solutions that rank #1 on Google. Get a free quote today.",
  keywords: ["web development", "React development", "Next.js development", "custom website", "e-commerce development", "SaaS platform", "Aurangabad web development"],
  alternates: {
    canonical: "https://ksoftsolution.com/services/web-development",
  },
  openGraph: {
    title: "Web Development Services | KSoft Solution",
    description: "Enterprise-grade web development using React & Next.js. Custom websites that rank high and convert fast.",
    url: "https://ksoftsolution.com/services/web-development",
    type: "website",
    images: [
      {
        url: "/generated_images/web_development_abstract_concept_with_code_and_structure.png",
        width: 1200,
        height: 630,
        alt: "Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | KSoft Solution",
    description: "Enterprise-grade web development using React & Next.js. Custom websites that rank high and convert fast.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  description: "Enterprise-grade web development using React, Next.js, and Node.js. We build high-performance custom websites, SaaS platforms, and e-commerce solutions.",
  provider: {
    "@type": "Organization",
    name: "KSoft Solution",
    url: "https://ksoftsolution.com",
  },
  serviceType: "Web Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom React & Next.js Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS Platform Development",
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
      name: "Web Development",
      item: "https://ksoftsolution.com/services/web-development",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build a custom website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most custom websites take 4-8 weeks to complete, depending on complexity. A simple business website might be ready in 4 weeks, while a complex e-commerce platform or SaaS application could take 8-12 weeks. We provide detailed timelines during our initial consultation."
      }
    },
    {
      "@type": "Question",
      name: "What technologies do you use for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in React and Next.js for frontend development, paired with Node.js for backend services. For databases, we typically use PostgreSQL or MongoDB. Our stack also includes Tailwind CSS for styling, and we integrate with various APIs and third-party services as needed."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide website maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer comprehensive maintenance packages that include security updates, bug fixes, performance monitoring, and content updates. Our support team is available during business hours, with emergency support available 24/7 for critical issues."
      }
    },
    {
      "@type": "Question",
      name: "How much does a custom website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom website costs vary based on features and complexity. A basic business website starts around ₹50,000, while e-commerce sites range from ₹1,00,000 to ₹3,00,000+. SaaS platforms and complex web applications can range from ₹2,00,000 to ₹10,00,000+. We provide detailed quotes after understanding your requirements."
      }
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every website we build is mobile-first and fully responsive. This means your site will look and function perfectly on smartphones, tablets, laptops, and desktop computers. Mobile optimization is critical for SEO and user experience."
      }
    }
  ]
};

export default function WebDevelopmentLayout({
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
