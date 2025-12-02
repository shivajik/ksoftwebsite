import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development | iOS & Android Apps with React Native",
  description: "Native-quality mobile app development for iOS and Android using React Native and Flutter. Cross-platform apps with native performance, offline support, and App Store optimization.",
  keywords: ["mobile app development", "iOS development", "Android development", "React Native", "Flutter apps", "cross-platform apps", "app store optimization", "mobile apps Aurangabad"],
  alternates: {
    canonical: "https://ksoftsolution.com/services/mobile-apps",
  },
  openGraph: {
    title: "Mobile App Development | KSoft Solution",
    description: "High-performance iOS & Android apps from a single codebase using React Native and Flutter.",
    url: "https://ksoftsolution.com/services/mobile-apps",
    type: "website",
    images: [
      {
        url: "/generated_images/mobile_app_development_concept_with_multiple_devices.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | KSoft Solution",
    description: "High-performance iOS & Android apps from a single codebase using React Native and Flutter.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development",
  description: "Native-quality mobile app development for iOS and Android using React Native and Flutter with cross-platform capabilities.",
  provider: {
    "@type": "Organization",
    name: "KSoft Solution",
    url: "https://ksoftsolution.com",
  },
  serviceType: "Mobile App Development",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile App Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "React Native Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flutter App Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Store Optimization",
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
      name: "Mobile Apps",
      item: "https://ksoftsolution.com/services/mobile-apps",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I build a native app or a cross-platform app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most businesses, cross-platform apps (React Native or Flutter) offer the best value. You get native performance with a single codebase that works on both iOS and Android, reducing development time by 30-40%."
      }
    },
    {
      "@type": "Question",
      name: "How much does mobile app development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple app (5-10 screens) starts around ₹2,00,000. Medium complexity apps range from ₹4,00,000 to ₹8,00,000. Complex apps with AI features and advanced integrations can be ₹10,00,000+."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to develop a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple apps take 2-3 months. Medium complexity apps require 3-5 months. Complex apps with multiple integrations take 5-8 months."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, OS compatibility updates, and feature enhancements. Packages start from ₹15,000/month."
      }
    },
    {
      "@type": "Question",
      name: "Will you help with App Store and Play Store submission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We handle the entire submission process including account setup, screenshots, descriptions, keywords for ASO, and managing the review process."
      }
    }
  ]
};

export default function MobileAppsLayout({
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
