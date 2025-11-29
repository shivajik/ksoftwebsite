import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@assets/stock_images/modern_diverse_tech__526cb6a0.jpg";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
            Integrated Website Design & Digital Marketing Agency
          </h2>
          <p className="text-xl font-medium text-foreground/90 border-l-4 border-primary pl-6 text-left mx-auto max-w-3xl bg-primary/5 p-6 rounded-r-lg">
            We develop simple, yet compact solutions. We aim to provide stable and high-quality products at optimal rates, empowering our technical expertise to provide outstanding services and deliver on-time high quality solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Image Section - Sticky */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1 lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Team working together" 
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            
            {/* Stats or Quick features below image */}
            <div className="mt-8 grid grid-cols-1 gap-4">
               <ul className="space-y-4">
                {[
                  "Excellent Support",
                  "Awesome Team",
                  "Faster Performance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-card p-3 rounded-lg shadow-sm border">
                    <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome to our dynamic agency, where innovative <strong>website design</strong> and strategic <strong>digital marketing</strong> converge. As a website design agency, we craft visually stunning and user-centric websites that engage and convert. Our digital marketing expertise complements this, driving targeted traffic and enhancing online visibility. From SEO to social media, we curate campaigns that resonate with your audience. With a focus on ROI, we blend creativity with data-driven strategies. Our holistic approach ensures cohesive branding across web and marketing efforts. Whether it’s a captivating website or impactful digital campaigns, we’re dedicated to amplifying your online presence and achieving exceptional results in the digital realm.
              </p>

              <p>
                <strong>KSoft Solution</strong> also has a unique structure of functioning which strives more for Quality and also timely communication with the client for hassle-free performance. Step into a world of creativity and strategy with our combined website design and digital marketing agency. Our website design expertise brings visions to life, delivering intuitive user experiences and visually appealing interfaces. As a digital marketing agency, we craft tailored strategies, leveraging SEO, PPC, and social media to drive brand growth. Seamlessly integrating design and marketing, we ensure cohesive online narratives that captivate and convert. From pixel-perfect websites to data-driven campaigns, we’re committed to elevating your online presence, expanding reach, and driving business success in the ever-evolving digital landscape.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t">
              <Button variant="default" size="lg" className="bg-primary text-primary-foreground px-8" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
