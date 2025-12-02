import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration Services | Custom AI Agents & Automation",
  description: "Transform your business with custom AI agents, ChatGPT integration, RAG chatbots, and workflow automation. We help businesses save 20+ hours weekly with intelligent automation solutions.",
  keywords: ["AI integration", "ChatGPT integration", "OpenAI API", "business automation", "AI chatbots", "RAG systems", "LLM integration", "artificial intelligence"],
  alternates: {
    canonical: "https://ksoftsolution.com/services/ai-integration",
  },
  openGraph: {
    title: "AI Integration Services | KSoft Solution",
    description: "Custom AI agents, RAG chatbots, and workflow automations that save you 20+ hours a week.",
    url: "https://ksoftsolution.com/services/ai-integration",
    type: "website",
    images: [
      {
        url: "/generated_images/artificial_intelligence_neural_network_visualization.png",
        width: 1200,
        height: 630,
        alt: "AI Integration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration Services | KSoft Solution",
    description: "Custom AI agents, RAG chatbots, and workflow automations that save you 20+ hours a week.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Integration Services",
  description: "Custom AI agents, ChatGPT integration, RAG chatbots, and workflow automation solutions for business efficiency.",
  provider: {
    "@type": "Organization",
    name: "KSoft Solution",
    url: "https://ksoftsolution.com",
  },
  serviceType: "AI Integration",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Integration Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom AI Agent Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "RAG Chatbot Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LLM API Integration",
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
      name: "AI Integration",
      item: "https://ksoftsolution.com/services/ai-integration",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of AI solutions do you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build a range of AI solutions including customer support chatbots, internal knowledge assistants, document processing systems, content generation tools, and workflow automation agents. Our solutions are powered by leading LLMs like GPT-4, Claude, and Gemini, customized with your business data."
      }
    },
    {
      "@type": "Question",
      name: "How does RAG (Retrieval-Augmented Generation) work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAG combines the power of large language models with your specific business knowledge. We index your documents, policies, and data into a vector database. When users ask questions, the system retrieves relevant information and uses it to generate accurate, contextual responses."
      }
    },
    {
      "@type": "Question",
      name: "Is my business data safe with AI integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We implement enterprise-grade security measures including data encryption, secure API connections, and access controls. For sensitive data, we offer local model deployment options where your data never leaves your infrastructure."
      }
    },
    {
      "@type": "Question",
      name: "How much can AI automation save my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most businesses see significant time savings—typically 20-40 hours per week on routine tasks. Customer support chatbots can handle 60-80% of common queries, freeing your team for complex issues. ROI typically ranges from 3x to 10x within the first year."
      }
    },
    {
      "@type": "Question",
      name: "What's the typical timeline for AI integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple chatbot implementations take 2-4 weeks. RAG-based knowledge assistants require 4-6 weeks for development and training. Complex workflow automation with multiple integrations may take 6-12 weeks."
      }
    }
  ]
};

export default function AIIntegrationLayout({
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
