"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, BarChart, Globe, LineChart, TrendingUp, Target, MapPin, CheckCircle2, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: <Search className="w-6 h-6" />, title: "Technical SEO", description: "Fix issues that prevent Google from ranking you—site speed, crawlability, indexation, and Core Web Vitals optimization." },
  { icon: <MapPin className="w-6 h-6" />, title: "Local SEO", description: "Dominate the Google Map Pack in Aurangabad and your target cities. Google Business Profile optimization and local citations." },
  { icon: <Globe className="w-6 h-6" />, title: "GEO Optimization", description: "Rank in AI search results (ChatGPT, Perplexity, Claude). Future-proof your visibility in the age of AI search." },
  { icon: <FileText className="w-6 h-6" />, title: "Content Strategy", description: "SEO-optimized content that converts. Keyword research, content gaps analysis, and high-quality article creation." },
  { icon: <BarChart className="w-6 h-6" />, title: "Analytics & Reporting", description: "Track rankings, traffic, and ROI with detailed monthly reports. Google Analytics and Search Console insights." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Link Building", description: "Quality backlinks that boost authority. Ethical white-hat link building from relevant, high-authority websites." },
];

const benefits = [
  "Comprehensive SEO audits",
  "Keyword research & strategy",
  "On-page optimization",
  "Google Business Profile optimization",
  "Schema markup implementation",
  "Monthly ranking reports",
];

const process = [
  { step: "01", title: "SEO Audit & Research", description: "We analyze your current SEO health, identify issues, and research keywords that your target audience is searching for." },
  { step: "02", title: "Strategy & Implementation", description: "Based on audit findings, we create a customized SEO strategy and implement on-page, technical, and off-page optimizations." },
  { step: "03", title: "Monitor & Optimize", description: "Continuous monitoring, monthly reporting, and strategy refinement based on performance data and algorithm updates." },
];

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term investment. Typically, you'll see initial improvements within 3-4 months, with significant results in 6-12 months. Local SEO often shows faster results, sometimes within 2-3 months. The timeline depends on your current website status, competition level, and the aggressiveness of the strategy."
  },
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer: "GEO is optimization for AI-powered search engines like ChatGPT, Perplexity, and Google's AI Overviews. As more people use AI assistants to find information, appearing in AI-generated responses becomes crucial. GEO involves creating structured, authoritative content that AI models can understand and cite, optimizing for conversational queries, and ensuring your business appears in AI search results."
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer: "No ethical SEO agency can guarantee specific rankings, as Google's algorithm considers 200+ factors beyond anyone's control. What we guarantee is implementing proven SEO best practices, transparent reporting, and continuous improvement. Our track record shows consistent ranking improvements for clients across competitive industries."
  },
  {
    question: "How much does SEO cost?",
    answer: "SEO costs vary based on scope and competition. Local SEO packages start around ₹15,000/month. National or e-commerce SEO ranges from ₹30,000 to ₹75,000/month. Enterprise SEO for highly competitive industries can be ₹1,00,000+/month. We offer customized packages based on your goals and budget."
  },
  {
    question: "What's included in your Local SEO services?",
    answer: "Our Local SEO includes Google Business Profile optimization, local citation building (NAP consistency across directories), local keyword optimization, review management strategy, local content creation, and local link building. For Aurangabad businesses, we also optimize for 'Chhatrapati Sambhaji Nagar' queries as the city name transition continues."
  },
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
              Don&apos;t let AI search kill your traffic. We help you rank #1 on Google AND appear in ChatGPT answers. Our SEO strategies combine traditional optimization with cutting-edge GEO (Generative Engine Optimization) to future-proof your visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg" data-testid="button-seo-audit">
                  Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" data-testid="button-seo-blog">
                  Read SEO Insights
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
              data-testid={`card-seo-feature-${index}`}
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
                Comprehensive SEO solutions to boost your visibility on Google and AI platforms. We combine proven traditional SEO with emerging GEO strategies.
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

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our SEO <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="text-muted-foreground">
              A data-driven approach to improving your search visibility.
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
              SEO Success <span className="text-gradient-primary">Story</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              &quot;Within 6 months, KSoft helped us rank #1 for 'agricultural seeds supplier Marathwada'. Organic traffic increased by 200%, and we now get 50+ qualified leads monthly from Google. Their local SEO expertise is unmatched.&quot;
            </blockquote>
            <p className="font-semibold">— Anil Patil, Managing Director, Sonam Seeds</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our SEO services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/20 rounded-xl border border-white/5 px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`faq-seo-trigger-${index}`}>
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
            <Link href="/services/web-development" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Web Development
            </Link>
            <Link href="/services/digital-marketing" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Digital Marketing
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
