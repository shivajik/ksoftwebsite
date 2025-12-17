"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const popularPages = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "SEO Services", href: "/services/seo" },
    { name: "AI Integration", href: "/services/ai-integration" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 pt-32 pb-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            404
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground mb-4 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let us help you find what you need.
        </p>

        <p className="text-sm text-muted-foreground mb-8">
          Redirecting to home in <span className="text-primary font-semibold">{countdown}</span> seconds...
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 w-full sm:w-auto">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              <Mail className="w-4 h-4" />
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            Popular Pages
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
