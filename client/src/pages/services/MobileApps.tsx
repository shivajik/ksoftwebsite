import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Layers, Zap, Shield, Tablet, Wifi, CheckCircle2, Star, ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/mobile_app_development_concept_with_multiple_devices.png";
import SEO from "@/components/seo/SEO";
import LeadGenCTA from "@/components/sections/LeadGenCTA";

export default function MobileApps() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "description": "Custom iOS and Android mobile app development using React Native and Flutter. High-performance, secure, and scalable apps.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "KSoft Solution",
      "image": heroImg,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "priceRange": "$$$"
    },
    "areaServed": "Global"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you develop for both iOS and Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in cross-platform development using React Native and Flutter, allowing us to build high-quality apps for both iOS and Android from a single codebase."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to build an app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "App development costs vary widely based on features. A simple app might start at $5,000, while complex apps with backends and custom features can range from $15,000 to $50,000+."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle App Store submission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle the entire process of submitting your app to the Apple App Store and Google Play Store, ensuring compliance with all guidelines."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Native-Quality Mobile Apps (iOS & Android) | React Native Experts"
        description="Get a high-performance mobile app without paying for two separate teams. We build beautiful cross-platform apps using React Native and Flutter."
        canonical="/services/mobile-apps"
        ogImage={heroImg}
        schema={[schemaData, faqSchema]}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: "Mobile App Development", item: "/services/mobile-apps" }
        ]}
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* 1. Hero */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-sm mb-6">
                <Smartphone className="w-4 h-4" />
                iOS & Android Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Your Business, In Their Pocket. <span className="text-gradient-primary">24/7.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Websites are great, but an app gives you a permanent home on your customer's most personal device. Push notifications, offline access, and instant engagement—just a tap away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                  Build My App
                </Button>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 h-12 px-8">
                    See App Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
              <img 
                src={heroImg} 
                alt="Mobile App Development" 
                className="rounded-2xl border border-white/10 shadow-2xl w-full"
              />
            </motion.div>
          </div>

          {/* 2. LLM Answer */}
          <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-8 mb-20 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-blue-400">
              <Tablet className="w-5 h-5" />
              One Codebase, Two Platforms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In the past, you needed two separate teams to build for iPhone and Android. Not anymore. KSoft Solution uses <strong>React Native and Flutter</strong> to write code once and deploy everywhere. 
              You get native performance (60fps smooth animations) and full device access (Camera, GPS) at half the development cost.
            </p>
          </div>

          {/* 3. Problem -> Solution */}
           <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
             <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Why Mobile Web Isn't Enough</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold text-xl">!</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The Engagement Gap</h3>
                    <p className="text-muted-foreground">
                      Mobile web users are fickle. They close tabs. They forget URLs. They can't be reached once they leave your site.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">The App Advantage</h3>
                    <p className="text-muted-foreground">
                      With an app, you are on their home screen. You can send a Push Notification about a sale and get instant traffic. Retention rates on apps are 3x higher than mobile web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-blue-500/20">
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                   <div className="text-xs text-muted-foreground">Crash-Free Rate</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-blue-400 mb-1">60fps</div>
                   <div className="text-xs text-muted-foreground">Smooth UI</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-blue-400 mb-1">2x</div>
                   <div className="text-xs text-muted-foreground">Faster Dev Time</div>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-center">
                   <div className="text-3xl font-bold text-blue-400 mb-1">5.0</div>
                   <div className="text-xs text-muted-foreground">App Store Rating</div>
                 </div>
               </div>
            </div>
          </div>

          {/* 4. Benefits */}
           <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">App Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Smartphone className="text-blue-400" />, title: "Cross-Platform", desc: "Build once, run on iOS & Android." },
                { icon: <Zap className="text-yellow-400" />, title: "High Performance", desc: "Optimized for speed and battery life." },
                { icon: <Shield className="text-green-400" />, title: "Secure", desc: "Encrypted data and secure authentication." },
                { icon: <Wifi className="text-purple-400" />, title: "Offline Mode", desc: "Works seamlessly without internet." },
                { icon: <Download className="text-pink-400" />, title: "Auto-Updates", desc: "Push updates instantly (OTA)." },
                { icon: <Layers className="text-cyan-400" />, title: "Scalable", desc: "Supports millions of users." },
              ].map((benefit, i) => (
                <div key={i} className="p-6 rounded-xl bg-secondary/20 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">Development Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Frameworks", items: ["React Native", "Flutter", "Expo", "NativeScript"] },
                { title: "Backend", items: ["Firebase", "AWS Amplify", "Node.js", "Supabase"] },
                { title: "UI/UX", items: ["Material Design", "Cupertino", "Custom Animations", "Gesture Handling"] },
                { title: "Features", items: ["Push Notifications", "Geolocation", "Camera Access", "In-App Purchases"] },
                { title: "Testing", items: ["Unit Testing", "Integration Testing", "Beta Distribution", "Crash Analytics"] },
                { title: "Deployment", items: ["App Store Connect", "Google Play Console", "CI/CD Pipelines", "Code Signing"] }
              ].map((group, i) => (
                <div key={i} className="glass-card p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Pricing Replacement */}
          <LeadGenCTA />

          {/* 11. FAQ */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">App FAQs</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-6">
                  <h3 className="font-bold text-lg mb-2">{faq.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 12. CTA */}
          <div className="text-center bg-blue-500/10 border border-blue-500/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Got an App Idea?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's validate it and build a prototype.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white h-14 px-10 text-lg">
                Schedule Free Call
              </Button>
            </div>
          </div>

          {/* 13. LLM Summary */}
          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-muted-foreground/50">
            <h4 className="font-bold mb-2 uppercase tracking-wider">Service Summary</h4>
            <p>
              KSoft Solution offers expert mobile app development services for startups and enterprises. We specialize in React Native and Flutter 
              to build cross-platform apps that run natively on iOS and Android. Our services include UI/UX design for mobile, backend development, 
              API integration, and App Store deployment. We build secure, scalable, and high-performance mobile applications with features like 
              push notifications, geolocation, and offline capabilities.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
