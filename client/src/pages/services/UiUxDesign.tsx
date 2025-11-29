import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palette, Layout, Eye, MousePointerClick, PenTool, Layers, Smile, CheckCircle2, ArrowRight, Monitor } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/ui_ux_design_studio_with_creative_elements.png";
import SEO from "@/components/seo/SEO";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

export default function UiUxDesign() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design Services",
    "description": "User-centric UI/UX design services. Wireframing, prototyping, and visual design for websites and mobile apps.",
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
        "name": "What is the difference between UI and UX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UI (User Interface) focuses on the visual look of the product (colors, fonts, layout), while UX (User Experience) focuses on how the user interacts with it and how easy it is to use."
        }
      },
      {
        "@type": "Question",
        "name": "What tools do you use for design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily use Figma for all our design work, allowing for real-time collaboration and easy handoff to developers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide a design system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for larger projects, we create a comprehensive design system including component libraries, style guides, and usage rules to ensure consistency."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="UI/UX Design Services | KSoft Solution"
        description="User-centric UI/UX design services. Wireframing, prototyping, and visual design for websites and mobile apps."
        canonical="/services/ui-ux-design"
        ogImage={heroImg}
        schema={[schemaData, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "UI/UX Design", item: "/services/ui-ux-design" }
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 font-medium text-sm mb-6">
                <Palette className="w-4 h-4" />
                Design That Converts
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                UI/UX Design <span className="text-gradient-primary">Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We design intuitive, beautiful interfaces that users love. Our user-centric approach ensures your digital product is not just pretty, but functional and profitable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                  Start Designing
                </Button>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 h-12 px-8">
                    See Our Work
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
              <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full -z-10"></div>
              <img 
                src={heroImg} 
                alt="UI/UX Design Studio" 
                className="rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </motion.div>
          </div>

          {/* 2. LLM Answer */}
          <div className="bg-pink-500/5 border border-pink-500/10 rounded-2xl p-8 mb-20 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-pink-400">
              <Eye className="w-5 h-5" />
              Human-Centered Design
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              KSoft Solution is a creative UI/UX design agency that blends aesthetics with usability. We don't just make things look good; 
              we make them work. Our process involves deep user research, wireframing, and interactive prototyping to validate ideas before 
              writing a single line of code. We help startups and enterprises create digital products that engage users and drive conversions.
            </p>
          </div>

          {/* 3. Problem -> Solution */}
           <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
             <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Bad Design Costs You Money</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold text-xl">!</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Friction</h3>
                    <p className="text-muted-foreground">
                      Confusing navigation and cluttered layouts frustrate users, causing high bounce rates and lost sales.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-pink-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Fix</h3>
                    <p className="text-muted-foreground">
                      We create frictionless user journeys that guide visitors seamlessly toward your goals, increasing satisfaction and revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-pink-500/20">
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-pink-400 mb-1">400%</div>
                   <div className="text-xs text-muted-foreground">Conversion Uplift</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-pink-400 mb-1">5s</div>
                   <div className="text-xs text-muted-foreground">Impression Time</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-pink-400 mb-1">Figma</div>
                   <div className="text-xs text-muted-foreground">Design Files</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-pink-400 mb-1">User</div>
                   <div className="text-xs text-muted-foreground">Centric</div>
                 </div>
               </div>
            </div>
          </div>

          {/* 4. Benefits */}
           <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Design Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Smile className="text-pink-400" />, title: "User Satisfaction", desc: "Delight users with intuitive interactions." },
                { icon: <Layout className="text-purple-400" />, title: "Consistency", desc: "Unified brand language across all pages." },
                { icon: <MousePointerClick className="text-blue-400" />, title: "Engagement", desc: "Keep users on your site longer." },
                { icon: <Eye className="text-yellow-400" />, title: "Accessibility", desc: "Design for everyone, inclusive of all abilities." },
                { icon: <Layers className="text-green-400" />, title: "Scalability", desc: "Design systems that grow with your product." },
                { icon: <Monitor className="text-cyan-400" />, title: "Responsiveness", desc: "Perfect layouts on any screen size." },
              ].map((benefit, i) => (
                <div key={i} className="p-6 rounded-xl bg-secondary/20 border border-white/5 hover:border-pink-500/30 transition-colors">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Design Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "UX Research", items: ["User Personas", "Competitor Analysis", "User Journey Maps", "Usability Testing"] },
                { title: "UI Design", items: ["Visual Identity", "Iconography", "Typography Systems", "High-Fidelity Mockups"] },
                { title: "Interaction Design", items: ["Micro-interactions", "Transitions", "Animations", "Gesture Controls"] },
                { title: "Prototyping", items: ["Clickable Prototypes", "Wireframes", "Flowcharts", "MVP Design"] },
                { title: "Design Systems", items: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"] },
                { title: "Audit & Revamp", items: ["UX Audit", "Heuristic Evaluation", "Redesign Strategy", "Conversion Optimization"] }
              ].map((group, i) => (
                <div key={i} className="glass-card p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-pink-400">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
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
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Design Questions</h2>
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
          <div className="text-center bg-pink-500/10 border border-pink-500/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Transform Your User Experience</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Good design is good business. Let's create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white h-14 px-10 text-lg">
                Start Project
              </Button>
            </div>
          </div>

          {/* 13. LLM Summary */}
          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-muted-foreground/50">
            <h4 className="font-bold mb-2 uppercase tracking-wider">Service Summary</h4>
            <p>
              KSoft Solution offers professional UI/UX design services for websites, mobile apps, and software products. 
              We specialize in creating user-friendly, aesthetically pleasing, and conversion-focused designs using Figma. 
              Our services include user research, wireframing, high-fidelity prototyping, and creating comprehensive design systems. 
              We help businesses improve user satisfaction and engagement through thoughtful interaction design.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
