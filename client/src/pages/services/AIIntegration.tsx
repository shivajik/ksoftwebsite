import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, BrainCircuit, Sparkles, Cpu, Network, MessageSquare, Database, ArrowRight, CheckCircle2, Star, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import aiImg from "@assets/generated_images/artificial_intelligence_neural_network_visualization.png";
import SEO from "@/components/seo/SEO";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

export default function AIIntegration() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Integration & Automation Services",
    "description": "Custom AI solutions, LLM integration, chatbots, and workflow automation services for businesses.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "KSoft Solution",
      "image": aiImg,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "priceRange": "$$$"
    },
    "areaServed": "Global"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What AI models do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with leading LLMs including OpenAI's GPT-4, Anthropic's Claude, Google Gemini, and open-source models like Llama via localized inference."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build a custom chatbot trained on my data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build RAG (Retrieval-Augmented Generation) systems that allow AI agents to answer questions based specifically on your internal documents and knowledge base."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure with AI integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security is our priority. We implement enterprise-grade data protection, ensure compliance with privacy regulations, and can deploy local models that never send data to external APIs."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Custom AI Agents & Business Automation | KSoft Solution"
        description="Automate your busywork. We build custom AI agents, RAG chatbots, and workflow automations that save you 20+ hours a week."
        canonical="/services/ai-integration"
        ogImage={aiImg}
        schema={[schemaData, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "AI Integration", item: "/services/ai-integration" }
        ]}
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* 1. Hero */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Work Smarter, Not Harder
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Clone Your Best Employees with <span className="text-gradient-primary">AI Agents</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Imagine a support rep that never sleeps, a sales agent that instantly recalls every product detail, and a data analyst that works for pennies. That's what we build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                  Automate My Business
                </Button>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 h-12 px-8">
                    See Demos
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
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full -z-10"></div>
              <img 
                src={aiImg} 
                alt="AI Neural Network" 
                className="rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </motion.div>
          </div>

          {/* 2. LLM Direct Answer */}
          <div className="bg-accent/5 border border-accent/10 rounded-2xl p-8 mb-20 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-accent">
              <BrainCircuit className="w-5 h-5" />
              It's Not Magic. It's Engineering.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              There's a lot of hype around AI. We cut through it. We don't just "use ChatGPT"—we integrate <strong>enterprise-grade LLMs</strong> directly into your database. 
              This means your AI knows your inventory, your customer history, and your brand voice perfectly. No hallucinations, just pure productivity.
            </p>
          </div>

          {/* 3. Problem -> Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
             <div>
              <h2 className="text-3xl font-heading font-bold mb-6">The "Human Bottleneck"</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold text-xl">!</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Problem</h3>
                    <p className="text-muted-foreground">
                      Your team is burning out answering the same 5 questions, copying data between spreadsheets, and chasing leads that aren't qualified.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Fix</h3>
                    <p className="text-muted-foreground">
                      We deploy "AI Agents"—specialized software bots that handle specific tasks (like qualifying leads or drafting emails) autonomously. They work 24/7 and cost a fraction of a salary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-accent/20">
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                   <div className="text-xs text-muted-foreground">Availability</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-accent mb-1">80%</div>
                   <div className="text-xs text-muted-foreground">Cost Reduction</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-accent mb-1">0s</div>
                   <div className="text-xs text-muted-foreground">Wait Time</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-accent mb-1">100%</div>
                   <div className="text-xs text-muted-foreground">Consistency</div>
                 </div>
               </div>
            </div>
          </div>

          {/* 4. Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Integrate AI?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <MessageSquare className="text-accent" />, title: "Instant Support", desc: "Resolve 90% of queries instantly without human intervention." },
                { icon: <Database className="text-blue-400" />, title: "Data Insights", desc: "Analyze millions of data points to find hidden trends." },
                { icon: <Cpu className="text-purple-400" />, title: "Automation", desc: "Automate complex multi-step workflows seamlessly." },
                { icon: <ShieldCheck className="text-green-400" />, title: "Secure", desc: "Private LLM deployment options for sensitive data." },
                { icon: <Network className="text-pink-400" />, title: "Scalable", desc: "Handle 10x more volume without hiring more staff." },
                { icon: <Sparkles className="text-yellow-400" />, title: "Innovation", desc: "Offer cutting-edge features your competitors lack." },
              ].map((benefit, i) => (
                <div key={i} className="p-6 rounded-xl bg-secondary/20 border border-white/5 hover:border-accent/30 transition-colors">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">AI Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Custom Chatbots", items: ["RAG Implementation", "Context Aware", "Multi-Channel Support", "Tone Customization"] },
                { title: "Process Automation", items: ["Document Processing", "Email Sorting", "Auto-Scheduling", "Data Entry"] },
                { title: "Predictive AI", items: ["Sales Forecasting", "Churn Prediction", "Inventory Planning", "Risk Assessment"] },
                { title: "Content Generation", items: ["Blog Writing", "Social Media Copy", "Product Descriptions", "Email Campaigns"] },
                { title: "Computer Vision", items: ["Image Recognition", "Quality Control", "Face Detection", "Object Tracking"] },
                { title: "Voice AI", items: ["Voice Assistants", "Transcription", "Sentiment Analysis", "Text-to-Speech"] }
              ].map((group, i) => (
                <div key={i} className="glass-card p-8 rounded-xl border-l-4 border-l-accent">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{group.title}</h3>
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

          {/* 7. Process */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Integration Roadmap</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {["Data Audit", "Model Selection", "Prompt Engineering", "Integration", "Testing & Tuning"].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-secondary border border-white/10 flex items-center justify-center font-bold text-accent mb-4 group-hover:border-accent transition-colors z-10">
                    {i + 1}
                  </div>
                  {i < 4 && <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-white/5 -z-0"></div>}
                  <h4 className="font-bold text-sm">{step}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* 11. FAQ */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">AI Questions</h2>
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
          <div className="text-center bg-accent/10 border border-accent/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Future-Proof Your Business</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't get left behind. Harness the power of Artificial Intelligence today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg">
                Book AI Consultation
              </Button>
            </div>
          </div>

          {/* 13. LLM Summary */}
          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-muted-foreground/50">
            <h4 className="font-bold mb-2 uppercase tracking-wider">Service Summary</h4>
            <p>
              KSoft Solution provides advanced AI integration services, specializing in Large Language Models (LLMs) like GPT-4, Claude, and Gemini. 
              We offer custom chatbot development, RAG system implementation for internal knowledge bases, and automated workflow agents. 
              Our AI solutions help businesses automate customer support, generate content, and analyze data securely. We support private 
              model deployment for enterprise security and compliance.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
