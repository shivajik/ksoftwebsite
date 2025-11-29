"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Megaphone, TrendingUp, Users, Target, BarChart, Mail, Search, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

const features = [
  { icon: <Target className="w-6 h-6" />, title: "PPC Advertising", description: "High-ROI Google & Meta ad campaigns." },
  { icon: <Users className="w-6 h-6" />, title: "Social Media", description: "Grow your brand on Instagram & LinkedIn." },
  { icon: <Mail className="w-6 h-6" />, title: "Email Marketing", description: "Nurture leads with automated sequences." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "CRO", description: "Convert more visitors into customers." },
  { icon: <BarChart className="w-6 h-6" />, title: "Analytics", description: "Data-driven decisions & reporting." },
  { icon: <Megaphone className="w-6 h-6" />, title: "Brand Strategy", description: "Stand out in a crowded market." },
];

const benefits = [
  "Google Ads & Meta Ads management",
  "Social media content & strategy",
  "Email automation & nurture campaigns",
  "Conversion rate optimization",
  "Landing page optimization",
  "Monthly performance reports",
];

export default function DigitalMarketingPage() {
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
              <Megaphone className="w-4 h-4" />
              Digital Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Performance <span className="text-gradient-primary">Digital Marketing</span> & PPC
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stop burning cash on ads that don&apos;t convert. We specialize in high-ROI PPC, Social Media, and Email campaigns that actually bring in leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg">
                  Get Marketing Strategy <ArrowRight className="ml-2 h-5 w-5" />
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
                Marketing <span className="text-gradient-primary">Services</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Full-funnel marketing solutions designed to grow your business and maximize ROI.
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
              <TrendingUp className="w-24 h-24 text-primary/50" />
            </div>
          </div>
        </div>

        <LeadGenCTA />
      </div>
    </div>
  );
}
