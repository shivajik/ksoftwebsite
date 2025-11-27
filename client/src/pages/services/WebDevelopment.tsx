import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Laptop, Zap, Layers } from "lucide-react";
import webDevImg from "@assets/generated_images/web_development_abstract_concept_with_code_and_structure.png";

export default function WebDevelopment() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">
              Premium Web Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Next-Gen <span className="text-gradient-primary">Web Architecture</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We build lightning-fast, scalable, and visually stunning websites that drive conversions. 
              Using the latest stack (React, Next.js, TypeScript), we ensure your digital presence is future-proof.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Project
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                View Portfolio
              </Button>
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
              src={webDevImg} 
              alt="Web Development Architecture" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Laptop className="w-8 h-8 text-primary" />,
              title: "Modern Frameworks",
              desc: "Built with React, Next.js, and Tailwind for superior performance."
            },
            {
              icon: <Zap className="w-8 h-8 text-primary" />,
              title: "Lightning Fast",
              desc: "Optimized for Core Web Vitals and instant load times."
            },
            {
              icon: <Layers className="w-8 h-8 text-primary" />,
              title: "Scalable Architecture",
              desc: "Codebases designed to grow with your business needs."
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

        {/* Technical Stack Section */}
        <div className="bg-secondary/30 rounded-3xl p-12 border border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-muted-foreground">We use the best tools in the industry to ensure quality.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS", "Vercel"].map((tech) => (
              <div key={tech} className="flex items-center justify-center p-4 bg-background/50 rounded-lg border border-white/5 hover:border-primary/30 transition-colors font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
