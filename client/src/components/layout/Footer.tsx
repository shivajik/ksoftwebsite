import { Code2, Globe, Laptop, LineChart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-heading font-bold text-primary flex items-center gap-2 mb-4">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md">K</span>
              KSoft Solution
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Transforming businesses through innovative digital solutions. We specialize in web development, AI integration, and strategic SEO to drive growth.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary cursor-pointer transition-colors">
                <Globe size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary cursor-pointer transition-colors">
                <Laptop size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary cursor-pointer transition-colors">
                <Code2 size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Aurangabad Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="/services/website-design-aurangabad" className="hover:text-primary transition-colors">Website Design</a></li>
              <li><a href="/services/wordpress-maintenance-aurangabad" className="hover:text-primary transition-colors">WordPress Maintenance</a></li>
              <li><a href="/services/local-seo-aurangabad" className="hover:text-primary transition-colors">Local SEO Services</a></li>
              <li><a href="/services/citation-building-aurangabad" className="hover:text-primary transition-colors">Citation Building</a></li>
              <li><a href="/services/social-media-marketing-aurangabad" className="hover:text-primary transition-colors">Social Media Marketing</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KSoft Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
