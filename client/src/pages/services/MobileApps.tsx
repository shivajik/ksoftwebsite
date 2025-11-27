import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Layers, Zap, Shield } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/mobile_app_development_concept_with_multiple_devices.png";

export default function MobileApps() {
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
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-sm">
              iOS & Android Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Mobile App <span className="text-gradient-primary">Development</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We build high-performance, native and cross-platform mobile applications. 
              From concept to launch, we ensure your app provides a seamless user experience on every device.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your App
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  View Portfolio
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
              alt="Mobile App Development" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Smartphone className="w-8 h-8 text-blue-400" />,
              title: "Cross-Platform",
              desc: "Build once, deploy everywhere with React Native and Flutter."
            },
            {
              icon: <Zap className="w-8 h-8 text-yellow-400" />,
              title: "High Performance",
              desc: "Optimized for speed and smooth 60fps animations."
            },
            {
              icon: <Shield className="w-8 h-8 text-green-400" />,
              title: "Secure & Scalable",
              desc: "Enterprise-grade security standards and cloud infrastructure."
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
