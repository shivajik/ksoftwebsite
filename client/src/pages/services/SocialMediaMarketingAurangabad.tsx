import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Twitter, Megaphone } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/social_media_marketing_viral_growth.png";
import SEO from "@/components/seo/SEO";

export default function SocialMediaMarketingAurangabad() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Marketing Services Aurangabad",
    "description": "Strategic social media marketing, content creation, and ad management for businesses in Aurangabad.",
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
        title="Social Media Marketing in Aurangabad | KSoft Solution"
        description="Expert social media marketing services in Aurangabad. Instagram, Facebook, and LinkedIn growth strategies."
        canonical="/services/social-media-marketing-aurangabad"
        ogImage={heroImg}
        schema={schemaData}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "Social Media Marketing", item: "/services/social-media-marketing-aurangabad" }
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
              Viral Growth & Branding
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Social Media Marketing in <span className="text-gradient-primary">Aurangabad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Engage your audience on Instagram, Facebook, and LinkedIn. KSoft Solution creates viral content and targeted ad campaigns tailored for the Aurangabad audience.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Boost My Brand
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  See Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full -z-10"></div>
            <img 
              src={heroImg} 
              alt="Social Media Marketing Agency" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Instagram className="w-8 h-8 text-pink-500" />,
              title: "Instagram Growth",
              desc: "Reels, Stories, and Feed posts that drive engagement."
            },
            {
              icon: <Facebook className="w-8 h-8 text-blue-600" />,
              title: "Facebook Ads",
              desc: "Targeted lead generation campaigns for local customers."
            },
            {
              icon: <Linkedin className="w-8 h-8 text-blue-400" />,
              title: "LinkedIn B2B",
              desc: "Professional branding to connect with corporate clients."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-xl"
            >
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
