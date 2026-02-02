export const dynamic = "force-static";
export const revalidate = 3600;

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, MapPin, Building2, Search, Globe, FileCheck, BarChart3, Shield, Users } from "lucide-react";
import Link from "@/components/ui/link";
import Image from "next/image";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: <MapPin className="w-6 h-6" />, title: "NAP Consistency", description: "We ensure your Name, Address, and Phone Number (NAP) is accurate and consistent across all directories—a critical ranking factor for local SEO." },
  { icon: <Building2 className="w-6 h-6" />, title: "High-Authority Directories", description: "Manual submissions to trusted, high-DA business directories including Google, Bing, Apple Maps, Yelp, Justdial, and industry-specific platforms." },
  { icon: <Search className="w-6 h-6" />, title: "Citation Audit", description: "Complete audit of existing citations to identify duplicates, inconsistencies, and outdated information that could be hurting your rankings." },
  { icon: <Globe className="w-6 h-6" />, title: "Geo-Targeted Listings", description: "Location-specific directory submissions to boost visibility in your target cities and regions across India and globally." },
  { icon: <FileCheck className="w-6 h-6" />, title: "Rich Media Citations", description: "Enhanced listings with your logo, photos, business hours, services, and social links for maximum engagement and trust." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Detailed Reporting", description: "Comprehensive reports with live URLs, login credentials, and status updates for complete transparency." },
];

const benefits = [
  "100% manual submissions by SEO experts",
  "High-DA business directory citations",
  "NAP cleanup & accuracy guaranteed",
  "Unique business descriptions",
  "Logo and photo uploads",
  "Indexing included",
  "Detailed reports with login details",
  "Country-specific directories (IN, US, UK, CA, AU)",
];

const plans = [
  { 
    name: "Starter", 
    citations: "50",
    price: "₹2,999", 
    description: "Perfect for new local businesses",
    features: [
      "50 High-DA Citations",
      "Manual NAP Submissions",
      "Unique Descriptions",
      "Citation Audit Report",
      "Logo/Photo Upload",
      "Indexing Included",
      "Delivery in 5 Days",
    ],
    popular: false,
  },
  { 
    name: "Growth", 
    citations: "100",
    price: "₹5,499", 
    description: "Most popular for local SEO",
    features: [
      "100 High-DA Citations",
      "Manual NAP Submissions",
      "Unique Descriptions",
      "Citation Audit Report",
      "Logo/Photo Upload",
      "Indexing Report",
      "Detailed Report with Logins",
      "Delivery in 7 Days",
    ],
    popular: true,
  },
  { 
    name: "Domination", 
    citations: "200",
    price: "₹10,999", 
    description: "For competitive local markets",
    features: [
      "200 High-DA Citations",
      "Top + Niche + GEO Citations",
      "Web 2.0 Profile Citations",
      "NAP Consistency Check",
      "Unique Descriptions",
      "Full Citation Audit",
      "Logo/Photo Upload",
      "Indexing Report",
      "Delivery in 10 Days",
    ],
    popular: false,
  },
];

const process = [
  { step: "01", title: "Citation Audit", description: "We run a detailed audit of top directories to find existing citations, duplicates, and inconsistencies in your business listings." },
  { step: "02", title: "NAP Cleanup", description: "We scan directories to detect all NAP variations and fix incorrect, outdated, or conflicting data to restore consistency." },
  { step: "03", title: "Competitor Analysis", description: "We analyze your competitors' citation sources and directory placements to identify opportunities for your business." },
  { step: "04", title: "Directory Selection", description: "We handpick trusted high-DA directories, niche listings, and geo-specific platforms relevant to your business." },
  { step: "05", title: "Manual Submissions", description: "Our team manually submits your business to each directory with rich media, unique descriptions, and accurate NAP." },
  { step: "06", title: "Reporting & Delivery", description: "You receive a comprehensive report with live URLs, login details, and documentation for all citations." },
];

