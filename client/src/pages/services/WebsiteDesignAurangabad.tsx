import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Monitor, Layout, Smartphone } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/modern_website_design_studio_in_aurangabad.png";

export default function WebsiteDesignAurangabad() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">
              Best Web Designers in Aurangabad
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Website Design Services in <span className="text-gradient-primary">Aurangabad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              KSoft Solution delivers high-performance, responsive, and visually stunning websites tailored for businesses in Chhatrapati Sambhaji Nagar (Aurangabad). 
              We blend local market understanding with global design standards to help you stand out.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Free Quote
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Call: +91 123 456 7890
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
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10"></div>
            <img 
              src={heroImg} 
              alt="Website Design Agency in Aurangabad" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full"
            />
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Layout className="w-8 h-8 text-primary" />,
              title: "Custom Web Design",
              desc: "Unique designs that reflect your brand identity, not generic templates."
            },
            {
              icon: <Smartphone className="w-8 h-8 text-primary" />,
              title: "Mobile Responsive",
              desc: "Sites that look perfect on every device, from iPhones to desktops."
            },
            {
              icon: <Monitor className="w-8 h-8 text-primary" />,
              title: "eCommerce Solutions",
              desc: "Robust online stores to sell your products across Maharashtra."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-xl"
            >
              <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg border border-primary/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us / FAQ / Local Content */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Why Choose Us in Aurangabad?</h2>
            <ul className="space-y-4">
              {[
                "Local support and face-to-face meetings available",
                "Deep understanding of the Marathwada market",
                "Fast turnaround times for urgent projects",
                "Affordable pricing for startups and SMEs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent h-5 w-5 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-primary mb-1">How much does a website cost in Aurangabad?</h4>
                <p className="text-sm text-muted-foreground">Our packages start from affordable rates tailored for local businesses, scaling up for complex enterprise needs.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">How long does it take to build?</h4>
                <p className="text-sm text-muted-foreground">A standard business website takes 1-2 weeks, while custom eCommerce sites may take 3-4 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
