"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <Link href="/" className="text-2xl font-heading font-bold text-foreground flex items-center gap-2 cursor-pointer">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-lg shadow-[0_0_15px_-3px_var(--primary)]">K</span>
          KSoft Solution
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={cn("font-medium transition-colors hover:text-primary", pathname === "/" ? "text-primary" : "text-muted-foreground")}>
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background/90 backdrop-blur-xl border-white/10 p-2 rounded-xl shadow-2xl w-56">
              <Link href="/services/web-development">
                <DropdownMenuItem className="cursor-pointer p-3 focus:bg-primary/10 focus:text-primary rounded-lg">
                  Web Development
                </DropdownMenuItem>
              </Link>
              <Link href="/services/ai-integration">
                <DropdownMenuItem className="cursor-pointer p-3 focus:bg-primary/10 focus:text-primary rounded-lg">
                  AI Integration
                </DropdownMenuItem>
              </Link>
              <Link href="/services/seo">
                <DropdownMenuItem className="cursor-pointer p-3 focus:bg-primary/10 focus:text-primary rounded-lg">
                  SEO & Growth
                </DropdownMenuItem>
              </Link>
              <Link href="/services/mobile-apps">
                <DropdownMenuItem className="cursor-pointer p-3 focus:bg-primary/10 focus:text-primary rounded-lg">
                  Mobile Apps
                </DropdownMenuItem>
              </Link>
              <Link href="/services/ui-ux-design">
                <DropdownMenuItem className="cursor-pointer p-3 focus:bg-primary/10 focus:text-primary rounded-lg">
                  UI/UX Design
                </DropdownMenuItem>
              </Link>
              <Link href="/services/digital-marketing">
                <DropdownMenuItem className="cursor-pointer p-3 focus:bg-primary/10 focus:text-primary rounded-lg">
                  Digital Marketing
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

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
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
            <Link href="/" className="text-lg font-medium text-foreground py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <div className="py-2">
              <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Services</div>
              <div className="pl-4 flex flex-col gap-3">
                <Link href="/services/web-development" className="text-foreground/80 block" onClick={() => setIsMobileMenuOpen(false)}>
                  Web Development
                </Link>
                <Link href="/services/ai-integration" className="text-foreground/80 block" onClick={() => setIsMobileMenuOpen(false)}>
                  AI Integration
                </Link>
                <Link href="/services/seo" className="text-foreground/80 block" onClick={() => setIsMobileMenuOpen(false)}>
                  SEO & Growth
                </Link>
                <Link href="/services/mobile-apps" className="text-foreground/80 block" onClick={() => setIsMobileMenuOpen(false)}>
                  Mobile Apps
                </Link>
                <Link href="/services/ui-ux-design" className="text-foreground/80 block" onClick={() => setIsMobileMenuOpen(false)}>
                  UI/UX Design
                </Link>
                <Link href="/services/digital-marketing" className="text-foreground/80 block" onClick={() => setIsMobileMenuOpen(false)}>
                  Digital Marketing
                </Link>
              </div>
            </div>
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
