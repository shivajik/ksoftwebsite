"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Code2, LineChart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -mr-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/5 blur-3xl -ml-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                Why Choose KSoft?
              </span>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Your Business Deserves <span className="text-gradient-primary">More Than Just Code</span>.
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At KSoft Solution, we don&apos;t just &quot;build websites&quot;—we build your 24/7 top-performing salesperson. Based in Aurangabad and serving clients globally, we bridge the gap between stunning design and serious revenue. While others count hours, we count your ROI. We&apos;re a team of obsessive tech-heads who treat your business like our own.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mt-1">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Built for Speed & Scale</h3>
                    <p className="text-muted-foreground">We use modern stacks like React & Next.js to ensure your site loads instantly—keeping Google and your customers happy.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-accent/10 p-3 rounded-lg mt-1">
                    <LineChart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Dominate Search Results</h3>
                    <p className="text-muted-foreground">We don&apos;t just &quot;add&quot; SEO later. We engineer it into the DNA of your site, helping you rank for the keywords that actually bring cash.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-purple-500/10 p-3 rounded-lg mt-1">
                    <Zap className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Obsessed with Conversion</h3>
                    <p className="text-muted-foreground">Traffic is vanity; sales are sanity. Every pixel we place is designed to turn a casual visitor into a paying loyalist.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full h-12 shadow-lg shadow-primary/25">
                  Let&apos;s Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/3]">
                <Image 
                  src="/stock_images/modern_diverse_tech__526cb6a0.jpg" 
                  alt="Modern Digital Agency Team" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                
                {/* Floating Card 1 */}
                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl animate-float hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-white font-bold">98% Success</div>
                      <div className="text-white/70 text-xs">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Abstract Shape */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-dashed border-primary/20 rounded-3xl"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
