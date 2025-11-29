import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-heading font-bold text-primary flex items-center gap-2 mb-4">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md">K</span>
              KSoft Solution
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Transforming businesses through innovative digital solutions. We specialize in web development, AI integration, and strategic SEO to drive growth.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/ksoftsolutionaurangabad/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary cursor-pointer transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/ksoftsolution" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary cursor-pointer transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/ksoftsolution/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary cursor-pointer transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/services/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-apps" className="hover:text-primary transition-colors">App Development</Link></li>
              <li><Link href="/services/seo" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services/ai-integration" className="hover:text-primary transition-colors">AI Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://share.google/fa5Xjx7bbkthbzjuf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  T-16, Software Technology Parks of India, Chikhalthana MIDC, Chhatrapati Sambhaji Nagar, 431008, Maharashtra.
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91-976-541-2319</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@ksoftsolution.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KSoft Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
