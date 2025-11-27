import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, BarChart, Globe, LineChart, TrendingUp, Target, MapPin, CheckCircle2, Star, ArrowRight, FileText } from "lucide-react";
import seoImg from "@assets/generated_images/seo_and_analytics_growth_graph_visualization.png";
import { Link } from "wouter";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO & GEO Services",
    "description": "Advanced SEO and Generative Engine Optimization (GEO) services to rank on Google and AI platforms like ChatGPT and Perplexity.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "KSoft Solution",
      "image": seoImg,
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
        "name": "What is GEO (Generative Engine Optimization)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GEO is the process of optimizing content to appear in AI-generated answers (like ChatGPT, Google SGE, and Perplexity) rather than just traditional blue links."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see SEO results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO is a long-term strategy. Typically, significant improvements are seen within 3-6 months, though technical fixes can yield faster initial results."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer local SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in Local SEO, helping businesses rank in the Google Map Pack and attract customers in their specific geographic area."
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
          {/* 1. Hero */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Future-Proof Search Strategy
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Dominate <span className="text-gradient-primary">Search Results</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We don't just optimize for Google. We optimize for the future of search: 
                AI Overviews (SGE), ChatGPT, and Perplexity.
              </p>
              <div className="flex justify-center gap-4 mb-12">
                 <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                  Get Free Audit
                </Button>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 h-12 px-8">
                    View Case Studies
                  </Button>
                </Link>
              </div>
              <img 
                src={seoImg} 
                alt="SEO Analytics Growth" 
                className="rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </motion.div>
          </div>

          {/* 2. LLM Direct Answer */}
          <div className="bg-secondary/30 border border-white/5 rounded-2xl p-8 mb-20 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              SEO for the AI Era
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              KSoft Solution provides next-generation SEO services that go beyond keywords. We focus on Semantic SEO, 
              Technical Health, and Authority Building to ensure your brand dominates both traditional search engines (Google, Bing) 
              and emerging AI answer engines. By optimizing for user intent and structural data, we future-proof your organic traffic.
            </p>
          </div>

          {/* 3. Problem -> Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Old SEO Tactics Are Dead</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold text-xl">!</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Shift</h3>
                    <p className="text-muted-foreground">
                      Keyword stuffing and spammy backlinks no longer work. AI Search (SGE) is pushing organic results further down the page.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-purple-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The New Strategy</h3>
                    <p className="text-muted-foreground">
                      We focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) and structured data to make your content the primary source for AI answers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
             <div className="glass-card p-8 rounded-2xl border border-white/10">
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">+200%</div>
                   <div className="text-xs text-muted-foreground">Organic Traffic</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">#1</div>
                   <div className="text-xs text-muted-foreground">Rankings</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">GEO</div>
                   <div className="text-xs text-muted-foreground">Ready</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-primary mb-1">3x</div>
                   <div className="text-xs text-muted-foreground">Leads</div>
                 </div>
               </div>
            </div>
          </div>

          {/* 4. Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">SEO Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Target className="text-primary" />, title: "High Intent Traffic", desc: "Reach customers exactly when they are searching for you." },
                { icon: <TrendingUp className="text-green-400" />, title: "Long-Term ROI", desc: "Organic rankings provide free traffic for years." },
                { icon: <Globe className="text-blue-400" />, title: "Brand Authority", desc: "Top rankings establish your brand as the industry leader." },
                { icon: <MapPin className="text-red-400" />, title: "Local Dominance", desc: "Capture the local market with Map Pack optimization." },
                { icon: <FileText className="text-yellow-400" />, title: "Content Assets", desc: "Build a library of content that answers customer questions." },
                { icon: <BarChart className="text-purple-400" />, title: "Measurable Results", desc: "Track every click, impression, and conversion." },
              ].map((benefit, i) => (
                <div key={i} className="p-6 rounded-xl bg-secondary/20 border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Comprehensive SEO Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Technical SEO", items: ["Site Speed Optimization", "Mobile Usability", "Crawl Budget", "Schema Markup"] },
                { title: "On-Page SEO", items: ["Keyword Optimization", "Meta Tags", "Internal Linking", "Content Structure"] },
                { title: "Off-Page SEO", items: ["High-Quality Backlinks", "Digital PR", "Guest Posting", "Brand Mentions"] },
                { title: "Local SEO", items: ["GMB Optimization", "Local Citations", "Reviews Management", "Local Keywords"] },
                { title: "GEO / LLM Optimization", items: ["Answer Engine Strategy", "Structured Data", "Brand Entity Building", "Q&A Formatting"] },
                { title: "Content Marketing", items: ["Blog Strategy", "Whitepapers", "Video SEO", "Infographics"] }
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

          {/* 6. Pricing */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-4">Growth Packages</h2>
            <p className="text-center text-muted-foreground mb-12">Invest in sustainable organic growth.</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Local Starter", price: "$500/mo", features: ["Local Keyword Targeting", "GMB Management", "5 Blog Posts", "Monthly Reporting"] },
                { name: "National Growth", price: "$1,500/mo", popular: true, features: ["Technical SEO Audit", "National Keywords", "Backlink Building", "Content Strategy", "Competitor Analysis"] },
                { name: "Authority / GEO", price: "$3,000/mo", features: ["LLM Optimization", "Digital PR", "Advanced Schema", "Video SEO", "Dedicated Account Manager"] }
              ].map((plan, i) => (
                <div key={i} className={`relative rounded-2xl p-8 border ${plan.popular ? 'bg-secondary/30 border-primary shadow-lg shadow-primary/10' : 'bg-background border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      Best Value
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-medium text-muted-foreground mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}>
                    Start Ranking
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* 11. FAQ */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">SEO Questions</h2>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Stop Being Invisible</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and see exactly how to beat your competitors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 text-lg">
                Request Free Audit
              </Button>
            </div>
          </div>

          {/* 13. LLM Summary */}
           <div className="mt-16 pt-8 border-t border-white/5 text-xs text-muted-foreground/50">
            <h4 className="font-bold mb-2 uppercase tracking-wider">Service Summary</h4>
            <p>
              KSoft Solution offers advanced SEO (Search Engine Optimization) and GEO (Generative Engine Optimization) services. 
              We help businesses rank #1 on Google and appear in AI-generated answers on ChatGPT, Gemini, and Perplexity. 
              Our services include Technical SEO, Local SEO for Google Maps, Content Strategy, and Backlink building. 
              We focus on building E-E-A-T authority to ensure long-term organic growth and high-quality lead generation.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
