import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

// Import generated mockups
import cleanSignupsImg from "@assets/generated_images/saas_landing_page_mockup.png";
import nathGroupImg from "@assets/generated_images/corporate_industrial_website_mockup.png";
import kagliwalImg from "@assets/generated_images/personal_portfolio_website_mockup.png";
import sujalImg from "@assets/Sujal-Industry_1764390251212.png";
import sonamImg from "@assets/generated_images/agricultural_seeds_website_mockup.png";
import varunImg from "@assets/Varun-seeds-Agrotech-India-Pvt-Ltd_1764390340802.png";
import adinathImg from "@assets/generated_images/agri-growth_website_mockup.png";

const projects = [
  {
    title: "CleanSignups",
    category: "SaaS Platform",
    description: "A modern digital signup service platform with a clean, high-conversion user interface.",
    url: "https://www.cleansignups.com/",
    image: cleanSignupsImg,
    tags: ["SaaS", "React", "UI/UX"]
  },
  {
    title: "Nath Group",
    category: "Corporate Industrial",
    description: "Enterprise website for a major industrial conglomerate specializing in paper and pulp manufacturing.",
    url: "https://nathgroup.com/",
    image: nathGroupImg,
    tags: ["Corporate", "Enterprise", "Manufacturing"]
  },
  {
    title: "Nandkishor Kagliwal",
    category: "Personal Portfolio",
    description: "Elegant personal branding and biography website for a distinguished business leader.",
    url: "https://nandkishorkagliwal.com/",
    image: kagliwalImg,
    tags: ["Portfolio", "Personal Brand", "Biography"]
  },
  {
    title: "Sujal Appliances",
    category: "E-Commerce",
    description: "Modern e-commerce platform for home and kitchen appliances with product showcase capabilities.",
    url: "https://sujalappliances.co.in/",
    image: sujalImg,
    tags: ["E-Commerce", "Retail", "Product Catalog"]
  },
  {
    title: "Sonam Seeds",
    category: "AgriTech",
    description: "Professional business website for an agricultural seeds company focusing on growth and quality.",
    url: "https://sonamseeds.in/",
    image: sonamImg,
    tags: ["Agriculture", "Business", "Green Tech"]
  },
  {
    title: "Varun Seeds",
    category: "AgriTech",
    description: "Corporate agricultural website showcasing premium seed products and farming solutions.",
    url: "https://varunseeds.com/",
    image: varunImg,
    tags: ["Agriculture", "Corporate", "Products"]
  },
  {
    title: "Adinath Grow",
    category: "Sustainable Agriculture",
    description: "Modern web presence for an agricultural growth solutions company with a focus on sustainability.",
    url: "https://adinathgrow.com/",
    image: adinathImg,
    tags: ["Sustainability", "Agriculture", "Growth"]
  }
];

export default function Portfolio() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "KSoft Solution Portfolio",
    "description": "Showcase of our recent web development projects including SaaS platforms, corporate websites, and e-commerce solutions.",
    "url": "https://ksoftsolution.com/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": project.url,
        "name": project.title
      }))
    }
  };

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <div className="pt-24 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
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
                Digital <span className="text-gradient-primary">Masterpieces</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our portfolio of high-performance websites and digital experiences crafted for industry leaders.
              </p>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-secondary/20 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Image Container */}
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={`${project.title} website mockup`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay Action */}
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

                {/* Content */}
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

          {/* CTA */}
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
    </>
  );
}
