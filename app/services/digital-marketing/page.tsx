"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Megaphone, TrendingUp, Users, Target, BarChart, Mail, Search, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: <Target className="w-6 h-6" />, title: "PPC Advertising", description: "High-ROI Google & Meta ad campaigns. Reach your ideal customers at the moment they're searching for your services." },
  { icon: <Users className="w-6 h-6" />, title: "Social Media", description: "Grow your brand on Instagram & LinkedIn. Engaging content that builds community and drives traffic to your business." },
  { icon: <Mail className="w-6 h-6" />, title: "Email Marketing", description: "Nurture leads with automated sequences. Personalized campaigns that convert subscribers into loyal customers." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "CRO", description: "Convert more visitors into customers. Data-driven optimization of landing pages, CTAs, and user journeys." },
  { icon: <BarChart className="w-6 h-6" />, title: "Analytics", description: "Data-driven decisions & reporting. Track every metric that matters with transparent, actionable insights." },
  { icon: <Megaphone className="w-6 h-6" />, title: "Brand Strategy", description: "Stand out in a crowded market. Develop messaging and positioning that resonates with your target audience." },
];

const benefits = [
  "Google Ads & Meta Ads management",
  "Social media content & strategy",
  "Email automation & nurture campaigns",
  "Conversion rate optimization",
  "Landing page optimization",
  "Monthly performance reports",
];

const process = [
  { step: "01", title: "Strategy & Audit", description: "We analyze your current marketing efforts, identify opportunities, and create a customized strategy aligned with your business goals." },
  { step: "02", title: "Campaign Execution", description: "From ad creative to landing pages, we execute campaigns across channels with continuous A/B testing and optimization." },
  { step: "03", title: "Analyze & Scale", description: "Monthly reporting shows what's working. We scale winning campaigns and refine underperformers to maximize your marketing ROI." },
];

const faqs = [
  {
    question: "How much should I budget for digital marketing?",
    answer: "Marketing budgets vary by industry and goals. For small businesses, we recommend starting with ₹30,000-₹50,000/month (ad spend + management). Medium businesses typically invest ₹75,000-₹1,50,000/month. The key is to start with a test budget, identify what works, and then scale profitable campaigns. We provide transparent reporting so you know exactly where every rupee goes."
  },
  {
    question: "How long before I see results from digital marketing?",
    answer: "PPC advertising can deliver leads within days of launch—it's the fastest channel. Social media takes 2-3 months to build momentum. Email marketing shows results within weeks if you have an existing list. Overall, expect meaningful results within 1-3 months, with compounding returns over time. We set realistic expectations during our strategy sessions."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely. We work with businesses of all sizes, from solo entrepreneurs to enterprises. For small businesses, we create focused strategies that maximize impact within limited budgets. We've helped local shops in Aurangabad compete with national brands through smart targeting and compelling messaging. Every business deserves professional marketing."
  },
  {
    question: "What's included in your monthly reports?",
    answer: "Our monthly reports include: campaign performance metrics (impressions, clicks, conversions), cost per acquisition (CPA), return on ad spend (ROAS), audience insights, competitor analysis, content performance, SEO rankings (if applicable), and strategic recommendations. We schedule monthly calls to walk through results and plan next steps. Transparency is core to how we work."
  },
  {
    question: "Can you guarantee specific results?",
    answer: "We don't guarantee specific metrics because marketing depends on many variables including your product, pricing, competition, and market conditions. What we guarantee is strategic thinking, professional execution, transparent reporting, and continuous optimization. Our track record shows consistent improvement in metrics that matter—leads, sales, and ROI—for clients who commit to a sustained marketing effort."
  },
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
              Stop burning cash on ads that don&apos;t convert. We specialize in high-ROI PPC, Social Media, and Email campaigns that actually bring in leads. Data-driven marketing that grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg" data-testid="button-marketing-strategy">
                  Get Marketing Strategy <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" data-testid="button-marketing-tips">
                  Read Marketing Tips
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
              data-testid={`card-marketing-feature-${index}`}
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
                Full-funnel marketing solutions designed to grow your business and maximize ROI. From awareness to conversion, we've got you covered.
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

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Marketing <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="text-muted-foreground">
              A data-driven approach to achieving your marketing goals.
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
              Marketing <span className="text-gradient-primary">Results</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              &quot;KSoft's Google Ads campaigns generated 300% ROI in the first 3 months. Their transparent reporting shows exactly where our money goes. We went from 10 leads/month to 80+ leads/month. Game changer.&quot;
            </blockquote>
            <p className="font-semibold">— Rajesh Patil, Director, DIT Aurangabad</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Common questions about digital marketing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/20 rounded-xl border border-white/5 px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`faq-marketing-trigger-${index}`}>
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
            <Link href="/services/web-development" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Web Development
            </Link>
            <Link href="/services/ui-ux-design" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              UI/UX Design
            </Link>
          </div>
        </div>

        <LeadGenCTA />
      </div>
    </div>
  );
}
