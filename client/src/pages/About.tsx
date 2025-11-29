import AboutSection from "@/components/sections/About";
import SEO from "@/components/seo/SEO";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <SEO 
        title="About Us | KSoft Solution"
        description="Learn more about KSoft Solution, a premier digital agency specializing in web development, AI integration, and digital marketing strategies."
        canonical="/about"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">
            Established in Aurangabad • Serving Globally
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            More Than Just a <span className="text-gradient-primary">Digital Agency</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a team of passionate engineers, designers, and strategists based in <strong>Chhatrapati Sambhaji Nagar (Aurangabad)</strong>. 
            We believe that local businesses deserve world-class digital tools to compete on a global stage. 
            From small retail shops in Cannaught Place to large manufacturing units in Waluj MIDC, we empower everyone with technology.
          </p>
        </div>
      </div>

      <AboutSection />
    </div>
  );
}
