import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cpu, Globe, Search, Smartphone, Palette } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Custom, high-performance websites built with modern frameworks like React and Next.js."
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: "AI Integration",
    description: "Leverage the power of LLMs and AI to automate workflows and enhance user experience."
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "SEO Optimization",
    description: "Data-driven strategies to boost your visibility on Google and AI search engines."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications designed for engagement and performance."
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "Intuitive, aesthetic designs that prioritize user experience and conversion rates."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Digital Marketing",
    description: "Comprehensive digital strategies to grow your brand and reach your target audience."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver end-to-end digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors bg-background hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
