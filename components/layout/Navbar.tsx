"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Code, Bot, Search, Smartphone, Palette, Megaphone, Settings, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    category: "Development",
    items: [
      { name: "Web Development", href: "/services/web-development", icon: Code, description: "Custom React & Next.js websites" },
      { name: "Mobile Apps", href: "/services/mobile-apps", icon: Smartphone, description: "iOS & Android applications" },
      { name: "UI/UX Design", href: "/services/ui-ux-design", icon: Palette, description: "User-centered design" },
    ],
  },
  {
    category: "Marketing & SEO",
    items: [
      { name: "SEO & Growth", href: "/services/seo", icon: Search, description: "Rank #1 on Google" },
      { name: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone, description: "PPC, Social & Email" },
      { name: "Local Citations", href: "/services/local-citations", icon: MapPin, description: "Local SEO & directories" },
    ],
  },
  {
    category: "AI & Support",
    items: [
      { name: "AI Integration", href: "/services/ai-integration", icon: Bot, description: "ChatGPT & automation" },
      { name: "WordPress Maintenance", href: "/services/wordpress-maintenance", icon: Settings, description: "Security & updates" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.png"
            alt="KSoft Solution"
            width={180}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className={cn("font-medium transition-colors hover:text-primary", pathname === "/" ? "text-primary" : "text-muted-foreground")}>
            Home
          </Link>

          {/* MegaMenu for Services */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className="flex items-center gap-1 font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isServicesOpen && "rotate-180")} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6">
                <div className="bg-[#0a0f1a] border border-white/10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden min-w-[720px]">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary/10 to-transparent px-8 py-4 border-b border-white/5">
                    <h3 className="text-sm font-semibold text-foreground">Our Services</h3>
                    <p className="text-xs text-muted-foreground mt-1">Choose from our range of digital solutions</p>
                  </div>
                  
                  {/* Services Grid */}
                  <div className="grid grid-cols-3 gap-0 divide-x divide-white/5">
                    {services.map((category) => (
                      <div key={category.category} className="p-6">
                        <h4 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-5">
                          {category.category}
                        </h4>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              className="flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <div className="bg-primary/10 p-2.5 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                                <item.icon className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                  {item.name}
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer CTA */}
                  <div className="bg-white/[0.02] border-t border-white/5 px-8 py-4">
                    <Link 
                      href="/contact" 
                      className="flex items-center justify-between group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          Need a custom solution?
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          Let&apos;s discuss your project
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        Contact Us
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className={cn("font-medium transition-colors hover:text-primary", pathname === "/about" ? "text-primary" : "text-muted-foreground")}>
            About
          </Link>
          <Link href="/portfolio" className={cn("font-medium transition-colors hover:text-primary", pathname === "/portfolio" ? "text-primary" : "text-muted-foreground")}>
            Portfolio
          </Link>
          <Link href="/blog" className={cn("font-medium transition-colors hover:text-primary", pathname.startsWith("/blog") ? "text-primary" : "text-muted-foreground")}>
            Blog
          </Link>
          <Link href="/contact" className="font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-[0_0_15px_-5px_var(--primary)] hover:shadow-[0_0_25px_-5px_var(--primary)] transition-all">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Tablet Nav - Simple Dropdown */}
        <div className="hidden md:flex lg:hidden items-center gap-6">
          <Link href="/" className={cn("font-medium transition-colors hover:text-primary text-sm", pathname === "/" ? "text-primary" : "text-muted-foreground")}>
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 font-medium text-muted-foreground hover:text-primary transition-colors text-sm">
              Services <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-[#0a0f1a] border border-white/10 rounded-xl shadow-2xl p-2 w-52">
                {services.flatMap(cat => cat.items).map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className="flex items-center gap-3 p-2.5 text-sm rounded-lg hover:bg-white/5 hover:text-primary transition-colors"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about" className={cn("font-medium transition-colors hover:text-primary text-sm", pathname === "/about" ? "text-primary" : "text-muted-foreground")}>
            About
          </Link>
          <Link href="/portfolio" className={cn("font-medium transition-colors hover:text-primary text-sm", pathname === "/portfolio" ? "text-primary" : "text-muted-foreground")}>
            Portfolio
          </Link>
          <Link href="/contact">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0a0f1a] border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl max-h-[80vh] overflow-y-auto">
            <Link href="/" className="text-lg font-medium text-foreground py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            {services.map((category) => (
              <div key={category.category} className="py-2">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                  {category.category}
                </div>
                <div className="space-y-1">
                  {category.items.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      className="flex items-center gap-3 text-foreground/80 py-2 px-2 rounded-lg hover:bg-white/5" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t border-white/10 pt-4 mt-2">
              <Link href="/about" className="text-lg font-medium text-foreground py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/portfolio" className="text-lg font-medium text-foreground py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/blog" className="text-lg font-medium text-foreground py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className="text-lg font-medium text-foreground py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground py-6 text-lg rounded-xl mt-4">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
