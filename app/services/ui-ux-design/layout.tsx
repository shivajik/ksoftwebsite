import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services | User-Centered Design That Converts",
  description: "Professional UI/UX design services including user research, wireframing, prototyping, and usability testing. We create beautiful, intuitive interfaces that convert visitors into customers.",
  keywords: ["UI design", "UX design", "user interface design", "user experience", "wireframing", "prototyping", "Figma design", "design system", "usability testing"],
  alternates: {
    canonical: "https://ksoftsolution.com/services/ui-ux-design",
  },
  openGraph: {
    title: "UI/UX Design Services | KSoft Solution",
    description: "Beautiful, intuitive interfaces that guide users effortlessly to conversion.",
    url: "https://ksoftsolution.com/services/ui-ux-design",
    type: "website",
    images: [
      {
        url: "/generated_images/ui_ux_design_studio_with_creative_elements.png",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services | KSoft Solution",
    description: "Beautiful, intuitive interfaces that guide users effortlessly to conversion.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UI/UX Design Services",
  description: "Professional UI/UX design services including user research, wireframing, prototyping, and usability testing for digital products.",
  provider: {
    "@type": "Organization",
    name: "KSoft Solution",
    url: "https://ksoftsolution.com",
  },
  serviceType: "UI/UX Design",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "UI/UX Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "User Research & Persona Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wireframing & Prototyping",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Visual UI Design",
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
      name: "UI/UX Design",
      item: "https://ksoftsolution.com/services/ui-ux-design",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between UI and UX design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UX (User Experience) design focuses on the overall experience—how easy and enjoyable the product is to use. UI (User Interface) design focuses on the visual elements—colors, typography, buttons. Good design requires both."
      }
    },
    {
      "@type": "Question",
      name: "Why is UI/UX design important for business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good design directly impacts your bottom line. Studies show every $1 invested in UX returns $100 (10,000% ROI). Well-designed products have higher conversion rates, lower support costs, and better customer retention."
      }
    },
    {
      "@type": "Question",
      name: "How much does UI/UX design cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A landing page design starts around ₹25,000. A full mobile app design (10-20 screens) ranges from ₹1,00,000 to ₹2,50,000. Complex web applications can be ₹3,00,000 to ₹6,00,000+."
      }
    },
    {
      "@type": "Question",
      name: "Do you work with existing brand guidelines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we work seamlessly with existing brand guidelines. If you don't have formal guidelines, we can help establish them. We also extend brand identities for digital contexts."
      }
    },
    {
      "@type": "Question",
      name: "What tools do you use for design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily use Figma for UI/UX design—it's industry-standard and makes developer handoff seamless. For user research, we use tools like Maze and Hotjar."
      }
    }
  ]
};

export default function UiUxDesignLayout({
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
