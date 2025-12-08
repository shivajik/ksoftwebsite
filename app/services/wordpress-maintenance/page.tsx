"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Shield, RefreshCw, HardDrive, Zap, Clock, HeadphonesIcon, Settings, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: <Shield className="w-6 h-6" />, title: "Security Monitoring", description: "24/7 security scanning, malware detection, and firewall protection. We keep hackers out and your data safe with enterprise-grade security measures." },
  { icon: <RefreshCw className="w-6 h-6" />, title: "Core & Plugin Updates", description: "Regular WordPress core, theme, and plugin updates with compatibility testing. We ensure updates don't break your site functionality." },
  { icon: <HardDrive className="w-6 h-6" />, title: "Daily Backups", description: "Automated daily backups stored securely off-site. Restore your site in minutes if anything goes wrong—complete peace of mind." },
  { icon: <Zap className="w-6 h-6" />, title: "Performance Optimization", description: "Speed optimization including caching, image compression, and database cleanup. Fast sites rank higher and convert better." },
  { icon: <Clock className="w-6 h-6" />, title: "Uptime Monitoring", description: "Real-time uptime monitoring with instant alerts. We detect and fix issues before your customers even notice." },
  { icon: <HeadphonesIcon className="w-6 h-6" />, title: "Priority Support", description: "Expert WordPress support when you need it. Get help with content updates, troubleshooting, and technical questions." },
];

const benefits = [
  "WordPress core updates & patches",
  "Plugin and theme updates",
  "Security monitoring & malware scans",
  "Daily automated backups",
  "Performance optimization",
  "Uptime monitoring (24/7)",
  "Monthly maintenance reports",
  "Priority technical support",
];

const plans = [
  { 
    name: "Essential", 
    price: "₹4,999", 
    period: "/month",
    description: "Perfect for small business websites",
    features: [
      "WordPress core updates",
      "Plugin & theme updates",
      "Weekly backups",
      "Security monitoring",
      "Uptime monitoring",
      "Monthly reports",
      "Email support",
    ],
    popular: false,
  },
  { 
    name: "Professional", 
    price: "₹9,999", 
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Essential",
      "Daily backups",
      "Performance optimization",
      "Malware removal",
      "Database optimization",
      "Content updates (2 hrs/month)",
      "Priority support",
    ],
    popular: true,
  },
  { 
    name: "Enterprise", 
    price: "₹19,999", 
    period: "/month",
    description: "For mission-critical websites",
    features: [
      "Everything in Professional",
      "Real-time backups",
      "Advanced security hardening",
      "CDN integration",
      "Content updates (5 hrs/month)",
      "Dedicated account manager",
      "24/7 emergency support",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "Why do I need WordPress maintenance?",
    answer: "WordPress powers over 40% of the web, making it a prime target for hackers. Regular maintenance ensures your site stays secure with the latest patches, performs optimally, and doesn't break due to outdated plugins. Without maintenance, you risk security breaches, slow loading times, and website downtime that can cost you customers and revenue."
  },
  {
    question: "What happens if my site gets hacked?",
    answer: "Our Professional and Enterprise plans include malware removal and site restoration at no extra cost. We'll clean your site, restore from a clean backup, identify the vulnerability, and implement additional security measures to prevent future attacks. For Essential plan customers, we offer emergency hack cleanup as a one-time service."
  },
  {
    question: "How often do you perform updates?",
    answer: "We perform WordPress core updates within 48 hours of stable releases. Plugin and theme updates are done weekly after testing for compatibility. Critical security patches are applied within 24 hours. All updates are performed during low-traffic hours to minimize any potential impact."
  },
  {
    question: "Will updates break my website?",
    answer: "We test all updates on a staging environment before applying them to your live site. Our process includes compatibility checks, visual regression testing, and functionality verification. If an update causes issues, we roll back immediately and work on a fix before reapplying."
  },
  {
    question: "Can I make content changes myself?",
    answer: "Absolutely! You maintain full access to your WordPress dashboard. Our maintenance service handles the technical aspects—security, updates, backups, and performance—so you can focus on creating content. If you need help with content changes, our Professional and Enterprise plans include dedicated hours for content updates."
  },
  {
    question: "What if I need additional development work?",
    answer: "For custom development, new features, or major design changes, we offer those services separately. As a maintenance client, you'll receive priority scheduling and discounted rates on development work. Just reach out to your account manager to discuss your needs."
  },
];

export default function WordPressMaintenancePage() {
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
              <Settings className="w-4 h-4" />
              WordPress Maintenance
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Keep Your WordPress Site <span className="text-gradient-primary">Secure & Fast</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stop worrying about updates, security threats, and slow loading times. Our WordPress maintenance service keeps your site protected, optimized, and running smoothly 24/7—so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg" data-testid="button-get-quote">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#plans">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" data-testid="button-view-plans">
                  View Plans
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
                Complete <span className="text-gradient-primary">WordPress Care</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our comprehensive maintenance package covers everything your WordPress site needs to stay healthy, secure, and performing at its best. No more worrying about updates or security threats.
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
                src="/generated_images/wordpress_maintenance_dashboard_and_security.png"
                alt="WordPress Maintenance Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div id="plans" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Maintenance <span className="text-gradient-primary">Plans</span>
            </h2>
            <p className="text-muted-foreground">
              Choose the plan that fits your needs. All plans include our core maintenance features.
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
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
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
              Client <span className="text-gradient-primary">Success</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              &quot;Before working with KSoft Solution, our WordPress site was constantly having issues—slow loading, plugin conflicts, and we even got hacked once. Since switching to their maintenance plan, we haven&apos;t had a single problem. The site loads fast, security is tight, and I don&apos;t have to worry about updates anymore. Their team responds quickly whenever I have questions. Highly recommend!&quot;
            </blockquote>
            <p className="font-semibold">— Priya Deshmukh, Founder, Bloom Boutique</p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our WordPress maintenance services.
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
            <Link href="/services/web-development" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              Web Development
            </Link>
            <Link href="/services/seo" className="px-6 py-3 bg-secondary/30 rounded-full hover:bg-primary/20 transition-colors">
              SEO Optimization
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
