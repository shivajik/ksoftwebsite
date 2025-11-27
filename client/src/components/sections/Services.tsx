import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cpu, Globe, Search, Smartphone, Palette, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Custom, high-performance websites built with modern frameworks like React and Next.js.",
    link: "/services/web-development"
  },
  {
    icon: <Cpu className="h-8 w-8 text-accent" />,
    title: "AI Integration",
    description: "Leverage the power of LLMs and AI to automate workflows and enhance user experience.",
    link: "/services/ai-integration"
  },
  {
    icon: <Search className="h-8 w-8 text-purple-400" />,
    title: "SEO Optimization",
    description: "Data-driven strategies to boost your visibility on Google and AI search engines.",
    link: "/services/seo"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-400" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications designed for engagement and performance.",
    link: "#"
  },
  {
    icon: <Palette className="h-8 w-8 text-pink-400" />,
    title: "UI/UX Design",
    description: "Intuitive, aesthetic designs that prioritize user experience and conversion rates.",
    link: "#"
  },
  {
    icon: <Globe className="h-8 w-8 text-green-400" />,
    title: "Digital Marketing",
    description: "Comprehensive digital strategies to grow your brand and reach your target audience.",
    link: "#"
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
          <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            End-to-End <span className="text-gradient-primary">Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            We combine creativity with technical excellence to deliver products that stand out.
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
