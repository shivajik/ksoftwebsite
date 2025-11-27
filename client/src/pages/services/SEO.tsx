import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, BarChart, Globe, LineChart } from "lucide-react";
import seoImg from "@assets/generated_images/seo_and_analytics_growth_graph_visualization.png";

export default function SEO() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Dominate <span className="text-gradient-primary">Search Results</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We don't just optimize for Google. We optimize for the future of search: 
              AI Overviews (SGE), ChatGPT, and Perplexity.
            </p>
            <img 
              src={seoImg} 
              alt="SEO Analytics Growth" 
              className="rounded-2xl border border-white/10 shadow-2xl w-full mb-12"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all"></div>
            <Search className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Technical SEO</h3>
            <p className="text-muted-foreground">
              Schema markup, Core Web Vitals optimization, and crawlability improvements to ensure search engines understand your site perfectly.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-all"></div>
            <Globe className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4">LLM Optimization (GEO)</h3>
            <p className="text-muted-foreground">
              Optimizing content structure and authority so your brand appears in AI-generated answers on ChatGPT, Gemini, and Perplexity.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-all"></div>
            <LineChart className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Content Strategy</h3>
            <p className="text-muted-foreground">
              Data-driven content creation that targets high-intent keywords and builds topical authority in your industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
