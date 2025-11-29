import AboutSection from "@/components/sections/About";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Helmet>
        <title>About Us | KSoft Solution</title>
        <meta name="description" content="Learn more about KSoft Solution, a premier digital agency specializing in web development, AI integration, and digital marketing strategies." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Your partner in digital transformation and growth.
          </p>
        </div>
      </div>

      <AboutSection />
    </div>
  );
}
