"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Layers, Zap, Shield, Tablet, Wifi, CheckCircle2, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

const features = [
  { icon: <Smartphone className="w-6 h-6" />, title: "Cross-Platform", description: "One codebase for iOS and Android." },
  { icon: <Zap className="w-6 h-6" />, title: "Native Performance", description: "Smooth 60fps animations and interactions." },
  { icon: <Layers className="w-6 h-6" />, title: "Modern Stack", description: "React Native & Flutter expertise." },
  { icon: <Wifi className="w-6 h-6" />, title: "Offline Support", description: "Apps that work without internet." },
  { icon: <Shield className="w-6 h-6" />, title: "Secure", description: "End-to-end encryption & secure storage." },
  { icon: <Download className="w-6 h-6" />, title: "Store Submission", description: "Full App Store & Play Store support." },
];

const benefits = [
  "React Native & Flutter development",
  "iOS and Android from single codebase",
  "Push notifications & real-time features",
  "Offline-first architecture",
  "App Store optimization (ASO)",
  "Ongoing maintenance & updates",
];

export default function MobileAppsPage() {
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
              <Tablet className="w-4 h-4" />
              Mobile Apps
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Native-Quality <span className="text-gradient-primary">Mobile Apps</span> (iOS & Android)
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Get a high-performance mobile app without paying for two separate teams. We build beautiful cross-platform apps using React Native and Flutter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg">
                  Start Your App Project <ArrowRight className="ml-2 h-5 w-5" />
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
                Mobile Development <span className="text-gradient-primary">Services</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                From concept to App Store, we handle every aspect of mobile app development.
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
              <Smartphone className="w-24 h-24 text-primary/50" />
            </div>
          </div>
        </div>

        <LeadGenCTA />
      </div>
    </div>
  );
}
