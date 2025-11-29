import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Suspense, lazy, useEffect } from "react";

// Lazy Load Pages for Performance
const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/not-found"));
const WebDevelopment = lazy(() => import("@/pages/services/WebDevelopment"));
const AIIntegration = lazy(() => import("@/pages/services/AIIntegration"));
const SEO = lazy(() => import("@/pages/services/SEO"));
const MobileApps = lazy(() => import("@/pages/services/MobileApps"));
const UiUxDesign = lazy(() => import("@/pages/services/UiUxDesign"));
const DigitalMarketing = lazy(() => import("@/pages/services/DigitalMarketing"));
const WebsiteDesignAurangabad = lazy(() => import("@/pages/services/WebsiteDesignAurangabad"));
const WordpressMaintenanceAurangabad = lazy(() => import("@/pages/services/WordpressMaintenanceAurangabad"));
const LocalSEOAurangabad = lazy(() => import("@/pages/services/LocalSEOAurangabad"));
const CitationBuildingAurangabad = lazy(() => import("@/pages/services/CitationBuildingAurangabad"));
const SocialMediaMarketingAurangabad = lazy(() => import("@/pages/services/SocialMediaMarketingAurangabad"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));

// Redirect Component for Legacy URLs
const Redirect = ({ to }: { to: string }) => {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(to);
  }, [to, setLocation]);
  return null;
};

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div></div>}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services/web-development" component={WebDevelopment} />
            <Route path="/services/ai-integration" component={AIIntegration} />
            <Route path="/services/seo" component={SEO} />
            <Route path="/services/mobile-apps" component={MobileApps} />
            <Route path="/services/ui-ux-design" component={UiUxDesign} />
            <Route path="/services/digital-marketing" component={DigitalMarketing} />
            
            {/* Local SEO Pages */}
            <Route path="/services/website-design-aurangabad" component={WebsiteDesignAurangabad} />
            <Route path="/services/wordpress-maintenance-aurangabad" component={WordpressMaintenanceAurangabad} />
            <Route path="/services/local-seo-aurangabad" component={LocalSEOAurangabad} />
            <Route path="/services/citation-building-aurangabad" component={CitationBuildingAurangabad} />
            <Route path="/services/social-media-marketing-aurangabad" component={SocialMediaMarketingAurangabad} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            
            {/* Legacy Redirects */}
            <Route path="/shop"><Redirect to="/" /></Route>
            <Route path="/seo-analysis"><Redirect to="/services/seo" /></Route>
            <Route path="/our-clients"><Redirect to="/" /></Route>
            <Route path="/case-studies"><Redirect to="/" /></Route>
            <Route path="/checkout"><Redirect to="/" /></Route>
            <Route path="/my-account"><Redirect to="/" /></Route>
            <Route path="/our-testimonials"><Redirect to="/" /></Route>
            <Route path="/cart"><Redirect to="/" /></Route>
            <Route path="/contact-information"><Redirect to="/#contact" /></Route>
            <Route path="/our-services"><Redirect to="/services/web-development" /></Route>
            <Route path="/website-designing-digital-marketing-aurangabad"><Redirect to="/services/website-design-aurangabad" /></Route>
            <Route path="/pay-per-click-ppc-management"><Redirect to="/services/digital-marketing" /></Route>
            <Route path="/smm-social-media-marketing-services-aurangabad"><Redirect to="/services/social-media-marketing-aurangabad" /></Route>
            <Route path="/email-marketing"><Redirect to="/services/digital-marketing" /></Route>
            <Route path="/terms-conditions"><Redirect to="/" /></Route>
            <Route path="/privacy-policy"><Redirect to="/" /></Route>
            <Route path="/local-citation-building"><Redirect to="/services/citation-building-aurangabad" /></Route>
            <Route path="/website-designer"><Redirect to="/services/web-development" /></Route>
            <Route path="/google-drive-stacking"><Redirect to="/services/seo" /></Route>
            <Route path="/website-design"><Redirect to="/services/web-development" /></Route>
            <Route path="/wordpress-maintenance-services"><Redirect to="/services/wordpress-maintenance-aurangabad" /></Route>
            <Route path="/website-designing-company-in-aurangabad"><Redirect to="/services/website-design-aurangabad" /></Route>
            <Route path="/local-seo-search-engine-optimization-services-aurangabad"><Redirect to="/services/local-seo-aurangabad" /></Route>
            <Route path="/refund_returns"><Redirect to="/" /></Route>

            <Route component={NotFound} />
          </Switch>
        </Suspense>
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
