import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ksoftsolution.com";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

function extractFAQFromContent(content: string): Array<{question: string; answer: string}> {
  const faqs: Array<{question: string; answer: string}> = [];
  
  const h3Matches = content.match(/<h3[^>]*>(.*?)<\/h3>/gi) || [];
  const paragraphs = content.split(/<h3[^>]*>/i);
  
  for (let i = 1; i < paragraphs.length && i < 6; i++) {
    const questionText = h3Matches[i - 1]?.replace(/<[^>]+>/g, '').trim();
    const answerMatch = paragraphs[i]?.match(/<p[^>]*>(.*?)<\/p>/i);
    
    if (questionText && answerMatch) {
      const isQuestion = questionText.includes('?') || 
                         questionText.toLowerCase().startsWith('how') ||
                         questionText.toLowerCase().startsWith('what') ||
                         questionText.toLowerCase().startsWith('why') ||
                         questionText.toLowerCase().startsWith('when') ||
                         questionText.toLowerCase().startsWith('where') ||
                         questionText.toLowerCase().startsWith('who');
      
      if (!isQuestion) continue;
      
      const answer = answerMatch[1]?.replace(/<[^>]+>/g, '').trim();
      if (answer && answer.length > 50) {
        const formattedQuestion = questionText.endsWith('?') ? questionText : `${questionText}?`;
        faqs.push({
          question: formattedQuestion.replace(/^\d+\.\s*/, ''),
          answer: answer.substring(0, 300) + (answer.length > 300 ? '...' : '')
        });
      }
    }
  }
  
  return faqs;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found | KSoft Solution",
      description: "The requested blog post could not be found.",
    };
  }

  const publishDate = new Date(post.date).toISOString();
  
  return {
    title: `${post.title} | KSoft Solution Blog`,
    description: post.excerpt,
    keywords: [...post.tags, post.category, "KSoft Solution", "Chhatrapati Sambhaji Nagar", "digital agency", "web development"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: publishDate,
      modifiedTime: publishDate,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      siteName: "KSoft Solution",
      locale: "en_IN",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `${SITE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: "@ksoftsolution",
      site: "@ksoftsolution",
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    other: {
      "article:author": post.author,
      "article:published_time": publishDate,
      "article:modified_time": publishDate,
      "article:section": post.category,
      "article:tag": post.tags.join(", "),
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostLayout({ params, children }: Props) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <>{children}</>;
  }

  const publishDate = new Date(post.date).toISOString();
  const wordCount = post.content.replace(/<[^>]+>/g, '').split(/\s+/).filter(w => w.length > 0).length;
  const readingTimeMinutes = Math.ceil(wordCount / 200);

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: post.image,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "KSoft Solution",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 200,
        height: 60,
      },
    },
    datePublished: publishDate,
    dateModified: publishDate,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: wordCount,
    timeRequired: `PT${readingTimeMinutes}M`,
    inLanguage: "en-IN",
    isAccessibleForFree: true,
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "KSoft Solution",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Digital agency specializing in web development, SEO, AI integration, and digital marketing in Chhatrapati Sambhaji Nagar, Maharashtra, India.",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 19.8762,
        longitude: 75.3433,
      },
      geoRadius: "100km",
    },
    knowsAbout: [
      "Web Development",
      "SEO",
      "Digital Marketing",
      "AI Integration",
      "Mobile App Development",
      "UI/UX Design"
    ],
  };

  const faqs = extractFAQFromContent(post.content);
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/${post.slug}`,
    url: `${SITE_URL}/blog/${post.slug}`,
    name: post.title,
    description: post.excerpt,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "KSoft Solution",
      description: "Digital agency in Chhatrapati Sambhaji Nagar specializing in web development, SEO, and digital marketing",
      publisher: {
        "@type": "Organization",
        name: "KSoft Solution",
      },
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: post.image,
    },
    breadcrumb: {
      "@id": `${SITE_URL}/blog/${post.slug}#breadcrumb`,
    },
    about: {
      "@type": "Thing",
      name: post.category,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article .excerpt", "article h2", "article h3"],
    },
  };

  return (
    <>
      <Script
        id={`blog-post-schema-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostSchema),
        }}
      />
      <Script
        id={`breadcrumb-schema-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id={`organization-schema-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id={`webpage-schema-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      {faqSchema && (
        <Script
          id={`faq-schema-${post.slug}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      {children}
    </>
  );
}
