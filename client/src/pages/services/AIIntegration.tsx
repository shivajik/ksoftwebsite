import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, BrainCircuit, Sparkles, Cpu, Network } from "lucide-react";
import aiImg from "@assets/generated_images/artificial_intelligence_neural_network_visualization.png";

export default function AIIntegration() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-sm">
              AI-Powered Future
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Intelligent <span className="text-gradient-primary">Automation Systems</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Integrate cutting-edge LLMs (GPT-4, Claude, Gemini) into your business workflows. 
              We build custom AI agents, chatbots, and predictive analytics engines.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Consult AI Expert
              </Button>
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

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: <Bot className="w-10 h-10 text-accent" />,
              title: "Custom AI Chatbots",
              desc: "Train custom models on your business data for 24/7 customer support and internal knowledge retrieval."
            },
            {
              icon: <BrainCircuit className="w-10 h-10 text-accent" />,
              title: "Workflow Automation",
              desc: "Automate repetitive tasks using intelligent agents that can read, write, and execute actions."
            },
            {
              icon: <Network className="w-10 h-10 text-accent" />,
              title: "Predictive Analytics",
              desc: "Use machine learning to forecast trends, customer behavior, and inventory needs."
            },
            {
              icon: <Cpu className="w-10 h-10 text-accent" />,
              title: "LLM Integration",
              desc: "Seamlessly connect OpenAI, Anthropic, or Google APIs into your existing software infrastructure."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border-l-4 border-l-accent"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