const faqs = [
  {
    question: "What are local citations and why do they matter?",
    answer: "Local citations are online mentions of your business Name, Address, and Phone Number (NAP) on directories, websites, and social platforms. They're one of the top ranking factors for local SEO because search engines use citation consistency to verify your business legitimacy and determine local search rankings."
  },
  {
    question: "How do citations help with Google Maps ranking?",
    answer: "Google uses citations as trust signals to validate your business information. When your NAP is consistent across multiple authoritative directories, Google gains confidence in your business data, which directly impacts your Google Maps and Local Pack rankings."
  },
  {
    question: "What directories do you submit to?",
    answer: "We submit to a mix of high-authority general directories (Google, Bing, Apple Maps, Yelp), India-specific directories (Justdial, Sulekha, IndiaMART), industry-specific platforms, and geo-targeted local directories. The exact mix depends on your business category and target locations."
  },
  {
    question: "How long before I see results from citation building?",
    answer: "Citation building is a foundational SEO activity. Most businesses start seeing improvements in local rankings within 4-8 weeks after citations are indexed. The timeline varies based on competition, existing citation quality, and other SEO factors."
  },
  {
    question: "Do you fix existing incorrect citations?",
    answer: "Yes! Our citation audit identifies existing incorrect or inconsistent citations. We'll update those we can access and provide you with a list of citations that require business owner verification to update, along with instructions for fixing them."
  },
  {
    question: "Is this a one-time service or ongoing?",
    answer: "Citation building is typically a one-time service. However, we recommend periodic citation audits (every 6-12 months) to maintain consistency as directories update their data and new citation opportunities emerge. We offer maintenance packages for ongoing citation management."
  },
];

export default function LocalCitationsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-8">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white">Local Citation Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Dominate <span className="text-gradient-primary">Local Search</span> with Accurate Citations
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Get your business listed on high-authority directories with 100% accurate NAP data. Our manual citation building service boosts your Google Maps visibility, improves local rankings, and drives more customers to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg" data-testid="button-get-quote">
                  Get a Free Citation Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#plans">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" data-testid="button-view-plans">
                  View Pricing
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
              data-testid={`card-feature-${index}`}
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
                Why <span className="text-gradient-primary">Citations Matter</span> for Local SEO
              </h2>
              <p className="text-muted-foreground mb-8">
                Local citations are one of the strongest signals Google uses to verify your business and determine local search rankings. Consistent, accurate citations across high-authority directories establish trust and improve visibility in Google Maps and local search results.
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
            <div className="rounded-2xl aspect-video overflow-hidden relative">
              <Image 
                src="/generated_images/business_directory_citation_network.png"
                alt="Local Citation Building Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="text-muted-foreground">
              A proven 6-step process for building high-quality, consistent citations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-secondary/20 rounded-2xl p-6 border border-white/5"
              >
                <div className="text-5xl font-bold text-primary/20 absolute top-4 right-6">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="plans" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Citation <span className="text-gradient-primary">Packages</span>
            </h2>
            <p className="text-muted-foreground">
              One-time cost. No recurring fees. 100% manual submissions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative bg-secondary/20 rounded-2xl p-8 border ${plan.popular ? 'border-primary shadow-[0_0_30px_-10px_var(--primary)]' : 'border-white/5'}`}
                data-testid={`card-plan-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-primary font-semibold mb-2">{plan.citations} Citations</p>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}
                    data-testid={`button-select-plan-${index}`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20 bg-secondary/20 rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Client <span className="text-gradient-primary">Results</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              &quot;After KSoft Solution built our citations, we saw a dramatic improvement in our Google Maps ranking. We went from page 3 to the top 3 in our local area within 2 months. The phone started ringing more, and we&apos;ve gained several new customers who found us through Google Maps. Excellent service!&quot;
            </blockquote>
            <p className="font-semibold">— Vikram Patil, Owner, Patil Electronics</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our local citation building service.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/20 rounded-xl border border-white/5 px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`faq-trigger-${index}`}>
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
            <Link href="/services/seo" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              SEO Optimization
            </Link>
            <Link href="/services/digital-marketing" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Digital Marketing
            </Link>
            <Link href="/services/web-development" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Web Development
            </Link>
          </div>
        </div>

        <LeadGenCTA />
      </div>
    </div>
  );
}
