import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cpu, Globe, Search, Smartphone, Palette, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Custom, high-performance websites that act as your 24/7 sales team. Built on React & Next.js for blazing speed.",
    link: "/services/web-development"
  },
  {
    icon: <Search className="h-8 w-8 text-purple-400" />,
    title: "SEO Dominance",
    description: "Stop hiding on page 2. We use data-driven strategies to put your brand in front of customers searching right now.",
    link: "/services/seo"
  },
  {
    icon: <Cpu className="h-8 w-8 text-accent" />,
    title: "AI Automation",
    description: "Work smarter, not harder. We integrate LLMs and AI agents to automate your busywork and supercharge customer support.",
    link: "/services/ai-integration"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-400" />,
    title: "Mobile Apps",
    description: "Put your business in your customer's pocket. Native and cross-platform apps that users actually love to use.",
    link: "/services/mobile-apps"
  },
  {
    icon: <Palette className="h-8 w-8 text-pink-400" />,
    title: "UI/UX Design",
    description: "Design that sells. We create intuitive, stunning interfaces that guide your visitors seamlessly to the 'Buy' button.",
    link: "/services/ui-ux-design"
  },
  {
    icon: <Globe className="h-8 w-8 text-green-400" />,
    title: "Digital Marketing",
    description: "Go beyond the like button. Comprehensive strategies to build your brand authority and fill your pipeline with leads.",
    link: "/services/digital-marketing"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">What We Do Best</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            End-to-End <span className="text-gradient-primary">Digital Dominance</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            We don't dabble. We deliver. From code to content, we handle the hard stuff so you can focus on running your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.link}>
                <a className="block h-full">
                  <div className="glass-card p-8 rounded-2xl h-full group relative overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
