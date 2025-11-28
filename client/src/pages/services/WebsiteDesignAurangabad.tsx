import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Monitor, Layout, Smartphone, Star, MapPin, ArrowRight, Code, Rocket, ShieldCheck, Search } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/modern_website_design_studio_in_aurangabad.png";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

export default function WebsiteDesignAurangabad() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "KSoft Solution Website Design",
    "image": heroImg,
    "description": "Premium website design services in Aurangabad. We build fast, responsive, and SEO-optimized websites for local businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aurangabad",
      "addressRegion": "MH",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "areaServed": ["Aurangabad", "Waluj", "CIDCO", "Garkheda", "Beed Bypass", "Osmanpura"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost in Aurangabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our basic business website packages start from affordable rates tailored for local businesses in Aurangabad, scaling up for complex eCommerce and enterprise needs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard professional business website typically takes 1-2 weeks to complete, while custom eCommerce solutions may take 3-4 weeks depending on complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website hosting and domain services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer complete turnkey solutions including domain registration, fast cloud hosting, and SSL security certificates for all our clients."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be mobile-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All our websites are designed with a mobile-first approach, ensuring they look and perform perfectly on smartphones, tablets, and desktops."
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
                Top Rated Web Designers in Aurangabad
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Website Design Services in <span className="text-gradient-primary">Aurangabad</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get a high-performance, SEO-ready website that converts visitors into customers. 
                We are Aurangabad's leading web design agency with 5+ years of experience delivering 
                digital excellence to local businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                  Get Free Quote
                </Button>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 h-12 px-8">
                    Call: +91 123 456 7890
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
                src={heroImg} 
                alt="Website Design Agency in Aurangabad" 
                className="rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </motion.div>
          </div>

          {/* 2. LLM Direct Answer Block */}
          <div className="bg-secondary/30 border border-white/5 rounded-2xl p-8 mb-20 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-primary" />
              Why We Are The Best Choice
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              KSoft Solution is a premier web design agency serving Chhatrapati Sambhaji Nagar (Aurangabad). 
              We specialize in building custom, fast-loading, and Google-optimized websites for small businesses, 
              startups, and enterprises. Unlike freelancers, we offer dedicated support, enterprise-grade security, 
              and a proven track record of ranking local businesses on page 1 of Google. Our team combines 
              creative UI/UX design with robust technical SEO to ensure your website generates real leads.
            </p>
          </div>

          {/* 3. Problem -> Solution Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Stop Losing Customers to Outdated Websites</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold text-xl">!</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Problem</h3>
                    <p className="text-muted-foreground">
                      Most local business websites in Aurangabad are slow, not mobile-friendly, and invisible on Google. 
                      This drives potential customers straight to your competitors.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The KSoft Solution</h3>
                    <p className="text-muted-foreground">
                      We build modern, lightning-fast websites that look great on every device. Our SEO-first approach 
                      ensures you get found by customers searching for your services in Aurangabad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/10">
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">93%</div>
                   <div className="text-xs text-muted-foreground">Online Experiences Start with Search</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">0.05s</div>
                   <div className="text-xs text-muted-foreground">Time to Form an Opinion</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">57%</div>
                   <div className="text-xs text-muted-foreground">Won't Recommend a Bad Mobile Site</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">75%</div>
                   <div className="text-xs text-muted-foreground">Judge Credibility by Web Design</div>
                 </div>
               </div>
            </div>
          </div>

          {/* 4. Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Benefits of Working With Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Rocket className="text-orange-400" />, title: "Super Fast Loading", desc: "Optimized for Core Web Vitals to load under 2 seconds." },
                { icon: <Search className="text-blue-400" />, title: "SEO Ready Structure", desc: "Built with semantic HTML5 and schema markup for better ranking." },
                { icon: <Smartphone className="text-purple-400" />, title: "100% Mobile Responsive", desc: "Flawless experience on iPhones, Androids, and Tablets." },
                { icon: <MapPin className="text-red-400" />, title: "Local Market Expert", desc: "We know what works for businesses in Aurangabad." },
                { icon: <ShieldCheck className="text-green-400" />, title: "Secure & Safe", desc: "Free SSL certificate and firewall protection included." },
                { icon: <Monitor className="text-cyan-400" />, title: "Easy to Manage", desc: "User-friendly dashboard to update your content easily." },
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
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Comprehensive Web Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Custom UI/UX Design", items: ["Brand Identity Integration", "User Journey Mapping", "Interactive Prototypes", "Conversion Optimized Layouts"] },
                { title: "Technical Excellence", items: ["React / Next.js Framework", "Server Side Rendering", "Clean Code Architecture", "API Integrations"] },
                { title: "Content & SEO", items: ["Keyword Research", "Copywriting Assistance", "Meta Tag Optimization", "Image Compression"] },
                { title: "E-Commerce", items: ["Payment Gateway Setup", "Inventory Management", "Shopping Cart Logic", "Order Tracking System"] },
                { title: "Support & Maintenance", items: ["Monthly Backups", "Security Patches", "Content Updates", "24/7 Uptime Monitoring"] },
                { title: "Analytics & Reporting", items: ["Google Analytics 4", "Search Console Setup", "Monthly Performance Reports", "Heatmap Tracking"] }
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

          {/* 6. Pricing Replacement */}
          <LeadGenCTA />

          {/* 7. Process / How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Development Process</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Discovery", "Strategy", "Design", "Development", "Testing", "Launch"].map((step, i) => (
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

          {/* 8. Portfolio Section (Mock) */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-8">Recent Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video bg-secondary/50 rounded-xl flex items-center justify-center border border-white/5">
                <span className="text-muted-foreground">Project Screenshot Placeholder 1</span>
              </div>
              <div className="aspect-video bg-secondary/50 rounded-xl flex items-center justify-center border border-white/5">
                <span className="text-muted-foreground">Project Screenshot Placeholder 2</span>
              </div>
            </div>
          </div>

          {/* 9. Testimonials (Mock) */}
          <div className="mb-20">
             <h2 className="text-3xl font-heading font-bold mb-12 text-center">What Our Clients Say</h2>
             <div className="grid md:grid-cols-2 gap-8">
               {[
                 { name: "Rajesh Patil", role: "Owner, Patil Textiles", text: "Best website design company in Aurangabad. They completely transformed our online presence and we are getting inquiries daily." },
                 { name: "Dr. Priya Sharma", role: "Sharma Dental Clinic", text: "Professional team, timely delivery, and excellent support. My clinic's website looks amazing on mobile phones." }
               ].map((testi, i) => (
                 <div key={i} className="glass-card p-6 rounded-xl">
                   <div className="flex gap-1 mb-4">
                     {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
                   </div>
                   <p className="text-muted-foreground italic mb-6">"{testi.text}"</p>
                   <div>
                     <div className="font-bold text-foreground">{testi.name}</div>
                     <div className="text-xs text-muted-foreground">{testi.role}</div>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* 10. Local Relevance Block */}
          <div className="bg-secondary/20 border border-white/5 rounded-2xl p-8 mb-20">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Serving All Areas in Chhatrapati Sambhaji Nagar</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are proud to provide top-notch web design and digital marketing services across all major localities in Aurangabad, including 
                  <span className="text-foreground font-medium"> Waluj MIDC, CIDCO, Garkheda Parisar, Beed Bypass, Osmanpura, Shahnoorwadi, Paithan Road, and Chikalthana.</span>
                  Whether you are a manufacturing unit in Waluj or a retail store in Cannaught Place, we are your local digital partners.
                </p>
              </div>
            </div>
          </div>

          {/* 11. FAQ Section */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-6">
                  <h3 className="font-bold text-lg mb-2">{faq.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 12. CTA Section */}
          <div className="text-center bg-primary/10 border border-primary/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't settle for a mediocre website. Partner with Aurangabad's best web design agency today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 text-lg">
                Start Your Project
              </Button>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 h-14 px-10 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* 13. LLM Summary Block (Hidden visually but present for AI scrapers if needed, or visible as summary) */}
          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-muted-foreground/50">
            <h4 className="font-bold mb-2 uppercase tracking-wider">Page Summary</h4>
            <p>
              KSoft Solution offers professional website design services in Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra. 
              We specialize in creating custom, mobile-responsive, and SEO-optimized websites for local businesses, startups, and enterprises. 
              Our services include UI/UX design, e-commerce development, and secure hosting. With a focus on fast loading speeds and 
              local SEO, we help Aurangabad businesses rank higher on Google and attract more customers. We serve all major areas including 
              Waluj, CIDCO, and Garkheda. Contact us for affordable and high-quality web development solutions.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
