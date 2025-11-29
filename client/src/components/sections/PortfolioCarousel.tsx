import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import ecommerceImg from "@assets/stock_images/modern_ecommerce_web_4f0a3bf9.jpg";
import corporateImg from "@assets/stock_images/corporate_business_w_9fe1e3e8.jpg";
import saasImg from "@assets/stock_images/saas_dashboard_appli_a6761e9a.jpg";
import agencyImg from "@assets/stock_images/creative_digital_age_37c5a202.jpg";

const projects = [
  {
    title: "LuxeCart E-commerce",
    category: "E-commerce",
    image: ecommerceImg,
    description: "A high-performance online store with seamless checkout and inventory management.",
    tags: ["Next.js", "Shopify", "Tailwind"]
  },
  {
    title: "FinTech Dashboard",
    category: "SaaS Application",
    image: saasImg,
    description: "Real-time financial data visualization platform for enterprise clients.",
    tags: ["React", "D3.js", "Node.js"]
  },
  {
    title: "CorpGlobal Identity",
    category: "Corporate Website",
    image: corporateImg,
    description: "Modern corporate presence for a multinational logistics firm.",
    tags: ["WordPress", "Custom Theme", "SEO"]
  },
  {
    title: "Creative Studio",
    category: "Portfolio",
    image: agencyImg,
    description: "Award-winning portfolio site for a digital design agency.",
    tags: ["React", "Framer Motion", "WebGL"]
  }
];

export default function PortfolioCarousel() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Recent Work</h2>
          <p className="text-muted-foreground text-lg">
            Explore a selection of our latest web development projects, showcasing our expertise in creating functional and beautiful digital experiences.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="gap-2">
                          View Case Study <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                          {project.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
            <CarouselNext className="-right-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
