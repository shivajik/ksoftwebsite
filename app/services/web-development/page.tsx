"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Laptop, Zap, Layers, Search, Code, Rocket, ShieldCheck, Monitor, ChevronDown } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: <Laptop className="w-6 h-6" />, title: "Custom Development", description: "Bespoke solutions tailored to your exact business needs. We don't use templates—every line of code is written specifically for your project." },
  { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", description: "Optimized for speed with sub-second load times. Our websites score 90+ on Google PageSpeed, ensuring better rankings and user experience." },
  { icon: <Layers className="w-6 h-6" />, title: "Scalable Architecture", description: "Built to grow with your business. Whether you have 100 or 100,000 users, our architecture handles it seamlessly." },
  { icon: <Search className="w-6 h-6" />, title: "SEO-First", description: "Search engine optimized from the ground up. Server-side rendering, semantic HTML, and structured data are built into every project." },
  { icon: <Code className="w-6 h-6" />, title: "Clean Code", description: "Maintainable, well-documented codebase that your future developers will thank you for. We follow industry best practices." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure", description: "Enterprise-grade security practices including HTTPS, input validation, secure authentication, and regular security audits." },
];

const benefits = [
  "Custom React & Next.js development",
  "Mobile-first responsive design",
  "API integrations & backend development",
  "E-commerce & payment processing",
  "Content management systems",
  "Performance optimization",
];

const process = [
  { step: "01", title: "Discovery & Planning", description: "We start by understanding your business goals, target audience, and technical requirements. This phase includes competitive analysis and feature prioritization." },
  { step: "02", title: "Design & Prototype", description: "Our designers create wireframes and interactive prototypes. You'll see exactly how your website will look and function before development begins." },
  { step: "03", title: "Development & Testing", description: "Using React and Next.js, we build your application with clean, maintainable code. Rigorous testing ensures everything works perfectly across all devices." },
];

const faqs = [
  {
    question: "How long does it take to build a custom website?",
    answer: "Most custom websites take 4-8 weeks to complete, depending on complexity. A simple business website might be ready in 4 weeks, while a complex e-commerce platform or SaaS application could take 8-12 weeks. We provide detailed timelines during our initial consultation."
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We specialize in React and Next.js for frontend development, paired with Node.js for backend services. For databases, we typically use PostgreSQL or MongoDB. Our stack also includes Tailwind CSS for styling, and we integrate with various APIs and third-party services as needed."
  },
  {
    question: "Do you provide website maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance packages that include security updates, bug fixes, performance monitoring, and content updates. Our support team is available during business hours, with emergency support available 24/7 for critical issues."
  },
  {
    question: "How much does a custom website cost?",
    answer: "Custom website costs vary based on features and complexity. A basic business website starts around ₹50,000, while e-commerce sites range from ₹1,00,000 to ₹3,00,000+. SaaS platforms and complex web applications can range from ₹2,00,000 to ₹10,00,000+. We provide detailed quotes after understanding your requirements."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Every website we build is mobile-first and fully responsive. This means your site will look and function perfectly on smartphones, tablets, laptops, and desktop computers. Mobile optimization is critical for SEO and user experience."
  },
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
              Stop losing customers to slow websites. We build high-performance, custom web apps using React & Next.js that rank high and convert fast. Our team has delivered 50+ successful projects for businesses across India and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg" data-testid="button-get-quote">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" data-testid="button-view-work">
                  View Our Work
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
                What We <span className="text-gradient-primary">Deliver</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Every project includes our complete development package, ensuring you get a production-ready application that exceeds expectations. From initial concept to launch, we handle everything.
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

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Development <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="text-muted-foreground">
              A proven methodology that delivers results on time and within budget.
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
              Success <span className="text-gradient-primary">Story</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              &quot;KSoft Solution transformed our outdated website into a high-performance platform that loads in under 2 seconds. Our organic traffic increased by 150% within 3 months, and online inquiries doubled. The team was professional, responsive, and delivered beyond our expectations.&quot;
            </blockquote>
            <p className="font-semibold">— Rahul Sharma, CEO, Nath Group</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our web development services.
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
            <Link href="/services/ui-ux-design" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              UI/UX Design
            </Link>
            <Link href="/services/mobile-apps" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Mobile App Development
            </Link>
            <Link href="/services/seo" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              SEO Optimization
            </Link>
          </div>
        </div>

        <LeadGenCTA />
      </div>
    </div>
  );
}
