import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Database, Globe, Share2, FileText } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/business_directory_citation_network.png";
import SEO from "@/components/seo/SEO";

export default function CitationBuildingAurangabad() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Citation Building Services Aurangabad",
    "description": "Manual citation building and business directory submission services to boost local SEO in Aurangabad.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "KSoft Solution",
      "image": heroImg,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Aurangabad",
        "addressRegion": "MH",
        "addressCountry": "IN"
      }
    },
    "areaServed": "Aurangabad"
  };

  return (
    <>
      <SEO 
        title="Local Business Listings (Citations) | Get Found Everywhere in Aurangabad"
        description="Boost your local SEO with manual citation building. We list your business on top directories in Aurangabad to verify your NAP."
        canonical="/services/citation-building-aurangabad"
        ogImage={heroImg}
        schema={schemaData}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "Citation Building", item: "/services/citation-building-aurangabad" }
        ]}
      />
      <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">
              Build Local Authority
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Get Listed on Every <span className="text-gradient-primary">Major Directory</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Google trusts businesses that are verifiable. We manually list your business details (Name, Address, Phone) on 50+ high-authority directories like Justdial, Sulekha, and IndiaMART to prove you are real and boost your SEO.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Listing
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full -z-10"></div>
            <img 
              src={heroImg} 
              alt="Citation Building Service" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">What We Do</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Database className="w-5 h-5 text-primary" />
                <span>Manual submissions to top directories (Justdial, Sulekha, etc.)</span>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <span>NAP (Name, Address, Phone) consistency checks</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <span>Niche-specific directory listings</span>
              </li>
            </ul>
          </div>
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
            <p className="text-muted-foreground mb-4">
              Citations verify your business existence to Google. Consistent listings across the web tell search engines that your business is legitimate and popular in Aurangabad, directly improving your local rankings.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
