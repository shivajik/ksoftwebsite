"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, BrainCircuit, Sparkles, Cpu, Network, MessageSquare, Database, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: <Bot className="w-6 h-6" />, title: "AI Chatbots", description: "Smart assistants trained on your business data. Answer customer queries 24/7 without human intervention." },
  { icon: <BrainCircuit className="w-6 h-6" />, title: "LLM Integration", description: "GPT-4, Claude, and custom model deployments tailored to your specific use case and data requirements." },
  { icon: <Database className="w-6 h-6" />, title: "RAG Systems", description: "AI that knows your documents inside out. Retrieval-augmented generation for accurate, contextual responses." },
  { icon: <Network className="w-6 h-6" />, title: "Workflow Automation", description: "Automate repetitive tasks with intelligent AI agents that learn and adapt to your business processes." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Content Generation", description: "AI-powered content at scale—from marketing copy to product descriptions, maintaining your brand voice." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Deployment", description: "Enterprise-grade data privacy with local deployment options and encrypted data handling." },
];

const benefits = [
  "Custom AI agent development",
  "Knowledge base RAG chatbots",
  "OpenAI, Claude & Gemini integration",
  "Workflow automation with AI",
  "Document processing & analysis",
  "Local model deployment options",
];

const process = [
  { step: "01", title: "Assessment & Strategy", description: "We analyze your business processes to identify AI opportunities. Which tasks can be automated? Where can AI add the most value?" },
  { step: "02", title: "Custom Development", description: "Our team builds AI solutions tailored to your needs—chatbots, automation workflows, or custom LLM applications with your data." },
  { step: "03", title: "Integration & Training", description: "We integrate AI seamlessly into your existing systems and train your team to maximize the benefits of AI automation." },
];

const faqs = [
  {
    question: "What kind of AI solutions do you build?",
    answer: "We build a range of AI solutions including customer support chatbots, internal knowledge assistants, document processing systems, content generation tools, and workflow automation agents. Our solutions are powered by leading LLMs like GPT-4, Claude, and Gemini, customized with your business data."
  },
  {
    question: "How does RAG (Retrieval-Augmented Generation) work?",
    answer: "RAG combines the power of large language models with your specific business knowledge. We index your documents, policies, and data into a vector database. When users ask questions, the system retrieves relevant information and uses it to generate accurate, contextual responses. This ensures the AI gives answers based on your actual data, not just general knowledge."
  },
  {
    question: "Is my business data safe with AI integration?",
    answer: "Absolutely. We implement enterprise-grade security measures including data encryption, secure API connections, and access controls. For sensitive data, we offer local model deployment options where your data never leaves your infrastructure. We comply with data protection regulations and can sign NDAs and data processing agreements."
  },
  {
    question: "How much can AI automation save my business?",
    answer: "Most businesses see significant time savings—typically 20-40 hours per week on routine tasks. Customer support chatbots can handle 60-80% of common queries, freeing your team for complex issues. Document processing automation can reduce manual work by 70-90%. ROI typically ranges from 3x to 10x within the first year."
  },
  {
    question: "What's the typical timeline for AI integration?",
    answer: "Simple chatbot implementations take 2-4 weeks. RAG-based knowledge assistants require 4-6 weeks for development and training. Complex workflow automation with multiple integrations may take 6-12 weeks. We provide detailed timelines based on your specific requirements during the initial consultation."
  },
];

export default function AIIntegrationPage() {
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
              <Cpu className="w-4 h-4" />
              AI Integration
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Custom <span className="text-gradient-primary">AI Agents</span> & Business Automation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Automate your busywork. We build custom AI agents, RAG chatbots, and workflow automations that save you 20+ hours a week. Powered by GPT-4, Claude, and custom models trained on your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg" data-testid="button-discuss-ai">
                  Discuss Your AI Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" data-testid="button-see-ai-work">
                  See Our AI Work
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
              data-testid={`card-ai-feature-${index}`}
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
                AI Solutions We <span className="text-gradient-primary">Build</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                From simple chatbots to complex AI workflows, we deliver solutions that transform your business operations and create tangible ROI.
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
              <BrainCircuit className="w-24 h-24 text-primary/50" />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our AI Integration <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="text-muted-foreground">
              A systematic approach to identifying opportunities and implementing AI solutions.
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
              Real-World <span className="text-gradient-primary">Impact</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              &quot;The AI chatbot KSoft built for us handles 70% of customer queries automatically. Our support team now focuses on complex issues, and response times dropped from hours to seconds. It paid for itself within 2 months.&quot;
            </blockquote>
            <p className="font-semibold">— Priya Deshmukh, Operations Manager, CleanSignups</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Common questions about AI integration for businesses.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/20 rounded-xl border border-white/5 px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`faq-ai-trigger-${index}`}>
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
