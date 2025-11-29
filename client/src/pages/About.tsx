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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About KSoft Solution
          </h1>
          <p className="text-xl text-muted-foreground">
            We develop simple, yet compact solutions.
          </p>
        </div>
      </div>

      <AboutSection />
    </div>
  );
}
