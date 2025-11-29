import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
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
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

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
        <Link href="/">
          <a className="text-2xl font-heading font-bold text-foreground flex items-center gap-2 cursor-pointer">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-lg shadow-[0_0_15px_-3px_var(--primary)]">K</span>
            KSoft Solution
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className={cn("font-medium transition-colors hover:text-primary", location === "/" ? "text-primary" : "text-muted-foreground")}>
              Home
            </a>
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

          <Link href="/#about">
            <a className="font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
          </Link>
          <Link href="/portfolio">
            <a className={cn("font-medium transition-colors hover:text-primary", location === "/portfolio" ? "text-primary" : "text-muted-foreground")}>
              Portfolio
            </a>
          </Link>
          <Link href="/contact">
            <a className="font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
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
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
            <Link href="/">
              <a className="text-lg font-medium text-foreground py-2 block">Home</a>
            </Link>
            <div className="py-2">
              <div className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Services</div>
              <div className="pl-4 flex flex-col gap-3">
                <Link href="/services/web-development">
                  <a className="text-foreground/80 block">Web Development</a>
                </Link>
                <Link href="/services/ai-integration">
                  <a className="text-foreground/80 block">AI Integration</a>
                </Link>
                <Link href="/services/seo">
                  <a className="text-foreground/80 block">SEO & Growth</a>
                </Link>
                <Link href="/services/mobile-apps">
                  <a className="text-foreground/80 block">Mobile Apps</a>
                </Link>
                <Link href="/services/ui-ux-design">
                  <a className="text-foreground/80 block">UI/UX Design</a>
                </Link>
                <Link href="/services/digital-marketing">
                  <a className="text-foreground/80 block">Digital Marketing</a>
                </Link>
              </div>
            </div>
            <a href="/#about" className="text-lg font-medium text-foreground py-2 block">About</a>
            <Link href="/portfolio">
              <a className="text-lg font-medium text-foreground py-2 block">Portfolio</a>
            </Link>
            <Link href="/contact">
              <a className="text-lg font-medium text-foreground py-2 block">Contact</a>
            </Link>
            <Link href="/contact">
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
