import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/futuristic_glassmorphism_interface_with_data_visualization.png";
import OptimizedImage from "@/components/ui/optimized-image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage 
          src={heroBg} 
          alt="Digital Network Background" 
          className="w-full h-full object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary-foreground/80">Serving Clients Globally</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
            We Build Digital <br />
            <span className="text-gradient-primary">Growth Engines</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Stop settling for "just a website." We engineer high-performance platforms that rank #1 on Google, capture leads, and automate your sales—powered by AI and human expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg rounded-full shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300">
              Get Your Free Strategy
            </Button>
            <Link href="/services/web-development">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group">
                See Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Glass Cards Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { val: "98%", label: "Client Retention" },
            { val: "10x", label: "ROI Average" },
            { val: "24/7", label: "AI Support" },
            { val: "#1", label: "Google Rankings" }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold text-gradient-primary mb-1">{stat.val}</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
