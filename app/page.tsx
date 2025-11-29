import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <Services />
      <About />
      <div className="container mx-auto px-4">
        <LeadGenCTA />
      </div>
    </div>
  );
}
