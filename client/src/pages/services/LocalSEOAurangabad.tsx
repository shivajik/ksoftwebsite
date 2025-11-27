import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Search, Users } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/local_seo_map_markers_in_aurangabad.png";

export default function LocalSEOAurangabad() {
  return (
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
              Local SEO Services in <span className="text-gradient-primary">Aurangabad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dominate local search results in Chhatrapati Sambhaji Nagar. We help your business appear on Google Maps and top search results when customers look for services near them.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Audit My Site
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
              title: "Google Business Profile",
              desc: "Complete optimization of your GMB profile to rank in the 'Map Pack'."
            },
            {
              icon: <Search className="w-8 h-8 text-blue-500" />,
              title: "Local Keywords",
              desc: "Targeting terms like 'Best [Service] in Aurangabad' to capture high-intent traffic."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-green-500" />,
              title: "Review Management",
              desc: "Strategies to generate more 5-star reviews and build local trust."
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
  );
}
