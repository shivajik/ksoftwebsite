import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WebDevelopment from "@/pages/services/WebDevelopment";
import AIIntegration from "@/pages/services/AIIntegration";
import SEO from "@/pages/services/SEO";
import WebsiteDesignAurangabad from "@/pages/services/WebsiteDesignAurangabad";
import WordpressMaintenanceAurangabad from "@/pages/services/WordpressMaintenanceAurangabad";
import LocalSEOAurangabad from "@/pages/services/LocalSEOAurangabad";
import CitationBuildingAurangabad from "@/pages/services/CitationBuildingAurangabad";
import SocialMediaMarketingAurangabad from "@/pages/services/SocialMediaMarketingAurangabad";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services/web-development" component={WebDevelopment} />
          <Route path="/services/ai-integration" component={AIIntegration} />
          <Route path="/services/seo" component={SEO} />
          
          {/* Local SEO Pages */}
          <Route path="/services/website-design-aurangabad" component={WebsiteDesignAurangabad} />
          <Route path="/services/wordpress-maintenance-aurangabad" component={WordpressMaintenanceAurangabad} />
          <Route path="/services/local-seo-aurangabad" component={LocalSEOAurangabad} />
          <Route path="/services/citation-building-aurangabad" component={CitationBuildingAurangabad} />
          <Route path="/services/social-media-marketing-aurangabad" component={SocialMediaMarketingAurangabad} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
