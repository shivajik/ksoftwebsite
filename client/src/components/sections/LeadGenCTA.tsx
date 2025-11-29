import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function LeadGenCTA() {
  return (
    <div className="mb-20">
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>
        <div className="relative bg-secondary/10 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>No Fluff. Just Results.</span>
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to Dominate Your Niche?</h2>
            <p className="text-muted-foreground text-lg">
              Your competitors are already moving fast. Don't get left behind with an outdated site. 
              Let's build a custom strategy that puts you miles ahead and maximizes your ROI.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg shadow-lg shadow-primary/20">
                Book Your Free Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
