"use client";

import { motion } from "framer-motion";
import { Code, Brain, TrendingUp, Smartphone, Palette, Megaphone } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom, high-performance websites built with React, Next.js, and modern technologies.",
    href: "/services/web-development",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Integration",
    description: "Integrate intelligent automation and AI-powered features into your business.",
    href: "/services/ai-integration",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "SEO & Growth",
    description: "Data-driven SEO strategies that get you to the top of Google rankings.",
    href: "/services/seo",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Apps",
    description: "Native-quality cross-platform apps for iOS and Android.",
    href: "/services/mobile-apps",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers.",
    href: "/services/ui-ux-design",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Digital Marketing",
    description: "Performance marketing that delivers measurable ROI.",
    href: "/services/digital-marketing",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Everything You Need to <span className="text-gradient-primary">Dominate Online</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We offer comprehensive digital solutions designed to elevate your brand and drive measurable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={service.href} className="block group">
                <div className="glass-card p-8 rounded-2xl h-full hover:border-primary/50 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
