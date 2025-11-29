import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Wrench, RefreshCw, Server } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/wordpress_maintenance_dashboard_and_security.png";
import SEO from "@/components/seo/SEO";

export default function WordpressMaintenanceAurangabad() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "WordPress Maintenance Services Aurangabad",
    "description": "Reliable WordPress maintenance, security, and support services for businesses in Aurangabad.",
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
        title="WordPress Maintenance Services in Aurangabad | KSoft Solution"
        description="Keep your WordPress site secure and fast. Professional maintenance and support services in Chhatrapati Sambhaji Nagar."
        canonical="/services/wordpress-maintenance-aurangabad"
        ogImage={heroImg}
        schema={schemaData}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "WordPress Maintenance", item: "/services/wordpress-maintenance-aurangabad" }
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
              Secure & Fast
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              WordPress Maintenance Services in <span className="text-gradient-primary">Aurangabad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Keep your WordPress site secure, fast, and updated. KSoft Solution offers reliable maintenance packages for businesses in Chhatrapati Sambhaji Nagar.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Check Plans
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Contact Support
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
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
            <img 
              src={heroImg} 
              alt="WordPress Maintenance Service" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
              title: "Security Scans",
              desc: "Daily malware scans and firewall protection."
            },
            {
              icon: <RefreshCw className="w-8 h-8 text-blue-400" />,
              title: "Daily Backups",
              desc: "Cloud backups to ensure your data is never lost."
            },
            {
              icon: <Wrench className="w-8 h-8 text-orange-400" />,
              title: "Plugin Updates",
              desc: "Safe updates for core, themes, and plugins."
            },
            {
              icon: <Server className="w-8 h-8 text-purple-400" />,
              title: "Uptime Monitor",
              desc: "24/7 monitoring to ensure your site is always online."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <div className="mb-4 mx-auto p-3 bg-white/5 w-fit rounded-full border border-white/10">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
