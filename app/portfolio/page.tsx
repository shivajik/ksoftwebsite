"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "CleanSignups",
    category: "SaaS Platform",
    description: "Real-time API to block fake and disposable email signups, keeping your user database clean.",
    url: "https://www.cleansignups.com/",
    image: "/stock_images/saas_dashboard_analytics.jpg",
    tags: ["SaaS", "React", "UI/UX"]
  },
  {
    title: "AgencySimplifier",
    category: "Agency Management",
    description: "Simplify and scale your agency with an all-in-one platform for project management, client onboarding, invoicing, and streamlined daily operations.",
    url: "https://agencysimplifier.com/",
    image: "/stock_images/agency_management_platform.jpg",
    tags: ["SaaS", "Agency", "Management"]
  },
  {
    title: "Nath Group",
    category: "Corporate Industrial",
    description: "A corporate portal showcasing the businesses and ventures of the Nath Group.",
    url: "https://nathgroup.com/",
    image: "/stock_images/corporate_website.jpg",
    tags: ["Corporate", "Enterprise", "Manufacturing"]
  },
  {
    title: "Sujal Appliances",
    category: "E-Commerce",
    description: "Your go-to site for buying reliable household appliances from Sujala Appliances.",
    url: "https://sujalappliances.co.in/",
    image: "/stock_images/ecommerce_store.jpg",
    tags: ["E-Commerce", "Retail", "Product Catalog"]
  },
  {
    title: "Sonam Seeds",
    category: "AgriTech",
    description: "Premium seed supplier offering high-quality seeds for better crop yields.",
    url: "https://sonamseeds.in/",
    image: "/stock_images/agriculture_tech.jpg",
    tags: ["Agriculture", "Business", "Green Tech"]
  },
  {
    title: "DIT Aurangabad",
    category: "Educational Institute",
    description: "A Govt.-approved institute delivering quality technical education in Fire Engineering and Industrial Safety.",
    url: "https://ditabad.in/",
    image: "/stock_images/education_institute.jpg",
    tags: ["Education", "Institutional", "Fire & Safety"]
  }
];

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Our Work
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Selected <span className="text-gradient-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of our recent work, from corporate portals to e-commerce platforms and SaaS applications.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-secondary/20 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-primary/40" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/90 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-muted-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-secondary/30 border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Build Yours?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join these industry leaders and transform your digital presence today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
