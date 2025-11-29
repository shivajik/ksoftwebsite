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
import OptimizedImage from "@/components/ui/optimized-image";

import cleanSignupsImg from "@assets/CleanSignUps-Stop-Fake-Signups-with-Real-time-Disposable-Email-Detection-API_1764390578616.png";
import nathGroupImg from "@assets/Nath-Group-_1764390512851.png";
import kagliwalImg from "@assets/Dr-Nandkishor-Kagliwal-–-Nath-Group_1764390512851.png";
import sujalImg from "@assets/Sujal-Industry_1764390251212.png";
import sonamImg from "@assets/Sonam-Seeds_1764390378603.png";
import varunImg from "@assets/Varun-seeds-Agrotech-India-Pvt-Ltd_1764390340802.png";
import adinathImg from "@assets/Adinath-Crop-Science-–-Malegaon-Nashik-Maharashtra_1764390426033.png";
import ditabadImg from "@assets/Dnyangana-Institute-of-Technology-–-Chatrapati-Sambhaji-Nagar_1764390805837.png";
import cwaImg from "@assets/CWA-Algotech-Pvt-Ltd_1764390994853.png";
import agencySimplifierImg from "@assets/All-in-One-Agency-Management-Software-Agency-Simplifier_1764391110934.png";

const projects = [
  {
    title: "CleanSignups",
    category: "SaaS Platform",
    description: "Real-time API to block fake and disposable email signups, keeping your user database clean.",
    url: "https://www.cleansignups.com/",
    image: cleanSignupsImg,
    tags: ["SaaS", "React", "UI/UX"]
  },
  {
    title: "AgencySimplifier",
    category: "Agency Management",
    description: "Simplify and scale your agency with an all-in-one platform for project management, client onboarding, invoicing, and streamlined daily operations.",
    url: "https://agencysimplifier.com/",
    image: agencySimplifierImg,
    tags: ["SaaS", "Agency", "Management"]
  },
  {
    title: "Nath Group",
    category: "Corporate Industrial",
    description: "A corporate portal showcasing the businesses and ventures of the Nath Group.",
    url: "https://nathgroup.com/",
    image: nathGroupImg,
    tags: ["Corporate", "Enterprise", "Manufacturing"]
  },
  {
    title: "Nandkishor Kagliwal",
    category: "Personal Portfolio",
    description: "Personal/business website for Nandkishor Kagliwal, representing his professional identity and services.",
    url: "https://nandkishorkagliwal.com/",
    image: kagliwalImg,
    tags: ["Portfolio", "Personal Brand", "Biography"]
  },
  {
    title: "Sujal Appliances",
    category: "E-Commerce",
    description: "Your go-to site for buying reliable household appliances from Sujala Appliances.",
    url: "https://sujalappliances.co.in/",
    image: sujalImg,
    tags: ["E-Commerce", "Retail", "Product Catalog"]
  },
  {
    title: "Sonam Seeds",
    category: "AgriTech",
    description: "जन्मत: सोनम सीड्‌स — premium seed supplier offering high-quality seeds for better crop yields.",
    url: "https://sonamseeds.in/",
    image: sonamImg,
    tags: ["Agriculture", "Business", "Green Tech"]
  },
  {
    title: "Varun Seeds",
    category: "AgriTech",
    description: "Trusted source for quality seeds and agricultural inputs from Varun Seeds.",
    url: "https://varunseeds.com/",
    image: varunImg,
    tags: ["Agriculture", "Corporate", "Products"]
  },
  {
    title: "Adinath Grow",
    category: "Sustainable Agriculture",
    description: "A farming and agriculture-oriented site offering growth solutions and seed/agriproduct services.",
    url: "https://adinathgrow.com/",
    image: adinathImg,
    tags: ["Sustainability", "Agriculture", "Growth"]
  },
  {
    title: "DIT Aurangabad",
    category: "Educational Institute",
    description: "A Govt.-approved institute (DTE & MSBTE) established in 2008, delivering quality technical education in Fire Engineering and Industrial Safety.",
    url: "https://ditabad.in/",
    image: ditabadImg,
    tags: ["Education", "Institutional", "Fire & Safety"]
  },
  {
    title: "CWA AlgoTech",
    category: "FinTech & Automation",
    description: "Empowering traders with automation solutions across Chartink, Amibroker, MT4/MT5, TradingView, Excel, Python, REST APIs, and more for fully automated trading.",
    url: "https://cwaalgotech.com/",
    image: cwaImg,
    tags: ["FinTech", "Automation", "Trading"]
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
                      <OptimizedImage 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={800}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="gap-2" asChild>
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            View Live Site <ExternalLink className="w-4 h-4" />
                          </a>
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
