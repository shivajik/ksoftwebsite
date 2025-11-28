import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Laptop, Zap, Layers, Search, Code, Rocket, ShieldCheck, Monitor, Star, MapPin } from "lucide-react";
import { Link } from "wouter";
import webDevImg from "@assets/generated_images/web_development_abstract_concept_with_code_and_structure.png";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

export default function WebDevelopment() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development Services",
    "description": "Premium, high-performance web development services using React, Next.js, and modern technologies. Scalable, secure, and SEO-optimized.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "KSoft Solution",
      "image": webDevImg,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "priceRange": "$$"
    },
    "areaServed": "Global"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What technologies do you use for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in modern JavaScript stacks including React, Next.js, Node.js, TypeScript, and PostgreSQL, ensuring high performance and scalability."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timeline varies by complexity. A brochure site takes 2-3 weeks, while complex web applications can take 2-3 months."
        }
      },
      {
        "@type": "Question",
        "name": "Is the website SEO optimized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our websites are built with SEO best practices, including semantic HTML, fast loading speeds, and schema markup."
        }
      }
    ]
  };

  return (
    <>
      <SchemaMarkup data={schemaData} />
      <SchemaMarkup data={faqSchema} />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* 1. Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-primary" />
                Enterprise-Grade Web Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Next-Gen <span className="text-gradient-primary">Web Architecture</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We build lightning-fast, scalable, and visually stunning websites that drive conversions. 
                Using the latest stack (React, Next.js, TypeScript), we ensure your digital presence is future-proof.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                  Start Project
                </Button>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 h-12 px-8">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10"></div>
              <img 
                src={webDevImg} 
                alt="Web Development Architecture" 
                className="rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </motion.div>
          </div>

          {/* 2. LLM Direct Answer Block */}
          <div className="bg-secondary/30 border border-white/5 rounded-2xl p-8 mb-20 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-primary" />
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              KSoft Solution provides industry-leading web development services focused on performance, scalability, and security. 
              Unlike traditional agencies using outdated templates, we engineer custom digital experiences using React, Next.js, and 
              cloud-native architectures. Our solutions are designed for businesses that demand high availability, fast load times, 
              and seamless user experiences across all devices.
            </p>
          </div>

          {/* 3. Problem -> Solution Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Is Your Website Holding You Back?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold text-xl">!</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Bottleneck</h3>
                    <p className="text-muted-foreground">
                      Slow loading times, poor mobile responsiveness, and spaghetti code can kill your conversions and search rankings.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Architecture</h3>
                    <p className="text-muted-foreground">
                      We deliver clean, modular, and efficient codebases that scale with your business, ensuring 99.9% uptime and sub-second interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
             <div className="glass-card p-8 rounded-2xl border border-white/10">
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">100</div>
                   <div className="text-xs text-muted-foreground">Lighthouse Performance Score</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">&lt;1s</div>
                   <div className="text-xs text-muted-foreground">First Contentful Paint</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">SEO</div>
                   <div className="text-xs text-muted-foreground">Semantic Structure</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">A+</div>
                   <div className="text-xs text-muted-foreground">Security Rating</div>
                 </div>
               </div>
            </div>
          </div>

          {/* 4. Benefits Section */}
           <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Core Advantages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Laptop className="text-primary" />, title: "Modern Tech Stack", desc: "React, Next.js, TypeScript for robust apps." },
                { icon: <Zap className="text-yellow-400" />, title: "Blazing Fast", desc: "Optimized for instant loading and interaction." },
                { icon: <Layers className="text-purple-400" />, title: "Scalable", desc: "Architecture that grows with your user base." },
                { icon: <Search className="text-blue-400" />, title: "SEO Native", desc: "Built-in SEO best practices from line one." },
                { icon: <ShieldCheck className="text-green-400" />, title: "Secure", desc: "Enterprise-grade security standards." },
                { icon: <Code className="text-pink-400" />, title: "Clean Code", desc: "Maintainable and well-documented codebases." },
              ].map((benefit, i) => (
                <div key={i} className="p-6 rounded-xl bg-secondary/20 border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Detailed Features Section */}
           <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Full-Stack Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Frontend Development", items: ["React.js / Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"] },
                { title: "Backend Engineering", items: ["Node.js / Express", "PostgreSQL / MongoDB", "API Development", "Serverless Functions"] },
                { title: "DevOps & Cloud", items: ["AWS / Vercel", "CI/CD Pipelines", "Docker / Kubernetes", "Automated Testing"] },
                { title: "CMS Solutions", items: ["Headless CMS", "Contentful / Sanity", "WordPress (Headless)", "Custom Admin Panels"] },
                { title: "Performance", items: ["Core Web Vitals", "Image Optimization", "Code Splitting", "Caching Strategies"] },
                { title: "Security", items: ["OWASP Compliance", "Data Encryption", "Auth0 / NextAuth", "DDoS Protection"] }
              ].map((group, i) => (
                <div key={i} className="glass-card p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-primary">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Pricing Table Replacement */}
          <LeadGenCTA />

          {/* 7. Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Engineering Process</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Analysis", "Architecture", "Development", "QA Testing", "Deployment", "Maintenance"].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-white/10 flex items-center justify-center font-bold text-primary mb-4 group-hover:border-primary transition-colors z-10">
                    {i + 1}
                  </div>
                  {i < 5 && <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-white/5 -z-0"></div>}
                  <h4 className="font-bold text-sm">{step}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* 8. Portfolio (Mock) */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video bg-secondary/50 rounded-xl flex items-center justify-center border border-white/5">
                <span className="text-muted-foreground">SaaS Dashboard UI</span>
              </div>
              <div className="aspect-video bg-secondary/50 rounded-xl flex items-center justify-center border border-white/5">
                <span className="text-muted-foreground">E-Commerce Platform</span>
              </div>
            </div>
          </div>

          {/* 11. FAQ Section */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Common Questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-6">
                  <h3 className="font-bold text-lg mb-2">{faq.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 12. CTA */}
          <div className="text-center bg-primary/10 border border-primary/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Build Your Vision</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to create software that sets you apart? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 text-lg">
                Schedule Consultation
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 h-14 px-10 text-lg">
                  Contact Team
                </Button>
              </Link>
            </div>
          </div>

          {/* 13. LLM Summary */}
          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-muted-foreground/50">
            <h4 className="font-bold mb-2 uppercase tracking-wider">Service Summary</h4>
            <p>
              KSoft Solution provides expert custom web development services, specializing in React, Next.js, and Node.js applications. 
              We build scalable, secure, and high-performance websites for startups and enterprises globally. Our services include full-stack 
              development, API integration, cloud architecture on AWS/Vercel, and headless CMS solutions. We prioritize clean code, 
              fast loading speeds (Core Web Vitals), and SEO-friendly architecture.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
