"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Laptop, Zap, Layers, Search, Code, Rocket, ShieldCheck, Monitor } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

const features = [
  { icon: <Laptop className="w-6 h-6" />, title: "Custom Development", description: "Bespoke solutions tailored to your exact business needs." },
  { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", description: "Optimized for speed with sub-second load times." },
  { icon: <Layers className="w-6 h-6" />, title: "Scalable Architecture", description: "Built to grow with your business." },
  { icon: <Search className="w-6 h-6" />, title: "SEO-First", description: "Search engine optimized from the ground up." },
  { icon: <Code className="w-6 h-6" />, title: "Clean Code", description: "Maintainable, well-documented codebase." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure", description: "Enterprise-grade security practices." },
];

const benefits = [
  "Custom React & Next.js development",
  "Mobile-first responsive design",
  "API integrations & backend development",
  "E-commerce & payment processing",
  "Content management systems",
  "Performance optimization",
];

export default function WebDevelopmentPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Monitor className="w-4 h-4" />
              Web Development
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Enterprise-Grade <span className="text-gradient-primary">Web Development</span> That Scales
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stop losing customers to slow websites. We build high-performance, custom web apps using React & Next.js that rank high and convert fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/20 rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 border border-white/10 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                What We <span className="text-gradient-primary">Deliver</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Every project includes our complete development package, ensuring you get a production-ready application.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/40 rounded-2xl aspect-video flex items-center justify-center">
              <Rocket className="w-24 h-24 text-primary/50" />
            </div>
          </div>
        </div>

        <LeadGenCTA />
      </div>
    </div>
  );
}
