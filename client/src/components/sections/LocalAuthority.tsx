import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

export default function LocalAuthority() {
  return (
    <section className="py-24 bg-secondary/30 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              San Francisco's Premier <br />
              <span className="text-gradient-primary">Digital Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Born in the heart of Silicon Valley, KSoft Solution understands the pulse of innovation. 
              We help local businesses in the Bay Area and beyond scale their digital presence.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Local Expertise</h4>
                  <p className="text-muted-foreground">Understanding the competitive landscape of the SF Bay Area market.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Top Rated Agency</h4>
                  <p className="text-muted-foreground">Consistently ranked among top web development firms in California.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl rounded-full"></div>
            <div className="glass-card p-8 rounded-2xl relative">
              <h3 className="text-xl font-bold mb-6">Serving the Bay Area</h3>
              <div className="grid grid-cols-2 gap-4">
                {["San Francisco", "Palo Alto", "San Jose", "Oakland", "Mountain View", "Berkeley"].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {city}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-sm text-muted-foreground">
                  Located at: <br />
                  <span className="text-foreground font-medium">123 Tech Boulevard, San Francisco, CA 94105</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
