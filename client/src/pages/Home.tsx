import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import SEO from "@/components/seo/SEO";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "KSoft Solution",
    "url": "https://ksoftsolution.com",
    "logo": "https://ksoftsolution.com/assets/logo.png",
    "description": "Premier digital agency specializing in modern web development, AI integration, and SEO strategies.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "T-16, Software Technology Parks of India, Chikhalthana MIDC",
      "addressLocality": "Chhatrapati Sambhaji Nagar",
      "postalCode": "431008",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-976-541-2319",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/ksoftsolutionaurangabad/",
      "https://twitter.com/ksoftsolution",
      "https://www.instagram.com/ksoftsolution/",
      "https://share.google/fa5Xjx7bbkthbzjuf"
    ]
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SEO 
        title="KSoft Solution | Digital Agency & Software Development"
        description="KSoft Solution is a premier digital agency specializing in modern web development, AI integration, and SEO strategies. Transform your business today."
        canonical="/"
        schema={schemaData}
      />
      
      <Hero />
      <Services />
      <About />
      <div className="container mx-auto px-4">
        <LeadGenCTA />
      </div>
    </div>
  );
}
