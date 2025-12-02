"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Layers, Zap, Shield, Tablet, Wifi, CheckCircle2, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: <Smartphone className="w-6 h-6" />, title: "Cross-Platform", description: "One codebase for iOS and Android. Save time and money while reaching all mobile users with a single development effort." },
  { icon: <Zap className="w-6 h-6" />, title: "Native Performance", description: "Smooth 60fps animations and interactions. Our apps feel native because they compile to native code, not web wrappers." },
  { icon: <Layers className="w-6 h-6" />, title: "Modern Stack", description: "React Native & Flutter expertise. We use battle-tested frameworks backed by Meta and Google respectively." },
  { icon: <Wifi className="w-6 h-6" />, title: "Offline Support", description: "Apps that work without internet. Critical features remain available, with automatic sync when connectivity returns." },
  { icon: <Shield className="w-6 h-6" />, title: "Secure", description: "End-to-end encryption & secure storage. Biometric authentication, encrypted databases, and secure API communication." },
  { icon: <Download className="w-6 h-6" />, title: "Store Submission", description: "Full App Store & Play Store support. We handle the entire submission process, including screenshots and descriptions." },
];

const benefits = [
  "React Native & Flutter development",
  "iOS and Android from single codebase",
  "Push notifications & real-time features",
  "Offline-first architecture",
  "App Store optimization (ASO)",
  "Ongoing maintenance & updates",
];

const process = [
  { step: "01", title: "Discovery & Prototyping", description: "We understand your app idea, target users, and business goals. Interactive prototypes help validate concepts before development." },
  { step: "02", title: "Development & Testing", description: "Our team builds your app using React Native or Flutter, with continuous testing on real devices to ensure quality." },
  { step: "03", title: "Launch & Growth", description: "We handle App Store submission, ASO optimization, and provide ongoing maintenance to help your app grow." },
];

const faqs = [
  {
    question: "Should I build a native app or a cross-platform app?",
    answer: "For most businesses, cross-platform apps (React Native or Flutter) offer the best value. You get native performance with a single codebase that works on both iOS and Android, reducing development time by 30-40%. Native development (Swift for iOS, Kotlin for Android) is recommended only when you need platform-specific features or maximum performance for graphics-intensive apps like games."
  },
  {
    question: "How much does mobile app development cost?",
    answer: "Mobile app costs vary significantly based on complexity. A simple app (5-10 screens, basic features) starts around ₹2,00,000. Medium complexity apps with user authentication, payment processing, and real-time features range from ₹4,00,000 to ₹8,00,000. Complex apps with AI features, offline sync, and advanced integrations can be ₹10,00,000+. We provide detailed quotes after understanding your requirements."
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "Simple apps take 2-3 months. Medium complexity apps require 3-5 months. Complex apps with multiple integrations and advanced features take 5-8 months. Our agile approach delivers working features every 2 weeks, so you can see progress throughout development rather than waiting until the end."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, OS compatibility updates, performance optimization, and feature enhancements. Mobile apps require regular updates to stay compatible with new iOS and Android versions. Our maintenance packages start from ₹15,000/month."
  },
  {
    question: "Will you help with App Store and Play Store submission?",
    answer: "Absolutely. We handle the entire submission process including creating App Store Connect and Google Play Console accounts, preparing app screenshots and preview videos, writing optimized descriptions, setting up keywords for ASO (App Store Optimization), and managing the review process. First-time submissions typically get approved within 1-3 days for Play Store and 1-7 days for App Store."
  },
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
              Get a high-performance mobile app without paying for two separate teams. We build beautiful cross-platform apps using React Native and Flutter that look and feel native on both iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg" data-testid="button-start-app">
                  Start Your App Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" data-testid="button-view-apps">
                  View Our Apps
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
              data-testid={`card-mobile-feature-${index}`}
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
                From concept to App Store, we handle every aspect of mobile app development. Our team has shipped 20+ apps with 4.5+ star ratings.
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

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Development <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="text-muted-foreground">
              A proven process that delivers apps users love.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-secondary/20 rounded-2xl p-6 border border-white/5"
              >
                <div className="text-6xl font-bold text-primary/20 absolute top-4 right-6">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20 bg-secondary/20 rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              App Success <span className="text-gradient-primary">Story</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              &quot;KSoft delivered our mobile app in 4 months—on time and within budget. The app has a 4.7 rating on both stores with 10,000+ downloads in the first quarter. Their attention to UX made all the difference.&quot;
            </blockquote>
            <p className="font-semibold">— Vikram Joshi, Founder, AgencySimplifier</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Common questions about mobile app development.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/20 rounded-xl border border-white/5 px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`faq-mobile-trigger-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mb-20 text-center">
          <h2 className="text-2xl font-heading font-bold mb-6">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/ui-ux-design" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              UI/UX Design
            </Link>
            <Link href="/services/web-development" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Web Development
            </Link>
            <Link href="/services/ai-integration" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              AI Integration
            </Link>
          </div>
        </div>

        <LeadGenCTA />
      </div>
    </div>
  );
}
