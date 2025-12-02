"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palette, Layout, Eye, MousePointerClick, PenTool, Layers, Smile, CheckCircle2, ArrowRight, Monitor } from "lucide-react";
import Link from "next/link";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: <PenTool className="w-6 h-6" />, title: "User Research", description: "Deep understanding of your users' needs through interviews, surveys, and analytics. Design decisions backed by real data." },
  { icon: <Layout className="w-6 h-6" />, title: "Wireframing", description: "Blueprint your product before building. Low-fidelity wireframes help validate information architecture and user flows." },
  { icon: <Palette className="w-6 h-6" />, title: "Visual Design", description: "Stunning interfaces that stand out. Pixel-perfect designs that align with your brand and create emotional connections." },
  { icon: <MousePointerClick className="w-6 h-6" />, title: "Prototyping", description: "Interactive demos before development. Click through your app experience and gather stakeholder feedback early." },
  { icon: <Layers className="w-6 h-6" />, title: "Design Systems", description: "Scalable component libraries. Consistent design language that speeds up development and ensures brand coherence." },
  { icon: <Eye className="w-6 h-6" />, title: "Usability Testing", description: "Validate designs with real users. Watch users interact with prototypes and iterate based on actual behavior." },
];

const benefits = [
  "User research & persona development",
  "Wireframing & information architecture",
  "High-fidelity UI design in Figma",
  "Interactive prototyping",
  "Design system creation",
  "Developer handoff & support",
];

const process = [
  { step: "01", title: "Research & Discovery", description: "We conduct user interviews, analyze competitors, and review analytics to understand your users' needs, pain points, and behaviors." },
  { step: "02", title: "Design & Prototype", description: "From wireframes to high-fidelity mockups, we create interactive prototypes that bring your vision to life before any code is written." },
  { step: "03", title: "Test & Refine", description: "Usability testing with real users reveals what works and what doesn't. We iterate until the experience is intuitive and delightful." },
];

const faqs = [
  {
    question: "What's the difference between UI and UX design?",
    answer: "UX (User Experience) design focuses on the overall experience—how easy and enjoyable the product is to use. It involves research, information architecture, and user flows. UI (User Interface) design focuses on the visual elements—colors, typography, buttons, icons. Good design requires both: UX ensures the product works well, UI ensures it looks beautiful. We handle both as an integrated process."
  },
  {
    question: "Why is UI/UX design important for business?",
    answer: "Good design directly impacts your bottom line. Studies show every $1 invested in UX returns $100 (10,000% ROI). Well-designed products have higher conversion rates, lower support costs, better customer retention, and stronger brand loyalty. A confusing interface loses customers—research shows 88% of users won't return after a bad experience."
  },
  {
    question: "How much does UI/UX design cost?",
    answer: "Design costs depend on scope and complexity. A landing page design starts around ₹25,000. A full mobile app design (10-20 screens) ranges from ₹1,00,000 to ₹2,50,000. Complex web applications or design systems can be ₹3,00,000 to ₹6,00,000+. Our pricing includes research, wireframes, visual design, prototyping, and developer handoff documentation."
  },
  {
    question: "Do you work with existing brand guidelines?",
    answer: "Yes, we work seamlessly with existing brand guidelines. If you have a style guide, we'll ensure all designs align with your established brand identity. If you don't have formal guidelines, we can help establish them. We also extend brand identities for digital contexts—translating print guidelines to interactive digital experiences."
  },
  {
    question: "What tools do you use for design?",
    answer: "We primarily use Figma for UI/UX design—it's industry-standard, collaborative, and makes developer handoff seamless. For user research, we use tools like Maze for unmoderated testing and Hotjar for behavior analytics. Prototypes are built directly in Figma with interactive components. All designs are delivered with organized layers, components, and documentation for developers."
  },
];

export default function UiUxDesignPage() {
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
              <Smile className="w-4 h-4" />
              UI/UX Design
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              UI/UX Design That <span className="text-gradient-primary">Converts</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stop losing customers to ugly design. We create beautiful, intuitive interfaces that guide users effortlessly to the &apos;Buy&apos; button. Research-backed design that looks stunning and converts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg" data-testid="button-design-consult">
                  Get Design Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" data-testid="button-view-designs">
                  View Our Designs
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
              data-testid={`card-design-feature-${index}`}
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
                Our Design <span className="text-gradient-primary">Services</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We follow a user-centered design process that ensures beautiful, functional results. Every design decision is backed by research and validated with users.
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
              <Palette className="w-24 h-24 text-primary/50" />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Design <span className="text-gradient-primary">Process</span>
            </h2>
            <p className="text-muted-foreground">
              A research-driven approach to creating designs that users love.
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
              Design Impact <span className="text-gradient-primary">Story</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              &quot;The UX redesign increased our conversion rate by 40%. Users now complete purchases in 50% less time. KSoft's research-driven approach identified issues we never knew existed. Worth every rupee.&quot;
            </blockquote>
            <p className="font-semibold">— Sneha Kulkarni, Product Manager, Sujal Appliances</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Common questions about UI/UX design services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/20 rounded-xl border border-white/5 px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`faq-design-trigger-${index}`}>
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
            <Link href="/services/mobile-apps" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Mobile App Development
            </Link>
            <Link href="/services/digital-marketing" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Digital Marketing
            </Link>
          </div>
        </div>

        <LeadGenCTA />
      </div>
    </div>
  );
}
