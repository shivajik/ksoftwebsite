"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, BarChart, Globe, LineChart, TrendingUp, Target, MapPin, CheckCircle2, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

const features = [
  { icon: <Search className="w-6 h-6" />, title: "Technical SEO", description: "Fix issues that prevent Google from ranking you." },
  { icon: <MapPin className="w-6 h-6" />, title: "Local SEO", description: "Dominate the Google Map Pack in your city." },
  { icon: <Globe className="w-6 h-6" />, title: "GEO Optimization", description: "Rank in AI search results (ChatGPT, Perplexity)." },
  { icon: <FileText className="w-6 h-6" />, title: "Content Strategy", description: "SEO-optimized content that converts." },
  { icon: <BarChart className="w-6 h-6" />, title: "Analytics & Reporting", description: "Track rankings, traffic, and ROI." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Link Building", description: "Quality backlinks that boost authority." },
];

const benefits = [
  "Comprehensive SEO audits",
  "Keyword research & strategy",
  "On-page optimization",
  "Google Business Profile optimization",
  "Schema markup implementation",
  "Monthly ranking reports",
];

export default function SEOPage() {
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
              <LineChart className="w-4 h-4" />
              SEO & GEO
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              SEO & AI Search <span className="text-gradient-primary">Optimization</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Don&apos;t let AI search kill your traffic. We help you rank #1 on Google AND appear in ChatGPT answers. Future-proof your SEO strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg">
                  Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
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
                Our SEO <span className="text-gradient-primary">Services</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Comprehensive SEO solutions to boost your visibility on Google and AI platforms.
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
              <Target className="w-24 h-24 text-primary/50" />
            </div>
          </div>
        </div>

        <LeadGenCTA />
      </div>
    </div>
  );
}
