import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@assets/stock_images/modern_diverse_tech__526cb6a0.jpg";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Team working together" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              About Our Agency
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Welcome to our dynamic agency, where innovative website design and strategic digital marketing converge. As a website design agency, we craft visually stunning and user-centric websites that engage and convert. Our digital marketing expertise complements this, driving targeted traffic and enhancing online visibility.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              KSoft Solution also has a unique structure of functioning which strives more for Quality and also timely communication with the client for hassle-free performance. Step into a world of creativity and strategy with our combined website design and digital marketing agency.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Excellent Support",
                "Awesome Team",
                "Faster Performance"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" className="bg-primary text-primary-foreground" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
