import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palette, Layout, Eye, MousePointerClick } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/ui_ux_design_studio_with_creative_elements.png";

export default function UiUxDesign() {
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
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 font-medium text-sm">
              Design That Converts
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              UI/UX Design <span className="text-gradient-primary">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We design intuitive, beautiful interfaces that users love. Our user-centric approach ensures your digital product is not just pretty, but functional and profitable.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Designing
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  See Our Work
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
              alt="UI/UX Design Studio" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Layout className="w-8 h-8 text-pink-400" />,
              title: "Wireframing",
              desc: "Structuring user flows and information architecture."
            },
            {
              icon: <Palette className="w-8 h-8 text-purple-400" />,
              title: "Visual Design",
              desc: "Creating stunning, on-brand visual systems."
            },
            {
              icon: <MousePointerClick className="w-8 h-8 text-blue-400" />,
              title: "Prototyping",
              desc: "Interactive mockups to test and validate ideas."
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
