import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import LocalAuthority from "@/components/sections/LocalAuthority";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navbar is now in App.tsx layout, but we can leave it here if we want page-specific control, 
          however, the App.tsx refactor put it global. Let's remove it from here to avoid double nav.
          Wait, I updated App.tsx to include Navbar globally. So I should remove it from here.
       */}
      <Hero />
      <Services />
      <LocalAuthority />
      <About />
      <Contact />
    </div>
  );
}
