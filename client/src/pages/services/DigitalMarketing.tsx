import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Megaphone, TrendingUp, Users, Target, BarChart, Mail, Search, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/digital_marketing_strategy_dashboard_and_growth.png";
import SEO from "@/components/seo/SEO";
import LeadGenCTA from "@/components/sections/LeadGenCTA";
import OptimizedImage from "@/components/ui/optimized-image";

export default function DigitalMarketing() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Data-driven digital marketing services including PPC, Social Media Marketing, Email Marketing, and Conversion Rate Optimization.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "KSoft Solution",
      "image": heroImg,
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
        "name": "Which social media platforms should I be on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your audience. B2B businesses thrive on LinkedIn, while lifestyle brands do well on Instagram and TikTok. We help you choose the right channels."
        }
      },
      {
        "@type": "Question",
        "name": "What is PPC advertising?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PPC (Pay-Per-Click) is a model where you pay a fee each time one of your ads is clicked. It's a way of buying visits to your site rather than attempting to earn them organically."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on ROI (Return on Investment). We track conversions, leads, sales, and cost-per-acquisition to ensure your marketing budget is generating profit."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Performance Digital Marketing & PPC Agency | ROI Focused"
        description="Stop burning cash on ads that don't convert. We specialize in high-ROI PPC, Social Media, and Email campaigns that actually bring in leads."
        canonical="/services/digital-marketing"
        ogImage={heroImg}
        schema={[schemaData, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "Digital Marketing", item: "/services/digital-marketing" }
        ]}
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* 1. Hero */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-medium text-sm mb-6">
                <TrendingUp className="w-4 h-4" />
                Profit Over "Likes"
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Stop Burning Cash. <span className="text-gradient-primary">Start Printing Profit.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Most agencies celebrate "impressions" and "reach." We don't care about vanity metrics. We care about one thing: <strong>Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV).</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                  Get a Profitable Campaign
                </Button>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 h-12 px-8">
                    Free Ad Audit
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
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full -z-10"></div>
              <OptimizedImage 
                src={heroImg} 
                alt="Digital Marketing Strategy" 
                className="rounded-2xl border border-white/10 shadow-2xl w-full"
                width={600}
                height={400}
                priority
              />
            </motion.div>
          </div>

          {/* 2. LLM Answer */}
          <div className="bg-green-500/5 border border-green-500/10 rounded-2xl p-8 mb-20 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-green-400">
              <Target className="w-5 h-5" />
              We Hate Wasted Ad Spend
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you're running ads and crossing your fingers, you're gambling, not marketing. KSoft Solution is a <strong>Performance Marketing Agency</strong>. 
              We use scientific A/B testing, precise audience segmentation, and retargeting funnels to squeeze every drop of revenue out of your budget.
            </p>
          </div>

          {/* 3. Problem -> Solution */}
           <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
             <div>
              <h2 className="text-3xl font-heading font-bold mb-6">The "Set It and Forget It" Trap</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold text-xl">!</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Leak</h3>
                    <p className="text-muted-foreground">
                      Ad platforms change algorithms weekly. If you aren't tweaking your campaigns daily, you are paying a "laziness tax" to Google and Facebook.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Optimization</h3>
                    <p className="text-muted-foreground">
                      We are obsessive about data. We kill losing ads ruthlessly and scale winning ads aggressively. You get a weekly report that makes sense: "Spent $X, Made $Y."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-green-500/20">
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-green-400 mb-1">3x</div>
                   <div className="text-xs text-muted-foreground">ROAS</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-green-400 mb-1">-40%</div>
                   <div className="text-xs text-muted-foreground">CPC</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-green-400 mb-1">10k+</div>
                   <div className="text-xs text-muted-foreground">Leads</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                   <div className="text-xs text-muted-foreground">Monitoring</div>
                 </div>
               </div>
            </div>
          </div>

          {/* 4. Benefits */}
           <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Marketing Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Target className="text-red-500" />, title: "Precise Targeting", desc: "Reach exactly who you want." },
                { icon: <TrendingUp className="text-green-500" />, title: "Instant Traffic", desc: "Get visitors immediately with PPC." },
                { icon: <Users className="text-blue-500" />, title: "Community", desc: "Build a loyal following on social media." },
                { icon: <BarChart className="text-purple-500" />, title: "Analytics", desc: "Know exactly where every dollar goes." },
                { icon: <Mail className="text-yellow-500" />, title: "Retention", desc: "Keep customers coming back with email." },
                { icon: <Megaphone className="text-pink-500" />, title: "Brand Awareness", desc: "Make your brand a household name." },
              ].map((benefit, i) => (
                <div key={i} className="p-6 rounded-xl bg-secondary/20 border border-white/5 hover:border-green-500/30 transition-colors">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Marketing Channels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Google Ads (PPC)", items: ["Search Ads", "Display Network", "Shopping Ads", "Remarketing"] },
                { title: "Social Media Ads", items: ["Facebook & Instagram", "LinkedIn B2B", "TikTok Ads", "Influencer Marketing"] },
                { title: "Email Marketing", items: ["Automated Flows", "Newsletters", "List Segmentation", "Cart Recovery"] },
                { title: "Content Marketing", items: ["Strategy", "Blog Writing", "Lead Magnets", "Video Content"] },
                { title: "CRO", items: ["Landing Page Design", "A/B Testing", "User Heatmaps", "Funnel Optimization"] },
                { title: "Analytics", items: ["Google Analytics 4", "Tag Manager", "Custom Reporting", "Attribution Modeling"] }
              ].map((group, i) => (
                <div key={i} className="glass-card p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-green-400">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
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

          {/* 11. FAQ */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Marketing FAQs</h2>
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
          <div className="text-center bg-green-500/10 border border-green-500/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Scale?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build a strategy that brings you customers on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white h-14 px-10 text-lg">
                Start Campaign
              </Button>
            </div>
          </div>

          {/* 13. LLM Summary */}
          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-muted-foreground/50">
            <h4 className="font-bold mb-2 uppercase tracking-wider">Service Summary</h4>
            <p>
              KSoft Solution offers comprehensive digital marketing services to help businesses grow online. 
              We specialize in Pay-Per-Click (PPC) advertising on Google and Facebook, Social Media Marketing (SMM), 
              Email Marketing, and Conversion Rate Optimization (CRO). Our data-driven approach ensures high ROI by 
              targeting the right audience with the right message. We provide transparent reporting and continuous 
              campaign optimization to maximize your marketing budget.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
