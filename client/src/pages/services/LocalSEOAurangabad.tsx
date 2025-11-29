import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Search, Users } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/local_seo_map_markers_in_aurangabad.png";
import SEO from "@/components/seo/SEO";

export default function LocalSEOAurangabad() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Local SEO Services Aurangabad",
    "description": "Dominate local search results in Chhatrapati Sambhaji Nagar. We help your business appear on Google Maps and top search results.",
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
        title="Rank #1 in Aurangabad (Chh. Sambhaji Nagar) | Local SEO Experts"
        description="If you aren't in the Google Map Pack, you're losing money. We help Aurangabad businesses dominate local search results and get more calls."
        canonical="/services/local-seo-aurangabad"
        ogImage={heroImg}
        schema={schemaData}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "Local SEO Aurangabad", item: "/services/local-seo-aurangabad" }
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
              #1 Local SEO Agency
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Rank #1 in <span className="text-gradient-primary">Aurangabad</span> (Chh. Sambhaji Nagar)
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When a customer in Aurangabad searches for your service, do they find you or your competitor? We specialize in getting local businesses into the <strong>"Google Map Pack"</strong>—where 80% of clicks happen.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Audit My Rankings
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Get Strategy
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
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full -z-10"></div>
            <img 
              src={heroImg} 
              alt="Local SEO Strategy Aurangabad" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <MapPin className="w-8 h-8 text-red-500" />,
              title: "Google Map Pack",
              desc: "We optimize your Google Business Profile to ensure you show up in the top 3 map results for local searches."
            },
            {
              icon: <Search className="w-8 h-8 text-blue-500" />,
              title: "Local Keywords",
              desc: "We target high-intent terms like 'near me' and 'in Aurangabad' that drive immediate phone calls."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-green-500" />,
              title: "Reputation Management",
              desc: "We help you get more 5-star reviews from real customers, building trust before they even call you."
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
