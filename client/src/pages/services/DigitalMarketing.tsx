import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Megaphone, TrendingUp, Users, Target } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/digital_marketing_strategy_dashboard_and_growth.png";

export default function DigitalMarketing() {
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
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-medium text-sm">
              Growth Driven Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Digital Marketing <span className="text-gradient-primary">Strategies</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We create data-driven marketing campaigns that deliver real ROI. 
              From social media to PPC, we help you reach your target audience and grow your business.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Grow Your Business
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Free Audit
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
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full -z-10"></div>
            <img 
              src={heroImg} 
              alt="Digital Marketing Strategy" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Target className="w-8 h-8 text-red-500" />,
              title: "PPC Advertising",
              desc: "Targeted Google and Social Media ads for instant leads."
            },
            {
              icon: <Users className="w-8 h-8 text-blue-500" />,
              title: "Social Media",
              desc: "Community building and brand awareness campaigns."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-green-500" />,
              title: "Conversion Optimization",
              desc: "Turning visitors into paying customers through data."
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
