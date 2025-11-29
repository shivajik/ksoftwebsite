import { Helmet } from "react-helmet";
import SchemaMarkup from "./SchemaMarkup";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: any;
  breadcrumbs?: { name: string; item: string }[];
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = "/assets/logo.png", // Default image path relative to public
  ogType = "website",
  schema,
  breadcrumbs
}: SEOProps) {
  const siteUrl = "https://ksoftsolution.com";
  const fullCanonical = canonical 
    ? (canonical.startsWith("http") ? canonical : `${siteUrl}${canonical}`) 
    : window.location.href;
    
  const fullOgImage = ogImage.startsWith("http") 
    ? ogImage 
    : `${siteUrl}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

  // Generate Breadcrumb Schema if provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item.startsWith("http") ? item.item : `${siteUrl}${item.item}`
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={fullCanonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={fullCanonical} />
        <meta property="og:image" content={fullOgImage} />
        <meta property="og:site_name" content="KSoft Solution" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullOgImage} />
        <meta name="twitter:creator" content="@ksoftsolution" />
      </Helmet>

      {schema && <SchemaMarkup data={schema} />}
      {breadcrumbSchema && <SchemaMarkup data={breadcrumbSchema} />}
    </>
  );
}
